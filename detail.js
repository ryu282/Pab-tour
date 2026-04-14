const LANGUAGE_STORAGE_KEY = "rentcarPublicLanguageV1";
const DEFAULT_BRAND_LOGO = "./okioki.png.png";
const fallbackCatalog = {
  vehicles: [
    { id: "carnival-hi", name: "기아 카니발 하이리무진", type: "패밀리 밴", seats: 9, fuel: "디젤", luggage: "골프백 4개", price: "1일 145,000원", note: "공항 이동, 가족여행, 골프투어에 좋은 대표 차량", badge: "BEST", image: "" },
    { id: "sorento-hybrid", name: "쏘렌토 하이브리드", type: "중형 SUV", seats: 6, fuel: "하이브리드", luggage: "골프백 3개", price: "1일 128,000원", note: "연비와 적재 공간을 균형 있게 갖춘 SUV", badge: "HYBRID", image: "" },
    { id: "palisade", name: "팰리세이드", type: "대형 SUV", seats: 7, fuel: "가솔린", luggage: "골프백 4개", price: "1일 158,000원", note: "넓은 실내와 편안함이 강점인 대형 SUV", badge: "VIP", image: "" },
    { id: "ioniq5", name: "아이오닉 5", type: "전기 SUV", seats: 5, fuel: "전기", luggage: "캐리어 3개", price: "1일 116,000원", note: "조용한 승차감과 감각적인 디자인의 EV", badge: "EV", image: "" },
    { id: "model-y", name: "테슬라 모델 Y", type: "전기 SUV", seats: 5, fuel: "전기", luggage: "캐리어 4개", price: "1일 172,000원", note: "프리미엄 EV를 원하는 고객을 위한 차량", badge: "PREMIUM", image: "" },
    { id: "avante", name: "아반떼 CN7", type: "준중형 세단", seats: 5, fuel: "가솔린", luggage: "캐리어 2개", price: "1일 72,000원", note: "가볍고 합리적인 일정에 잘 맞는 세단", badge: "ECONOMY", image: "" },
    { id: "sonata-hybrid", name: "쏘나타 하이브리드", type: "중형 세단", seats: 5, fuel: "하이브리드", luggage: "캐리어 3개", price: "1일 93,000원", note: "비즈니스 일정과 커플 여행에 안정적인 선택", badge: "SMART", image: "" },
    { id: "staria", name: "스타리아 라운지", type: "프리미엄 밴", seats: 9, fuel: "디젤", luggage: "골프백 5개", price: "1일 162,000원", note: "다인원 이동과 투어 일정에 적합한 밴", badge: "9 SEATER", image: "" },
    { id: "ray", name: "레이", type: "경차", seats: 4, fuel: "가솔린", luggage: "캐리어 2개", price: "1일 58,000원", note: "시내 이동과 단거리 일정에 좋은 경차", badge: "CITY", image: "" }
  ],
  site: {
    brandLogo: "",
    backgroundImage: "",
    longTermRentalMode: false
  }
};

const VEHICLE_JP_TRANSLATIONS = {
  "carnival-hi": { name: "キア カーニバル ハイリムジン", type: "ファミリーバン", fuel: "ディーゼル", luggage: "ゴルフバッグ 4個", note: "空港移動、家族旅行、ゴルフツアーに人気の代表車両" },
  "sorento-hybrid": { name: "ソレント ハイブリッド", type: "中型SUV", fuel: "ハイブリッド", luggage: "ゴルフバッグ 3個", note: "燃費と積載性のバランスが良いSUV" },
  palisade: { name: "パリセード", type: "大型SUV", fuel: "ガソリン", luggage: "ゴルフバッグ 4個", note: "広い室内と快適性が魅力の大型SUV" },
  ioniq5: { name: "アイオニック 5", type: "電気SUV", fuel: "電気", luggage: "スーツケース 3個", note: "静かな乗り心地と洗練されたデザインのEV" },
  "model-y": { name: "テスラ モデルY", type: "電気SUV", fuel: "電気", luggage: "スーツケース 4個", note: "プレミアムEVを希望する方に向けた車両" },
  avante: { name: "アバンテ CN7", type: "コンパクトセダン", fuel: "ガソリン", luggage: "スーツケース 2個", note: "軽快でリーズナブルな日程に合うセダン" },
  "sonata-hybrid": { name: "ソナタ ハイブリッド", type: "中型セダン", fuel: "ハイブリッド", luggage: "スーツケース 3個", note: "ビジネス利用やカップル旅行に安定した選択肢" },
  staria: { name: "スターリア ラウンジ", type: "プレミアムバン", fuel: "ディーゼル", luggage: "ゴルフバッグ 5個", note: "多人数移動やツアー日程に適したバン" },
  ray: { name: "レイ", type: "軽自動車", fuel: "ガソリン", luggage: "スーツケース 2個", note: "市内移動や短距離利用に便利な軽車両" }
};

function bilingual(primary, secondary, inline = false) {
  const className = inline ? "copy-pair copy-pair--inline" : "copy-pair";
  return `<span class="${className}"><span class="copy-pair__primary">${primary}</span><span class="copy-pair__secondary">${secondary}</span></span>`;
}

const STATIC_TRANSLATIONS = {
  documentTitleBase: { kr: "okioki rent a car | 차량 상세", jp: "okioki rent a car | 車両詳細" },
  metaDescription: { kr: "오키나와 렌트카 차량 상세페이지", jp: "沖縄レンタカーの車両詳細ページ" },
  navTour: { kr: bilingual("투어상품", "Tours", true), jp: "ツアー商品" },
  navFleet: { kr: bilingual("차량라인업", "Fleet", true), jp: "車両ラインアップ" },
  navReservation: { kr: bilingual("예약하기", "Book Now", true), jp: "予約する" },
  reserveVehicleButton: { kr: bilingual("이 차량 예약하기", "Reserve This Car", true), jp: "この車両を予約する" },
  backToFleetButton: { kr: bilingual("라인업으로 돌아가기", "Back to Fleet", true), jp: "ラインアップへ戻る" },
  infoHeading: { kr: bilingual("차량 정보", "Vehicle Info"), jp: "車両情報" },
  useCasesHeading: { kr: bilingual("추천 이용", "Best For"), jp: "おすすめ利用シーン" },
  bookingGuideHeading: { kr: bilingual("예약 안내", "Booking Guide"), jp: "予約案内" },
  footerMain: { kr: bilingual("메인", "Home", true), jp: "ホーム" },
  footerTour: { kr: bilingual("투어상품", "Tours", true), jp: "ツアー商品" },
  footerFleet: { kr: bilingual("차량소개", "Fleet", true), jp: "車両紹介" },
  footerContact: { kr: bilingual("문의하기", "Contact", true), jp: "お問い合わせ" },
  footerKakao: { kr: "카카오톡 상담", jp: "カカオトーク相談" },
  footerQuickMain: { kr: bilingual("메인", "Home", true), jp: "ホーム" },
  footerQuickTour: { kr: bilingual("투어상품", "Tours", true), jp: "ツアー商品" },
  footerQuickFleet: { kr: bilingual("차량소개", "Fleet", true), jp: "車両紹介" },
  footerQuickBooking: { kr: bilingual("실시간 예약", "Book Now", true), jp: "リアルタイム予約" },
  footerDetail: { kr: bilingual("차량상세", "Car Details", true), jp: "車両詳細" },
  footerBrandImageAlt: { kr: "회사명 이미지", jp: "会社名イメージ" },
  kakaoAria: { kr: "카카오톡 상담", jp: "カカオトーク相談" },
  kakaoIconAlt: { kr: "카카오톡 아이콘", jp: "カカオトークアイコン" }
};

const DETAIL_LABELS = {
  name: { kr: "차량명", jp: "車両名" },
  type: { kr: "차종", jp: "車種" },
  seats: { kr: "탑승 인원", jp: "乗車人数" },
  fuel: { kr: "연료", jp: "燃料" },
  luggage: { kr: "적재", jp: "積載" },
  price: { kr: "기본 요금", jp: "基本料金" }
};

const params = new URLSearchParams(window.location.search);
const vehicleId = params.get("id");
const descriptionMeta = document.getElementById("siteDescriptionMeta");
const brandLogoImages = Array.from(document.querySelectorAll("[data-brand-logo]"));
const langButtons = Array.from(document.querySelectorAll("[data-lang-button]"));
const langSwitcher = document.querySelector(".lang-switcher");
const pageBg = document.getElementById("pageBg");

const state = {
  currentLanguage: window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === "jp" ? "jp" : "kr",
  vehicle: null,
  site: fallbackCatalog.site
};

bindEvents();
initDetail();

function bindEvents() {
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.langButton === state.currentLanguage) {
        return;
      }
      setLanguage(button.dataset.langButton);
    });
  });
}

async function initDetail() {
  applyStaticTranslations();
  const catalog = await loadCatalog();
  applySiteSettings(catalog.site || {});
  state.site = catalog.site || {};
  state.vehicle = catalog.vehicles.find((item) => item.id === vehicleId) || catalog.vehicles[0];
  renderDetail();
}

function isJapanese() {
  return state.currentLanguage === "jp";
}

function getStaticCopy(key) {
  const entry = STATIC_TRANSLATIONS[key];
  if (!entry) {
    return "";
  }
  return entry[state.currentLanguage] ?? entry.kr ?? "";
}

function applyStaticTranslations() {
  document.documentElement.lang = isJapanese() ? "ja" : "ko";
  document.documentElement.setAttribute("data-lang", state.currentLanguage);
  document.title = getStaticCopy("documentTitleBase");
  if (descriptionMeta) {
    descriptionMeta.content = getStaticCopy("metaDescription");
  }
  if (langSwitcher) {
    langSwitcher.setAttribute("aria-label", isJapanese() ? "言語選択" : "언어 선택");
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = getStaticCopy(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = getStaticCopy(element.dataset.i18nAlt);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", getStaticCopy(element.dataset.i18nAriaLabel));
  });

  langButtons.forEach((button) => {
    const active = button.dataset.langButton === state.currentLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setLanguage(language) {
  state.currentLanguage = language === "jp" ? "jp" : "kr";
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, state.currentLanguage);
  applyStaticTranslations();
  renderDetail();
}

async function loadCatalog() {
  try {
    const response = await fetch(`/api/catalog?ts=${Date.now()}`);
    if (!response.ok) {
      throw new Error("catalog error");
    }
    const data = await response.json();
    return normalizeCatalog(data.catalog || fallbackCatalog);
  } catch (error) {
    return normalizeCatalog(fallbackCatalog);
  }
}

function normalizeCatalog(catalog) {
  const safeCatalog = catalog && typeof catalog === "object" ? catalog : fallbackCatalog;
  return {
    vehicles: Array.isArray(safeCatalog.vehicles) && safeCatalog.vehicles.length ? safeCatalog.vehicles : fallbackCatalog.vehicles,
    site: safeCatalog.site && typeof safeCatalog.site === "object"
      ? {
          brandLogo: String(safeCatalog.site.brandLogo || "").trim(),
          backgroundImage: String(safeCatalog.site.backgroundImage || "").trim(),
          longTermRentalMode: safeCatalog.site.longTermRentalMode === true
        }
      : fallbackCatalog.site
  };
}

function applySiteSettings(site) {
  const brandLogo = site.brandLogo || DEFAULT_BRAND_LOGO;
  brandLogoImages.forEach((image) => {
    image.src = brandLogo;
  });

  if (pageBg && site.backgroundImage) {
    pageBg.style.backgroundImage = `linear-gradient(180deg, rgba(216, 239, 255, 0.82) 0%, rgba(237, 248, 255, 0.84) 48%, rgba(253, 254, 254, 0.88) 100%), url("${escapeCssUrl(site.backgroundImage)}")`;
    pageBg.style.backgroundPosition = "center center";
    pageBg.style.backgroundSize = "cover";
    pageBg.style.backgroundRepeat = "no-repeat";
  }
}

function renderDetail() {
  const vehicle = state.vehicle;
  if (!vehicle) {
    return;
  }

  const localizedVehicle = getLocalizedVehicle(vehicle);
  document.title = `okioki rent a car | ${localizedVehicle.name}`;
  document.getElementById("detailName").textContent = localizedVehicle.name;
  document.getElementById("detailType").textContent = `${localizedVehicle.type} · ${localizedVehicle.price}`;
  document.getElementById("detailNote").textContent = localizedVehicle.note;

  const reserveLink = document.getElementById("detailReserveLink");
  reserveLink.href = "./index.html#reservation";
  reserveLink.innerHTML = state.site.longTermRentalMode
    ? (isJapanese() ? "長期レンタル相談受付" : bilingual("장기렌트 상담 접수", "Long-term Rental Inquiry", true))
    : getStaticCopy("reserveVehicleButton");

  const visual = document.getElementById("detailVisual");
  visual.innerHTML = vehicle.image
    ? `<img src="${escapeHtml(vehicle.image)}" alt="${escapeHtml(localizedVehicle.name)}">`
    : `<div class="detail-placeholder">${escapeHtml(localizedVehicle.badge || localizedVehicle.name)}</div>`;

  document.getElementById("detailSpecs").innerHTML = [
    localizedVehicle.type,
    getSeatLabel(vehicle.seats),
    localizedVehicle.fuel,
    localizedVehicle.luggage,
    localizedVehicle.price
  ].map((item) => `<span>${escapeHtml(item)}</span>`).join("");

  document.getElementById("detailInfoList").innerHTML = [
    [getDetailLabel("name"), localizedVehicle.name],
    [getDetailLabel("type"), localizedVehicle.type],
    [getDetailLabel("seats"), getSeatLabel(vehicle.seats)],
    [getDetailLabel("fuel"), localizedVehicle.fuel],
    [getDetailLabel("luggage"), localizedVehicle.luggage],
    [getDetailLabel("price"), localizedVehicle.price]
  ].map(([label, value]) => `
    <div class="detail-info-row">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");

  document.getElementById("detailUseCases").innerHTML = getUseCases(localizedVehicle)
    .map((item) => `<p>${escapeHtml(item)}</p>`)
    .join("");

  document.getElementById("detailBookingGuide").innerHTML = getBookingGuide()
    .map((item) => `<p>${escapeHtml(item)}</p>`)
    .join("");
}

function getLocalizedVehicle(vehicle) {
  if (!isJapanese()) {
    return vehicle;
  }

  const translated = VEHICLE_JP_TRANSLATIONS[vehicle.id] || {};
  return {
    ...vehicle,
    ...translated,
    badge: translated.badge || vehicle.badge,
    price: translated.price || localizePriceDisplay(vehicle.price)
  };
}

function getDetailLabel(key) {
  return DETAIL_LABELS[key]?.[state.currentLanguage] || DETAIL_LABELS[key]?.kr || "";
}

function getSeatLabel(count) {
  return isJapanese() ? `${count}人乗り` : `${count}인승`;
}

function getUseCases(vehicle) {
  if (isJapanese()) {
    return [
      `${vehicle.name} は ${vehicle.note}`,
      `${vehicle.seats}人乗りで、家族旅行や荷物が多い日程にも合わせやすい構成です。`,
      state.site.longTermRentalMode
        ? "現在は長期レンタル相談受付モードのため、車両配車は相談後に個別でご案内します。"
        : "通常予約ではカレンダー確認後、そのまま予約フォームから日程を送信できます。"
    ];
  }

  return [
    `${vehicle.name} 차량은 ${vehicle.note}`,
    `${vehicle.seats}인승 구성으로 가족여행이나 짐이 많은 일정에도 잘 맞습니다.`,
    state.site.longTermRentalMode
      ? "현재는 장기렌트 상담 접수 모드라 차량 배정은 상담 후 개별 안내됩니다."
      : "일반 예약은 캘린더 확인 후 바로 예약폼으로 일정을 접수할 수 있습니다."
  ];
}

function getBookingGuide() {
  if (isJapanese()) {
    return [
      "予約はリアルタイムで受け付けられ、重複日程は自動で制限されます。",
      "那覇空港、ホテル、各拠点を基準に受け取り場所を予約フォームへ残せます。",
      "詳しい相談はカカオトークまたは予約フォーム受付からつなげられます。"
    ];
  }

  return [
    "예약은 실시간 접수되며 중복 일정은 자동 차단됩니다.",
    "나하공항, 호텔, 지점 기준 픽업 위치를 예약폼에서 남길 수 있습니다.",
    "상세 상담은 카카오톡 문의 또는 예약폼 접수로 연결할 수 있습니다."
  ];
}

function localizePriceDisplay(value) {
  if (!isJapanese()) {
    return value;
  }

  return String(value || "")
    .replace(/1일/g, "1日")
    .replace(/엔/g, "円")
    .replace(/원/g, "ウォン")
    .replace(/별도 상담/g, "別途相談");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeCssUrl(value) {
  return String(value || "").replace(/"/g, '\\"');
}
