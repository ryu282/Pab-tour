const LANGUAGE_STORAGE_KEY = "rentcarPublicLanguageV1";
const CATALOG_CACHE_KEY = "rentcarCatalogCacheV1";
const DEFAULT_BRAND_LOGO = "./okioki.png.png";
const DEFAULT_PAGE_BG = "radial-gradient(circle at 12% 12%, rgba(0, 120, 215, 0.18), transparent 28%), radial-gradient(circle at 88% 14%, rgba(255, 178, 24, 0.18), transparent 22%), linear-gradient(180deg, #d8efff 0%, #edf8ff 46%, #fdfefe 100%)";
const KAKAO_OPENCHAT_URL = "https://open.kakao.com/o/sWBHJKmi";

const activitySlug = document.body.dataset.activitySlug || "fishing";
const brandLogoImages = Array.from(document.querySelectorAll("[data-brand-logo]"));
const langButtons = Array.from(document.querySelectorAll("[data-lang-button]"));
const langSwitcher = document.querySelector(".lang-switcher");
const pageBg = document.getElementById("pageBg");
const descriptionMeta = document.getElementById("siteDescriptionMeta");
const bookingForm = document.getElementById("activityBookingForm");
const bookingDateInput = document.getElementById("activityDate");
const bookingTimeSelect = document.getElementById("activityTime");
const bookingMeetingInput = document.getElementById("activityMeetingPlace");
const bookingNameInput = document.getElementById("activityNameField");
const bookingPhoneInput = document.getElementById("activityPhone");
const bookingEmailInput = document.getElementById("activityEmail");
const bookingMessageInput = document.getElementById("activityMessage");
const adultCountInput = document.getElementById("activityAdults");
const childCountInput = document.getElementById("activityChildren");
const totalGuestsInput = document.getElementById("activityTotalGuests");
const totalPriceInput = document.getElementById("activityTotalPrice");
const bookingStatus = document.getElementById("activityBookingStatus");
const priceGuideTitle = document.getElementById("activityPriceGuideTitle");
const priceGuideBody = document.getElementById("activityPriceGuideBody");

const DEFAULT_ACTIVITY_CONTENT = {
  fishing: {
    visualClass: "activity-visual activity-visual--fishing",
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
    specsKr: ["선상 출항", "초보 참여 가능", "가족 여행 추천"],
    specsJp: ["ボート出航", "初心者参加可能", "家族旅行におすすめ"],
    infoRows: {
      kr: [
        ["진행 시간", "약 2시간 30분"],
        ["권장 복장", "편한 복장, 미끄럽지 않은 신발"],
        ["포함 사항", "기본 장비, 현장 안내"]
      ],
      jp: [
        ["所要時間", "約2時間30分"],
        ["服装", "動きやすい服装、滑りにくい靴"],
        ["含まれる内容", "基本装備、現地案内"]
      ]
    },
    highlights: {
      kr: [
        "오키나와 바다 감성을 편하게 즐기고 싶은 일정에 잘 어울립니다.",
        "가족 단위나 친구 여행 일정에도 부담 없이 넣기 좋습니다.",
        "렌트카 일정과 함께 조율하기 쉬운 대표 해양 체험입니다."
      ],
      jp: [
        "沖縄の海らしい雰囲気を気軽に楽しみたい日程に向いています。",
        "家族旅行や友人旅行のスケジュールにも無理なく組み込みやすいです。",
        "レンタカー日程と合わせて相談しやすい代表的な海上体験です。"
      ]
    },
    bookingGuide: {
      kr: [
        "희망 날짜와 시간, 미팅 장소를 먼저 남겨 주세요.",
        "예약 내용을 확인한 뒤 운영팀이 안내 메시지를 드립니다.",
        "빠른 조율이 필요하면 카카오톡 상담을 함께 이용해 주세요."
      ],
      jp: [
        "ご希望の日付、時間、集合場所を先に残してください。",
        "内容を確認後、運営チームがご案内メッセージをお送りします。",
        "お急ぎの場合はカカオトーク相談もあわせてご利用ください。"
      ]
    },
    pricing: {
      adult: 12000,
      child: 8000
    },
    priceGuide: {
      kr: "성인 1인 12,000엔 / 소아 1인 8,000엔 기준입니다. 실제 요금은 일정과 인원에 따라 조정될 수 있습니다.",
      jp: "大人1名12,000円 / 子ども1名8,000円が目安です。実際の料金は日程と人数により調整される場合があります。"
    },
    timeOptions: [
      { value: "09:00", kr: "오전 9:00", jp: "午前 9:00" },
      { value: "13:00", kr: "오후 1:00", jp: "午後 1:00" },
      { value: "16:00", kr: "오후 4:00", jp: "午後 4:00" }
    ]
  },
  snorkeling: {
    visualClass: "activity-visual activity-visual--snorkeling",
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
    specsKr: ["맑은 바다 체험", "초보 참여 가능", "오전/오후 진행"],
    specsJp: ["透明な海で体験", "初心者参加可能", "午前・午後開催"],
    infoRows: {
      kr: [
        ["진행 시간", "약 2시간"],
        ["권장 복장", "수영복 또는 젖어도 되는 복장"],
        ["포함 사항", "기본 장비, 현장 안내"]
      ],
      jp: [
        ["所要時間", "約2時間"],
        ["服装", "水着または濡れてもよい服装"],
        ["含まれる内容", "基本装備、現地案内"]
      ]
    },
    highlights: {
      kr: [
        "오키나와 바다를 가까이에서 느끼고 싶은 분께 잘 맞는 체험입니다.",
        "짧은 일정에도 넣기 좋은 대표 해양 프로그램입니다.",
        "현지 날씨와 바다 상태에 따라 가장 편한 시간대로 조율할 수 있습니다."
      ],
      jp: [
        "沖縄の海を間近で感じたい方にぴったりの体験です。",
        "短い日程にも入れやすい代表的なマリンプログラムです。",
        "現地の天候や海況に合わせて参加しやすい時間帯をご案内できます。"
      ]
    },
    bookingGuide: {
      kr: [
        "희망 날짜와 시간, 미팅 장소를 먼저 남겨 주세요.",
        "신청 내용을 확인한 뒤 운영팀이 안내 메시지를 드립니다.",
        "카카오톡 상담으로 일정 조율을 함께 진행하셔도 됩니다."
      ],
      jp: [
        "ご希望の日付、時間、集合場所を先に残してください。",
        "申込内容を確認後、運営チームがご案内メッセージをお送りします。",
        "カカオトーク相談で日程調整を一緒に進めることもできます。"
      ]
    },
    pricing: {
      adult: 9000,
      child: 6000
    },
    priceGuide: {
      kr: "성인 1인 9,000엔 / 소아 1인 6,000엔 기준입니다. 실제 요금은 일정과 인원에 따라 달라질 수 있습니다.",
      jp: "大人1名9,000円 / 子ども1名6,000円が目安です。実際の料金は日程と人数により変動する場合があります。"
    },
    timeOptions: [
      { value: "08:30", kr: "오전 8:30", jp: "午前 8:30" },
      { value: "11:30", kr: "오전 11:30", jp: "午前 11:30" },
      { value: "14:30", kr: "오후 2:30", jp: "午後 2:30" }
    ]
  }
};

const STATIC_TRANSLATIONS = {
  navTour: { kr: bilingual("투어상품", "Tours", true), jp: "ツアー商品" },
  navFleet: { kr: bilingual("차량소개", "Fleet", true), jp: "車両紹介" },
  navReservation: { kr: bilingual("예약하기", "Book Now", true), jp: "予約する" },
  activityEyebrow: { kr: "ACTIVITY DETAIL", jp: "ACTIVITY DETAIL" },
  activityInquiryButton: { kr: bilingual("카카오톡 상담", "KakaoTalk Help", true), jp: "カカオトーク相談" },
  activityBackButton: { kr: bilingual("투어 페이지로", "Back to Tours", true), jp: "ツアーページへ" },
  infoHeading: { kr: bilingual("액티비티 정보", "Activity Info"), jp: "アクティビティ情報" },
  useCasesHeading: { kr: bilingual("추천 이용", "Best For"), jp: "おすすめ" },
  bookingGuideHeading: { kr: bilingual("예약 안내", "Booking Guide"), jp: "予約案内" },
  activityBookingEyebrow: { kr: "ACTIVITY BOOKING", jp: "ACTIVITY BOOKING" },
  activityBookingTitle: { kr: bilingual("액티비티 예약 신청", "Activity Booking"), jp: "アクティビティ予約申込" },
  activityDateLabel: { kr: bilingual("이용 날짜", "Date"), jp: "利用日" },
  activityTimeLabel: { kr: bilingual("이용 시간", "Time"), jp: "利用時間" },
  activityMeetingPlaceLabel: { kr: bilingual("미팅 장소", "Meeting Place"), jp: "集合場所" },
  activityNameLabel: { kr: bilingual("예약자명", "Name"), jp: "予約者名" },
  activityPhoneLabel: { kr: bilingual("연락처", "Phone"), jp: "連絡先" },
  activityEmailLabel: { kr: bilingual("이메일", "Email"), jp: "メール" },
  activityAdultLabel: { kr: bilingual("성인 인원", "Adults"), jp: "大人人数" },
  activityChildLabel: { kr: bilingual("소아 인원", "Children"), jp: "子ども人数" },
  activityTotalGuestsLabel: { kr: bilingual("총 인원", "Total Guests"), jp: "合計人数" },
  activityTotalPriceLabel: { kr: bilingual("예상 합계금액", "Estimated Total"), jp: "予想合計金額" },
  activityMessageLabel: { kr: bilingual("추가 요청사항", "Special Requests"), jp: "追加要望" },
  activitySubmitButton: { kr: bilingual("카카오톡으로 문의하기", "Open KakaoTalk", true), jp: "カカオトークで相談する" },
  activityPriceGuideLabel: { kr: "PRICE GUIDE", jp: "PRICE GUIDE" },
  activityRequestFlowLabel: { kr: "REQUEST FLOW", jp: "REQUEST FLOW" },
  activityRequestTitle: { kr: "신청 방법", jp: "申込方法" },
  activityRequestBody: {
    kr: "신청 내용을 정리한 뒤 카카오톡 상담창으로 바로 이동합니다. 복사된 내용을 붙여 넣으면 빠르게 상담을 이어갈 수 있습니다.",
    jp: "申込内容をまとめたあと、カカオトーク相談画面へ移動します。コピーされた内容を貼り付けると、やり取りをスムーズに進められます。"
  },
  activityAgreeText: {
    kr: "예약 정보 확인 및 상담 진행에 동의합니다.",
    jp: "予約情報の確認と相談対応に同意します。"
  },
  activityMeetingPlacePlaceholder: {
    kr: "예: 나하 시내 호텔 로비",
    jp: "例: 那覇市内ホテルロビー"
  },
  activityNamePlaceholder: {
    kr: "예약자 성함",
    jp: "予約者名"
  },
  activityPhonePlaceholder: {
    kr: "010-0000-0000",
    jp: "090-0000-0000"
  },
  activityEmailPlaceholder: {
    kr: "name@example.com",
    jp: "name@example.com"
  },
  activityMessagePlaceholder: {
    kr: "참가자 특이사항이나 요청 내용을 남겨 주세요.",
    jp: "参加者の注意事項やご要望があれば入力してください。"
  }
};

const state = {
  currentLanguage: window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === "jp" ? "jp" : "kr",
  catalog: {
    site: {
      brandLogo: "",
      backgroundImage: ""
    },
    activityDetails: {}
  }
};

bindEvents();
initActivityPage();

function bindEvents() {
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.langButton === "jp" ? "jp" : "kr";
      if (nextLanguage !== state.currentLanguage) {
        setLanguage(nextLanguage);
      }
    });
  });

  bookingForm?.addEventListener("input", updateBookingSummary);
  bookingForm?.addEventListener("change", updateBookingSummary);
  bookingForm?.addEventListener("submit", handleBookingSubmit);
}

async function initActivityPage() {
  applyStaticTranslations();
  initBookingDefaults();
  await loadCatalog();
  applySiteSettings();
  renderActivityPage();
}

async function loadCatalog() {
  const cached = readCachedCatalog();

  try {
    const response = await fetch(`/api/catalog?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`catalog ${response.status}`);
    }

    const payload = await response.json();
    state.catalog = normalizeCatalog(payload.catalog);
    writeCatalogCache(state.catalog);
    return;
  } catch (error) {
    if (cached) {
      state.catalog = normalizeCatalog(cached);
      return;
    }
  }

  state.catalog = normalizeCatalog(state.catalog);
}

function renderActivityPage() {
  const data = getActivityData();
  const activityName = isJapanese() ? data.heroTitleJp || data.heroTitleEn : data.heroTitleKr || data.heroTitleEn;
  const activityType = isJapanese() ? data.typeJp || data.typeKr : data.typeKr || data.typeJp;
  const activityNote = isJapanese() ? data.noteJp || data.noteKr : data.noteKr || data.noteJp;
  const visualText = isJapanese() ? data.visualBodyJp || data.visualBodyKr : data.visualBodyKr || data.visualBodyJp;
  const specs = isJapanese() ? data.specsJp : data.specsKr;
  const infoRows = isJapanese() ? data.infoRows.jp : data.infoRows.kr;
  const highlights = isJapanese() ? data.highlights.jp : data.highlights.kr;
  const bookingGuide = isJapanese() ? data.bookingGuide.jp : data.bookingGuide.kr;

  document.title = `okioki rent a car | ${activityName}`;
  if (descriptionMeta) {
    descriptionMeta.content = activityNote;
  }

  applyActivityVisual(data, activityName, visualText);
  document.getElementById("activityName").innerHTML = isJapanese()
    ? escapeHtml(data.heroTitleJp || data.heroTitleEn || data.heroTitleKr || "")
    : bilingual(data.heroTitleKr || data.heroTitleEn || "", data.heroTitleEn || "");
  document.getElementById("activityType").textContent = activityType;
  document.getElementById("activityNote").textContent = activityNote;
  document.getElementById("activitySpecs").innerHTML = specs.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  document.getElementById("activityInfoList").innerHTML = infoRows
    .map(([label, value]) => `<div class="detail-info-row"><strong>${escapeHtml(label)}</strong><span>${escapeHtml(value)}</span></div>`)
    .join("");
  document.getElementById("activityUseCases").innerHTML = highlights.map((item) => `<p>${escapeHtml(item)}</p>`).join("");
  document.getElementById("activityBookingGuide").innerHTML = bookingGuide.map((item) => `<p>${escapeHtml(item)}</p>`).join("");

  renderBookingForm();
  updateBookingSummary();
}

function applyActivityVisual(data, activityName, visualText) {
  const visual = document.getElementById("activityVisual");
  if (!visual) {
    return;
  }

  if (data.heroImage) {
    visual.className = "activity-visual activity-visual--custom";
    visual.style.backgroundImage = `linear-gradient(180deg, rgba(10, 34, 67, 0.2), rgba(10, 34, 67, 0.64)), url("${data.heroImage}")`;
    visual.style.backgroundPosition = "center";
    visual.style.backgroundSize = "cover";
  } else {
    visual.className = data.visualClass;
    visual.style.backgroundImage = "";
    visual.style.backgroundPosition = "";
    visual.style.backgroundSize = "";
  }

  document.getElementById("activityVisualBadge").textContent = isJapanese() ? data.badgeJp : data.badgeKr;
  document.getElementById("activityVisualTitle").textContent = activityName;
  document.getElementById("activityVisualText").textContent = visualText;
}

function renderBookingForm() {
  const data = getActivityData();

  if (bookingTimeSelect) {
    bookingTimeSelect.innerHTML = data.timeOptions
      .map((option) => `<option value="${escapeAttribute(option.value)}">${escapeHtml(isJapanese() ? option.jp : option.kr)}</option>`)
      .join("");
  }

  if (priceGuideTitle) {
    priceGuideTitle.innerHTML = isJapanese() ? "料金案内" : bilingual("요금 안내", "Pricing");
  }

  if (priceGuideBody) {
    priceGuideBody.textContent = isJapanese() ? data.priceGuide.jp : data.priceGuide.kr;
  }
}

function updateBookingSummary() {
  const data = getActivityData();
  const adults = Math.max(0, Number(adultCountInput?.value || 0));
  const children = Math.max(0, Number(childCountInput?.value || 0));
  const totalGuests = adults + children;
  const totalPrice = (adults * data.pricing.adult) + (children * data.pricing.child);

  if (totalGuestsInput) {
    totalGuestsInput.value = String(totalGuests);
  }

  if (totalPriceInput) {
    totalPriceInput.value = formatYen(totalPrice);
  }
}

async function handleBookingSubmit(event) {
  event.preventDefault();

  const data = getActivityData();
  const payload = {
    activityName: isJapanese() ? data.heroTitleJp || data.heroTitleEn : data.heroTitleKr || data.heroTitleEn,
    date: bookingDateInput?.value || "",
    time: bookingTimeSelect?.value || "",
    meetingPlace: bookingMeetingInput?.value.trim() || "",
    name: bookingNameInput?.value.trim() || "",
    phone: bookingPhoneInput?.value.trim() || "",
    email: bookingEmailInput?.value.trim() || "",
    message: bookingMessageInput?.value.trim() || "",
    adults: Math.max(0, Number(adultCountInput?.value || 0)),
    children: Math.max(0, Number(childCountInput?.value || 0))
  };

  const totalGuests = payload.adults + payload.children;
  const totalPrice = (payload.adults * data.pricing.adult) + (payload.children * data.pricing.child);

  if (!payload.date || !payload.time || !payload.meetingPlace || !payload.name || !payload.phone || !payload.email) {
    setBookingStatus(
      isJapanese() ? "必須項目をすべて入力してください。" : "필수 항목을 모두 입력해 주세요.",
      "error"
    );
    return;
  }

  if (totalGuests < 1) {
    setBookingStatus(
      isJapanese() ? "合計人数は1名以上で入力してください。" : "총 인원은 1명 이상이어야 합니다.",
      "error"
    );
    return;
  }

  const message = createBookingMessage({
    ...payload,
    totalGuests,
    totalPrice
  });

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(message);
    } catch (error) {
      // Ignore clipboard errors.
    }
  }

  setBookingStatus(
    isJapanese()
      ? "申込内容をコピーしてカカオトーク相談画面へ移動します。"
      : "신청 내용을 복사하고 카카오톡 상담창으로 이동합니다.",
    ""
  );

  window.location.href = KAKAO_OPENCHAT_URL;
}

function createBookingMessage({ activityName, date, time, meetingPlace, name, phone, email, message, adults, children, totalGuests, totalPrice }) {
  if (isJapanese()) {
    return [
      "[アクティビティ予約相談]",
      `商品: ${activityName}`,
      `利用日: ${date}`,
      `利用時間: ${time}`,
      `集合場所: ${meetingPlace}`,
      `予約者名: ${name}`,
      `連絡先: ${phone}`,
      `メール: ${email}`,
      `大人: ${adults}名`,
      `子ども: ${children}名`,
      `合計人数: ${totalGuests}名`,
      `予想合計金額: ${formatYen(totalPrice)}`,
      message ? `追加要望: ${message}` : "追加要望: -",
      "上記内容で相談を希望します。"
    ].join("\n");
  }

  return [
    "[액티비티 예약 상담]",
    `상품: ${activityName}`,
    `이용 날짜: ${date}`,
    `이용 시간: ${time}`,
    `미팅 장소: ${meetingPlace}`,
    `예약자명: ${name}`,
    `연락처: ${phone}`,
    `이메일: ${email}`,
    `성인: ${adults}명`,
    `소아: ${children}명`,
    `총 인원: ${totalGuests}명`,
    `예상 합계금액: ${formatYen(totalPrice)}`,
    `추가 요청사항: ${message || "-"}`,
    "위 내용으로 상담을 요청합니다."
  ].join("\n");
}

function applySiteSettings() {
  const site = state.catalog.site || {};
  const logo = site.brandLogo || DEFAULT_BRAND_LOGO;
  brandLogoImages.forEach((image) => {
    image.src = logo;
  });

  if (!pageBg) {
    return;
  }

  if (site.backgroundImage) {
    pageBg.style.backgroundImage = `linear-gradient(180deg, rgba(8, 25, 43, 0.38), rgba(8, 25, 43, 0.08)), url("${site.backgroundImage}")`;
    pageBg.style.backgroundPosition = "center";
    pageBg.style.backgroundSize = "cover";
  } else {
    pageBg.style.backgroundImage = DEFAULT_PAGE_BG;
    pageBg.style.backgroundPosition = "";
    pageBg.style.backgroundSize = "";
  }
}

function applyStaticTranslations() {
  document.documentElement.setAttribute("lang", isJapanese() ? "ja" : "ko");
  document.documentElement.setAttribute("data-lang", state.currentLanguage);

  if (langSwitcher) {
    langSwitcher.setAttribute("aria-label", isJapanese() ? "言語選択" : "언어 선택");
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const copy = getStaticCopy(element.dataset.i18n);
    if (copy) {
      element.innerHTML = copy;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", getStaticCopy(element.dataset.i18nPlaceholder));
  });

  langButtons.forEach((button) => {
    const active = button.dataset.langButton === state.currentLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setLanguage(language) {
  state.currentLanguage = language;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, state.currentLanguage);
  applyStaticTranslations();
  renderActivityPage();
}

function initBookingDefaults() {
  if (bookingDateInput) {
    bookingDateInput.min = formatLocalDate(new Date());
  }

  if (adultCountInput && !adultCountInput.value) {
    adultCountInput.value = "1";
  }

  if (childCountInput && !childCountInput.value) {
    childCountInput.value = "0";
  }
}

function normalizeCatalog(catalog) {
  const source = catalog && typeof catalog === "object" ? catalog : {};
  return {
    site: normalizeSite(source.site),
    activityDetails: source.activityDetails && typeof source.activityDetails === "object" ? source.activityDetails : {}
  };
}

function normalizeSite(site) {
  if (!site || typeof site !== "object") {
    return { brandLogo: "", backgroundImage: "" };
  }

  return {
    brandLogo: typeof site.brandLogo === "string" ? site.brandLogo : "",
    backgroundImage: typeof site.backgroundImage === "string" ? site.backgroundImage : ""
  };
}

function getActivityData() {
  const fallback = DEFAULT_ACTIVITY_CONTENT[activitySlug] || DEFAULT_ACTIVITY_CONTENT.fishing;
  const adminData = state.catalog.activityDetails?.[activitySlug];
  if (!adminData || typeof adminData !== "object") {
    return fallback;
  }

  return {
    ...fallback,
    heroImage: adminData.heroImage || fallback.heroImage,
    badgeKr: adminData.badgeKr || fallback.badgeKr,
    badgeJp: adminData.badgeJp || fallback.badgeJp,
    heroTitleKr: adminData.heroTitleKr || fallback.heroTitleKr,
    heroTitleEn: adminData.heroTitleEn || fallback.heroTitleEn,
    heroTitleJp: adminData.heroTitleJp || fallback.heroTitleJp,
    typeKr: adminData.typeKr || fallback.typeKr,
    typeJp: adminData.typeJp || fallback.typeJp,
    noteKr: adminData.noteKr || fallback.noteKr,
    noteJp: adminData.noteJp || fallback.noteJp,
    visualBodyKr: adminData.visualBodyKr || fallback.visualBodyKr,
    visualBodyJp: adminData.visualBodyJp || fallback.visualBodyJp
  };
}

function readCachedCatalog() {
  try {
    const raw = window.localStorage.getItem(CATALOG_CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function writeCatalogCache(catalog) {
  try {
    window.localStorage.setItem(CATALOG_CACHE_KEY, JSON.stringify(catalog));
  } catch (error) {
    // Ignore storage errors.
  }
}

function getStaticCopy(key) {
  const entry = STATIC_TRANSLATIONS[key];
  if (!entry) {
    return "";
  }

  return entry[state.currentLanguage] || entry.kr || "";
}

function setBookingStatus(message, type) {
  if (!bookingStatus) {
    return;
  }

  bookingStatus.textContent = message;
  bookingStatus.className = `activity-booking-status${type ? ` ${type}` : ""}`;
}

function formatYen(amount) {
  const formatted = Number(amount || 0).toLocaleString(isJapanese() ? "ja-JP" : "ko-KR");
  return isJapanese() ? `${formatted}円` : `${formatted}엔`;
}

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isJapanese() {
  return state.currentLanguage === "jp";
}

function bilingual(primary, secondary, inline = false) {
  const className = inline ? "copy-pair copy-pair--inline" : "copy-pair";
  return `<span class="${className}"><span class="copy-pair__primary">${escapeHtml(primary || "")}</span><span class="copy-pair__secondary">${escapeHtml(secondary || "")}</span></span>`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}
