const LANGUAGE_STORAGE_KEY = "rentcarPublicLanguageV1";
const DEFAULT_BRAND_LOGO = "./okioki.png.png";

const fallbackSite = {
  brandLogo: "",
  backgroundImage: ""
};

const config = window.RENTCAR_CONFIG || {};
const brandLogoImages = Array.from(document.querySelectorAll("[data-brand-logo]"));
const langButtons = Array.from(document.querySelectorAll("[data-lang-button]"));
const tabButtons = Array.from(document.querySelectorAll("[data-contact-tab]"));
const tabPanels = Array.from(document.querySelectorAll("[data-contact-panel]"));

const pageBg = document.getElementById("pageBg");
const descriptionMeta = document.getElementById("siteDescriptionMeta");
const brandTagline = document.getElementById("brandTagline");
const footerBrandSubtitle = document.getElementById("footerBrandSubtitle");
const boardTitle = document.getElementById("contactBoardTitle");
const boardBody = document.getElementById("contactBoardBody");
const boardRows = document.getElementById("contactBoardRows");
const faqList = document.getElementById("contactFaqList");
const drivingList = document.getElementById("contactDrivingList");
const travelList = document.getElementById("contactTravelList");

const inquiryForm = document.getElementById("contactInquiryForm");
const inquiryTypeInput = document.getElementById("inquiryType");
const serviceTypeInput = document.getElementById("serviceType");
const contactTitleInput = document.getElementById("contactTitle");
const preferredDateInput = document.getElementById("preferredDate");
const contactNameInput = document.getElementById("contactName");
const contactPhoneInput = document.getElementById("contactPhone");
const contactEmailInput = document.getElementById("contactEmail");
const contactMessageInput = document.getElementById("contactMessage");
const contactAgreeInput = document.getElementById("contactAgree");
const contactSubmitButton = document.getElementById("contactSubmitButton");
const contactInquiryStatus = document.getElementById("contactInquiryStatus");

const state = {
  currentLanguage: window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === "jp" ? "jp" : "kr",
  activeTab: getInitialTab(),
  site: fallbackSite,
  inquiries: [],
  isSubmitting: false
};

const TEXT = {
  kr: {
    documentTitle: "okioki rent a car | 문의하기",
    metaDescription: "오키오키 렌트카 문의게시판, FAQ, 운전 안내, 여행 정보를 한 페이지에서 확인하세요.",
    brandTagline: "Okinawa Contact Board",
    footerBrandSubtitle: "okinawa rental car service",
    navTour: "투어상품",
    navFleet: "차량소개",
    navReservation: "예약하기",
    tabBoard: "문의게시판",
    tabFaq: "FAQ",
    tabDriving: "운전시 주의사항",
    tabTravel: "여행정보",
    boardTitle: "오키오키 렌트카에 궁금한 사항을 문의해주세요.",
    boardBody: "렌트카, 투어, 액티비티 관련 문의를 게시판 형식으로 남기면 순서대로 확인 후 안내드립니다.",
    boardNumber: "번호",
    boardCategory: "분류",
    boardSubject: "제목",
    boardAuthor: "작성자",
    boardDate: "작성일",
    boardStatus: "상태",
    boardEmpty: "아직 등록된 문의가 없습니다. 첫 문의를 남겨주세요.",
    inquiryEyebrow: "CONTACT FORM",
    inquiryTitle: "문의 남기기",
    inquiryBody: "문의 성격과 서비스 종류를 선택한 뒤 제목과 내용을 적어주시면 게시판 등록과 상담 접수가 동시에 진행됩니다.",
    inquiryTypeLabel: "문의 유형",
    inquiryTypeGeneral: "일반문의",
    inquiryTypeQuote: "견적문의",
    inquiryTypeReservation: "예약문의",
    inquiryTypeSchedule: "일정문의",
    serviceTypeLabel: "서비스",
    serviceTypeRentcar: "렌트카",
    serviceTypeTour: "투어상품",
    serviceTypeActivity: "액티비티",
    serviceTypeOther: "기타",
    contactTitleLabel: "제목",
    contactTitlePlaceholder: "문의 제목을 입력해주세요.",
    preferredDateLabel: "희망 날짜",
    contactNameLabel: "이름",
    contactNamePlaceholder: "성함을 입력해주세요.",
    contactPhoneLabel: "연락처",
    contactPhonePlaceholder: "010-0000-0000",
    contactEmailLabel: "이메일",
    contactEmailPlaceholder: "name@example.com",
    contactMessageLabel: "문의 내용",
    contactMessagePlaceholder: "원하는 일정, 인원, 문의 내용을 자세히 적어주세요.",
    contactAgreeText: "문의 내용과 연락처 수집에 동의합니다.",
    contactSubmitButton: "문의 등록하기",
    contactFlowEyebrow: "RESPONSE FLOW",
    contactFlowTitle: "응답 안내",
    contactFlowBody: "등록된 문의는 게시판에 접수 상태로 표시되며, 확인 후 카카오톡 또는 이메일 기준으로 순차 안내드립니다.",
    contactTipsEyebrow: "HELP TIP",
    contactTipsTitle: "빠른 답변을 받는 방법",
    contactTipsBody: "이용 날짜, 인원 수, 원하는 차량 또는 투어명을 함께 적어주시면 더 빠르게 답변드릴 수 있습니다.",
    faqTitle: "자주 묻는 질문",
    drivingTitlePanel: "운전시 주의사항",
    travelTitlePanel: "여행정보",
    footerMain: "홈",
    footerFleet: "차량소개",
    footerTour: "투어상품",
    footerAddress: "10056-1 Chinen Yamazato, Nanjo-city, Okinawa",
    footerKakao: "카카오톡 상담",
    footerQuickBooking: "예약하기",
    footerContact: "문의하기",
    footerBrandImageAlt: "회사 브랜드 이미지",
    kakaoAria: "카카오톡 상담",
    kakaoIconAlt: "카카오톡 아이콘",
    submitting: "문의 내용을 저장하고 있습니다.",
    submitSuccess: "문의가 정상적으로 등록되었습니다. 접수번호는 {code} 입니다.",
    submitEmailPartial: "문의는 등록되었지만 메일 전송은 일부만 완료되었습니다.",
    submitEmailFailed: "문의는 등록되었지만 메일 전송에는 문제가 있었습니다.",
    submitEmailSkipped: "문의는 등록되었고 게시판에서 바로 확인할 수 있습니다.",
    validateType: "문의 유형과 서비스를 선택해주세요.",
    validateRequired: "제목, 이름, 연락처, 이메일, 문의 내용을 입력해주세요.",
    validatePhone: "연락처 형식을 확인해주세요.",
    validateEmail: "이메일 형식을 확인해주세요.",
    validateAgree: "개인정보 수집 동의가 필요합니다.",
    submitError: "문의 등록 중 오류가 발생했습니다.",
    statusReceived: "처리중",
    statusPending: "검토중",
    statusAnswered: "답변완료",
    faqItems: [
      {
        question: "예약 없이 현장 방문도 가능한가요?",
        answer: "가능한 경우도 있지만 성수기에는 차량이나 투어가 빠르게 마감될 수 있어 미리 문의 후 예약하시는 편이 안전합니다."
      },
      {
        question: "렌트카와 투어를 함께 문의할 수 있나요?",
        answer: "가능합니다. 서비스에서 렌트카나 투어를 선택하고 상세 내용에 함께 적어주시면 한 번에 안내해드립니다."
      },
      {
        question: "답변은 얼마나 걸리나요?",
        answer: "영업시간 내 접수 건은 최대한 빠르게 확인하며, 순서대로 카카오톡 또는 이메일로 안내드립니다."
      }
    ],
    drivingItems: [
      {
        title: "일본 운전 방향",
        body: "오키나와는 한국과 달리 우측 핸들, 좌측 통행입니다. 출발 전 도로 방향과 와이퍼, 방향지시등 위치를 먼저 확인해주세요."
      },
      {
        title: "주차와 정차",
        body: "관광지 주변은 주차 가능 구역이 제한될 수 있습니다. 불법 주정차는 과태료 대상이 될 수 있으니 표지판을 꼭 확인해주세요."
      },
      {
        title: "보험과 사고 대응",
        body: "사고 발생 시 바로 차량 이동을 하기보다 안전 확보 후 현장 사진과 위치를 남기고 즉시 연락해주세요."
      }
    ],
    travelItems: [
      {
        title: "공항 픽업 이동",
        body: "공항 도착 시간과 항공편명을 남겨주시면 가장 맞는 안내 시간을 기준으로 도와드립니다."
      },
      {
        title: "비 오는 날 일정",
        body: "날씨에 따라 투어와 액티비티 진행 여부가 달라질 수 있어 우천 시 대체 일정도 함께 문의하시는 것이 좋습니다."
      },
      {
        title: "가족 여행 준비",
        body: "카시트, 유아 동반, 수하물 수량이 있으면 미리 적어주시면 차량 추천이 더 정확해집니다."
      }
    ]
  },
  jp: {
    documentTitle: "okioki rent a car | お問い合わせ",
    metaDescription: "お問い合わせ掲示板、FAQ、運転案内、旅行情報を1ページで確認できます。",
    brandTagline: "Okinawa Contact Board",
    footerBrandSubtitle: "okinawa rental car service",
    navTour: "ツアー商品",
    navFleet: "車両紹介",
    navReservation: "予約する",
    tabBoard: "お問い合わせ掲示板",
    tabFaq: "FAQ",
    tabDriving: "運転時の注意事項",
    tabTravel: "旅行情報",
    boardTitle: "オキオキレンタカーへのご質問をお送りください。",
    boardBody: "レンタカー、ツアー、アクティビティに関するお問い合わせを掲示板形式で受け付けています。",
    boardNumber: "番号",
    boardCategory: "分類",
    boardSubject: "タイトル",
    boardAuthor: "投稿者",
    boardDate: "投稿日",
    boardStatus: "状態",
    boardEmpty: "まだ登録されたお問い合わせがありません。最初の投稿を残してください。",
    inquiryEyebrow: "CONTACT FORM",
    inquiryTitle: "お問い合わせを送る",
    inquiryBody: "お問い合わせ種別とサービスを選択し、タイトルと内容を入力すると掲示板登録と相談受付が同時に行われます。",
    inquiryTypeLabel: "問い合わせ種別",
    inquiryTypeGeneral: "一般問い合わせ",
    inquiryTypeQuote: "見積もり問い合わせ",
    inquiryTypeReservation: "予約問い合わせ",
    inquiryTypeSchedule: "日程問い合わせ",
    serviceTypeLabel: "サービス",
    serviceTypeRentcar: "レンタカー",
    serviceTypeTour: "ツアー商品",
    serviceTypeActivity: "アクティビティ",
    serviceTypeOther: "その他",
    contactTitleLabel: "タイトル",
    contactTitlePlaceholder: "お問い合わせタイトルを入力してください。",
    preferredDateLabel: "希望日",
    contactNameLabel: "お名前",
    contactNamePlaceholder: "お名前を入力してください。",
    contactPhoneLabel: "連絡先",
    contactPhonePlaceholder: "090-0000-0000",
    contactEmailLabel: "メール",
    contactEmailPlaceholder: "name@example.com",
    contactMessageLabel: "お問い合わせ内容",
    contactMessagePlaceholder: "ご希望の日程、人数、お問い合わせ内容を詳しく入力してください。",
    contactAgreeText: "お問い合わせ内容と連絡先の収集に同意します。",
    contactSubmitButton: "問い合わせを登録",
    contactFlowEyebrow: "RESPONSE FLOW",
    contactFlowTitle: "回答案内",
    contactFlowBody: "登録されたお問い合わせは掲示板に受付状態で表示され、確認後にカカオトークまたはメールで順次ご案内します。",
    contactTipsEyebrow: "HELP TIP",
    contactTipsTitle: "早く回答を受ける方法",
    contactTipsBody: "利用日、人数、希望する車両またはツアー名を一緒に書いていただくと、より早くご案内できます。",
    faqTitle: "よくある質問",
    drivingTitlePanel: "運転時の注意事項",
    travelTitlePanel: "旅行情報",
    footerMain: "ホーム",
    footerFleet: "車両紹介",
    footerTour: "ツアー商品",
    footerAddress: "10056-1 Chinen Yamazato, Nanjo-city, Okinawa",
    footerKakao: "カカオトーク相談",
    footerQuickBooking: "予約する",
    footerContact: "お問い合わせ",
    footerBrandImageAlt: "ブランドイメージ",
    kakaoAria: "カカオトーク相談",
    kakaoIconAlt: "カカオトークアイコン",
    submitting: "お問い合わせ内容を保存しています。",
    submitSuccess: "お問い合わせが登録されました。受付番号は {code} です。",
    submitEmailPartial: "お問い合わせは登録されましたが、メール送信は一部のみ完了しました。",
    submitEmailFailed: "お問い合わせは登録されましたが、メール送信で問題が発生しました。",
    submitEmailSkipped: "お問い合わせは登録され、掲示板で確認できます。",
    validateType: "問い合わせ種別とサービスを選択してください。",
    validateRequired: "タイトル、お名前、連絡先、メール、お問い合わせ内容を入力してください。",
    validatePhone: "連絡先の形式を確認してください。",
    validateEmail: "メール形式を確認してください。",
    validateAgree: "個人情報収集への同意が必要です。",
    submitError: "問い合わせ登録中にエラーが発生しました。",
    statusReceived: "受付中",
    statusPending: "確認中",
    statusAnswered: "回答完了",
    faqItems: [
      {
        question: "予約なしで訪問しても大丈夫ですか？",
        answer: "可能な場合もありますが、繁忙期は車両やツアーが早く締め切られるため、事前のお問い合わせをおすすめします。"
      },
      {
        question: "レンタカーとツアーを一緒に問い合わせできますか？",
        answer: "可能です。サービスを選択し、詳細内容に一緒にご記入いただければまとめてご案内します。"
      },
      {
        question: "回答まではどれくらいかかりますか？",
        answer: "営業時間内の受付はできるだけ早く確認し、順番にカカオトークまたはメールでご案内します。"
      }
    ],
    drivingItems: [
      {
        title: "日本の運転方向",
        body: "沖縄は右ハンドル、左側通行です。出発前に道路方向とワイパー、ウィンカーの位置を必ずご確認ください。"
      },
      {
        title: "駐車と停車",
        body: "観光地周辺は駐車可能区域が限られる場合があります。標識を確認し、違反駐車にご注意ください。"
      },
      {
        title: "保険と事故対応",
        body: "事故発生時はまず安全を確保し、現場写真と位置情報を残したうえで、すぐにご連絡ください。"
      }
    ],
    travelItems: [
      {
        title: "空港ピックアップ移動",
        body: "空港到着時間と便名を残していただければ、最適なご案内時間に合わせて対応します。"
      },
      {
        title: "雨の日のスケジュール",
        body: "天候によってツアーやアクティビティの進行有無が変わるため、雨天時の代替案も一緒に相談すると安心です。"
      },
      {
        title: "家族旅行の準備",
        body: "チャイルドシート、幼児同行、荷物の量などを事前に共有いただくと、より正確な車両提案ができます。"
      }
    ]
  }
};

bindEvents();
initContactPage();

function bindEvents() {
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.langButton === "jp" ? "jp" : "kr";
      if (state.currentLanguage !== nextLanguage) {
        setLanguage(nextLanguage);
      }
    });
  });

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTab(button.dataset.contactTab || "board", { scrollIntoView: true, updateHash: true });
    });
  });

  inquiryForm?.addEventListener("submit", handleInquirySubmit);

  window.addEventListener("hashchange", () => {
    const nextTab = getTabFromHash(window.location.hash);
    if (nextTab && nextTab !== state.activeTab) {
      setActiveTab(nextTab);
    }
  });
}

async function initContactPage() {
  applyStaticTranslations();
  const [site, inquiries] = await Promise.all([loadSiteSettings(), loadInquiries()]);
  state.site = site;
  state.inquiries = inquiries;
  applySiteSettings(site);
  initializeEmailJS();
  initFormDefaults();
  renderDynamicSections();
  setActiveTab(state.activeTab);
  updateSubmitState();
}

function copy(key) {
  return TEXT[state.currentLanguage][key];
}

function isJapanese() {
  return state.currentLanguage === "jp";
}

function setLanguage(language) {
  state.currentLanguage = language === "jp" ? "jp" : "kr";
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, state.currentLanguage);
  applyStaticTranslations();
  renderDynamicSections();
  setActiveTab(state.activeTab);
}

function applyStaticTranslations() {
  document.documentElement.lang = isJapanese() ? "ja" : "ko";
  document.documentElement.setAttribute("data-lang", state.currentLanguage);
  document.title = copy("documentTitle");

  if (descriptionMeta) {
    descriptionMeta.content = copy("metaDescription");
  }
  if (brandTagline) {
    brandTagline.textContent = copy("brandTagline");
  }
  if (footerBrandSubtitle) {
    footerBrandSubtitle.textContent = copy("footerBrandSubtitle");
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key && copy(key)) {
      element.textContent = copy(key);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (key && copy(key)) {
      element.setAttribute("placeholder", copy(key));
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (key && copy(key)) {
      element.setAttribute("alt", copy(key));
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (key && copy(key)) {
      element.setAttribute("aria-label", copy(key));
    }
  });

  langButtons.forEach((button) => {
    const active = button.dataset.langButton === state.currentLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderDynamicSections() {
  if (boardTitle) {
    boardTitle.textContent = copy("boardTitle");
  }
  if (boardBody) {
    boardBody.textContent = copy("boardBody");
  }

  renderBoardRows();
  renderFaqList();
  renderGuideGrid(drivingList, copy("drivingItems"));
  renderGuideGrid(travelList, copy("travelItems"));
}

function renderBoardRows() {
  if (!boardRows) {
    return;
  }

  if (!state.inquiries.length) {
    boardRows.innerHTML = `
      <tr>
        <td class="contact-board-table__empty" colspan="6">${escapeHtml(copy("boardEmpty"))}</td>
      </tr>
    `;
    return;
  }

  boardRows.innerHTML = state.inquiries
    .map((inquiry, index) => {
      const displayNumber = state.inquiries.length - index;
      return `
        <tr>
          <td>${displayNumber}</td>
          <td>${escapeHtml(localizeServiceType(inquiry.serviceType))}</td>
          <td class="contact-board-table__title">${escapeHtml(inquiry.title || "")}</td>
          <td>${escapeHtml(inquiry.author || "-")}</td>
          <td>${escapeHtml(formatDateCell(inquiry.createdAt))}</td>
          <td><span class="contact-board-status">${escapeHtml(localizeStatus(inquiry.status))}</span></td>
        </tr>
      `;
    })
    .join("");
}

function renderFaqList() {
  if (!faqList) {
    return;
  }

  faqList.innerHTML = copy("faqItems")
    .map((item) => `
      <article class="contact-faq-item">
        <strong>${escapeHtml(item.question)}</strong>
        <p>${escapeHtml(item.answer)}</p>
      </article>
    `)
    .join("");
}

function renderGuideGrid(target, items) {
  if (!target) {
    return;
  }

  target.innerHTML = items
    .map((item) => `
      <article class="contact-guide-card">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.body)}</p>
      </article>
    `)
    .join("");
}

function setActiveTab(tab, options = {}) {
  const nextTab = ["board", "faq", "driving", "travel"].includes(tab) ? tab : "board";
  const shouldScroll = Boolean(options.scrollIntoView);
  const shouldUpdateHash = Boolean(options.updateHash);

  state.activeTab = nextTab;

  tabButtons.forEach((button) => {
    const active = button.dataset.contactTab === nextTab;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });

  tabPanels.forEach((panel) => {
    const active = panel.dataset.contactPanel === nextTab;
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;
  });

  if (shouldUpdateHash) {
    const nextHash = createTabHash(nextTab);
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
    }
  }

  if (shouldScroll) {
    const activePanel = document.querySelector(`[data-contact-panel="${nextTab}"]`);
    activePanel?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

async function loadSiteSettings() {
  try {
    const response = await fetch(`/api/catalog?ts=${Date.now()}`);
    if (!response.ok) {
      throw new Error("catalog error");
    }
    const data = await response.json();
    const site = data.catalog?.site || {};
    return {
      brandLogo: String(site.brandLogo || "").trim(),
      backgroundImage: String(site.backgroundImage || "").trim()
    };
  } catch (error) {
    return fallbackSite;
  }
}

async function loadInquiries() {
  try {
    const response = await fetch(`/api/contact-inquiries?ts=${Date.now()}`);
    if (!response.ok) {
      throw new Error("inquiry fetch error");
    }
    const data = await response.json();
    return Array.isArray(data.inquiries) ? data.inquiries : [];
  } catch (error) {
    return [];
  }
}

function applySiteSettings(site) {
  const brandLogo = site.brandLogo || DEFAULT_BRAND_LOGO;
  brandLogoImages.forEach((image) => {
    image.src = brandLogo;
  });

  if (!pageBg) {
    return;
  }

  if (site.backgroundImage) {
    pageBg.style.backgroundImage = `linear-gradient(180deg, rgba(243, 246, 250, 0.96) 0%, rgba(247, 249, 252, 0.98) 100%), url("${escapeCssUrl(site.backgroundImage)}")`;
    pageBg.style.backgroundPosition = "center center";
    pageBg.style.backgroundSize = "cover";
    pageBg.style.backgroundRepeat = "no-repeat";
  } else {
    pageBg.style.backgroundImage = "linear-gradient(180deg, #f3f6fa 0%, #f7f9fc 100%)";
  }
}

function initializeEmailJS() {
  if (window.emailjs && isEmailConfigured()) {
    window.emailjs.init({ publicKey: config.emailjs.publicKey });
  }
}

function isEmailConfigured() {
  return Boolean(config.emailjs && config.emailjs.publicKey && config.emailjs.serviceId);
}

function initFormDefaults() {
  if (preferredDateInput) {
    preferredDateInput.min = formatLocalDate(new Date());
  }
}

async function handleInquirySubmit(event) {
  event.preventDefault();

  const payload = {
    inquiryType: inquiryTypeInput?.value || "",
    serviceType: serviceTypeInput?.value || "",
    title: contactTitleInput?.value.trim() || "",
    preferredDate: preferredDateInput?.value || "",
    name: contactNameInput?.value.trim() || "",
    phone: contactPhoneInput?.value.trim() || "",
    email: contactEmailInput?.value.trim() || "",
    message: contactMessageInput?.value.trim() || "",
    website: inquiryForm?.elements.website?.value || "",
    agree: Boolean(contactAgreeInput?.checked)
  };

  const validationMessage = validateInquiryPayload(payload);
  if (validationMessage) {
    setInquiryStatus(validationMessage, "error");
    return;
  }

  state.isSubmitting = true;
  updateSubmitState();
  setInquiryStatus(copy("submitting"), "");

  try {
    const response = await fetch("/api/contact-inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(result.message || copy("submitError"));
    }

    const mailOutcome = await sendInquiryEmail(payload, result.inquiry || {});
    state.inquiries = await loadInquiries();
    renderBoardRows();
    setActiveTab("board", { updateHash: true });
    inquiryForm.reset();
    initFormDefaults();
    setInquiryStatus(createCompletionMessage(result.inquiry || {}, mailOutcome), mailOutcome.status === "failed" ? "error" : "success");
  } catch (error) {
    setInquiryStatus(error.message || copy("submitError"), "error");
  } finally {
    state.isSubmitting = false;
    updateSubmitState();
  }
}

function validateInquiryPayload(payload) {
  if (!payload.inquiryType || !payload.serviceType) {
    return copy("validateType");
  }
  if (!payload.title || !payload.name || !payload.phone || !payload.email || !payload.message) {
    return copy("validateRequired");
  }
  if (!/^[0-9+\-() ]{8,20}$/.test(payload.phone)) {
    return copy("validatePhone");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return copy("validateEmail");
  }
  if (!payload.agree) {
    return copy("validateAgree");
  }
  return "";
}

async function sendInquiryEmail(payload, inquiry) {
  if (!window.emailjs || !isEmailConfigured()) {
    return { status: "skipped", attemptedCustomer: false };
  }

  const adminTemplateId = config.emailjs.contactAdminTemplateId || config.emailjs.adminTemplateId || config.emailjs.templateId;
  const customerTemplateId = config.emailjs.contactCustomerTemplateId || "";
  const templateParams = {
    company_name: config.companyName || "okioki rent a car",
    site_name: config.companyName || "okioki rent a car",
    company_phone: config.companyPhone || "",
    company_email: config.companyEmail || "",
    inquiry_code: inquiry.inquiryCode || "",
    request_code: inquiry.inquiryCode || "",
    reservation_type: "contact",
    inquiry_type: localizeInquiryType(payload.inquiryType),
    service_type: localizeServiceType(payload.serviceType),
    inquiry_title: payload.title,
    request_subject: payload.title,
    service_name: localizeServiceType(payload.serviceType),
    form_type: "렌트카 문의",
    preferred_date: payload.preferredDate || "-",
    request_date: payload.preferredDate || "-",
    request_end_date: "-",
    customer_name: payload.name,
    contact_name: payload.name,
    customer_phone: payload.phone,
    contact_phone: payload.phone,
    customer_email: payload.email,
    contact_email: payload.email,
    name: payload.name,
    to_email: payload.email,
    pickup_location: "-",
    pickup_place: "-",
    dropoff_location: "-",
    party_size: "-",
    people: "-",
    date: payload.preferredDate || "-",
    tour_type: localizeServiceType(payload.serviceType),
    message: payload.message,
    customer_message: payload.message
  };

  let adminSent = false;
  let customerSent = false;

  if (adminTemplateId) {
    try {
      await window.emailjs.send(config.emailjs.serviceId, adminTemplateId, templateParams);
      adminSent = true;
    } catch (error) {
      console.error(error);
    }
  }

  if (customerTemplateId) {
    try {
      await window.emailjs.send(config.emailjs.serviceId, customerTemplateId, templateParams);
      customerSent = true;
    } catch (error) {
      console.error(error);
    }
  }

  if ((adminTemplateId ? adminSent : true) && (customerTemplateId ? customerSent : true)) {
    return { status: "sent", attemptedCustomer: Boolean(customerTemplateId) };
  }
  if (adminSent || customerSent) {
    return { status: "partial", attemptedCustomer: Boolean(customerTemplateId) };
  }
  return { status: "failed", attemptedCustomer: Boolean(customerTemplateId) };
}

function createCompletionMessage(inquiry, mailOutcome) {
  const base = copy("submitSuccess").replace("{code}", inquiry.inquiryCode || "-");

  if (mailOutcome.status === "partial") {
    return `${base} ${copy("submitEmailPartial")}`;
  }
  if (mailOutcome.status === "failed") {
    return `${base} ${copy("submitEmailFailed")}`;
  }
  if (mailOutcome.status === "skipped") {
    return `${base} ${copy("submitEmailSkipped")}`;
  }
  return base;
}

function localizeInquiryType(value) {
  const map = {
    general: copy("inquiryTypeGeneral"),
    quote: copy("inquiryTypeQuote"),
    reservation: copy("inquiryTypeReservation"),
    schedule: copy("inquiryTypeSchedule")
  };
  return map[value] || value;
}

function localizeServiceType(value) {
  const map = {
    rentcar: copy("serviceTypeRentcar"),
    tour: copy("serviceTypeTour"),
    activity: copy("serviceTypeActivity"),
    other: copy("serviceTypeOther")
  };
  return map[value] || value;
}

function localizeStatus(value) {
  const map = {
    received: copy("statusReceived"),
    pending: copy("statusPending"),
    answered: copy("statusAnswered")
  };
  return map[value] || copy("statusReceived");
}

function updateSubmitState() {
  if (contactSubmitButton) {
    contactSubmitButton.disabled = state.isSubmitting;
  }
}

function setInquiryStatus(message, type) {
  if (!contactInquiryStatus) {
    return;
  }
  contactInquiryStatus.textContent = message;
  contactInquiryStatus.className = `activity-booking-status${type ? ` ${type}` : ""}`;
}

function formatDateCell(value) {
  if (!value) {
    return "-";
  }
  return String(value).slice(0, 10).replace(/-/g, ".");
}

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeCssUrl(value) {
  return String(value ?? "").replace(/"/g, '\\"');
}

function getInitialTab() {
  return getTabFromHash(window.location.hash) || "board";
}

function getTabFromHash(hash) {
  const normalized = String(hash || "").replace(/^#/, "").toLowerCase();
  const map = {
    "contact-board": "board",
    "contact-faq": "faq",
    "contact-driving": "driving",
    "contact-travel": "travel"
  };
  return map[normalized] || "";
}

function createTabHash(tab) {
  const map = {
    board: "#contact-board",
    faq: "#contact-faq",
    driving: "#contact-driving",
    travel: "#contact-travel"
  };
  return map[tab] || "#contact-board";
}
