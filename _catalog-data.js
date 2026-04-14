const CAR_SEAT_OPTION_ID = "car-seat";
const BABY_SEAT_OPTION_ID = "baby-seat";
const LONG_TERM_OPTION_ID = "long-term-rental";

const defaultCatalog = {
  vehicles: [
    { id: "carnival-hi", name: "기아 카니발 하이리무진", type: "패밀리 밴", seats: 9, fuel: "디젤", luggage: "골프백 4개", price: "1일 145,000원", note: "공항 이동, 가족여행, 골프투어에 좋은 대표 차량", badge: "BEST", image: "", active: true },
    { id: "sorento-hybrid", name: "쏘렌토 하이브리드", type: "중형 SUV", seats: 6, fuel: "하이브리드", luggage: "골프백 3개", price: "1일 128,000원", note: "연비와 적재 공간을 균형 있게 갖춘 SUV", badge: "HYBRID", image: "", active: true },
    { id: "palisade", name: "팰리세이드", type: "대형 SUV", seats: 7, fuel: "가솔린", luggage: "골프백 4개", price: "1일 158,000원", note: "넓은 실내와 편안함이 강점인 대형 SUV", badge: "VIP", image: "", active: true },
    { id: "ioniq5", name: "아이오닉 5", type: "전기 SUV", seats: 5, fuel: "전기", luggage: "캐리어 3개", price: "1일 116,000원", note: "조용한 승차감과 감각적인 디자인의 EV", badge: "EV", image: "", active: true },
    { id: "model-y", name: "테슬라 모델 Y", type: "전기 SUV", seats: 5, fuel: "전기", luggage: "캐리어 4개", price: "1일 172,000원", note: "프리미엄 EV를 원하는 고객을 위한 차량", badge: "PREMIUM", image: "", active: true },
    { id: "avante", name: "아반떼 CN7", type: "준중형 세단", seats: 5, fuel: "가솔린", luggage: "캐리어 2개", price: "1일 72,000원", note: "가볍고 합리적인 일정에 잘 맞는 세단", badge: "ECONOMY", image: "", active: true },
    { id: "sonata-hybrid", name: "쏘나타 하이브리드", type: "중형 세단", seats: 5, fuel: "하이브리드", luggage: "캐리어 3개", price: "1일 93,000원", note: "비즈니스 일정과 커플 여행에 안정적인 선택", badge: "SMART", image: "", active: true },
    { id: "staria", name: "스타리아 라운지", type: "프리미엄 밴", seats: 9, fuel: "디젤", luggage: "골프백 5개", price: "1일 162,000원", note: "다인원 이동과 투어 일정에 적합한 밴", badge: "9 SEATER", image: "", active: true },
    { id: "ray", name: "레이", type: "경차", seats: 4, fuel: "가솔린", luggage: "캐리어 2개", price: "1일 58,000원", note: "시내 이동과 단거리 일정에 좋은 경차", badge: "CITY", image: "", active: true }
  ],
  options: [
    { id: "airport-pickup", title: "공항 픽업", price: "현장 문의", description: "도착 일정에 맞춰 차량 인수 동선을 안내합니다.", active: true },
    { id: CAR_SEAT_OPTION_ID, title: "카시트", price: "1개 무료 / 2개부터 1개당 1,000엔", description: "연령에 맞는 카시트를 준비합니다. 일본에서는 6세 미만 아동의 카시트 사용이 의무입니다.", active: true },
    { id: BABY_SEAT_OPTION_ID, title: "베이비시트", price: "1개당 1,500엔", description: "영유아용 베이비시트를 준비합니다. 일본에서는 6세 미만 아동의 베이비시트 사용이 의무입니다.", active: true },
    { id: "golf-support", title: "골프여행 적재 안내", price: "무료", description: "골프백 수량에 맞는 차량을 추천하고 적재 가능 여부를 안내합니다.", active: true },
    { id: "hotel-dropoff", title: "호텔 반납", price: "추가 요금 가능", description: "호텔 또는 숙소 반납 동선을 운영 일정에 맞춰 조정합니다.", active: true },
    { id: LONG_TERM_OPTION_ID, title: "장기렌트", price: "별도 상담", description: "1개월 이상 또는 장기 일정은 상담 후 차량과 요금을 별도로 안내합니다.", active: true }
  ],
  policies: [
    { title: "운전 자격", body: "유효한 운전면허증과 예약자 본인 확인이 필요합니다. 실제 운영 기준은 지역 규정에 맞게 안내문을 수정해 주세요." },
    { title: "픽업/반납", body: "공항, 호텔, 지점 픽업 여부와 추가 요금은 예약 접수 후 확정 안내하는 구조입니다." },
    { title: "보험/옵션", body: "기본 보험, 완전자차, 카시트, 추가 운전자 등은 운영 정책에 맞게 옵션 카드로 노출할 수 있습니다." }
  ],
  site: {
    brandLogo: "",
    backgroundImage: "",
    heroImage: "",
    longTermRentalMode: false
  },
  tourProducts: [
    {
      id: "north-highlights",
      href: "https://experiences.myrealtrip.com/products/5782012",
      image: "",
      regionKr: "북부",
      regionEn: "North",
      regionJp: "北部",
      titleKr: "오키나와 북부 핵심 투어",
      titleEn: "North Highlights Tour",
      titleJp: "沖縄北部ハイライトツアー",
      bodyKr: "츄라우미 수족관, 만좌모, 코우리대교처럼 북부 대표 코스를 빠르게 담아낸 일정입니다.",
      bodyJp: "美ら海水族館、万座毛、古宇利大橋など、北部の人気スポットを効率よく回れるツアーです。",
      active: true
    },
    {
      id: "central-scenic",
      href: "https://experiences.myrealtrip.com/products/5808889",
      image: "",
      regionKr: "중부",
      regionEn: "Central",
      regionJp: "中部",
      titleKr: "오키나와 중부 감성 투어",
      titleEn: "Central Scenic Tour",
      titleJp: "沖縄中部シーニックツアー",
      bodyKr: "아메리칸빌리지와 해안 드라이브 코스처럼 중부 특유의 분위기를 가볍게 즐기기 좋은 상품입니다.",
      bodyJp: "アメリカンビレッジや海沿いドライブコースなど、中部ならではの雰囲気を気軽に楽しめるプランです。",
      active: true
    },
    {
      id: "south-landmark",
      href: "https://experiences.myrealtrip.com/products/5787859",
      image: "",
      regionKr: "남부",
      regionEn: "South",
      regionJp: "南部",
      titleKr: "오키나와 남부 명소 투어",
      titleEn: "South Landmark Tour",
      titleJp: "沖縄南部ランドマークツアー",
      bodyKr: "오키나와 월드, 평화기념공원, 남부 해안 코스를 함께 둘러보는 일정입니다.",
      bodyJp: "おきなわワールド、平和祈念公園、南部海岸コースを一緒に巡る日程です。",
      active: true
    }
  ],
  supportCards: [
    {
      id: "booking-guide",
      titleKr: "예약 방법",
      titleEn: "How to Book",
      titleJp: "予約方法",
      bodyKr: "원하는 상품을 누르면 외부 판매 페이지로 바로 이동하며, 상세 일정과 포함 사항을 바로 확인할 수 있습니다.",
      bodyJp: "ご希望の商品を押すと外部販売ページへ移動し、詳細日程や含まれる内容をすぐに確認できます。",
      active: true
    },
    {
      id: "with-rentcar",
      titleKr: "렌트카와 함께",
      titleEn: "With Rentcar",
      titleJp: "レンタカーと一緒に",
      bodyKr: "차량 예약과 투어 선택을 따로 진행해도 동선이 겹치지 않도록 메인 예약 페이지와 바로 연결해 두었습니다.",
      bodyJp: "レンタカー予約とツアー選択を別々に進めても動線が分かれないよう、メイン予約ページへすぐ戻れる構成にしています。",
      active: true
    },
    {
      id: "help-desk",
      titleKr: "상담 안내",
      titleEn: "Help Desk",
      titleJp: "相談案内",
      bodyKr: "상품 선택이 어렵거나 렌트카 일정과 함께 조정이 필요하면 카카오톡 상담으로 바로 문의하실 수 있습니다.",
      bodyJp: "商品選びが難しい場合やレンタカー日程と合わせて相談したい場合は、カカオトーク相談をご利用いただけます。",
      active: true
    }
  ],
  activityProducts: [
    {
      id: "fishing",
      href: "./activity-fishing.html",
      image: "",
      badgeKr: "SEA ACTIVITY",
      badgeJp: "SEA ACTIVITY",
      titleKr: "선상낚시",
      titleEn: "Boat Fishing",
      titleJp: "船上釣り",
      bodyKr: "바다 위에서 즐기는 오키나와 감성 액티비티로, 가족 여행이나 친구 여행 일정에 넣기 좋습니다.",
      bodyJp: "海の上で楽しむ沖縄らしいアクティビティで、家族旅行や友人旅行の日程にも入れやすい商品です。",
      active: true
    },
    {
      id: "snorkeling",
      href: "./activity-snorkeling.html",
      image: "",
      badgeKr: "WATER ACTIVITY",
      badgeJp: "WATER ACTIVITY",
      titleKr: "스노클링",
      titleEn: "Snorkeling",
      titleJp: "シュノーケリング",
      bodyKr: "맑은 바다를 가까이에서 즐길 수 있는 대표 해양 액티비티로, 오키나와 여행 만족도가 높은 편입니다.",
      bodyJp: "透明な海を間近で楽しめる代表的なマリンアクティビティで、沖縄旅行の満足度も高い人気商品です。",
      active: true
    }
  ],
  activityDetails: {
    fishing: {
      slug: "fishing",
      heroImage: "",
      badgeKr: "SEA ACTIVITY",
      badgeJp: "SEA ACTIVITY",
      heroTitleKr: "선상낚시",
      heroTitleEn: "Boat Fishing",
      heroTitleJp: "船上釣り",
      typeKr: "오키나와 바다 액티비티",
      typeJp: "沖縄 海上アクティビティ",
      noteKr: "맑은 바다 위에서 여유롭게 즐기는 대표 오키나와 낚시 프로그램입니다.",
      noteJp: "青い海の上でゆったり楽しめる、沖縄の定番フィッシングプログラムです。",
      visualBodyKr: "선상에서 바로 출항해 낚시를 즐기는 오키나와 대표 해양 체험",
      visualBodyJp: "ボートに乗ってそのまま出港し、海釣りを楽しむ沖縄定番の海上体験",
      active: true
    },
    snorkeling: {
      slug: "snorkeling",
      heroImage: "",
      badgeKr: "WATER ACTIVITY",
      badgeJp: "WATER ACTIVITY",
      heroTitleKr: "스노클링",
      heroTitleEn: "Snorkeling",
      heroTitleJp: "シュノーケリング",
      typeKr: "오키나와 바다 액티비티",
      typeJp: "沖縄 海上アクティビティ",
      noteKr: "투명한 바다를 가까이에서 체험할 수 있는 대표 오키나와 스노클링 프로그램입니다.",
      noteJp: "透明な海を間近で体験できる、沖縄定番のシュノーケリングプログラムです。",
      visualBodyKr: "맑은 오키나와 바다에서 가볍게 즐기는 대표 스노클링 체험",
      visualBodyJp: "透明な沖縄の海で気軽に楽しめる定番シュノーケリング体験",
      active: true
    }
  }
};

function cloneCatalog(value) {
  return JSON.parse(JSON.stringify(value));
}

function sanitizeCatalog(input) {
  const source = input && typeof input === "object" ? input : {};
  const site = sanitizeSite(source.site);
  const vehicles = Array.isArray(source.vehicles) && source.vehicles.length
    ? source.vehicles.slice(0, 20).map(sanitizeVehicle).filter(Boolean)
    : cloneCatalog(defaultCatalog.vehicles);
  const options = ensureLongTermOption(
    Array.isArray(source.options) && source.options.length
      ? source.options.slice(0, 40).map(sanitizeOption).filter(Boolean)
      : cloneCatalog(defaultCatalog.options),
    site
  );
  const policies = Array.isArray(source.policies) && source.policies.length
    ? source.policies.slice(0, 10).map(sanitizePolicy).filter(Boolean)
    : cloneCatalog(defaultCatalog.policies);
  const tourProducts = Array.isArray(source.tourProducts) && source.tourProducts.length
    ? source.tourProducts.slice(0, 20).map(sanitizeTourProduct).filter(Boolean)
    : cloneCatalog(defaultCatalog.tourProducts);
  const supportCards = Array.isArray(source.supportCards) && source.supportCards.length
    ? source.supportCards.slice(0, 12).map(sanitizeSupportCard).filter(Boolean)
    : cloneCatalog(defaultCatalog.supportCards);
  const activityProducts = Array.isArray(source.activityProducts) && source.activityProducts.length
    ? source.activityProducts.slice(0, 12).map(sanitizeActivityProduct).filter(Boolean)
    : cloneCatalog(defaultCatalog.activityProducts);
  const activityDetails = source.activityDetails && typeof source.activityDetails === "object"
    ? sanitizeActivityDetails(source.activityDetails)
    : cloneCatalog(defaultCatalog.activityDetails);

  return {
    vehicles: vehicles.length ? vehicles : cloneCatalog(defaultCatalog.vehicles),
    options,
    policies,
    site,
    tourProducts: tourProducts.length ? tourProducts : cloneCatalog(defaultCatalog.tourProducts),
    supportCards: supportCards.length ? supportCards : cloneCatalog(defaultCatalog.supportCards),
    activityProducts: activityProducts.length ? activityProducts : cloneCatalog(defaultCatalog.activityProducts),
    activityDetails
  };
}

function sanitizeVehicle(vehicle, index = 0) {
  if (!vehicle || typeof vehicle !== "object") {
    return null;
  }

  const name = sanitizeString(vehicle.name, 60) || `차량 ${index + 1}`;
  const id = sanitizeId(vehicle.id) || `vehicle-${index + 1}`;

  return {
    id,
    name,
    type: sanitizeString(vehicle.type, 40) || "렌터카",
    seats: clampInteger(vehicle.seats, 1, 15, 5),
    fuel: sanitizeString(vehicle.fuel, 30) || "가솔린",
    luggage: sanitizeString(vehicle.luggage, 40) || "캐리어 2개",
    price: sanitizeString(vehicle.price, 40) || "문의",
    note: sanitizeString(vehicle.note, 160),
    badge: sanitizeString(vehicle.badge, 30),
    image: sanitizeUrl(vehicle.image),
    active: vehicle.active !== false
  };
}

function sanitizeOption(option, index = 0) {
  if (!option || typeof option !== "object") {
    return null;
  }

  return {
    id: sanitizeId(option.id) || `option-${index + 1}`,
    title: sanitizeString(option.title, 50) || `옵션 ${index + 1}`,
    price: sanitizeString(option.price, 40) || "문의",
    description: sanitizeString(option.description, 180),
    active: option.active !== false
  };
}

function sanitizePolicy(policy, index = 0) {
  if (!policy || typeof policy !== "object") {
    return null;
  }

  return {
    title: sanitizeString(policy.title, 60) || `안내 ${index + 1}`,
    body: sanitizeString(policy.body, 320)
  };
}

function sanitizeTourProduct(tour, index = 0) {
  if (!tour || typeof tour !== "object") {
    return null;
  }

  const titleKr = sanitizeString(tour.titleKr, 80);
  const titleEn = sanitizeString(tour.titleEn, 80);
  const titleJp = sanitizeString(tour.titleJp, 80);

  return {
    id: sanitizeId(tour.id) || `tour-${index + 1}`,
    href: sanitizeHref(tour.href),
    image: sanitizeUrl(tour.image),
    regionKr: sanitizeString(tour.regionKr, 24),
    regionEn: sanitizeString(tour.regionEn, 24),
    regionJp: sanitizeString(tour.regionJp, 24),
    titleKr: titleKr || `투어 ${index + 1}`,
    titleEn,
    titleJp,
    bodyKr: sanitizeString(tour.bodyKr, 220),
    bodyJp: sanitizeString(tour.bodyJp, 220),
    active: tour.active !== false
  };
}

function sanitizeSupportCard(card, index = 0) {
  if (!card || typeof card !== "object") {
    return null;
  }

  return {
    id: sanitizeId(card.id) || `support-${index + 1}`,
    titleKr: sanitizeString(card.titleKr, 80) || `안내 카드 ${index + 1}`,
    titleEn: sanitizeString(card.titleEn, 80),
    titleJp: sanitizeString(card.titleJp, 80),
    bodyKr: sanitizeString(card.bodyKr, 220),
    bodyJp: sanitizeString(card.bodyJp, 220),
    active: card.active !== false
  };
}

function sanitizeActivityProduct(activity, index = 0) {
  if (!activity || typeof activity !== "object") {
    return null;
  }

  return {
    id: sanitizeId(activity.id) || `activity-${index + 1}`,
    href: sanitizeHref(activity.href),
    image: sanitizeUrl(activity.image),
    badgeKr: sanitizeString(activity.badgeKr, 40),
    badgeJp: sanitizeString(activity.badgeJp, 40),
    titleKr: sanitizeString(activity.titleKr, 80) || `액티비티 ${index + 1}`,
    titleEn: sanitizeString(activity.titleEn, 80),
    titleJp: sanitizeString(activity.titleJp, 80),
    bodyKr: sanitizeString(activity.bodyKr, 220),
    bodyJp: sanitizeString(activity.bodyJp, 220),
    active: activity.active !== false
  };
}

function sanitizeActivityDetails(details) {
  const source = details && typeof details === "object" ? details : {};
  const entries = Object.entries(source).slice(0, 12);
  if (!entries.length) {
    return cloneCatalog(defaultCatalog.activityDetails);
  }

  return entries.reduce((result, [slug, detail], index) => {
    if (!detail || typeof detail !== "object") {
      return result;
    }

    const safeSlug = sanitizeId(detail.slug || slug) || `activity-detail-${index + 1}`;
    result[safeSlug] = {
      slug: safeSlug,
      heroImage: sanitizeUrl(detail.heroImage),
      badgeKr: sanitizeString(detail.badgeKr, 40),
      badgeJp: sanitizeString(detail.badgeJp, 40),
      heroTitleKr: sanitizeString(detail.heroTitleKr, 80) || `액티비티 상세 ${index + 1}`,
      heroTitleEn: sanitizeString(detail.heroTitleEn, 80),
      heroTitleJp: sanitizeString(detail.heroTitleJp, 80),
      typeKr: sanitizeString(detail.typeKr, 80),
      typeJp: sanitizeString(detail.typeJp, 80),
      noteKr: sanitizeString(detail.noteKr, 220),
      noteJp: sanitizeString(detail.noteJp, 220),
      visualBodyKr: sanitizeString(detail.visualBodyKr, 220),
      visualBodyJp: sanitizeString(detail.visualBodyJp, 220),
      active: detail.active !== false
    };
    return result;
  }, {});
}

function sanitizeSite(site) {
  const source = site && typeof site === "object" ? site : {};

  return {
    brandLogo: sanitizeUrl(source.brandLogo),
    backgroundImage: sanitizeUrl(source.backgroundImage),
    heroImage: sanitizeUrl(source.heroImage),
    longTermRentalMode: source.longTermRentalMode === true
  };
}

function ensureLongTermOption(options, site = defaultCatalog.site) {
  let safeOptions = Array.isArray(options) ? options.slice(0, 40) : [];
  safeOptions = ensureRequiredOption(safeOptions, CAR_SEAT_OPTION_ID, true);
  safeOptions = ensureRequiredOption(safeOptions, BABY_SEAT_OPTION_ID, true);
  safeOptions = ensureRequiredOption(safeOptions, LONG_TERM_OPTION_ID, site.longTermRentalMode);
  return safeOptions;
}

function ensureRequiredOption(options, optionId, forceActive) {
  const safeOptions = Array.isArray(options) ? options.slice(0, 40) : [];
  const defaultOption = cloneCatalog(defaultCatalog.options.find((option) => option.id === optionId));
  const existingIndex = safeOptions.findIndex((option) => option && option.id === optionId);

  if (!defaultOption) {
    return safeOptions;
  }

  if (existingIndex >= 0) {
    const existing = safeOptions[existingIndex];
    safeOptions[existingIndex] = {
      ...defaultOption,
      ...existing,
      active: forceActive ? true : existing.active !== false
    };
    return safeOptions;
  }

  safeOptions.push({
    ...defaultOption,
    active: forceActive ? true : defaultOption.active !== false
  });
  return safeOptions;
}

function sanitizeString(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function sanitizeId(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function sanitizeUrl(value) {
  const url = String(value || "").trim();
  if (!url) {
    return "";
  }

  if (/^https?:\/\//i.test(url)) {
    return url.slice(0, 2000);
  }

  if (/^data:image\/[a-z0-9.+-]+;base64,/i.test(url)) {
    return url.slice(0, 2500000);
  }

  return "";
}

function sanitizeHref(value) {
  const href = String(value || "").trim();
  if (!href) {
    return "";
  }

  if (/^(https?:\/\/|\.\/|\/)/i.test(href)) {
    return href.slice(0, 2000);
  }

  return "";
}

function clampInteger(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isInteger(number)) {
    return fallback;
  }
  return Math.min(max, Math.max(min, number));
}

module.exports = {
  BABY_SEAT_OPTION_ID,
  CAR_SEAT_OPTION_ID,
  LONG_TERM_OPTION_ID,
  defaultCatalog,
  cloneCatalog,
  sanitizeCatalog
};
