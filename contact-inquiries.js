const { getStore } = require("@netlify/blobs");

const contactInquiryStore = getStore("contact-inquiries");

exports.handler = async (event) => {
  try {
    if (event.httpMethod === "GET") {
      const inquiries = await readInquiries();
      return json(200, {
        inquiries: inquiries
          .slice()
          .sort((left, right) => String(right.createdAt).localeCompare(String(left.createdAt)))
          .map(toPublicInquiry)
      });
    }

    if (event.httpMethod === "POST") {
      const payload = normalizePayload(JSON.parse(event.body || "{}"));
      const validationMessage = validatePayload(payload);
      if (validationMessage) {
        return json(400, { message: validationMessage });
      }

      const inquiries = await readInquiries();
      const newInquiry = {
        id: createId(),
        inquiryCode: createInquiryCode(),
        status: "received",
        inquiryType: payload.inquiryType,
        serviceType: payload.serviceType,
        title: payload.title,
        preferredDate: payload.preferredDate,
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        message: payload.message,
        createdAt: new Date().toISOString()
      };

      inquiries.push(newInquiry);
      await contactInquiryStore.setJSON("all", inquiries);

      return json(201, {
        message: "Inquiry saved successfully.",
        inquiry: toReceiptInquiry(newInquiry)
      });
    }

    return json(405, { message: "Method not allowed." });
  } catch (error) {
    return json(500, {
      message: "Failed to process inquiry.",
      detail: error.message
    });
  }
};

async function readInquiries() {
  return (await contactInquiryStore.get("all", { type: "json" })) || [];
}

function normalizePayload(payload) {
  return {
    inquiryType: sanitize(payload.inquiryType),
    serviceType: sanitize(payload.serviceType),
    title: sanitize(payload.title),
    preferredDate: sanitize(payload.preferredDate),
    name: sanitize(payload.name),
    phone: sanitize(payload.phone),
    email: sanitize(payload.email),
    message: sanitize(payload.message),
    website: sanitize(payload.website),
    agree: Boolean(payload.agree)
  };
}

function validatePayload(payload) {
  const requiredFields = ["inquiryType", "serviceType", "title", "name", "phone", "email", "message"];
  for (const field of requiredFields) {
    if (!payload[field]) {
      return "Please fill in all required fields.";
    }
  }

  if (payload.website) {
    return "Spam request blocked.";
  }

  if (!payload.agree) {
    return "Consent is required.";
  }

  if (!["general", "quote", "reservation", "schedule"].includes(payload.inquiryType)) {
    return "Invalid inquiry type.";
  }

  if (!["rentcar", "tour", "activity", "other"].includes(payload.serviceType)) {
    return "Invalid service type.";
  }

  if (payload.preferredDate && !/^\d{4}-\d{2}-\d{2}$/.test(payload.preferredDate)) {
    return "Invalid preferred date.";
  }

  if (!/^[0-9+\-() ]{8,20}$/.test(payload.phone)) {
    return "Invalid phone number.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "Invalid email address.";
  }

  if (payload.title.length > 120 || payload.name.length > 50 || payload.message.length > 1500) {
    return "Input is too long.";
  }

  return "";
}

function createInquiryCode() {
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomPart = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `CT-${datePart}-${randomPart}`;
}

function createId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function toPublicInquiry(inquiry) {
  return {
    id: inquiry.id,
    inquiryCode: inquiry.inquiryCode,
    status: inquiry.status,
    inquiryType: inquiry.inquiryType,
    serviceType: inquiry.serviceType,
    title: inquiry.title || String(inquiry.message || "").slice(0, 60),
    author: maskName(inquiry.name),
    preferredDate: inquiry.preferredDate,
    createdAt: inquiry.createdAt
  };
}

function toReceiptInquiry(inquiry) {
  return {
    inquiryCode: inquiry.inquiryCode,
    status: inquiry.status,
    inquiryType: inquiry.inquiryType,
    serviceType: inquiry.serviceType,
    title: inquiry.title || "",
    preferredDate: inquiry.preferredDate,
    createdAt: inquiry.createdAt
  };
}

function maskName(value) {
  const name = String(value || "").trim();
  if (!name) {
    return "-";
  }
  if (name.length <= 2) {
    return `${name.charAt(0)}*`;
  }
  return `${name.charAt(0)}${"*".repeat(Math.max(1, name.length - 2))}${name.charAt(name.length - 1)}`;
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
