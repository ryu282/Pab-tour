const LANGUAGE_STORAGE_KEY = "rentcarPublicLanguageV1";
const CATALOG_CACHE_KEY = "rentcarCatalogCacheV1";
const DEFAULT_BRAND_LOGO = "./okioki.png.png";
const DEFAULT_PAGE_BG = "radial-gradient(circle at 12% 12%, rgba(0, 120, 215, 0.18), transparent 28%), radial-gradient(circle at 88% 14%, rgba(255, 178, 24, 0.18), transparent 22%), linear-gradient(180deg, #d8efff 0%, #edf8ff 46%, #fdfefe 100%)";
const TOUR_CTA_LABEL = {
  kr: "상품 바로가기",
  jp: "商品ページへ"
};
const ACTIVITY_CTA_LABEL = {
  kr: "상세 보기",
  jp: "詳細を見る"
};

const brandLogoImages = Array.from(document.querySelectorAll("[data-brand-logo]"));
const langButtons = Array.from(document.querySelectorAll("[data-lang-button]"));
const langSwitcher = document.querySelector(".lang-switcher");
const pageBg = document.getElementById("pageBg");
const descriptionMeta = document.getElementById("siteDescriptionMeta");
const tourList = document.getElementById("tourList");
const activityList = document.getElementById("tourActivityList");
const supportGrid = document.getElementById("tourSupportGrid");
const heroTitle = document.getElementById("tourHeroTitle");
const heroBody = document.getElementById("tourHeroBody");
const heroChips = document.getElementById("tourHeroChips");
const asideTitle = document.getElementById("tourAsideTitle");
const asideBody = document.getElementById("tourAsideBody");
const directoryTitle = document.getElementById("tourDirectoryTitle");
const directoryBody = document.getElementById("tourDirectoryBody");
const activityLabel = document.getElementById("tourActivityLabel");
const routeTitle = document.getElementById("tourRouteTitle");
const routeBody = document.getElementById("tourRouteBody");
const routeBadge = document.getElementById("tourRouteBadge");
const routeName = document.getElementById("tourRouteName");
const routeSummary = document.getElementById("tourRouteSummary");
const routeMap = document.getElementById("tourRouteMap");

const NORTH_ROUTE_COPY = {
  title: {
    kr: "오키나와 관광지도",
    jp: "沖縄観光ルート"
  },
  body: {
    kr: "북부 대표 코스를 한눈에 볼 수 있는 이동 순서입니다.",
    jp: "北部の代表コースをひと目で見られる移動順序です。"
  },
  badge: {
    kr: "북부코스",
    jp: "北部コース"
  },
  name: {
    kr: "북부코스 관광지도",
    jp: "北部コース観光ルート"
  },
  summary: {
    kr: "나하 출발에서 58번 도로를 따라 만좌모, 츄라우미수족관, 고우리지마, 나고파인애플공원까지 이어지는 대표 드라이브 루트입니다.",
    jp: "那覇出発から58号線を通り、万座毛、美ら海水族館、古宇利島、ナゴパイナップルパークまで 이어지는代表ドライブコースです。"
  }
};

const NORTH_ROUTE_STOPS = [
  {
    kr: "나하 출발",
    jp: "那覇出発",
    noteKr: "START",
    noteJp: "START"
  },
  {
    kr: "58번도로",
    jp: "58号線",
    noteKr: "DRIVE",
    noteJp: "DRIVE"
  },
  {
    kr: "만좌모",
    jp: "万座毛",
    noteKr: "SPOT 1",
    noteJp: "SPOT 1"
  },
  {
    kr: "츄라우미수족관",
    jp: "美ら海水族館",
    noteKr: "SPOT 2",
    noteJp: "SPOT 2"
  },
  {
    kr: "고우리지마",
    jp: "古宇利島",
    noteKr: "SPOT 3",
    noteJp: "SPOT 3"
  },
  {
    kr: "나고파인애플공원",
    jp: "ナゴパイナップルパーク",
    noteKr: "FINISH",
    noteJp: "FINISH"
  }
];

const DEFAULT_TOUR_PRODUCTS = [
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
];

const DEFAULT_SUPPORT_CARDS = [
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
];

const DEFAULT_ACTIVITY_PRODUCTS = [
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
];

const STATIC_TRANSLATIONS = {
  navTour: { kr: bilingual("투어상품", "Tours", true), jp: "ツアー商品" },
  navFleet: { kr: bilingual("차량소개", "Fleet", true), jp: "車両紹介" },
  navReservation: { kr: bilingual("예약하기", "Book Now", true), jp: "予約する" },
  tourHeroPrimary: { kr: bilingual("카카오톡 상담", "KakaoTalk Help", true), jp: "カカオトーク相談" },
  tourHeroSecondary: { kr: bilingual("렌트카 예약으로 이동", "Go to Rentcar Booking", true), jp: "レンタカー予約へ" },
  tourAsideLabel: { kr: "TOUR DESK", jp: "TOUR DESK" },
  tourDirectoryLabel: { kr: "TOUR SELECT", jp: "TOUR SELECT" }
};

const COPY = {
  pageTitle: {
    kr: "okioki rent a car | 오키나와 투어 상품",
    jp: "okioki rent a car | 沖縄ツアー商品"
  },
  metaDescription: {
    kr: "오키나와 렌트카와 함께 둘러보기 좋은 투어 및 액티비티 상품 페이지입니다.",
    jp: "沖縄レンタカーと一緒に見やすいツアー・アクティビティ商品ページです。"
  },
  heroTitle: {
    kr: "오키나와 투어 상품을 한 번에 확인하세요",
    jp: "沖縄ツアー商品をまとめてご覧ください"
  },
  heroBody: {
    kr: "렌트카 이용 전후로 함께 보기 좋은 대표 투어 상품을 지역별로 빠르게 선택할 수 있도록 정리했습니다.",
    jp: "レンタカー利用の前後に一緒に見やすい代表ツアー商品を、地域別にすぐ選べるようまとめました。"
  },
  asideTitle: {
    kr: "지역별 인기 코스를 바로 연결",
    jp: "地域別の人気コースへすぐ接続"
  },
  asideBody: {
    kr: "북부, 중부, 남부 대표 상품을 눌러 상세 판매 페이지로 이동할 수 있습니다.",
    jp: "北部・中部・南部の代表商品を押すと、詳細販売ページへ移動できます。"
  },
  directoryTitle: {
    kr: "원하는 지역 투어를 바로 선택하세요",
    jp: "希望する地域ツアーをすぐ選択してください"
  },
  directoryBody: {
    kr: "상품 비교보다 빠른 선택과 바로가기 동선에 집중한 투어 전용 페이지입니다.",
    jp: "商品比較よりも、すばやい選択と移動のしやすさに集中したツアー専用ページです。"
  },
  activityLabel: {
    kr: "추천 액티비티 · Activities",
    jp: "おすすめアクティビティ"
  },
  emptyTours: {
    kr: "노출 중인 투어 상품이 없습니다.",
    jp: "表示中のツアー商品がありません。"
  },
  emptyActivities: {
    kr: "노출 중인 액티비티가 없습니다.",
    jp: "表示中のアクティビティがありません。"
  },
  emptySupport: {
    kr: "현재 표시할 안내 카드가 없습니다.",
    jp: "現在表示できる案内カードがありません。"
  }
};

const state = {
  currentLanguage: window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === "jp" ? "jp" : "kr",
  catalog: {
    site: {
      brandLogo: "",
      backgroundImage: ""
    },
    tourProducts: DEFAULT_TOUR_PRODUCTS,
    supportCards: DEFAULT_SUPPORT_CARDS,
    activityProducts: DEFAULT_ACTIVITY_PRODUCTS
  }
};

bindEvents();
initTourPage();

function bindEvents() {
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.langButton === "jp" ? "jp" : "kr";
      if (nextLanguage !== state.currentLanguage) {
        setLanguage(nextLanguage);
      }
    });
  });
}

async function initTourPage() {
  applyStaticTranslations();
  await loadCatalog();
  applySiteSettings();
  renderPage();
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

function renderPage() {
  document.title = getCopy("pageTitle");
  if (descriptionMeta) {
    descriptionMeta.content = getCopy("metaDescription");
  }

  if (heroTitle) {
    heroTitle.textContent = getCopy("heroTitle");
  }
  if (heroBody) {
    heroBody.textContent = getCopy("heroBody");
  }
  if (asideTitle) {
    asideTitle.textContent = getCopy("asideTitle");
  }
  if (asideBody) {
    asideBody.textContent = getCopy("asideBody");
  }
  if (directoryTitle) {
    directoryTitle.textContent = getCopy("directoryTitle");
  }
  if (directoryBody) {
    directoryBody.textContent = getCopy("directoryBody");
  }
  if (activityLabel) {
    activityLabel.textContent = getCopy("activityLabel");
  }

  renderHeroChips();
  renderTourList();
  renderActivityList();
  renderRouteMap();
  renderSupportCards();
}

function renderRouteMap() {
  if (routeTitle) {
    routeTitle.textContent = isJapanese() ? NORTH_ROUTE_COPY.title.jp : NORTH_ROUTE_COPY.title.kr;
  }
  if (routeBody) {
    routeBody.textContent = isJapanese() ? NORTH_ROUTE_COPY.body.jp : NORTH_ROUTE_COPY.body.kr;
  }
  if (routeBadge) {
    routeBadge.textContent = isJapanese() ? NORTH_ROUTE_COPY.badge.jp : NORTH_ROUTE_COPY.badge.kr;
  }
  if (routeName) {
    routeName.textContent = isJapanese() ? NORTH_ROUTE_COPY.name.jp : NORTH_ROUTE_COPY.name.kr;
  }
  if (routeSummary) {
    routeSummary.textContent = isJapanese() ? NORTH_ROUTE_COPY.summary.jp : NORTH_ROUTE_COPY.summary.kr;
  }
  if (!routeMap) {
    return;
  }

  routeMap.innerHTML = NORTH_ROUTE_STOPS.map((stop, index) => {
    const stateClass = index === 0 ? "start" : index === NORTH_ROUTE_STOPS.length - 1 ? "finish" : "waypoint";
    return `
    <li class="tour-route-stop tour-route-stop--${stateClass}">
      <span class="tour-route-stop__number">${index + 1}</span>
      <div class="tour-route-stop__card">
        <span class="tour-route-stop__label">${escapeHtml(isJapanese() ? stop.noteJp : stop.noteKr)}</span>
        <strong>${escapeHtml(isJapanese() ? stop.jp : stop.kr)}</strong>
      </div>
    </li>
  `;
  }).join("");
}

function renderHeroChips() {
  if (!heroChips) {
    return;
  }

  const chips = getActiveTours().slice(0, 4).map((tour) => `<span class="tour-chip">${escapeHtml(getTourRegion(tour))}</span>`);
  heroChips.innerHTML = chips.join("");
}

function renderTourList() {
  if (!tourList) {
    return;
  }

  const tours = getActiveTours();
  if (!tours.length) {
    tourList.innerHTML = `<article class="tour-row"><p class="tour-row__body">${escapeHtml(getCopy("emptyTours"))}</p></article>`;
    return;
  }

  tourList.innerHTML = tours.map((tour) => {
    const hasImage = Boolean(tour.image);
    const titleMarkup = isJapanese()
      ? escapeHtml(getTourTitle(tour))
      : bilingual(tour.titleKr || tour.titleEn, tour.titleEn || "");

    return `
      <article class="tour-row${hasImage ? " tour-row--with-image" : ""}">
        ${hasImage ? `
          <div class="tour-row__visual">
            <img src="${escapeAttribute(tour.image)}" alt="${escapeAttribute(getTourTitle(tour))}">
          </div>
        ` : ""}
        <div class="tour-row__meta">
          <span class="tour-row__region">${renderRegionChip(tour)}</span>
          <h3>${titleMarkup}</h3>
          <p class="tour-row__body">${escapeHtml(getTourBody(tour))}</p>
        </div>
        <a class="button primary tour-row__cta" href="${escapeAttribute(tour.href || "#")}" target="_blank" rel="noopener noreferrer">${escapeHtml(TOUR_CTA_LABEL[state.currentLanguage])}</a>
      </article>
    `;
  }).join("");
}

function renderActivityList() {
  if (!activityList) {
    return;
  }

  const activities = getActiveActivities();
  if (!activities.length) {
    activityList.innerHTML = `<article class="tour-activity-card"><p>${escapeHtml(getCopy("emptyActivities"))}</p></article>`;
    return;
  }

  activityList.innerHTML = activities.map((activity) => `
    <a class="tour-activity-card" href="${escapeAttribute(activity.href || "#")}">
      ${activity.image ? `
        <div class="tour-activity-card__visual">
          <img src="${escapeAttribute(activity.image)}" alt="${escapeAttribute(getActivityTitle(activity))}">
        </div>
      ` : ""}
      <span class="tour-activity-card__badge">${escapeHtml(isJapanese() ? activity.badgeJp : activity.badgeKr)}</span>
      <strong>${isJapanese() ? escapeHtml(getActivityTitle(activity)) : bilingual(activity.titleKr || activity.titleEn, activity.titleEn || "")}</strong>
      <p>${escapeHtml(getActivityBody(activity))}</p>
      <span class="tour-activity-card__cta">${escapeHtml(ACTIVITY_CTA_LABEL[state.currentLanguage])}</span>
    </a>
  `).join("");
}

function renderSupportCards() {
  if (!supportGrid) {
    return;
  }

  const cards = getActiveSupportCards();
  if (!cards.length) {
    supportGrid.innerHTML = `<article class="tour-row"><p class="tour-row__body">${escapeHtml(getCopy("emptySupport"))}</p></article>`;
    return;
  }

  supportGrid.innerHTML = cards.map((card) => `
    <article class="tour-activity-card">
      <strong>${isJapanese() ? escapeHtml(card.titleJp || card.titleEn || card.titleKr) : bilingual(card.titleKr || card.titleEn, card.titleEn || "")}</strong>
      <p>${escapeHtml(isJapanese() ? card.bodyJp || card.bodyKr : card.bodyKr || card.bodyJp)}</p>
    </article>
  `).join("");
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
    element.innerHTML = getStaticCopy(element.dataset.i18n);
  });

  langButtons.forEach((button) => {
    const active = button.dataset.langButton === state.currentLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setLanguage(language) {
  state.currentLanguage = language;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  applyStaticTranslations();
  renderPage();
}

function getStaticCopy(key) {
  const entry = STATIC_TRANSLATIONS[key];
  if (!entry) {
    return "";
  }
  return entry[state.currentLanguage] || entry.kr || "";
}

function getCopy(key) {
  const entry = COPY[key];
  if (!entry) {
    return "";
  }
  return entry[state.currentLanguage] || entry.kr || "";
}

function getActiveTours() {
  return (state.catalog.tourProducts || []).filter((tour) => tour && tour.active !== false);
}

function getActiveActivities() {
  return (state.catalog.activityProducts || []).filter((activity) => activity && activity.active !== false);
}

function getActiveSupportCards() {
  return (state.catalog.supportCards || []).filter((card) => card && card.active !== false);
}

function getTourRegion(tour) {
  if (isJapanese()) {
    return tour.regionJp || tour.regionEn || tour.regionKr || "";
  }
  return tour.regionKr || tour.regionEn || "";
}

function getTourTitle(tour) {
  return isJapanese()
    ? (tour.titleJp || tour.titleEn || tour.titleKr || "")
    : (tour.titleKr || tour.titleEn || "");
}

function getTourBody(tour) {
  return isJapanese()
    ? (tour.bodyJp || tour.bodyKr || "")
    : (tour.bodyKr || tour.bodyJp || "");
}

function getActivityTitle(activity) {
  return isJapanese()
    ? (activity.titleJp || activity.titleEn || activity.titleKr || "")
    : (activity.titleKr || activity.titleEn || "");
}

function getActivityBody(activity) {
  return isJapanese()
    ? (activity.bodyJp || activity.bodyKr || "")
    : (activity.bodyKr || activity.bodyJp || "");
}

function renderRegionChip(tour) {
  if (isJapanese()) {
    return escapeHtml(tour.regionJp || tour.regionEn || tour.regionKr || "");
  }

  return bilingual(tour.regionKr || tour.regionEn || "", tour.regionEn || "", true);
}

function normalizeCatalog(catalog) {
  const source = catalog && typeof catalog === "object" ? catalog : {};
  return {
    site: normalizeSite(source.site),
    tourProducts: normalizeItems(source.tourProducts, DEFAULT_TOUR_PRODUCTS),
    supportCards: normalizeItems(source.supportCards, DEFAULT_SUPPORT_CARDS),
    activityProducts: normalizeItems(source.activityProducts, DEFAULT_ACTIVITY_PRODUCTS)
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

function normalizeItems(items, fallback) {
  return Array.isArray(items) && items.length ? items : clone(fallback);
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

function clone(value) {
  return JSON.parse(JSON.stringify(value));
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
