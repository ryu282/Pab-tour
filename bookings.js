const { getStore } = require("@netlify/blobs");
const { LONG_TERM_OPTION_ID, defaultCatalog, sanitizeCatalog } = require("./_catalog-data");

const bookingStore = getStore("rentcar-bookings");
const catalogStore = getStore("rentcar-catalog");

exports.handler = async (event) => {
  try {
    const catalog = await readCatalog();
    const site = catalog.site || {};
    const activeVehicleIds = new Set(catalog.vehicles.filter((vehicle) => vehicle.active !== false).map((vehicle) => vehicle.id));
    const activeOptionIds = new Set(catalog.options.filter((option) => option.active !== false).map((option) => option.id));
    if (site.longTermRentalMode) {
      activeOptionIds.add(LONG_TERM_OPTION_ID);
    }

    if (event.httpMethod === "GET") {
      const bookings = await readBookings();
      const query = event.queryStringParameters || {};

      if (query.vehicleId && query.startDate && query.endDate) {
        const validationMessage = validateRangeQuery(query, activeVehicleIds);
        if (validationMessage) {
          return json(400, { message: validationMessage });
        }

        const conflicts = bookings
          .filter((booking) => (
            booking.vehicleId === query.vehicleId &&
            isOverlapping(booking.startDate, booking.endDate, query.startDate, query.endDate)
          ))
          .map(toPublicBooking);

        return json(200, {
          available: conflicts.length === 0,
          conflicts,
          bookings: bookings.map(toPublicBooking)
        });
      }

      return json(200, {
        bookings: bookings.map(toPublicBooking)
      });
    }

    if (event.httpMethod === "POST") {
      const payload = normalizePayload(JSON.parse(event.body || "{}"));
      const validationMessage = validatePayload(payload, activeVehicleIds, activeOptionIds, site);
      if (validationMessage) {
        return json(400, { message: validationMessage });
      }

      const bookings = await readBookings();
      const hasConflict = payload.vehicleId === LONG_TERM_OPTION_ID
        ? false
        : bookings.some((booking) => (
            booking.vehicleId === payload.vehicleId &&
            isOverlapping(booking.startDate, booking.endDate, payload.startDate, payload.endDate)
          ));

      if (hasConflict) {
        return json(409, { message: "선택한 차량은 해당 기간에 이미 예약되어 있습니다." });
      }

      const selectedOptionLabels = catalog.options
        .filter((option) => payload.selectedOptions.includes(option.id))
        .map((option) => option.title);

      const newBooking = {
        id: cryptoRandomId(),
        bookingCode: createBookingCode(),
        status: "confirmed",
        vehicleId: payload.vehicleId,
        startDate: payload.startDate,
        endDate: payload.endDate,
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        pickup: payload.pickup,
        passengers: Number(payload.passengers),
        flightNumber: payload.flightNumber,
        selectedOptions: payload.selectedOptions,
        selectedOptionLabels,
        message: payload.message,
        createdAt: new Date().toISOString()
      };

      bookings.push(newBooking);
      await bookingStore.setJSON("all", bookings);

      return json(201, {
        message: "예약이 저장되었습니다.",
        booking: toReceiptBooking(newBooking)
      });
    }

    return json(405, { message: "허용되지 않은 메서드입니다." });
  } catch (error) {
    return json(500, {
      message: "예약 처리 중 서버 오류가 발생했습니다.",
      detail: error.message
    });
  }
};

async function readCatalog() {
  const savedCatalog = await catalogStore.get("catalog", { type: "json" });
  return sanitizeCatalog(savedCatalog || defaultCatalog);
}

async function readBookings() {
  return (await bookingStore.get("all", { type: "json" })) || [];
}

function normalizePayload(payload) {
  return {
    vehicleId: sanitize(payload.vehicleId),
    startDate: sanitize(payload.startDate),
    endDate: sanitize(payload.endDate),
    name: sanitize(payload.name),
    phone: sanitize(payload.phone),
    email: sanitize(payload.email),
    pickup: sanitize(payload.pickup),
    passengers: sanitize(payload.passengers),
    flightNumber: sanitize(payload.flightNumber),
    message: sanitize(payload.message),
    website: sanitize(payload.website),
    agree: Boolean(payload.agree),
    selectedOptions: Array.isArray(payload.selectedOptions)
      ? payload.selectedOptions.map(sanitize).filter(Boolean)
      : []
  };
}

function validatePayload(payload, activeVehicleIds, activeOptionIds, site = {}) {
  const required = ["startDate", "endDate", "name", "phone", "email", "pickup", "passengers"];
  for (const field of required) {
    if (!payload[field]) {
      return "필수 입력값이 누락되었습니다.";
    }
  }

  const usingLongTermMode = site.longTermRentalMode === true;
  if (!usingLongTermMode && !payload.vehicleId) {
    return "차량 선택이 필요합니다.";
  }

  if (payload.website) {
    return "잘못된 요청입니다.";
  }

  if (!payload.agree) {
    return "개인정보 저장 및 연락 동의가 필요합니다.";
  }

  if (usingLongTermMode) {
    if (payload.vehicleId !== LONG_TERM_OPTION_ID) {
      return "장기렌트 접수 모드에서는 차량을 직접 선택할 수 없습니다.";
    }
  } else if (!activeVehicleIds.has(payload.vehicleId)) {
    return "존재하지 않거나 예약 불가능한 차량입니다.";
  }

  if (!isDateString(payload.startDate) || !isDateString(payload.endDate)) {
    return "날짜 형식이 올바르지 않습니다.";
  }

  if (payload.startDate > payload.endDate) {
    return "반납일은 대여 시작일보다 같거나 늦어야 합니다.";
  }

  if (!/^[0-9+\-() ]{8,20}$/.test(payload.phone)) {
    return "연락처 형식이 올바르지 않습니다.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "이메일 형식이 올바르지 않습니다.";
  }

  const passengers = Number(payload.passengers);
  if (!Number.isInteger(passengers) || passengers < 1 || passengers > 15) {
    return "탑승 인원은 1명 이상 15명 이하로 입력해 주세요.";
  }

  if (payload.message.length > 1000 || payload.pickup.length > 120 || payload.flightNumber.length > 50 || payload.name.length > 50) {
    return "입력값 길이가 너무 깁니다.";
  }

  if (payload.selectedOptions.some((optionId) => !activeOptionIds.has(optionId))) {
    return "선택한 옵션 중 사용할 수 없는 항목이 있습니다.";
  }

  return "";
}

function validateRangeQuery(query, activeVehicleIds) {
  if (!activeVehicleIds.has(query.vehicleId)) {
    return "존재하지 않거나 예약 불가능한 차량입니다.";
  }

  if (!isDateString(query.startDate) || !isDateString(query.endDate)) {
    return "날짜 형식이 올바르지 않습니다.";
  }

  if (query.startDate > query.endDate) {
    return "반납일은 대여 시작일보다 같거나 늦어야 합니다.";
  }

  return "";
}

function createBookingCode() {
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomPart = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `RC-${datePart}-${randomPart}`;
}

function cryptoRandomId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function toPublicBooking(booking) {
  return {
    id: booking.id,
    bookingCode: booking.bookingCode,
    status: booking.status,
    vehicleId: booking.vehicleId,
    startDate: booking.startDate,
    endDate: booking.endDate
  };
}

function toReceiptBooking(booking) {
  return {
    bookingCode: booking.bookingCode,
    status: booking.status,
    vehicleId: booking.vehicleId,
    startDate: booking.startDate,
    endDate: booking.endDate,
    createdAt: booking.createdAt,
    selectedOptionLabels: booking.selectedOptionLabels
  };
}

function isDateString(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function isOverlapping(existingStart, existingEnd, nextStart, nextEnd) {
  return !(existingEnd < nextStart || nextEnd < existingStart);
}

function sanitize(value) {
  return String(value || "").trim();
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify(body)
  };
}
