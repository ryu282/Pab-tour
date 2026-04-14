const defaultCatalog = {
  vehicles: [
    { id: "carnival-hi", name: "기아 카니발 하이리무진", type: "패밀리 밴", seats: 9, fuel: "디젤", luggage: "골프백 4개", price: "1일 145,000원", note: "공항 이동, 가족여행, 골프투어에 좋은 대표 차량", badge: "BEST", image: "./fleet-carnival.png", active: true },
    { id: "sorento-hybrid", name: "쏘렌토 하이브리드", type: "중형 SUV", seats: 6, fuel: "하이브리드", luggage: "골프백 3개", price: "1일 128,000원", note: "연비와 적재 공간을 균형 있게 갖춘 SUV", badge: "HYBRID", image: "./fleet-sorento.jpg", active: true },
    { id: "palisade", name: "팰리세이드", type: "대형 SUV", seats: 7, fuel: "가솔린", luggage: "골프백 4개", price: "1일 158,000원", note: "넓은 실내와 편안함이 강점인 대형 SUV", badge: "VIP", image: "./fleet-palisade.png", active: true },
    { id: "ioniq5", name: "아이오닉 5", type: "전기 SUV", seats: 5, fuel: "전기", luggage: "캐리어 3개", price: "1일 116,000원", note: "조용한 승차감과 감각적인 디자인의 EV", badge: "EV", image: "./fleet-ioniq5.png", active: true },
    { id: "model-y", name: "테슬라 모델 Y", type: "전기 SUV", seats: 5, fuel: "전기", luggage: "캐리어 4개", price: "1일 172,000원", note: "프리미엄 EV를 원하는 고객을 위한 차량", badge: "PREMIUM", image: "./fleet-modely.png", active: true },
    { id: "avante", name: "아반떼 CN7", type: "준중형 세단", seats: 5, fuel: "가솔린", luggage: "캐리어 2개", price: "1일 72,000원", note: "가볍고 합리적인 일정에 잘 맞는 세단", badge: "ECONOMY", image: "./fleet-avante.png", active: true },
    { id: "sonata-hybrid", name: "쏘나타 하이브리드", type: "중형 세단", seats: 5, fuel: "하이브리드", luggage: "캐리어 3개", price: "1일 93,000원", note: "비즈니스 일정과 커플 여행에 안정적인 선택", badge: "SMART", image: "./fleet-sonata.png", active: true },
    { id: "staria", name: "스타리아 라운지", type: "프리미엄 밴", seats: 9, fuel: "디젤", luggage: "골프백 5개", price: "1일 162,000원", note: "다인원 이동과 투어 일정에 적합한 밴", badge: "9 SEATER", image: "./fleet-palisade.png", active: true },
    { id: "ray", name: "레이", type: "경차", seats: 4, fuel: "가솔린", luggage: "캐리어 2개", price: "1일 58,000원", note: "시내 이동과 단거리 일정에 좋은 경차", badge: "CITY", image: "./fleet-ray.png", active: true }
  ],
  options: [
    { id: "airport-pickup", title: "공항 픽업", price: "현장 문의", description: "도착 일정에 맞춰 차량 인수 동선을 안내합니다.", active: true },
    { id: "car-seat", title: "카시트", price: "1개 무료 / 2개부터 1개당 1,000엔", description: "연령에 맞는 카시트를 준비합니다. 일본에서는 6세 미만 아동의 카시트 사용이 의무입니다.", active: true },
    { id: "baby-seat", title: "베이비시트", price: "1개당 1,500엔", description: "영유아용 베이비시트를 준비합니다. 일본에서는 6세 미만 아동의 베이비시트 사용이 의무입니다.", active: true },
    { id: "golf-support", title: "골프여행 적재 안내", price: "무료", description: "골프백 수량에 맞는 차량을 추천하고 적재 가능 여부를 안내합니다.", active: true },
    { id: "hotel-dropoff", title: "호텔 반납", price: "추가 요금 가능", description: "호텔 또는 숙소 반납 동선을 운영 일정에 맞춰 조정합니다.", active: true },
    { id: "long-term-rental", title: "장기렌트", price: "별도 상담", description: "1개월 이상 또는 장기 일정은 상담 후 차량과 요금을 별도로 안내합니다.", active: true }
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
      href: "./tour-north.html",
      image: "./north-whale-card.jpg",
      regionKr: "북부",
      regionEn: "North",
      regionJp: "北部",
      titleKr: "북부 하루완성코스",
      titleEn: "North One-Day Highlights",
      titleJp: "北部一日満喫コース",
        bodyKr: "만좌모 · 츄라우미수족관 · 고우리섬\n👉 오키나와 대표 코스를 하루에 이동\n👉 렌터카 / 단독투어 모두 가능",
      bodyJp: "美ら海・古宇利・海岸ドライブ\n👉 沖縄の代表コースを1日で移動\n👉 移動距離が長いため単独ツアー利用がおすすめ",
      ctaKr: "편하게 이동하기",
      ctaJp: "楽に移動する",
      active: true
    },
    {
      id: "central-scenic",
      href: "./tour-central.html",
      image: "./central-drive-card.jpg",
      homeImage: "./central-card-photo.jpg",
      regionKr: "중부",
      regionEn: "Central",
      regionJp: "中部",
      titleKr: "중부 감성 드라이브",
      titleEn: "Central Scenic Tour",
      titleJp: "中部感性ドライブ",
        bodyKr: "아메리칸빌리지 · 가이츄해중도로 · 하마히가섬\n👉 짧은 이동으로 여유롭게 즐기는 코스\n👉 렌터카 / 단독투어 모두 가능",
      bodyJp: "アメリカンビレッジ・カフェ・海岸\n👉 短い移動でゆったり楽しめるコース\n👉 レンタカー / 単独ツアーどちらも可能",
      ctaKr: "코스 상세 보기",
      ctaJp: "コース詳細を見る",
      active: true
    },
    {
      id: "south-landmark",
      href: "./tour-south.html",
      image: "./south-healing-card.jpg",
      homeImage: "./south-card-photo.jpg",
      regionKr: "남부",
      regionEn: "South",
      regionJp: "南部",
      titleKr: "남부 힐링 루트",
      titleEn: "South Healing Route",
      titleJp: "南部ヒーリングルート",
        bodyKr: "오키나와월드 · 치넨미사키\n👉 반일 일정\n👉 렌터카 / 단독투어 모두 가능",
      bodyJp: "ニライカナイ・斎場御嶽・知念岬\n👉 半日コース\n👉 運転手付き移動がおすすめ",
      ctaKr: "일정 상담하기",
      ctaJp: "日程を相談する",
      active: true
    },
      {
        id: "custom-private-tour",
        href: "./tour-custom.html",
        image: "./pickup-service-card.jpg",
        regionKr: "픽/드랍서비스",
        regionEn: "Private Transfer Service",
        regionJp: "オーダーメイド送迎",
        visualLabelKr: "",
        visualLabelJp: "",
        titleKr: "픽/드랍 택시서비스",
        titleEn: "Pick/Drop Taxi Service",
        titleJp: "送迎タクシーサービス",
        bodyKr: "👉 공항/골프장 송영서비스",
        bodyJp: "👉 ご希望のコースで自由に構成\n👉 空港/ゴルフ場送迎サービス",
        ctaKr: "상담하기",
        ctaJp: "相談する",
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

const LANGUAGE_STORAGE_KEY = "rentcarPublicLanguageV1";

function bilingual(primary, secondary, inline = false) {
  const className = inline ? "copy-pair copy-pair--inline" : "copy-pair";
  return `<span class="${className}"><span class="copy-pair__primary">${primary}</span><span class="copy-pair__secondary">${secondary}</span></span>`;
}

const STATIC_TRANSLATIONS = {
  documentTitle: {
    kr: "okioki rent a car | 실시간 렌트카 예약",
    jp: "okioki rent a car | 沖縄レンタカー予約"
  },
  metaDescription: {
    kr: "Netlify 배포용 렌트카 홈페이지. 9대 차량, 실시간 예약 캘린더, 숨겨진 관리자 모드, EmailJS 문의 발송을 지원합니다.",
    jp: "Netlify対応のレンタカーホームページです。9台の車両、リアルタイム予約カレンダー、隠し管理者モード、EmailJSのお問い合わせ送信に対応しています。"
  },
  navTour: { kr: bilingual("투어상품", "Tours", true), jp: "ツアー商品" },
  navFleet: { kr: bilingual("차량소개", "Fleet", true), jp: "車両紹介" },
  navReservation: { kr: bilingual("예약하기", "Book Now", true), jp: "予約する" },
  heroTitle: { kr: bilingual("오키나와 여행<br>한 번에 해결", "Okinawa travel, all in one"), jp: "沖縄旅行、<br>一度に解決" },
  heroHighlight: { kr: "차량 + 일정 + 이동까지 편하게", jp: "車両・日程・移動までラクに" },
  heroText: {
    kr: "공항 도착부터 호텔 이동, 관광 일정까지 따로 예약할 필요 없이 한 번에 가능합니다.",
    jp: "空港到着からホテル移動、観光日程まで別々に予約せず一度に進められます。"
  },
  heroCtaPrimary: { kr: bilingual("지금 예약하기", "Book Now", true), jp: "今すぐ予約" },
  heroCtaSecondary: { kr: bilingual("카톡 상담하기", "Kakao Consultation", true), jp: "カカオ相談" },
  heroCtaMap: { kr: bilingual("오키나와 관광지도", "Sightseeing Map", true), jp: "沖縄観光マップ" },
  heroCtaTourIntro: { kr: bilingual("투어소개", "Tour Intro", true), jp: "ツアー紹介" },
  heroCtaTour: { kr: bilingual("투어 함께 만들기", "Plan Tour Together", true), jp: "ツアーを一緒に作る" },
  heroImageAlt: {
    kr: "오키나와 바다 여행 무드의 메인 테마 이미지",
    jp: "沖縄の海辺の旅をイメージしたメインテーマ画像"
  },
  homeTourIntroTitle: { kr: bilingual("렌트카와 함께 보는 투어소개", "Tour ideas to pair with your rentcar"), jp: "レンタカーと一緒に見るツアー紹介" },
  homeTourIntroBody: {
    kr: "렌트카 일정에 자연스럽게 묶기 좋은 대표 투어와 액티비티를 먼저 소개해 드립니다.",
    jp: "レンタカー日程と自然に組み合わせやすい代表ツアーとアクティビティを先にご紹介します。"
  },
  homeTourIntroPrimary: { kr: bilingual("전체 투어상품 보기", "View All Tours", true), jp: "ツアー商品をもっと見る" },
  homeTourIntroSecondary: { kr: bilingual("투어 상담하기", "Tour Consultation", true), jp: "ツアー相談" },
  serviceAirportTitle: { kr: bilingual("렌터카", "Rentcar"), jp: "レンタカー" },
  serviceAirportBody: { kr: "자유여행 차량 예약", jp: "自由旅行向け車両予約" },
  serviceAirportNote: { kr: "원하는 시간, 원하는 곳에서 편하게 이용하세요.", jp: "ご希望の時間と場所で気軽にご利用ください。" },
  serviceAirportCta: { kr: "차량 보러가기", jp: "車両を見る" },
  serviceHotelTitle: { kr: bilingual("단독투어", "Private Tour"), jp: "単独ツアー" },
  serviceHotelBody: { kr: "기사 포함 편안한 이동", jp: "運転手付きの快適な移動" },
  serviceHotelNote: { kr: "우리만의 일정으로 자유롭게 오키나와를 즐기세요.", jp: "自分たちだけの日程で自由に沖縄を楽しめます。" },
  serviceHotelCta: { kr: "투어 상세 보기", jp: "ツアー詳細を見る" },
  serviceFamilyTitle: { kr: bilingual("공항 · 골프장 픽드랍", "Airport · Golf Transfer"), jp: "空港・ゴルフ場送迎" },
  serviceFamilyBody: { kr: "공항/골프장 이동 접수", jp: "空港 / ゴルフ場移動受付" },
  serviceFamilyNote: { kr: "공항, 호텔, 골프장 이동 동선을 편하게 맞춰드립니다.", jp: "空港、ホテル、ゴルフ場の移動動線をスムーズに調整します。" },
  serviceFamilyCta: { kr: "상세페이지 보기", jp: "詳細ページを見る" },
  heroFeatureAirport: { kr: "공항 픽업 포함", jp: "空港ピックアップ込み" },
  heroFeatureKorean: { kr: "한국어 상담", jp: "韓国語相談" },
  heroFeatureLocal: { kr: "현지 운영", jp: "現地運営" },
  heroFeatureFamily: { kr: "가족·골프·단체", jp: "家族・ゴルフ・団体" },
  heroRatingTitle: { kr: "고객 만족도 4.9 / 5.0", jp: "顧客満足度 4.9 / 5.0" },
  heroRatingBody: { kr: "실제 이용 고객 후기 기반", jp: "実際の利用者レビュー基準" },
  serviceSelectTitle: { kr: bilingual("여행 방식에 맞는 서비스를 선택하세요", "Choose the service that fits your trip"), jp: "旅行スタイルに合うサービスを選んでください" },
  serviceSelectBody: { kr: "렌터카, 단독투어, 골프/송영 세 가지가 핵심 서비스입니다.", jp: "レンタカー、単独ツアー、ゴルフ/送迎の3つが中核サービスです。" },
  fleetHeadingTitle: { kr: bilingual("차량 라인업", "Fleet Lineup"), jp: "車両ラインアップ" },
  fleetHeadingBody: { kr: "", jp: "" },
  tourHeadingTitle: { kr: bilingual("오키나와 투어 상품", "Okinawa Tour Products"), jp: "沖縄ツアー商品" },
  tourHeadingBody: { kr: "렌트카와 함께 둘러보기 좋은 오키나와 인기 투어 상품도 바로 연결할 수 있습니다.", jp: "レンタカーと一緒に見やすい沖縄の人気ツアー商品にもすぐ移動できます。" },
  tourIntroLabel: { kr: "TOUR SELECT", jp: "TOUR SELECT" },
  tourIntroTitle: { kr: bilingual("원하는 지역 투어를 바로 선택하세요", "Pick the region tour you want right away"), jp: "希望する地域ツアーをすぐ選択してください" },
  tourIntroBody: { kr: "북부, 중부, 남부 대표 투어 상품으로 바로 이동할 수 있도록 간단한 선택형 구성으로 정리했습니다.", jp: "北部、中部、南部の代表ツアー商品へすぐ移動できるよう、シンプルな選択型構成でまとめました。" },
  tourNorthTag: { kr: "North Okinawa", jp: "北部 Okinawa" },
  tourNorthTitle: { kr: bilingual("북부투어", "North Tour"), jp: "北部ツアー" },
  tourNorthBody: { kr: "츄라우미수족관, 만좌모, 고우리대교 등 북부 명소를 여유롭게 둘러보는 코스입니다.", jp: "美ら海水族館、万座毛、古宇利大橋など北部の名所をゆったり巡るコースです。" },
  tourCentralTag: { kr: "Central Okinawa", jp: "中部 Okinawa" },
  tourCentralTitle: { kr: bilingual("중부투어", "Central Tour"), jp: "中部ツアー" },
  tourCentralBody: { kr: "바다, 드라이브, 감성 스팟을 함께 즐길 수 있는 중부 대표 코스를 연결합니다.", jp: "海、ドライブ、感性スポットを一緒に楽しめる中部の代表コースです。" },
  tourSouthTag: { kr: "South Okinawa", jp: "南部 Okinawa" },
  tourSouthTitle: { kr: bilingual("남부투어", "South Tour"), jp: "南部ツアー" },
  tourSouthBody: { kr: "오키나와 월드, 평화기념공원, 남부 해안 코스를 함께 둘러보는 일정입니다.", jp: "おきなわワールド、平和祈念公園、南部海岸コースを一緒に巡る日程です。" },
  tourCardCta: { kr: "상품 바로가기", jp: "商品へ移動" },
  simpleNote: { kr: bilingual("운전경력 2년이상", "2+ years driving experience", true), jp: "運転経験2年以上" },
  calendarHeadingTitle: { kr: bilingual("실시간 예약 캘린더", "Live Booking Calendar"), jp: "リアルタイム予約カレンダー" },
  calendarHeadingBody: { kr: "", jp: "" },
  vehicleFilterLabel: { kr: bilingual("차량별 일정 보기", "Filter by Vehicle"), jp: "車両ごとに見る" },
  allVehiclesOption: { kr: "전체 차량 보기", jp: "全車両を見る" },
  bookingCalendarAria: { kr: "실시간 예약 캘린더", jp: "リアルタイム予約カレンダー" },
  calendarLegendTitle: { kr: bilingual("캘린더 안내", "Calendar Guide"), jp: "カレンダー案内" },
  calendarLegendBooked: { kr: "예약 완료된 일정", jp: "予約済みの日程" },
  calendarLegendSelected: { kr: "현재 선택 차량 일정", jp: "現在選択中の車両日程" },
  calendarLegendBody1: { kr: "캘린더에서 기간을 드래그하면 아래 예약폼으로 날짜가 자동 입력됩니다.", jp: "カレンダーで期間をドラッグすると、下の予約フォームに日付が自動入力されます。" },
  calendarLegendBody2: { kr: "차량 필터를 선택하면 해당 차량 예약 현황만 따로 확인할 수 있습니다.", jp: "車両フィルターを選ぶと、その車両の予約状況だけを確認できます。" },
  reservationHeadingTitle: { kr: bilingual("예약접수", "Reservation Form"), jp: "予約受付" },
  vehicleLabel: { kr: bilingual("차량 선택", "Vehicle"), jp: "車両選択" },
  startDateLabel: { kr: bilingual("대여 시작일", "Start Date"), jp: "利用開始日" },
  endDateLabel: { kr: bilingual("반납일", "Return Date"), jp: "返却日" },
  nameLabel: { kr: bilingual("고객명", "Full Name"), jp: "お名前" },
  phoneLabel: { kr: bilingual("연락처", "Phone"), jp: "電話番号" },
  phonePlaceholder: { kr: "010-0000-0000", jp: "090-0000-0000" },
  emailLabel: { kr: bilingual("이메일", "Email"), jp: "メール" },
  pickupLabel: { kr: bilingual("인수 장소", "Pickup Location"), jp: "受け取り場所" },
  pickupOptionAirport: { kr: "나하공항", jp: "那覇空港" },
  pickupOptionHotel: { kr: "나하시내 호텔", jp: "那覇市内ホテル" },
  dropoffLabel: { kr: bilingual("반납 장소", "Return Location"), jp: "返却場所" },
  dropoffOptionAirport: { kr: "나하공항", jp: "那覇空港" },
  dropoffOptionHotel: { kr: "나하시내 호텔", jp: "那覇市内ホテル" },
  passengersLabel: { kr: bilingual("탑승 인원", "Passengers"), jp: "乗車人数" },
  flightNumberLabel: { kr: bilingual("항공편 / 요청 코드", "Flight / Request Code"), jp: "便名 / リクエストコード" },
  flightPlaceholder: { kr: "예: KE123", jp: "例: NH123" },
  childSeatLabel: { kr: bilingual("카시트 수량", "Child Seat"), jp: "チャイルドシート数" },
  childSeatOption0: { kr: "선택 안 함", jp: "選択しない" },
  childSeatOption1: { kr: "1개 무료", jp: "1台無料" },
  childSeatOption2: { kr: "2개 (+1,000엔)", jp: "2台 (+1,000円)" },
  childSeatOption3: { kr: "3개 (+2,000엔)", jp: "3台 (+2,000円)" },
  childSeatOption4: { kr: "4개 (+3,000엔)", jp: "4台 (+3,000円)" },
  babySeatLabel: { kr: bilingual("베이비시트 수량", "Baby Seat"), jp: "ベビーシート数" },
  babySeatOption0: { kr: "선택 안 함", jp: "選択しない" },
  babySeatOption1: { kr: "1개 (1,500엔)", jp: "1台 (1,500円)" },
  babySeatOption2: { kr: "2개 (3,000엔)", jp: "2台 (3,000円)" },
  babySeatOption3: { kr: "3개 (4,500엔)", jp: "3台 (4,500円)" },
  bookingTotalLabel: { kr: bilingual("합계금액", "Estimated Total"), jp: "合計金額" },
  additionalOptionsLabel: { kr: bilingual("추가 옵션 선택", "Extra Options"), jp: "追加オプション" },
  reservationEntryGuide: {
    kr: bilingual("차량과 날짜를 선택한 뒤 예약하기 버튼을 누르면 접수 폼이 열립니다.", "After selecting vehicle and dates, press Book Now to open the intake form."),
    jp: "車両と日付を選んだあと、予約するボタンを押すと受付フォームが開きます。"
  },
  reservationRevealButton: { kr: bilingual("예약하기", "Book Now"), jp: "予約する" },
  reservationIntakeTitle: { kr: bilingual("예약자 정보 입력", "Traveler Details"), jp: "予約者情報入力" },
  reservationIntakeBody: {
    kr: "선택한 일정으로 접수를 진행할 수 있도록 고객 정보와 요청사항을 입력해 주세요.",
    jp: "選択した日程で受付を進められるよう、お客様情報とご要望をご入力ください。"
  },
  messageLabel: { kr: bilingual("추가 요청사항", "Special Requests"), jp: "追加ご要望" },
  messagePlaceholder: { kr: "카시트 수량, 골프백 수량, 기사 요청 여부 등", jp: "チャイルドシート数、ゴルフバッグ数、送迎希望など" },
  agreeText: { kr: "예약 정보 저장 및 예약 진행 연락에 동의합니다.", jp: "予約情報の保存と予約進行の連絡に同意します。" },
  submitButton: { kr: bilingual("예약 저장 및 메일 발송", "Save Booking & Send Mail"), jp: "予約を保存してメール送信" },
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

const OPTION_JP_TRANSLATIONS = {
  "airport-pickup": { title: "空港ピックアップ", price: "現地案内", description: "到着時間に合わせて車両受け取り動線をご案内します。" },
  "car-seat": { title: "チャイルドシート", price: "1台無料 / 2台目から1台あたり1,000円", description: "年齢に合ったチャイルドシートをご用意します。日本では6歳未満のお子さまに着用義務があります。" },
  "baby-seat": { title: "ベビーシート", price: "1台あたり1,500円", description: "乳幼児向けのベビーシートをご用意します。日本では6歳未満のお子さまに着用義務があります。" },
  "golf-support": { title: "ゴルフ旅行積載案内", price: "無料", description: "ゴルフバッグの数量に合う車両と積載可否をご案内します。" },
  "hotel-dropoff": { title: "ホテル返却", price: "追加料金の可能性あり", description: "ホテルや宿泊先での返却動線を運営日程に合わせて調整します。" },
  "long-term-rental": { title: "長期レンタル", price: "別途相談", description: "1か月以上の長期日程は、相談後に車両と料金をご案内します。" }
};

const LONG_TERM_OPTION_ID = "long-term-rental";
const LONG_TERM_VEHICLE_ID = LONG_TERM_OPTION_ID;
const CAR_SEAT_OPTION_ID = "car-seat";
const BABY_SEAT_OPTION_ID = "baby-seat";
const HIDDEN_OPTION_IDS = new Set(["airport-pickup"]);
const DEFAULT_BRAND_LOGO = "./okioki.png.png";
const DEFAULT_HERO_IMAGE = "./hero-main-clean.png";
const DEFAULT_TOUR_SLIDE_IMAGE = "./hello,OKINAWA (1920 x 800 px).png";
const DEFAULT_ACTIVITY_SLIDE_IMAGE = "./hello,OKINAWA (1920 x 500 px)tnwjdeh.jpg";
const HERO_SLIDE_COPY = {
  rentcar: {
    eyebrow: { kr: "RENTCAR SERVICE", jp: "RENTCAR SERVICE" },
    title: { kr: "오키나와 렌트카 예약", jp: "沖縄レンタカー予約" },
    body: {
      kr: "공항 도착부터 호텔 이동까지 한 번에 이어지는 대표 렌트카 서비스입니다.",
      jp: "空港到着からホテル移動まで一度に続けられる代表的なレンタカーサービスです。"
    }
  },
  tour: {
    eyebrow: { kr: "TOUR INTRO", jp: "TOUR INTRO" },
    title: { kr: "렌트카와 함께 보는 투어 제안", jp: "レンタカーと一緒に見るツアー提案" },
    body: {
      kr: "북부, 중부, 남부 인기 코스와 일정 연결이 쉬운 투어 상품을 함께 소개합니다.",
      jp: "北部・中部・南部の人気コースと、日程につなぎやすいツアー商品を一緒にご紹介します。"
    }
  },
  activity: {
    eyebrow: { kr: "ACTIVITY PICK", jp: "ACTIVITY PICK" },
    title: { kr: "여행 만족도를 높이는 액티비티", jp: "旅の満足度を高めるアクティビティ" },
    body: {
      kr: "선상낚시와 스노클링처럼 렌트카 일정과 묶기 좋은 해양 액티비티도 바로 연결할 수 있습니다.",
      jp: "船上釣りやシュノーケリングなど、レンタカー日程と組み合わせやすい海のアクティビティにもすぐつながります。"
    }
  }
};
const REVIEW_ITEMS = [
  {
    tone: "side",
    body: {
      kr: "가족여행이라 이동이 걱정이었는데 기사 포함 투어 정말 편했습니다. 일정도 유연하게 맞춰줘서 좋았어요.",
      jp: "家族旅行で移動が心配でしたが、運転手付きツアーが本当に快適でした。日程も柔軟に合わせてくれて良かったです。"
    },
    author: {
      kr: "김OO",
      jp: "キムOO"
    },
    meta: {
      kr: "단독투어 이용",
      jp: "単独ツアー利用"
    }
  },
  {
    tone: "featured",
    body: {
      kr: "알파도 차량 상태가 너무 좋았고 공항 픽업도 정확했습니다. 이동이 편해서 여행 만족도가 확 올라갔어요.",
      jp: "アルファードの車両状態がとても良く、空港ピックアップも正確でした。移動が快適で旅行の満足度が一気に上がりました。"
    },
    author: {
      kr: "김OO",
      jp: "キムOO"
    },
    meta: {
      kr: "알파도 이용",
      jp: "アルファード利用"
    }
  },
  {
    tone: "side",
    body: {
      kr: "공항 픽업 정말 편했어요. 공항에서 바로 호텔 이동 가능해서 시간 절약 많이 됐습니다.",
      jp: "空港ピックアップが本当に便利でした。空港からそのままホテルへ移動できて、かなり時間を節約できました。"
    },
    author: {
      kr: "박OO",
      jp: "パクOO"
    },
    meta: {
      kr: "공항 픽업 이용",
      jp: "空港ピックアップ利用"
    }
  }
];
const config = window.RENTCAR_CONFIG || {};
const descriptionMeta = document.getElementById("siteDescriptionMeta");
const pageBg = document.getElementById("pageBg");
const brandTapTarget = document.getElementById("brandTapTarget");
const brandLogoImages = Array.from(document.querySelectorAll("[data-brand-logo]"));
const langSwitcher = document.querySelector(".lang-switcher");
const langButtons = Array.from(document.querySelectorAll("[data-lang-button]"));
const fleetGrid = document.getElementById("fleetGrid");
const promoStrip = document.getElementById("promoStrip");
const optionGrid = document.getElementById("optionGrid");
const optionCheckboxes = document.getElementById("optionCheckboxes");
const policyGrid = document.getElementById("policyGrid");
const heroThemeImage = document.getElementById("heroThemeImage");
const heroSlideEyebrow = document.getElementById("heroSlideEyebrow");
const heroSlideTitle = document.getElementById("heroSlideTitle");
const heroSlideBody = document.getElementById("heroSlideBody");
const heroSliderDots = document.getElementById("heroSliderDots");
const reviewGrid = document.getElementById("reviewGrid");
const reviewSliderDots = document.getElementById("reviewSliderDots");
const homeTourIntroGrid = document.getElementById("homeTourIntroGrid");
const vehicleFilter = document.getElementById("vehicleFilter");
const vehicleSelect = document.getElementById("vehicleId");
const vehicleField = document.getElementById("vehicleField");
const vehicleFieldHelp = document.getElementById("vehicleFieldHelp");
const form = document.getElementById("reservationForm");
const formStatus = document.getElementById("formStatus");
const reservationRevealButton = document.getElementById("reservationRevealButton");
const reservationIntakePanel = document.getElementById("reservationIntakePanel");
const submitButton = document.getElementById("submitButton");
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const nameInput = document.getElementById("name");
const bookingTotalValue = document.getElementById("bookingTotalValue");
const bookingTotalMeta = document.getElementById("bookingTotalMeta");
const availabilityTitle = document.getElementById("availabilityTitle");
const availabilityText = document.getElementById("availabilityText");
const availabilityCard = document.getElementById("availabilityCard");
const reservationSection = document.getElementById("reservation");
const reservationResult = document.getElementById("reservationResult");
const resultTitle = document.getElementById("resultTitle");
const resultBody = document.getElementById("resultBody");
const adminModal = document.getElementById("adminModal");
const adminAuthSection = document.getElementById("adminAuthSection");
const adminEditorSection = document.getElementById("adminEditorSection");
const adminSecretInput = document.getElementById("adminSecretInput");
const adminStatus = document.getElementById("adminStatus");
const adminSiteSettings = document.getElementById("adminSiteSettings");
const adminVehicleList = document.getElementById("adminVehicleList");
const adminOptionList = document.getElementById("adminOptionList");
const adminTourProductList = document.getElementById("adminTourProductList");
const adminSupportCardList = document.getElementById("adminSupportCardList");
const adminActivityProductList = document.getElementById("adminActivityProductList");
const adminActivityDetailList = document.getElementById("adminActivityDetailList");
const adminSaveStatus = document.getElementById("adminSaveStatus");
const today = formatLocalDate(new Date());
const catalogCacheKey = "rentcarCatalogCacheV1";

const state = {
  catalog: cloneCatalog(defaultCatalog),
  bookings: [],
  activeVehicleId: "all",
  currentAvailability: { ready: false, available: false },
  apiUnavailable: false,
  adminSecret: sessionStorage.getItem("rentcarAdminSecret") || "",
  currentLanguage: window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === "jp" ? "jp" : "kr",
  lastCompletion: null,
  reservationIntakeOpen: false,
  heroSlideIndex: 0,
  reviewSlideIndex: 1
};

let calendar;
let adminTapCount = 0;
let adminTapTimer;
let heroSliderTimer;
let reviewSliderTimer;

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
  document.title = getStaticCopy("documentTitle");
  if (descriptionMeta) {
    descriptionMeta.content = getStaticCopy("metaDescription");
  }
  if (langSwitcher) {
    langSwitcher.setAttribute("aria-label", isJapanese() ? "言語選択" : "언어 선택");
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = getStaticCopy(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = getStaticCopy(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = getStaticCopy(element.dataset.i18nAlt);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", getStaticCopy(element.dataset.i18nAriaLabel));
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langButton === state.currentLanguage);
    button.setAttribute("aria-pressed", String(button.dataset.langButton === state.currentLanguage));
  });
}

function syncCalendarLanguage() {
  if (calendar) {
    calendar.setOption("locale", isJapanese() ? "ja" : "ko");
  }
}

function setLanguage(language, options = {}) {
  const nextLanguage = language === "jp" ? "jp" : "kr";
  const shouldPersist = options.persist !== false;
  const shouldRefresh = options.refresh !== false;
  state.currentLanguage = nextLanguage;

  if (shouldPersist) {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  }

  applyStaticTranslations();
  syncCalendarLanguage();
  renderCatalog();

  if (state.lastCompletion && !reservationResult.hidden) {
    resultTitle.textContent = createCompletionTitle(state.lastCompletion.booking.bookingCode);
    resultBody.textContent = createCompletionMessage(state.lastCompletion.booking, state.lastCompletion.mailOutcome);
  }

  if (shouldRefresh) {
    refreshAvailability().catch((error) => {
      console.error(error);
    });
  }
}

function getLocalizedVehicle(vehicle) {
  if (!vehicle) {
    return null;
  }

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

  function getLocalizedTourProduct(tour) {
    if (!tour) {
      return { title: "", body: "" };
    }

    if (isJapanese()) {
      return {
        title: tour.titleJp || tour.titleEn || tour.titleKr || "",
        body: tour.bodyJp || tour.bodyKr || ""
      };
    }

    return {
      title: tour.titleKr || tour.titleEn || "",
      body: tour.bodyKr || tour.bodyJp || ""
    };
  }

  function getLocalizedActivityProduct(activity) {
    if (!activity) {
      return { title: "", body: "" };
    }

    if (isJapanese()) {
      return {
        title: activity.titleJp || activity.titleEn || activity.titleKr || "",
        body: activity.bodyJp || activity.bodyKr || ""
      };
    }

    return {
      title: activity.titleKr || activity.titleEn || "",
      body: activity.bodyKr || activity.bodyJp || ""
    };
  }

  function getLocalizedOption(option) {
  if (!option) {
    return null;
  }

  if (!isJapanese()) {
    return option;
  }

  const translated = OPTION_JP_TRANSLATIONS[option.id] || {};
  return {
    ...option,
    ...translated,
    price: translated.price || localizePriceDisplay(option.price)
  };
}

function getSeatLabel(count) {
  return isJapanese() ? `${count}人乗り` : `${count}인승`;
}

function getCalendarEventSuffix() {
  return isJapanese() ? "予約" : "예약";
}

function isFetchFailure(error) {
  return error?.message === "Failed to fetch";
}

function getDefaultFormStatusMessage() {
  return getLongTermRentalMode()
    ? (isJapanese() ? "長期レンタル日程を選択したあと、予約するボタンで受付フォームを開けます。" : "장기렌트 날짜를 선택한 뒤 예약하기 버튼으로 접수 폼을 열 수 있습니다.")
    : (isJapanese() ? "車両と日付を選択したあと、予約するボタンで受付フォームを開けます。" : "차량과 날짜를 선택한 뒤 예약하기 버튼으로 접수 폼을 열 수 있습니다.");
}

function getFetchUnavailableMessage() {
  return isJapanese()
    ? "現在は予約確認 서버に接続できません。"
    : "현재는 예약 확인 서버에 연결할 수 없습니다.";
}

function getFetchUnavailableDetail() {
  return isJapanese()
    ? "ローカル確認中またはネットワーク接続を確認したあと、もう一度お試しください。"
    : "로컬 미리보기 중이거나 네트워크 연결을 확인한 뒤 다시 시도해 주세요.";
}

async function fetchNetlifyApi(path, options) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const primaryUrl = normalized.startsWith("/api/") ? normalized : `/api${normalized}`;
  const fallbackUrl = normalized.startsWith("/.netlify/functions/")
    ? normalized
    : `/.netlify/functions${normalized}`;

  const response = await fetch(primaryUrl, options);
  if (response.ok) {
    return response;
  }

  const shouldFallback = response.status === 404 || response.status === 405;
  if (!shouldFallback) {
    return response;
  }

  try {
    return await fetch(fallbackUrl, options);
  } catch (error) {
    return response;
  }
}

function localizePriceDisplay(value) {
  if (!isJapanese()) {
    return value;
  }

  return String(value || "")
    .replace(/1일/g, "1日")
    .replace(/현장 문의/g, "現地案内")
    .replace(/선택 안 함/g, "選択しない")
    .replace(/무료/g, "無料")
    .replace(/별도 상담/g, "別途相談")
    .replace(/추가 요금 가능/g, "追加料金の可能性あり")
    .replace(/엔/g, "円")
    .replace(/원/g, "ウォン");
}

function localizeOptionLabelText(label) {
  if (!isJapanese()) {
    return label;
  }

  const option = state.catalog.options.find((item) => item.title === label);
  if (option) {
    return getLocalizedOption(option).title;
  }

  return localizePriceDisplay(label);
}

function createCompletionTitle(bookingCode) {
  return isJapanese()
    ? `予約を受け付けました。予約番号 ${bookingCode}`
    : `예약이 접수되었습니다. 예약번호 ${bookingCode}`;
}

startDateInput.min = today;
endDateInput.min = today;

bindEvents();
init();

async function init() {
  initializeEmailJS();
  if (document.getElementById("bookingCalendar")) {
    initializeCalendar();
  }
  applyStaticTranslations();
  syncCalendarLanguage();
  renderCatalog();
  await loadCatalog();
  await loadBookings();
  setReservationIntakeVisibility(false);
  updateSubmitState();
  const shouldOpenReservation = window.location.hash === "#reservation";
  setReservationVisibility(shouldOpenReservation);
  updatePriceSummary();
  if (shouldOpenReservation) {
    requestAnimationFrame(() => showReservationSection());
  }

  const searchParams = new URLSearchParams(window.location.search);
  if (searchParams.get("admin") === "1") {
    openAdminModal();
  }
}

function bindEvents() {
  brandTapTarget.addEventListener("click", handleHiddenAdminTrigger);
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.langButton === state.currentLanguage) {
        return;
      }
      setLanguage(button.dataset.langButton);
    });
  });

  heroSliderDots?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-hero-slide]");
    if (!button) {
      return;
    }

    const nextIndex = Number(button.dataset.heroSlide);
    if (!Number.isInteger(nextIndex)) {
      return;
    }

    state.heroSlideIndex = nextIndex;
    showHeroSlide(nextIndex);
    startHeroSlider();
  });

  reviewSliderDots?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-review-slide]");
    if (!button) {
      return;
    }

    const nextIndex = Number(button.dataset.reviewSlide);
    if (!Number.isInteger(nextIndex)) {
      return;
    }

    state.reviewSlideIndex = nextIndex;
    showReviewSlide(nextIndex);
    startReviewSlider();
  });

  document.querySelectorAll("[data-close-admin]").forEach((element) => {
    element.addEventListener("click", closeAdminModal);
  });

  document.getElementById("adminLoginButton").addEventListener("click", handleAdminLogin);
  document.getElementById("adminLogoutButton").addEventListener("click", handleAdminLogout);
  document.getElementById("addVehicleButton").addEventListener("click", () => {
    state.catalog.vehicles.push(createEmptyVehicle());
    renderAdminEditor();
  });
  document.getElementById("addOptionButton").addEventListener("click", () => {
    state.catalog.options.push(createEmptyOption());
    renderAdminEditor();
  });
  document.getElementById("addTourProductButton").addEventListener("click", () => {
    state.catalog.tourProducts.push(createEmptyTourProduct());
    renderAdminEditor();
  });
  document.getElementById("addSupportCardButton").addEventListener("click", () => {
    state.catalog.supportCards.push(createEmptySupportCard());
    renderAdminEditor();
  });
  document.getElementById("addActivityProductButton").addEventListener("click", () => {
    state.catalog.activityProducts.push(createEmptyActivityProduct());
    renderAdminEditor();
  });
  document.getElementById("addActivityDetailButton").addEventListener("click", () => {
    const slug = `activity-${Object.keys(state.catalog.activityDetails || {}).length + 1}`;
    state.catalog.activityDetails = {
      ...(state.catalog.activityDetails || {}),
      [slug]: createEmptyActivityDetail(slug)
    };
    renderAdminEditor();
  });
  document.getElementById("saveCatalogButton").addEventListener("click", saveCatalog);

  if (adminSiteSettings) {
    adminSiteSettings.addEventListener("click", handleAdminSiteSettingsClick);
    adminSiteSettings.addEventListener("change", handleAdminSiteSettingsChange);
  }
  adminVehicleList.addEventListener("click", handleAdminVehicleListClick);
  adminVehicleList.addEventListener("change", handleAdminVehicleListChange);
  adminOptionList.addEventListener("click", handleAdminListRemove);
  adminTourProductList?.addEventListener("click", handleAdminGenericListClick);
  adminTourProductList?.addEventListener("change", (event) => handleAdminImageUpload(event, "투어 이미지"));
  adminSupportCardList?.addEventListener("click", handleAdminListRemove);
  adminActivityProductList?.addEventListener("click", handleAdminGenericListClick);
  adminActivityProductList?.addEventListener("change", (event) => handleAdminImageUpload(event, "액티비티 카드 이미지"));
  adminActivityDetailList?.addEventListener("click", handleAdminGenericListClick);
  adminActivityDetailList?.addEventListener("change", (event) => handleAdminImageUpload(event, "액티비티 상세 이미지"));
  document.querySelectorAll('a[href="#reservation"]:not(.fleet-reserve-button)').forEach((link) => {
    link.addEventListener("click", handleReservationTriggerClick);
  });

  if (vehicleFilter) {
    vehicleFilter.addEventListener("change", async (event) => {
      state.activeVehicleId = event.target.value;
      syncVehicleSelect(state.activeVehicleId);
      renderCalendarEvents();
      await refreshAvailability();
    });
  }

  vehicleSelect.addEventListener("change", async (event) => {
    const selectedId = event.target.value;
    if (selectedId) {
      state.activeVehicleId = selectedId;
      if (vehicleFilter) {
        vehicleFilter.value = selectedId;
      }
    }
    renderCalendarEvents();
    await refreshAvailability();
  });

  startDateInput.addEventListener("change", async () => {
    endDateInput.min = startDateInput.value || today;
    if (endDateInput.value && endDateInput.value < startDateInput.value) {
      endDateInput.value = startDateInput.value;
    }
    await refreshAvailability();
  });

  endDateInput.addEventListener("change", refreshAvailability);
  reservationRevealButton?.addEventListener("click", handleReservationRevealClick);
  form.addEventListener("change", handleReservationFormChange);
  form.addEventListener("submit", handleReservationSubmit);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !adminModal.hidden) {
      closeAdminModal();
    }
  });
}

function initializeEmailJS() {
  if (window.emailjs && isEmailConfigured()) {
    window.emailjs.init({ publicKey: config.emailjs.publicKey });
  }
}

function handleReservationTriggerClick(event) {
  event.preventDefault();
  showReservationSection();
}

function setReservationVisibility(isVisible) {
  if (!reservationSection) {
    return;
  }

  reservationSection.hidden = !isVisible;
}

function showReservationSection() {
  setReservationVisibility(true);
  reservationSection?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function hasMinimumReservationSelection() {
  return Boolean(startDateInput.value && endDateInput.value && (getLongTermRentalMode() || vehicleSelect.value));
}

function canProceedToReservationIntake() {
  return hasMinimumReservationSelection() && !(state.currentAvailability.ready && !state.currentAvailability.available);
}

function setReservationIntakeVisibility(isVisible) {
  state.reservationIntakeOpen = Boolean(isVisible);

  if (reservationIntakePanel) {
    reservationIntakePanel.hidden = !state.reservationIntakeOpen;
    reservationIntakePanel.querySelectorAll("input, select, textarea, button").forEach((control) => {
      control.disabled = !state.reservationIntakeOpen;
    });
  }

  if (reservationRevealButton) {
    reservationRevealButton.hidden = state.reservationIntakeOpen;
  }
}

function closeReservationIntake() {
  if (!state.reservationIntakeOpen) {
    return;
  }

  setReservationIntakeVisibility(false);
  updateSubmitState();
}

function isSelectionStepControl(target) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return ["vehicleId", "startDate", "endDate", "childSeatCount", "babySeatCount"].includes(target.id)
    || target.getAttribute("name") === "selectedOption";
}

function handleReservationFormChange(event) {
  updatePriceSummary();

  if (isSelectionStepControl(event.target)) {
    const wasOpen = state.reservationIntakeOpen;
    closeReservationIntake();
    if (wasOpen) {
      setStatus(
        isJapanese() ? "選択内容が変更されました。予約するボタンをもう一度押して受付フォームを開いてください。" : "선택 내용이 변경되었습니다. 예약하기 버튼을 다시 눌러 접수 폼을 열어 주세요.",
        ""
      );
    }
  }

  updateSubmitState();
}

function handleReservationRevealClick() {
  if (!canProceedToReservationIntake()) {
    if (!hasMinimumReservationSelection()) {
      setStatus(getDefaultFormStatusMessage(), "");
    } else {
      setStatus(
        isJapanese() ? "選択した日程は予約できません。別の日付を選択してください。" : "선택한 일정은 예약할 수 없습니다. 다른 날짜를 선택해 주세요.",
        "error"
      );
    }
    return;
  }

  setReservationIntakeVisibility(true);
  updateSubmitState();
  setStatus(
    isJapanese() ? "予約受付フォームが開きました。お客様情報を入力してください。" : "예약 접수 폼이 열렸습니다. 고객 정보를 입력해 주세요.",
    "success"
  );
  reservationIntakePanel?.scrollIntoView({ behavior: "smooth", block: "start" });
  nameInput?.focus();
}

function initializeCalendar() {
  const calendarElement = document.getElementById("bookingCalendar");
  if (!calendarElement) {
    return;
  }

  calendar = new FullCalendar.Calendar(calendarElement, {
    locale: isJapanese() ? "ja" : "ko",
    initialView: "dayGridMonth",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: ""
    },
    selectable: true,
    height: "auto",
    events: [],
    select: async (selectionInfo) => {
      startDateInput.value = selectionInfo.startStr;
      const inclusiveEnd = new Date(selectionInfo.end);
      inclusiveEnd.setDate(inclusiveEnd.getDate() - 1);
      endDateInput.value = formatLocalDate(inclusiveEnd);
      if (state.activeVehicleId !== "all") {
        vehicleSelect.value = state.activeVehicleId;
      }
      await refreshAvailability();
      showReservationSection();
    }
  });

  calendar.render();
}

async function loadCatalog() {
  try {
    const response = await fetchNetlifyApi(`/catalog?ts=${Date.now()}`);
    if (!response.ok) {
      throw new Error("카탈로그를 불러오지 못했습니다.");
    }

    const data = await response.json();
    state.apiUnavailable = false;
    state.apiUnavailable = false;
    state.catalog = normalizeCatalog(data.catalog || defaultCatalog);
    persistCatalogCache(state.catalog);
    renderCatalog();
    renderCalendarEvents();
  } catch (error) {
    console.error(error);
    const cachedCatalog = getCachedCatalog();
    state.catalog = normalizeCatalog(cachedCatalog || defaultCatalog);
    renderCatalog();

    if (cachedCatalog) {
      adminSaveStatus.textContent = "로컬 미리보기 저장본을 불러왔습니다. Netlify Functions가 없으면 브라우저에 저장된 데이터로 표시됩니다.";
    }
  }
}
async function loadBookings() {
  try {
    const response = await fetchNetlifyApi(`/bookings?ts=${Date.now()}`);
    if (!response.ok) {
      throw new Error(isJapanese() ? "予約データを読み込めませんでした。" : "예약 데이터를 불러오지 못했습니다.");
    }

    const data = await response.json();
    state.apiUnavailable = false;
    state.bookings = data.bookings || [];
    renderCalendarEvents();
  } catch (error) {
    if (isFetchFailure(error)) {
      state.apiUnavailable = true;
      setStatus(getDefaultFormStatusMessage(), "");
      return;
    }
    setStatus(error.message, "error");
  }
}

function renderCatalog() {
  applySiteSettings();
  renderHeroSlider();
  renderPromoStrip();
  renderReviews();
  renderHomeTourIntro();
  renderFleet();
  renderOptions();
  renderPolicies();
  populateVehicleSelectors();
  updateReservationModeUI();
  if (!adminModal.hidden && state.adminSecret) {
    renderAdminEditor();
  }
}

function renderReviews() {
  if (!reviewGrid || !reviewSliderDots || !REVIEW_ITEMS.length) {
    return;
  }

  if (state.reviewSlideIndex >= REVIEW_ITEMS.length) {
    state.reviewSlideIndex = 0;
  }

  reviewSliderDots.innerHTML = REVIEW_ITEMS.map((item, index) => `
    <button
      class="review-slider-dots__button${index === state.reviewSlideIndex ? " is-active" : ""}"
      type="button"
      data-review-slide="${index}"
      aria-label="${escapeAttribute(item.meta[state.currentLanguage] ?? item.meta.kr)}"
      aria-pressed="${index === state.reviewSlideIndex ? "true" : "false"}"
    ></button>
  `).join("");

  showReviewSlide(state.reviewSlideIndex);
  startReviewSlider();
}

function showReviewSlide(index) {
  if (!reviewGrid || !reviewSliderDots || !REVIEW_ITEMS.length) {
    return;
  }

  const total = REVIEW_ITEMS.length;
  const centerIndex = ((index % total) + total) % total;
  const leftIndex = (centerIndex - 1 + total) % total;
  const rightIndex = (centerIndex + 1) % total;
  const orderedItems = [
    { item: REVIEW_ITEMS[leftIndex], position: "left" },
    { item: REVIEW_ITEMS[centerIndex], position: "featured" },
    { item: REVIEW_ITEMS[rightIndex], position: "right" }
  ];

  reviewGrid.innerHTML = orderedItems.map(({ item, position }) => `
    <article class="review-card review-card--${escapeAttribute(position)}">
      <span class="review-card__stars" aria-hidden="true">★★★★★</span>
      <p class="review-card__body">${escapeHtml(item.body[state.currentLanguage] ?? item.body.kr)}</p>
      <div class="review-card__meta">
        <strong>${escapeHtml(item.author[state.currentLanguage] ?? item.author.kr)}</strong>
        <span>${escapeHtml(item.meta[state.currentLanguage] ?? item.meta.kr)}</span>
      </div>
    </article>
  `).join("");

  reviewSliderDots.querySelectorAll("[data-review-slide]").forEach((button, buttonIndex) => {
    const active = buttonIndex === centerIndex;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function startReviewSlider() {
  if (reviewSliderTimer) {
    window.clearInterval(reviewSliderTimer);
  }

  if (REVIEW_ITEMS.length < 2) {
    return;
  }

  reviewSliderTimer = window.setInterval(() => {
    state.reviewSlideIndex = (state.reviewSlideIndex + 1) % REVIEW_ITEMS.length;
    showReviewSlide(state.reviewSlideIndex);
  }, 2600);
}

function applySiteSettings() {
  const site = getSiteSettings();
  const brandLogo = site.brandLogo || DEFAULT_BRAND_LOGO;

  brandLogoImages.forEach((image) => {
    image.src = brandLogo;
  });

    if (heroThemeImage) {
      heroThemeImage.src = DEFAULT_HERO_IMAGE;
    }

  if (pageBg) {
    const imageLayer = site.backgroundImage
      ? `linear-gradient(180deg, rgba(216, 239, 255, 0.82) 0%, rgba(237, 248, 255, 0.84) 48%, rgba(253, 254, 254, 0.88) 100%), url("${escapeCssUrl(site.backgroundImage)}")`
      : "radial-gradient(circle at 10% 10%, rgba(0, 120, 215, 0.2), transparent 26%), radial-gradient(circle at 90% 15%, rgba(255, 178, 24, 0.18), transparent 20%), linear-gradient(180deg, #d8efff 0%, #edf8ff 48%, #fdfefe 100%)";
    pageBg.style.backgroundImage = imageLayer;
    pageBg.style.backgroundPosition = site.backgroundImage ? "center center" : "";
      pageBg.style.backgroundSize = site.backgroundImage ? "cover" : "";
      pageBg.style.backgroundRepeat = site.backgroundImage ? "no-repeat" : "";
    }
  }

  function renderHeroSlider() {
    if (!heroThemeImage || !heroSlideTitle || !heroSlideBody || !heroSlideEyebrow || !heroSliderDots) {
      return;
    }

    const slides = getHeroSlides();
    if (!slides.length) {
      return;
    }

    if (state.heroSlideIndex >= slides.length) {
      state.heroSlideIndex = 0;
    }

    heroSliderDots.innerHTML = slides
      .map((slide, index) => `<button class="hero-media__dot${index === state.heroSlideIndex ? " is-active" : ""}" type="button" data-hero-slide="${index}" aria-label="${escapeAttribute(slide.title)}"></button>`)
      .join("");

    showHeroSlide(state.heroSlideIndex);
    startHeroSlider();
  }

  function showHeroSlide(index) {
    const slides = getHeroSlides();
    const slide = slides[index] || slides[0];
    if (!slide || !heroThemeImage || !heroSlideTitle || !heroSlideBody || !heroSlideEyebrow) {
      return;
    }

    heroThemeImage.style.opacity = "0.78";
    heroThemeImage.style.transform = "scale(1.02)";

    window.setTimeout(() => {
      heroThemeImage.src = slide.image;
      heroThemeImage.alt = slide.title;
      heroThemeImage.style.opacity = "1";
      heroThemeImage.style.transform = "scale(1)";
    }, 120);

    heroSlideEyebrow.textContent = slide.eyebrow;
    heroSlideTitle.textContent = slide.title;
    heroSlideBody.textContent = slide.body;

    heroSliderDots.querySelectorAll("[data-hero-slide]").forEach((button, buttonIndex) => {
      const active = buttonIndex === index;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function startHeroSlider() {
    if (heroSliderTimer) {
      window.clearInterval(heroSliderTimer);
    }

    const slides = getHeroSlides();
    if (slides.length < 2) {
      return;
    }

    heroSliderTimer = window.setInterval(() => {
      state.heroSlideIndex = (state.heroSlideIndex + 1) % slides.length;
      showHeroSlide(state.heroSlideIndex);
    }, 4800);
  }

  function getHeroSlides() {
    const site = getSiteSettings();
    const tours = getActiveTourProducts();
    const activities = getActiveActivityProducts();
    const activity = activities[0];

    return [
        {
          image: DEFAULT_HERO_IMAGE,
          eyebrow: getHeroSlideCopy("rentcar", "eyebrow"),
          title: getHeroSlideCopy("rentcar", "title"),
          body: getHeroSlideCopy("rentcar", "body")
        },
      {
        image: tours[0]?.image || DEFAULT_TOUR_SLIDE_IMAGE,
        eyebrow: getHeroSlideCopy("tour", "eyebrow"),
        title: getHeroSlideCopy("tour", "title"),
        body: getHeroSlideCopy("tour", "body")
      },
      {
        image: activity?.image || tours[1]?.image || DEFAULT_ACTIVITY_SLIDE_IMAGE,
        eyebrow: getHeroSlideCopy("activity", "eyebrow"),
        title: getHeroSlideCopy("activity", "title"),
        body: getHeroSlideCopy("activity", "body")
      }
    ];
  }

  function getHeroSlideCopy(kind, field) {
    const entry = HERO_SLIDE_COPY[kind]?.[field];
    if (!entry) {
      return "";
    }

    return entry[state.currentLanguage] || entry.kr || "";
  }

function updateReservationModeUI() {
  const longTermMode = getLongTermRentalMode();

  closeReservationIntake();

  if (vehicleField) {
    vehicleField.classList.toggle("is-disabled", longTermMode);
  }

  if (vehicleFieldHelp) {
    vehicleFieldHelp.textContent = longTermMode
      ? (isJapanese() ? "長期レンタル受付モードでは、車両は相談後に割り当てられます。" : "장기렌트 접수 모드가 켜져 있어 차량은 상담 후 배정됩니다.")
      : (isJapanese() ? "ご希望の車両を直接選択できます。" : "원하는 차량을 직접 선택할 수 있습니다.");
  }

  vehicleSelect.disabled = longTermMode;
  vehicleSelect.required = !longTermMode;

  if (longTermMode) {
    state.activeVehicleId = "all";
    vehicleSelect.value = "";
    if (vehicleFilter) {
      vehicleFilter.value = "all";
    }
  }

  updatePriceSummary();
}

function renderPromoStrip() {
  if (!promoStrip) {
    return;
  }

  const vehicles = getActiveVehicles().slice(0, 4);
  promoStrip.innerHTML = vehicles.map((vehicle) => `
      <div class="promo-pill">
        <strong>${escapeHtml((getLocalizedVehicle(vehicle).badge || getLocalizedVehicle(vehicle).name))}</strong>
      <span>${escapeHtml(getLocalizedVehicle(vehicle).price)}</span>
    </div>
  `).join("");
}

function renderHomeTourIntro() {
  if (!homeTourIntroGrid) {
    return;
  }

  const cards = getActiveTourProducts().slice(0, 4).map((tour) => ({
    tag: isJapanese() ? (tour.regionJp || tour.regionEn || "TOUR") : (tour.regionKr || tour.regionEn || "TOUR"),
    title: getLocalizedTourProduct(tour).title,
    body: getLocalizedTourProduct(tour).body,
    href: tour.href || "./tour.html",
    image: tour.homeImage || tour.image || DEFAULT_TOUR_SLIDE_IMAGE,
    cta: isJapanese() ? (tour.ctaJp || "ツアーを見る") : (tour.ctaKr || "투어 보기"),
    visualLabel: isJapanese() ? (tour.visualLabelJp || "") : (tour.visualLabelKr || "")
  }));

    homeTourIntroGrid.innerHTML = cards.map((card) => `
      <article class="home-tour-card">
        <div class="home-tour-card__visual">
          <img src="${escapeAttribute(card.image)}" alt="${escapeAttribute(card.title)}">
          ${card.visualLabel ? `<span class="home-tour-card__visual-label">${escapeHtml(card.visualLabel)}</span>` : ""}
        </div>
        <span class="home-tour-card__tag">${escapeHtml(card.tag)}</span>
        <h3>${escapeHtml(card.title)}</h3>
        <p>${escapeHtml(card.body)}</p>
        <div class="home-tour-card__actions">
          <a class="button secondary home-tour-card__button" href="${escapeAttribute(card.href)}">상세페이지 보기</a>
        </div>
      </article>
    `).join("");
  }

function renderFleet() {
  const vehicles = getActiveVehicles();
  const longTermMode = getLongTermRentalMode();
  fleetGrid.innerHTML = vehicles.map((vehicle) => {
    const localizedVehicle = getLocalizedVehicle(vehicle);
    const visual = vehicle.image
      ? `<img src="${escapeAttribute(vehicle.image)}" alt="${escapeAttribute(localizedVehicle.name)}">`
      : `<div class="fleet-placeholder">${escapeHtml((localizedVehicle.badge || localizedVehicle.name).slice(0, 10))}</div>`;

    return `
      <article class="fleet-card">
        <div class="fleet-visual">
          <div class="fleet-badge-row">
            <span class="fleet-chip">${escapeHtml(localizedVehicle.badge || localizedVehicle.type)}</span>
            <span class="fleet-seat">${escapeHtml(getSeatLabel(vehicle.seats))}</span>
          </div>
          ${visual}
        </div>
        <div class="fleet-copy">
          <h3>${escapeHtml(localizedVehicle.name)}</h3>
          <div class="fleet-type">${escapeHtml(localizedVehicle.type)}</div>
          <p>${escapeHtml(localizedVehicle.note)}</p>
          <div class="fleet-specs">
            <span>${escapeHtml(localizedVehicle.fuel)}</span>
            <span>${escapeHtml(localizedVehicle.luggage)}</span>
            <span>${escapeHtml(getSeatLabel(vehicle.seats))}</span>
          </div>
          <div class="fleet-footer">
            <strong class="fleet-price">${escapeHtml(localizedVehicle.price)}</strong>
            <div class="fleet-action-group"><a class="button secondary" href="./detail.html?id=${encodeURIComponent(vehicle.id)}">${isJapanese() ? "詳細を見る" : "상세보기"}</a><a class="button primary fleet-reserve-button" href="#reservation" data-select-vehicle="${escapeAttribute(vehicle.id)}">${longTermMode ? (isJapanese() ? "相談受付" : "상담 접수") : (isJapanese() ? "予約する" : "예약하기")}</a></div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll("[data-select-vehicle]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      showReservationSection();

      if (getLongTermRentalMode()) {
        await refreshAvailability();
        return;
      }

      const vehicleId = event.currentTarget.dataset.selectVehicle;
      state.activeVehicleId = vehicleId;
      if (vehicleFilter) {
        vehicleFilter.value = vehicleId;
      }
      vehicleSelect.value = vehicleId;
      renderCalendarEvents();
      await refreshAvailability();
      showReservationSection();
    });
  });
}

function renderOptions() {
  const visibleOptions = getActiveOptions().filter((option) => !isHiddenOption(option.id));
  const selectableOptions = visibleOptions.filter((option) => !isDedicatedSeatOption(option.id));
  const checked = getSelectedOptionIds();
  const longTermMode = getLongTermRentalMode();

  if (optionGrid) {
    optionGrid.innerHTML = visibleOptions.length
      ? visibleOptions.map((option) => {
          const localizedOption = getLocalizedOption(option);
          return `
          <article class="option-card">
            <span class="option-price">${escapeHtml(localizedOption.price)}</span>
            <h3>${escapeHtml(localizedOption.title)}</h3>
            <p>${escapeHtml(localizedOption.description)}</p>
          </article>
        `;
        }).join("")
      : `<article class="option-card"><h3>${isJapanese() ? "登録されたオプションがありません。" : "현재 등록된 옵션이 없습니다."}</h3><p>${isJapanese() ? "管理者モードでオプションを追加すると、このエリアに表示されます。" : "관리자 모드에서 옵션을 추가하면 이 영역이 노출됩니다."}</p></article>`;
  }

  if (optionCheckboxes) {
    optionCheckboxes.innerHTML = selectableOptions.length
      ? selectableOptions.map((option) => {
          const localizedOption = getLocalizedOption(option);
          return `
          <label class="option-check">
            <input type="checkbox" name="selectedOption" value="${escapeAttribute(option.id)}" ${(checked.includes(option.id) || (longTermMode && option.id === LONG_TERM_OPTION_ID)) ? "checked" : ""} ${(longTermMode && option.id === LONG_TERM_OPTION_ID) ? "disabled" : ""}>
            <span>${escapeHtml(localizedOption.title)} · ${escapeHtml(localizedOption.price)}</span>
          </label>
        `;
        }).join("")
      : `<span class="option-check">${isJapanese() ? "選択できる追加オプションがありません。" : "선택 가능한 추가 옵션이 없습니다."}</span>`;
  }

  updatePriceSummary();
}

function renderPolicies() {
  const policies = Array.isArray(state.catalog.policies) ? state.catalog.policies : [];
  if (!policyGrid) {
    return;
  }

  policyGrid.innerHTML = policies.map((policy) => `
    <article class="policy-card">
      <h3>${escapeHtml(policy.title)}</h3>
      <p>${escapeHtml(policy.body)}</p>
    </article>
  `).join("");
}

function updateAvailabilityDisplay(title, text, statusClass = "") {
  if (availabilityTitle) {
    availabilityTitle.textContent = title;
  }
  if (availabilityText) {
    availabilityText.textContent = text;
  }
  if (availabilityCard) {
    availabilityCard.classList.remove("is-available", "is-unavailable");
    if (statusClass) {
      availabilityCard.classList.add(statusClass);
    }
  }
}
function populateVehicleSelectors() {
  const activeVehicles = getActiveVehicles();
  const previousSelectValue = vehicleSelect.value;
  const vehicleOptions = activeVehicles
    .map((vehicle) => `<option value="${escapeAttribute(vehicle.id)}">${escapeHtml(getLocalizedVehicle(vehicle).name)}</option>`)
    .join("");

  if (!activeVehicles.some((vehicle) => vehicle.id === state.activeVehicleId)) {
    state.activeVehicleId = "all";
  }

  if (vehicleFilter) {
    vehicleFilter.innerHTML = `<option value="all">${getStaticCopy("allVehiclesOption")}</option>${vehicleOptions}`;
    vehicleFilter.value = state.activeVehicleId;
  }

  vehicleSelect.innerHTML = `<option value="">${isJapanese() ? "車両を選択してください" : "차량을 선택하세요"}</option>${vehicleOptions}`;
  if (activeVehicles.some((vehicle) => vehicle.id === previousSelectValue)) {
    vehicleSelect.value = previousSelectValue;
  }
}

function syncVehicleSelect(vehicleId) {
  if (vehicleId === "all") {
    vehicleSelect.value = "";
    return;
  }
  vehicleSelect.value = vehicleId;
}

function renderCalendarEvents() {
  if (!calendar) {
    return;
  }

  const calendarBookings = state.bookings.filter((booking) => booking.vehicleId !== LONG_TERM_VEHICLE_ID);
  const filtered = state.activeVehicleId === "all"
    ? calendarBookings
    : calendarBookings.filter((booking) => booking.vehicleId === state.activeVehicleId);

  const events = filtered.map((booking) => ({
    id: booking.id,
    title: `${resolveVehicleName(booking.vehicleId)} ${getCalendarEventSuffix()}`,
    start: booking.startDate,
    end: addOneDay(booking.endDate),
    backgroundColor: booking.vehicleId === state.activeVehicleId ? "#0078d7" : "#d85243",
    borderColor: booking.vehicleId === state.activeVehicleId ? "#0078d7" : "#d85243"
  }));

  calendar.removeAllEvents();
  calendar.addEventSource(events);
}

async function refreshAvailability() {
  const vehicleId = vehicleSelect.value;
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;
  const longTermMode = getLongTermRentalMode();

  reservationResult.hidden = true;
  updatePriceSummary();

  if ((!longTermMode && !vehicleId) || !startDate || !endDate) {
    state.currentAvailability = { ready: false, available: false };
    updateAvailabilityDisplay(
      longTermMode ? (isJapanese() ? "長期レンタルの日付を選択してください。" : "장기렌트 날짜를 선택해 주세요.") : (isJapanese() ? "車両と日付を選択してください。" : "차량과 날짜를 선택해 주세요."),
      longTermMode
        ? (isJapanese() ? "長期レンタル受付モードでは、車両割り当ては相談後にご案内します。" : "장기렌트 접수 모드에서는 차량 배정이 상담 후 진행됩니다.")
        : (isJapanese() ? "選択前は予約可否を判断できません。" : "선택 전에는 예약 가능 여부를 판단할 수 없습니다.")
    );
    updateSubmitState();
    return;
  }

  if (startDate > endDate) {
    state.currentAvailability = { ready: true, available: false };
    updateAvailabilityDisplay(
      isJapanese() ? "日付をもう一度確認してください。" : "날짜를 다시 확인해 주세요.",
      isJapanese() ? "返却日は開始日と同日またはそれ以降である必要があります。" : "반납일은 시작일보다 같거나 늦어야 합니다.",
      "is-unavailable"
    );
    updateSubmitState();
    return;
  }

  if (longTermMode) {
    state.currentAvailability = { ready: true, available: true };
    updateAvailabilityDisplay(
      isJapanese() ? "長期レンタル相談を受け付けています。" : "장기렌트 상담 접수 가능합니다.",
      isJapanese()
        ? `${startDate}から${endDate}までの長期レンタルは、車両相談後に個別でご案内します。`
        : `${startDate}부터 ${endDate}까지의 장기렌트 문의는 차량 상담 후 개별 안내됩니다.`,
      "is-available"
    );
    setStatus(isJapanese() ? "長期レンタル受付モードです。予約するボタンを押して相談受付フォームを開いてください。" : "장기렌트 접수 모드입니다. 예약하기 버튼을 눌러 상담 접수 폼을 열어 주세요.", "success");
    updateSubmitState();
    return;
  }

  try {
    updateAvailabilityDisplay(
      isJapanese() ? "予約可否を確認しています" : "예약 가능 여부 확인 중",
      isJapanese() ? "選択した車両と日付をサーバーで確認しています。" : "선택한 차량과 날짜를 서버에서 검사하고 있습니다."
    );

    const params = new URLSearchParams({ vehicleId, startDate, endDate, ts: String(Date.now()) });
    const response = await fetchNetlifyApi(`/bookings?${params.toString()}`);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || (isJapanese() ? "予約可否を確認できませんでした。" : "예약 가능 여부를 확인하지 못했습니다."));
    }

    const data = await response.json();
    state.currentAvailability = { ready: true, available: data.available, conflicts: data.conflicts || [] };

    if (data.available) {
      updateAvailabilityDisplay(
        isJapanese() ? "予約可能です。" : "예약 가능합니다.",
        isJapanese()
          ? `${resolveVehicleName(vehicleId)} は ${startDate} から ${endDate} まで予約できます。`
          : `${resolveVehicleName(vehicleId)} 차량은 ${startDate}부터 ${endDate}까지 예약 가능합니다.`,
        "is-available"
      );
      setStatus(isJapanese() ? "予約可能な日程です。予約するボタンを押して受付フォームを開いてください。" : "예약 가능한 일정입니다. 예약하기 버튼을 눌러 접수 폼을 열어 주세요.", "success");
    } else {
      const ranges = (data.conflicts || []).map((booking) => `${booking.startDate} ~ ${booking.endDate}`).join(", ");
      updateAvailabilityDisplay(
        isJapanese() ? "すでに予約済みの期間です。" : "이미 예약된 기간입니다.",
        ranges
          ? (isJapanese() ? `重複する予約: ${ranges}` : `겹치는 예약: ${ranges}`)
          : (isJapanese() ? "選択した期間にはすでに予約があります。" : "선택한 기간에는 이미 예약이 있습니다."),
        "is-unavailable"
      );
      setStatus(isJapanese() ? "選択した日程は予約できません。別の日付を選択してください。" : "선택한 일정은 예약할 수 없습니다. 다른 날짜를 선택해 주세요.", "error");
    }
  } catch (error) {
    if (isFetchFailure(error)) {
      state.apiUnavailable = true;
      state.currentAvailability = { ready: true, available: true, offline: true };
      updateAvailabilityDisplay(
        isJapanese() ? "接続確認が必要です" : "연결 확인이 필요합니다",
        isJapanese()
          ? "現在は予約可否を確認できませんが、受付は可能です。確定は相談後にご案内します。"
          : "현재는 예약 가능 여부를 확인할 수 없지만 접수는 가능합니다. 확정은 상담 후 안내드립니다.",
        "is-available"
      );
      setStatus(
        isJapanese()
          ? "受付は可能です。確定は相談後にご案内します。"
          : "접수는 가능하며, 확정은 상담 후 안내됩니다.",
        ""
      );
    } else {
      state.currentAvailability = { ready: true, available: false };
      updateAvailabilityDisplay(isJapanese() ? "確認失敗" : "확인 실패", error.message, "is-unavailable");
      setStatus(error.message, "error");
    }
  }

  updateSubmitState();
}

async function handleReservationSubmit(event) {
  event.preventDefault();

  const longTermMode = getLongTermRentalMode();
  const payload = Object.fromEntries(new FormData(form).entries());
  payload.agree = document.getElementById("agree").checked;
  payload.selectedOptions = getSelectedOptionIds();
  const seatSelection = getSeatSelection();
  payload.childSeatCount = String(seatSelection.childSeatCount);
  payload.babySeatCount = String(seatSelection.babySeatCount);
  if (longTermMode) {
    payload.vehicleId = LONG_TERM_VEHICLE_ID;
    if (!payload.selectedOptions.includes(LONG_TERM_OPTION_ID)) {
      payload.selectedOptions.push(LONG_TERM_OPTION_ID);
    }
  }

  if (!longTermMode && !payload.vehicleId) {
    setStatus(isJapanese() ? "車両を選択してください。" : "차량을 선택해 주세요.", "error");
    return;
  }

  if (payload.startDate > payload.endDate) {
    setStatus(isJapanese() ? "返却日は開始日以降である必要があります。" : "반납일은 시작일 이후여야 합니다.", "error");
    return;
  }

  const apiUnavailable = state.apiUnavailable || isLocalPreviewMode();
  if (apiUnavailable) {
    submitButton.disabled = true;
    setStatus(
      isJapanese() ? "予約受付を送信しています。" : "예약 접수를 전송하고 있습니다.",
      ""
    );

    const selectedOptionLabels = state.catalog.options
      .filter((option) => payload.selectedOptions.includes(option.id))
      .map((option) => option.title);

    const fallbackBooking = {
      bookingCode: createBookingCode(),
      status: "pending",
      vehicleId: payload.vehicleId,
      startDate: payload.startDate,
      endDate: payload.endDate,
      selectedOptionLabels,
      childSeatCount: seatSelection.childSeatCount,
      babySeatCount: seatSelection.babySeatCount,
      seatOptionSummary: seatSelection.summary || "-"
    };

    const mailOutcome = await sendEmail(payload, fallbackBooking);

    form.reset();
    startDateInput.min = today;
    endDateInput.min = today;
    state.currentAvailability = { ready: false, available: false };
    updateAvailabilityDisplay(
      isJapanese() ? "車両と日付を選択してください。" : "차량과 날짜를 선택해 주세요.",
      isJapanese()
        ? "接続確認のため、次の受付前に日付をもう一度選択してください。"
        : "다음 접수를 위해 날짜를 다시 선택해 주세요."
    );
    renderOptions();
    updateReservationModeUI();
    updatePriceSummary();
    setReservationIntakeVisibility(false);

    reservationResult.hidden = false;
    state.lastCompletion = { booking: fallbackBooking, mailOutcome };
    resultTitle.textContent = isJapanese() ? "受付が完了しました。" : "예약이 접수되었습니다.";
    resultBody.textContent = isJapanese()
      ? "現在は接続確認中のため、予約確定は相談後にご案内します。"
      : "현재는 연결 확인 중이라 예약 확정은 상담 후 안내됩니다.";

    if (mailOutcome.status === "failed") {
      setStatus(
        isJapanese()
          ? "受付は完了しましたが、メール送信に失敗しました。設定を確認してください。"
          : "접수는 완료됐지만 메일 발송은 실패했습니다. 설정값을 확인해 주세요.",
        "error"
      );
    } else {
      setStatus(
        isJapanese()
          ? "受付が完了しました。確定は相談後にご案内します。"
          : "접수가 완료되었습니다. 확정은 상담 후 안내됩니다.",
        "success"
      );
    }

    submitButton.disabled = false;
    updateSubmitState();
    return;
  }

  submitButton.disabled = true;
  setStatus(isJapanese() ? "予約を保存しています。" : "예약을 저장하고 있습니다.", "");

  try {
    if (!longTermMode) {
      const precheckResponse = await fetchNetlifyApi(`/bookings?${new URLSearchParams({ vehicleId: payload.vehicleId, startDate: payload.startDate, endDate: payload.endDate, ts: String(Date.now()) }).toString()}`);
      const precheckData = await precheckResponse.json();
      if (!precheckResponse.ok || !precheckData.available) {
        throw new Error(precheckData.message || (isJapanese() ? "選択した日程はすでに予約されています。" : "선택한 일정은 이미 예약되어 있습니다."));
      }
    }

    const response = await fetchNetlifyApi("/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || (isJapanese() ? "予約保存中にエラーが発生しました。" : "예약 저장 중 오류가 발생했습니다."));
    }

    const mailOutcome = await sendEmail(payload, result.booking);

    form.reset();
    startDateInput.min = today;
    endDateInput.min = today;
    state.currentAvailability = { ready: false, available: false };
    updateAvailabilityDisplay(
      longTermMode ? (isJapanese() ? "長期レンタルの日付を選択してください。" : "장기렌트 날짜를 선택해 주세요.") : (isJapanese() ? "車両と日付を選択してください。" : "차량과 날짜를 선택해 주세요."),
      longTermMode
        ? (isJapanese() ? "次の長期レンタル受付のため、日付をもう一度選択してください。" : "다음 장기렌트 접수를 위해 날짜를 다시 선택해 주세요.")
        : (isJapanese() ? "次の予約のため、車両と日付をもう一度選択してください。" : "다음 예약을 위해 차량과 날짜를 다시 선택해 주세요.")
    );
    renderOptions();
    updateReservationModeUI();
    updatePriceSummary();
    setReservationIntakeVisibility(false);

    reservationResult.hidden = false;
    state.lastCompletion = { booking: result.booking, mailOutcome };
    resultTitle.textContent = createCompletionTitle(result.booking.bookingCode);
    resultBody.textContent = createCompletionMessage(result.booking, mailOutcome);

    await loadBookings();

    if (mailOutcome.status === "failed") {
      setStatus(isJapanese() ? "予約は保存されましたが、EmailJSメール送信に失敗しました。設定値をご確認ください。" : "예약은 저장되었지만 EmailJS 메일 발송은 실패했습니다. 설정값을 확인해 주세요.", "error");
    } else if (mailOutcome.status === "skipped") {
      setStatus(isJapanese() ? "予約は保存されました。EmailJS設定前のためメールは送信していません。" : "예약은 저장되었습니다. EmailJS 설정 전이라 메일은 발송하지 않았습니다.", "success");
    } else {
      setStatus(isJapanese() ? "予約が保存され、メール送信まで完了しました。" : "예약이 저장되었고 메일 발송까지 완료했습니다.", "success");
    }
  } catch (error) {
    if (isFetchFailure(error)) {
      setStatus(getFetchUnavailableMessage(), "");
      return;
    }
    setStatus(error.message, "error");
  } finally {
    updateSubmitState();
  }
}

async function sendEmail(payload, booking) {
  if (!window.emailjs || !isEmailConfigured()) {
    return { status: "skipped", adminSent: false, customerSent: false, attemptedCustomer: false };
  }

  const adminTemplateId = config.emailjs.adminTemplateId || config.emailjs.templateId;
  const customerTemplateId = config.emailjs.customerTemplateId || "";
  const selectedOptionText = [
    ...(booking.selectedOptionLabels || []),
    booking.seatOptionSummary || ""
  ].filter(Boolean).join(", ") || "-";
  const templateParams = {
    company_name: config.companyName || "okioki rent a car",
    site_name: config.companyName || "okioki rent a car",
    company_phone: config.companyPhone || "",
    company_email: config.companyEmail || "",
    booking_code: booking.bookingCode,
    request_code: booking.bookingCode,
    vehicle_name: resolveVehicleName(payload.vehicleId),
    request_subject: `${resolveVehicleName(payload.vehicleId)} 예약`,
    service_name: resolveVehicleName(payload.vehicleId),
    form_type: "렌트카 예약",
    customer_name: payload.name,
    contact_name: payload.name,
    customer_phone: payload.phone,
    contact_phone: payload.phone,
    customer_email: payload.email,
    contact_email: payload.email,
    name: payload.name,
    to_email: payload.email,
    start_date: payload.startDate,
    request_date: payload.startDate,
    date: payload.startDate,
    end_date: payload.endDate,
    request_end_date: payload.endDate,
    pickup_location: payload.pickup || "-",
    pickup_place: payload.pickup || "-",
    return_location: payload.dropoff || "-",
    dropoff_location: payload.dropoff || "-",
    passengers: payload.passengers || "-",
    party_size: payload.passengers || "-",
    people: payload.passengers || "-",
    tour_type: resolveVehicleName(payload.vehicleId),
    flight_number: payload.flightNumber || "-",
    selected_options: selectedOptionText,
    child_seat_count: booking.childSeatCount ?? "0",
    baby_seat_count: booking.babySeatCount ?? "0",
    seat_option_summary: booking.seatOptionSummary || "-",
    message: payload.message || "-",
    customer_message: payload.message || "-"
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
    return { status: "sent", adminSent, customerSent, attemptedCustomer: Boolean(customerTemplateId) };
  }

  if (adminSent || customerSent) {
    return { status: "partial", adminSent, customerSent, attemptedCustomer: Boolean(customerTemplateId) };
  }

  return { status: "failed", adminSent, customerSent, attemptedCustomer: Boolean(customerTemplateId) };
}

function createCompletionMessage(booking, mailOutcome) {
  const localizedOptionLabels = booking.selectedOptionLabels?.map((label) => localizeOptionLabelText(label)) || [];
  const localizedSeatSummary = localizeOptionLabelText(booking.seatOptionSummary || "");
  const optionText = localizedOptionLabels.length
    ? (isJapanese() ? ` 選択オプション: ${localizedOptionLabels.join(", ")}.` : ` 선택 옵션: ${localizedOptionLabels.join(", ")}.`)
    : "";
  const seatText = localizedSeatSummary
    ? (isJapanese() ? ` チャイルド / ベビーシート: ${localizedSeatSummary}.` : ` 카시트/베이비시트: ${localizedSeatSummary}.`)
    : "";
  const base = booking.vehicleId === LONG_TERM_VEHICLE_ID
    ? (isJapanese()
        ? `長期レンタル相談受付が ${booking.startDate} ~ ${booking.endDate} の日程で保存されました。${optionText}${seatText}`
        : `장기렌트 상담 접수가 ${booking.startDate} ~ ${booking.endDate} 일정으로 저장되었습니다.${optionText}${seatText}`)
    : (isJapanese()
        ? `${resolveVehicleName(booking.vehicleId)} / ${booking.startDate} ~ ${booking.endDate} の日程が保存されました。${optionText}${seatText}`
        : `${resolveVehicleName(booking.vehicleId)} / ${booking.startDate} ~ ${booking.endDate} 일정이 저장되었습니다.${optionText}${seatText}`);

  if (mailOutcome.status === "sent") {
    if (mailOutcome.attemptedCustomer) {
      return isJapanese()
        ? `${base} 管理者通知メールとお客様自動返信メールの両方が正常に送信されました。`
        : `${base} 관리자 알림 메일과 고객 자동응답 메일이 모두 정상 발송되었습니다.`;
    }
    return isJapanese() ? `${base} 管理者通知メールが正常に送信されました。` : `${base} 관리자 알림 메일이 정상 발송되었습니다.`;
  }

  if (mailOutcome.status === "partial") {
    return isJapanese()
      ? `${base} 一部のメールのみ送信されました。管理者メール: ${mailOutcome.adminSent ? "成功" : "失敗"}, お客様メール: ${mailOutcome.attemptedCustomer ? (mailOutcome.customerSent ? "成功" : "失敗") : "未設定"}.`
      : `${base} 일부 메일만 발송되었습니다. 관리자 메일: ${mailOutcome.adminSent ? "성공" : "실패"}, 고객 메일: ${mailOutcome.attemptedCustomer ? (mailOutcome.customerSent ? "성공" : "실패") : "미설정"}.`;
  }

  if (mailOutcome.status === "failed") {
    return isJapanese()
      ? `${base} 予約は保存されましたが、メール送信に失敗しました。EmailJSテンプレート設定をご確認ください。`
      : `${base} 예약은 저장되었지만 메일 발송은 실패했습니다. EmailJS 템플릿 설정을 확인해 주세요.`;
  }

  return isJapanese()
    ? `${base} EmailJSテンプレート設定前のためメールは送信していません。`
    : `${base} EmailJS 템플릿 설정 전이라 메일은 발송하지 않았습니다.`;
}

function handleHiddenAdminTrigger() {
  adminTapCount += 1;
  clearTimeout(adminTapTimer);
  adminTapTimer = setTimeout(() => {
    adminTapCount = 0;
  }, 1400);

  if (adminTapCount >= 5) {
    adminTapCount = 0;
    openAdminModal();
  }
}

function openAdminModal() {
  adminModal.hidden = false;
  document.body.classList.add("modal-open");
  adminStatus.textContent = "차량 카드, 옵션, 사이트 설정을 편집하려면 관리자 인증이 필요합니다.";
  adminSaveStatus.textContent = "저장 후 공개 차량 카드와 옵션, 사이트 이미지, 예약 폼 설정이 함께 바뀝니다.";

  if (state.adminSecret) {
    showAdminEditor();
  } else {
    showAdminAuth();
  }
}

function closeAdminModal() {
  adminModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function showAdminAuth() {
  adminAuthSection.hidden = false;
  adminEditorSection.hidden = true;
}

function showAdminEditor() {
  adminAuthSection.hidden = true;
  adminEditorSection.hidden = false;
  renderAdminEditor();
}

async function handleAdminLogin() {
  const secret = adminSecretInput.value.trim();
  if (!secret) {
    adminStatus.textContent = "관리자 비밀번호를 입력해 주세요.";
    return;
  }

  adminStatus.textContent = "관리자 인증 중입니다.";

  if (isLocalPreviewMode()) {
    state.adminSecret = secret;
    sessionStorage.setItem("rentcarAdminSecret", secret);
    adminSecretInput.value = "";
    adminStatus.textContent = "로컬 미리보기 모드입니다. 현재 브라우저에서만 관리자 편집과 저장이 가능합니다.";
    showAdminEditor();
    return;
  }

  try {
    const response = await fetchNetlifyApi("/catalog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-secret": secret
      },
      body: JSON.stringify({ action: "verify" })
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "관리자 인증에 실패했습니다.");
    }

    state.adminSecret = secret;
    sessionStorage.setItem("rentcarAdminSecret", secret);
    adminSecretInput.value = "";
    adminStatus.textContent = data.message || "관리자 인증이 완료되었습니다.";
    showAdminEditor();
  } catch (error) {
    if (error.message === "Failed to fetch") {
      state.adminSecret = secret;
      sessionStorage.setItem("rentcarAdminSecret", secret);
      adminSecretInput.value = "";
      adminStatus.textContent = "서버 연결 없이 로컬 미리보기 모드로 전환했습니다. 현재 브라우저에서만 편집 내용이 유지됩니다.";
      showAdminEditor();
      return;
    }

    adminStatus.textContent = error.message;
  }
}
function handleAdminLogout() {
  state.adminSecret = "";
  sessionStorage.removeItem("rentcarAdminSecret");
  adminSaveStatus.textContent = "관리자 모드를 잠갔습니다.";
  showAdminAuth();
}

function renderAdminSiteSettings() {
  if (!adminSiteSettings) {
    return;
  }

  const site = getSiteSettings();
  adminSiteSettings.innerHTML = `
    <div class="admin-item" data-kind="site">
      <h5>사이트 공통 설정</h5>
      <div class="admin-item-grid">
        <label class="admin-inline-check admin-span-2"><input data-field="longTermRentalMode" type="checkbox" ${site.longTermRentalMode ? "checked" : ""}>장기렌트 접수 모드 사용</label>
        <div class="admin-upload-field admin-span-2">
          <span>브랜드 로고</span>
          <div class="admin-upload-box">
            <div class="admin-upload-preview" data-image-preview="brandLogo">
              ${getAdminImagePreviewMarkup(site.brandLogo || DEFAULT_BRAND_LOGO, "브랜드 로고")}
            </div>
            <div class="admin-upload-meta">
              <input data-upload-field="brandLogo" type="file" accept="image/*">
              <input data-field="brandLogo" type="hidden" value="${escapeAttribute(site.brandLogo)}">
              <p class="admin-upload-help">헤더와 푸터에 공통으로 쓰일 로고입니다.</p>
              <button class="button secondary admin-image-clear" type="button" data-clear-image="brandLogo">이미지 제거</button>
            </div>
          </div>
        </div>
        <div class="admin-upload-field admin-span-2">
          <span>바탕 배경 이미지</span>
          <div class="admin-upload-box">
            <div class="admin-upload-preview" data-image-preview="backgroundImage">
              ${getAdminImagePreviewMarkup(site.backgroundImage, "바탕 배경 이미지")}
            </div>
            <div class="admin-upload-meta">
              <input data-upload-field="backgroundImage" type="file" accept="image/*">
              <input data-field="backgroundImage" type="hidden" value="${escapeAttribute(site.backgroundImage)}">
              <p class="admin-upload-help">페이지 전체 배경에 입혀질 이미지입니다. 업로드하지 않으면 기본 그라데이션이 유지됩니다.</p>
              <button class="button secondary admin-image-clear" type="button" data-clear-image="backgroundImage">이미지 제거</button>
            </div>
          </div>
        </div>
        <div class="admin-upload-field admin-span-2">
          <span>메인 테마 이미지</span>
          <div class="admin-upload-box">
            <div class="admin-upload-preview" data-image-preview="heroImage">
              ${getAdminImagePreviewMarkup(DEFAULT_HERO_IMAGE, "메인 테마 이미지")}
            </div>
            <div class="admin-upload-meta">
              <input data-upload-field="heroImage" type="file" accept="image/*">
              <input data-field="heroImage" type="hidden" value="${escapeAttribute(site.heroImage)}">
              <p class="admin-upload-help">메인 화면 우측 테마 이미지를 교체합니다.</p>
              <button class="button secondary admin-image-clear" type="button" data-clear-image="heroImage">이미지 제거</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAdminEditor() {
  renderAdminSiteSettings();

  adminVehicleList.innerHTML = state.catalog.vehicles.map((vehicle) => `
    <div class="admin-item" data-kind="vehicle">
      <h5>${escapeHtml(vehicle.name || "새 차량")}</h5>
      <div class="admin-item-grid">
        <label>차량명<input data-field="name" value="${escapeAttribute(vehicle.name)}"></label>
        <label>타입<input data-field="type" value="${escapeAttribute(vehicle.type)}"></label>
        <label>가격표시<input data-field="price" value="${escapeAttribute(vehicle.price)}"></label>
        <label>뱃지<input data-field="badge" value="${escapeAttribute(vehicle.badge)}"></label>
        <label>좌석 수<input data-field="seats" type="number" min="1" max="15" value="${escapeAttribute(String(vehicle.seats))}"></label>
        <label>연료<input data-field="fuel" value="${escapeAttribute(vehicle.fuel)}"></label>
        <label>짐 정보<input data-field="luggage" value="${escapeAttribute(vehicle.luggage)}"></label>
        <label>고유 ID<input data-field="id" value="${escapeAttribute(vehicle.id)}"></label>
        <label class="admin-inline-check"><input data-field="active" type="checkbox" ${vehicle.active !== false ? "checked" : ""}>노출하기</label>
        <div class="admin-upload-field admin-span-2">
          <span>차량 이미지 업로드</span>
          <div class="admin-upload-box">
            <div class="admin-upload-preview" data-image-preview>
              ${getAdminImagePreviewMarkup(vehicle.image, vehicle.name)}
            </div>
            <div class="admin-upload-meta">
              <input data-upload-field="image" type="file" accept="image/*">
              <input data-field="image" type="hidden" value="${escapeAttribute(vehicle.image)}">
              <p class="admin-upload-help">이미지 파일을 올리면 웹용 크기로 자동 최적화됩니다. 로컬 미리보기에서도 새로고침 후 유지됩니다.</p>
              <button class="button secondary admin-image-clear" type="button" data-clear-image>이미지 제거</button>
            </div>
          </div>
        </div>
      </div>
      <label>소개<textarea data-field="note" rows="3">${escapeHtml(vehicle.note)}</textarea></label>
      <button class="button secondary admin-remove" type="button" data-remove-item>삭제</button>
    </div>
  `).join("");

  adminOptionList.innerHTML = state.catalog.options.map((option) => `
    <div class="admin-item" data-kind="option">
      <h5>${escapeHtml(option.title || "새 옵션")}</h5>
      <div class="admin-item-grid">
        <label>옵션명<input data-field="title" value="${escapeAttribute(option.title)}"></label>
        <label>가격표시<input data-field="price" value="${escapeAttribute(option.price)}"></label>
        <label>고유 ID<input data-field="id" value="${escapeAttribute(option.id)}"></label>
        <label class="admin-inline-check"><input data-field="active" type="checkbox" ${option.active !== false ? "checked" : ""}>노출하기</label>
      </div>
      <label>설명<textarea data-field="description" rows="3">${escapeHtml(option.description)}</textarea></label>
      <button class="button secondary admin-remove" type="button" data-remove-item>삭제</button>
    </div>
  `).join("");

  if (adminTourProductList) {
    adminTourProductList.innerHTML = state.catalog.tourProducts.map((tour) => `
      <div class="admin-item" data-kind="tour-product">
        <h5>${escapeHtml(tour.titleKr || "새 투어")}</h5>
        <div class="admin-item-grid">
          <label>한국어 지역<input data-field="regionKr" value="${escapeAttribute(tour.regionKr || "")}"></label>
          <label>영문 지역<input data-field="regionEn" value="${escapeAttribute(tour.regionEn || "")}"></label>
          <label>일본어 지역<input data-field="regionJp" value="${escapeAttribute(tour.regionJp || "")}"></label>
          <label>링크 URL<input data-field="href" value="${escapeAttribute(tour.href || "")}"></label>
          <label>한국어 제목<input data-field="titleKr" value="${escapeAttribute(tour.titleKr || "")}"></label>
          <label>영문 제목<input data-field="titleEn" value="${escapeAttribute(tour.titleEn || "")}"></label>
          <label>일본어 제목<input data-field="titleJp" value="${escapeAttribute(tour.titleJp || "")}"></label>
          <label>고유 ID<input data-field="id" value="${escapeAttribute(tour.id || "")}"></label>
          <label class="admin-inline-check"><input data-field="active" type="checkbox" ${tour.active !== false ? "checked" : ""}>노출하기</label>
          <div class="admin-upload-field admin-span-2">
            <span>투어 이미지 업로드</span>
            <div class="admin-upload-box">
              <div class="admin-upload-preview" data-image-preview>
                ${getAdminImagePreviewMarkup(tour.image, tour.titleKr || tour.titleEn)}
              </div>
              <div class="admin-upload-meta">
                <input data-upload-field="image" type="file" accept="image/*">
                <input data-field="image" type="hidden" value="${escapeAttribute(tour.image || "")}">
                <p class="admin-upload-help">투어 목록 카드에 노출되는 썸네일입니다.</p>
                <button class="button secondary admin-image-clear" type="button" data-clear-image>이미지 제거</button>
              </div>
            </div>
          </div>
        </div>
        <label>한국어 설명<textarea data-field="bodyKr" rows="3">${escapeHtml(tour.bodyKr || "")}</textarea></label>
        <label>일본어 설명<textarea data-field="bodyJp" rows="3">${escapeHtml(tour.bodyJp || "")}</textarea></label>
        <button class="button secondary admin-remove" type="button" data-remove-item>삭제</button>
      </div>
    `).join("");
  }

  if (adminSupportCardList) {
    adminSupportCardList.innerHTML = state.catalog.supportCards.map((card) => `
      <div class="admin-item" data-kind="support-card">
        <h5>${escapeHtml(card.titleKr || "새 안내 카드")}</h5>
        <div class="admin-item-grid">
          <label>한국어 제목<input data-field="titleKr" value="${escapeAttribute(card.titleKr || "")}"></label>
          <label>영문 제목<input data-field="titleEn" value="${escapeAttribute(card.titleEn || "")}"></label>
          <label>일본어 제목<input data-field="titleJp" value="${escapeAttribute(card.titleJp || "")}"></label>
          <label>고유 ID<input data-field="id" value="${escapeAttribute(card.id || "")}"></label>
          <label class="admin-inline-check"><input data-field="active" type="checkbox" ${card.active !== false ? "checked" : ""}>노출하기</label>
        </div>
        <label>한국어 설명<textarea data-field="bodyKr" rows="3">${escapeHtml(card.bodyKr || "")}</textarea></label>
        <label>일본어 설명<textarea data-field="bodyJp" rows="3">${escapeHtml(card.bodyJp || "")}</textarea></label>
        <button class="button secondary admin-remove" type="button" data-remove-item>삭제</button>
      </div>
    `).join("");
  }

  if (adminActivityProductList) {
    adminActivityProductList.innerHTML = state.catalog.activityProducts.map((activity) => `
      <div class="admin-item" data-kind="activity-product">
        <h5>${escapeHtml(activity.titleKr || "새 액티비티")}</h5>
        <div class="admin-item-grid">
          <label>한국어 배지<input data-field="badgeKr" value="${escapeAttribute(activity.badgeKr || "")}"></label>
          <label>일본어 배지<input data-field="badgeJp" value="${escapeAttribute(activity.badgeJp || "")}"></label>
          <label>한국어 제목<input data-field="titleKr" value="${escapeAttribute(activity.titleKr || "")}"></label>
          <label>영문 제목<input data-field="titleEn" value="${escapeAttribute(activity.titleEn || "")}"></label>
          <label>일본어 제목<input data-field="titleJp" value="${escapeAttribute(activity.titleJp || "")}"></label>
          <label>상세 링크<input data-field="href" value="${escapeAttribute(activity.href || "")}"></label>
          <label>고유 ID<input data-field="id" value="${escapeAttribute(activity.id || "")}"></label>
          <label class="admin-inline-check"><input data-field="active" type="checkbox" ${activity.active !== false ? "checked" : ""}>노출하기</label>
          <div class="admin-upload-field admin-span-2">
            <span>액티비티 카드 이미지 업로드</span>
            <div class="admin-upload-box">
              <div class="admin-upload-preview" data-image-preview>
                ${getAdminImagePreviewMarkup(activity.image, activity.titleKr || activity.titleEn)}
              </div>
              <div class="admin-upload-meta">
                <input data-upload-field="image" type="file" accept="image/*">
                <input data-field="image" type="hidden" value="${escapeAttribute(activity.image || "")}">
                <p class="admin-upload-help">투어 페이지 추천 액티비티 카드 썸네일입니다.</p>
                <button class="button secondary admin-image-clear" type="button" data-clear-image>이미지 제거</button>
              </div>
            </div>
          </div>
        </div>
        <label>한국어 설명<textarea data-field="bodyKr" rows="3">${escapeHtml(activity.bodyKr || "")}</textarea></label>
        <label>일본어 설명<textarea data-field="bodyJp" rows="3">${escapeHtml(activity.bodyJp || "")}</textarea></label>
        <button class="button secondary admin-remove" type="button" data-remove-item>삭제</button>
      </div>
    `).join("");
  }

  if (adminActivityDetailList) {
    adminActivityDetailList.innerHTML = Object.values(state.catalog.activityDetails || {}).map((detail) => `
      <div class="admin-item" data-kind="activity-detail">
        <h5>${escapeHtml(detail.heroTitleKr || detail.slug || "액티비티 상세")}</h5>
        <div class="admin-item-grid">
          <label>슬러그<input data-field="slug" value="${escapeAttribute(detail.slug || "")}"></label>
          <label>한국어 배지<input data-field="badgeKr" value="${escapeAttribute(detail.badgeKr || "")}"></label>
          <label>일본어 배지<input data-field="badgeJp" value="${escapeAttribute(detail.badgeJp || "")}"></label>
          <label>한국어 제목<input data-field="heroTitleKr" value="${escapeAttribute(detail.heroTitleKr || "")}"></label>
          <label>영문 제목<input data-field="heroTitleEn" value="${escapeAttribute(detail.heroTitleEn || "")}"></label>
          <label>일본어 제목<input data-field="heroTitleJp" value="${escapeAttribute(detail.heroTitleJp || "")}"></label>
          <label>한국어 타입<input data-field="typeKr" value="${escapeAttribute(detail.typeKr || "")}"></label>
          <label>일본어 타입<input data-field="typeJp" value="${escapeAttribute(detail.typeJp || "")}"></label>
          <label class="admin-inline-check"><input data-field="active" type="checkbox" ${detail.active !== false ? "checked" : ""}>노출하기</label>
          <div class="admin-upload-field admin-span-2">
            <span>상세 대표 이미지 업로드</span>
            <div class="admin-upload-box">
              <div class="admin-upload-preview" data-image-preview>
                ${getAdminImagePreviewMarkup(detail.heroImage, detail.heroTitleKr || detail.slug)}
              </div>
              <div class="admin-upload-meta">
                <input data-upload-field="heroImage" type="file" accept="image/*">
                <input data-field="heroImage" type="hidden" value="${escapeAttribute(detail.heroImage || "")}">
                <p class="admin-upload-help">액티비티 상세 상단 비주얼에 쓰일 이미지입니다.</p>
                <button class="button secondary admin-image-clear" type="button" data-clear-image="heroImage">이미지 제거</button>
              </div>
            </div>
          </div>
        </div>
        <label>한국어 소개<textarea data-field="noteKr" rows="3">${escapeHtml(detail.noteKr || "")}</textarea></label>
        <label>일본어 소개<textarea data-field="noteJp" rows="3">${escapeHtml(detail.noteJp || "")}</textarea></label>
        <label>한국어 비주얼 문구<textarea data-field="visualBodyKr" rows="3">${escapeHtml(detail.visualBodyKr || "")}</textarea></label>
        <label>일본어 비주얼 문구<textarea data-field="visualBodyJp" rows="3">${escapeHtml(detail.visualBodyJp || "")}</textarea></label>
        <button class="button secondary admin-remove" type="button" data-remove-item>삭제</button>
      </div>
    `).join("");
  }
}
function handleAdminVehicleListClick(event) {
  if (handleAdminImageClear(event, "차량 이미지")) {
    return;
  }

  handleAdminListRemove(event);
}

async function handleAdminVehicleListChange(event) {
  await handleAdminImageUpload(event, "차량 이미지");
}

function handleAdminGenericListClick(event) {
  if (handleAdminImageClear(event, "이미지")) {
    return;
  }

  handleAdminListRemove(event);
}

function handleAdminSiteSettingsClick(event) {
  handleAdminImageClear(event, "사이트 이미지");
}

async function handleAdminSiteSettingsChange(event) {
  await handleAdminImageUpload(event, "사이트 이미지");
}

function handleAdminListRemove(event) {
  const removeButton = event.target.closest("[data-remove-item]");
  if (!removeButton) {
    return;
  }

  const item = removeButton.closest(".admin-item");
  if (item) {
    item.remove();
  }
}

function setAdminImageField(item, fieldName, image, fallbackAlt = "") {
  const field = item.querySelector(`[data-field="${fieldName}"]`);
  const preview = item.querySelector(`[data-image-preview="${fieldName}"]`) || item.querySelector("[data-image-preview]");
  if (field) {
    field.value = image || "";
  }
  if (preview) {
    preview.innerHTML = getAdminImagePreviewMarkup(image, fallbackAlt || readAdminValue(item, "name"));
  }
}

function setAdminVehicleImage(item, image, fallbackAlt = "") {
  setAdminImageField(item, "image", image, fallbackAlt);
}

function handleAdminImageClear(event, label) {
  const clearButton = event.target.closest("[data-clear-image]");
  if (!clearButton) {
    return false;
  }

  const item = clearButton.closest(".admin-item");
  const fieldName = clearButton.dataset.clearImage || "image";
  if (item) {
    setAdminImageField(item, fieldName, "");
    adminSaveStatus.textContent = `${label}가 제거되었습니다. 변경 저장을 누르면 반영됩니다.`;
  }
  return true;
}

async function handleAdminImageUpload(event, label) {
  const uploadInput = event.target.closest("[data-upload-field]");
  if (!uploadInput) {
    return;
  }

  const item = uploadInput.closest(".admin-item");
  const file = uploadInput.files?.[0];
  const fieldName = uploadInput.dataset.uploadField || "image";
  if (!item || !file) {
    return;
  }

  adminSaveStatus.textContent = "이미지를 업로드용 형식으로 준비하고 있습니다.";

  try {
    const image = await createOptimizedImageData(file);
    setAdminImageField(item, fieldName, image, file.name);
    adminSaveStatus.textContent = `${label}가 적용되었습니다. 변경 저장을 누르면 반영됩니다.`;
  } catch (error) {
    adminSaveStatus.textContent = error.message || "이미지 처리 중 오류가 발생했습니다.";
  } finally {
    uploadInput.value = "";
  }
}

function getAdminImagePreviewMarkup(image, altText) {
  if (!image) {
    return '<div class="admin-upload-empty">이미지 없음</div>';
  }

  return `<img src="${escapeAttribute(image)}" alt="${escapeAttribute(altText || "차량 이미지")}">`;
}

async function createOptimizedImageData(file) {
  if (!file.type.startsWith("image/")) {
    throw new Error("이미지 파일만 업로드할 수 있습니다.");
  }

  const sourceDataUrl = await readFileAsDataUrl(file);
  const image = await loadImageFromDataUrl(sourceDataUrl);
  const maxWidth = 960;
  const maxHeight = 720;
  const scale = Math.min(maxWidth / image.naturalWidth, maxHeight / image.naturalHeight, 1);
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("이미지 변환을 시작할 수 없습니다.");
  }

  context.drawImage(image, 0, 0, width, height);

  let output = canvas.toDataURL("image/jpeg", 0.8);
  if (output.length > 1200000) {
    output = canvas.toDataURL("image/jpeg", 0.68);
  }

  return output;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("파일을 읽지 못했습니다."));
    reader.readAsDataURL(file);
  });
}

function loadImageFromDataUrl(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("이미지를 불러오지 못했습니다."));
    image.src = dataUrl;
  });
}
async function saveCatalog() {
  if (!state.adminSecret) {
    adminSaveStatus.textContent = "관리자 인증이 필요합니다.";
    return;
  }

  const nextCatalog = collectAdminCatalog();
  adminSaveStatus.textContent = "카탈로그를 저장하고 있습니다.";

  if (isLocalPreviewMode()) {
    state.catalog = normalizeCatalog(nextCatalog);
    persistCatalogCache(state.catalog);
    renderCatalog();
    renderCalendarEvents();
    await refreshAvailability();
    adminSaveStatus.textContent = "로컬 미리보기 저장이 완료되었습니다. 같은 브라우저에서 새로고침해도 유지됩니다.";
    return;
  }

  try {
    const response = await fetchNetlifyApi("/catalog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-secret": state.adminSecret
      },
      body: JSON.stringify({ catalog: nextCatalog })
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "카탈로그 저장에 실패했습니다.");
    }

    state.catalog = normalizeCatalog(data.catalog || nextCatalog);
    persistCatalogCache(state.catalog);
    renderCatalog();
    renderCalendarEvents();
    await refreshAvailability();
    adminSaveStatus.textContent = "변경사항이 저장되었습니다. 공개 화면과 예약 폼에 즉시 반영되었습니다.";
  } catch (error) {
    state.catalog = normalizeCatalog(nextCatalog);
    persistCatalogCache(state.catalog);
    renderCatalog();
    renderCalendarEvents();
    await refreshAvailability();
    adminSaveStatus.textContent = `서버 저장은 실패했지만 현재 브라우저에는 보관했습니다. ${error.message}`;
  }
}
function collectAdminCatalog() {
  const siteItem = adminSiteSettings?.querySelector(".admin-item");
  const vehicleItems = Array.from(adminVehicleList.querySelectorAll(".admin-item"));
  const optionItems = Array.from(adminOptionList.querySelectorAll(".admin-item"));
  const tourItems = Array.from(adminTourProductList?.querySelectorAll(".admin-item") || []);
  const supportItems = Array.from(adminSupportCardList?.querySelectorAll(".admin-item") || []);
  const activityItems = Array.from(adminActivityProductList?.querySelectorAll(".admin-item") || []);
  const activityDetailItems = Array.from(adminActivityDetailList?.querySelectorAll(".admin-item") || []);

  const vehicles = vehicleItems.map((item, index) => {
    const name = readAdminValue(item, "name");
    return {
      id: toAdminSafeId(readAdminValue(item, "id"), "vehicle", index, name),
      name,
      type: readAdminValue(item, "type"),
      price: readAdminValue(item, "price"),
      badge: readAdminValue(item, "badge"),
      seats: Number(readAdminValue(item, "seats")) || 5,
      fuel: readAdminValue(item, "fuel"),
      luggage: readAdminValue(item, "luggage"),
      image: readAdminValue(item, "image"),
      note: readAdminValue(item, "note"),
      active: readAdminChecked(item, "active")
    };
  }).filter((vehicle) => vehicle.name);

  const options = optionItems.map((item, index) => {
    const title = readAdminValue(item, "title");
    return {
      id: toAdminSafeId(readAdminValue(item, "id"), "option", index, title),
      title,
      price: readAdminValue(item, "price"),
      description: readAdminValue(item, "description"),
      active: readAdminChecked(item, "active")
    };
  }).filter((option) => option.title);

  const tourProducts = tourItems.map((item, index) => {
    const title = readAdminValue(item, "titleKr");
    return {
      id: toAdminSafeId(readAdminValue(item, "id"), "tour", index, title),
      href: readAdminValue(item, "href"),
      image: readAdminValue(item, "image"),
      regionKr: readAdminValue(item, "regionKr"),
      regionEn: readAdminValue(item, "regionEn"),
      regionJp: readAdminValue(item, "regionJp"),
      titleKr: title,
      titleEn: readAdminValue(item, "titleEn"),
      titleJp: readAdminValue(item, "titleJp"),
      bodyKr: readAdminValue(item, "bodyKr"),
      bodyJp: readAdminValue(item, "bodyJp"),
      active: readAdminChecked(item, "active")
    };
  }).filter((tour) => tour.titleKr || tour.titleEn || tour.titleJp);

  const supportCards = supportItems.map((item, index) => {
    const title = readAdminValue(item, "titleKr");
    return {
      id: toAdminSafeId(readAdminValue(item, "id"), "support", index, title),
      titleKr: title,
      titleEn: readAdminValue(item, "titleEn"),
      titleJp: readAdminValue(item, "titleJp"),
      bodyKr: readAdminValue(item, "bodyKr"),
      bodyJp: readAdminValue(item, "bodyJp"),
      active: readAdminChecked(item, "active")
    };
  }).filter((card) => card.titleKr || card.titleEn || card.titleJp);

  const activityProducts = activityItems.map((item, index) => {
    const title = readAdminValue(item, "titleKr");
    return {
      id: toAdminSafeId(readAdminValue(item, "id"), "activity", index, title),
      href: readAdminValue(item, "href"),
      image: readAdminValue(item, "image"),
      badgeKr: readAdminValue(item, "badgeKr"),
      badgeJp: readAdminValue(item, "badgeJp"),
      titleKr: title,
      titleEn: readAdminValue(item, "titleEn"),
      titleJp: readAdminValue(item, "titleJp"),
      bodyKr: readAdminValue(item, "bodyKr"),
      bodyJp: readAdminValue(item, "bodyJp"),
      active: readAdminChecked(item, "active")
    };
  }).filter((activity) => activity.titleKr || activity.titleEn || activity.titleJp);

  const activityDetails = activityDetailItems.reduce((result, item, index) => {
    const slug = toAdminSafeId(readAdminValue(item, "slug"), "activity-detail", index, readAdminValue(item, "heroTitleKr"));
    result[slug] = {
      slug,
      heroImage: readAdminValue(item, "heroImage"),
      badgeKr: readAdminValue(item, "badgeKr"),
      badgeJp: readAdminValue(item, "badgeJp"),
      heroTitleKr: readAdminValue(item, "heroTitleKr"),
      heroTitleEn: readAdminValue(item, "heroTitleEn"),
      heroTitleJp: readAdminValue(item, "heroTitleJp"),
      typeKr: readAdminValue(item, "typeKr"),
      typeJp: readAdminValue(item, "typeJp"),
      noteKr: readAdminValue(item, "noteKr"),
      noteJp: readAdminValue(item, "noteJp"),
      visualBodyKr: readAdminValue(item, "visualBodyKr"),
      visualBodyJp: readAdminValue(item, "visualBodyJp"),
      active: readAdminChecked(item, "active")
    };
    return result;
  }, {});

  return {
    vehicles: ensureUniqueIds(vehicles, "vehicle"),
    options: ensureUniqueIds(options, "option"),
    policies: state.catalog.policies,
    tourProducts: ensureUniqueIds(tourProducts, "tour"),
    supportCards: ensureUniqueIds(supportCards, "support"),
    activityProducts: ensureUniqueIds(activityProducts, "activity"),
    activityDetails,
    site: siteItem ? {
      brandLogo: readAdminValue(siteItem, "brandLogo"),
      backgroundImage: readAdminValue(siteItem, "backgroundImage"),
      heroImage: readAdminValue(siteItem, "heroImage"),
      longTermRentalMode: readAdminChecked(siteItem, "longTermRentalMode")
    } : getSiteSettings()
  };
}

function readAdminValue(item, field) {
  return item.querySelector(`[data-field="${field}"]`)?.value.trim() || "";
}

function readAdminChecked(item, field) {
  return Boolean(item.querySelector(`[data-field="${field}"]`)?.checked);
}

function ensureUniqueIds(items, prefix) {
  const usedIds = new Set();
  return items.map((item, index) => {
    let candidate = item.id || `${prefix}-${index + 1}`;
    while (usedIds.has(candidate)) {
      candidate = `${candidate}-${index + 1}`;
    }
    usedIds.add(candidate);
    return { ...item, id: candidate };
  });
}

function toAdminSafeId(rawId, prefix, index, fallbackText) {
  const source = (rawId || fallbackText || "")
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);

  return source || `${prefix}-${Date.now().toString(36)}-${index + 1}`;
}

function createEmptyVehicle() {
  return {
    id: "",
    name: "",
    type: "",
    seats: 5,
    fuel: "",
    luggage: "",
    price: "",
    note: "",
    badge: "",
    image: "",
    active: true
  };
}

function createEmptyOption() {
  return {
    id: "",
    title: "",
    price: "",
    description: "",
    active: true
  };
}

function createEmptyTourProduct() {
  return {
    id: "",
    href: "",
    image: "",
    regionKr: "",
    regionEn: "",
    regionJp: "",
    titleKr: "",
    titleEn: "",
    titleJp: "",
    bodyKr: "",
    bodyJp: "",
    active: true
  };
}

function createEmptySupportCard() {
  return {
    id: "",
    titleKr: "",
    titleEn: "",
    titleJp: "",
    bodyKr: "",
    bodyJp: "",
    active: true
  };
}

function createEmptyActivityProduct() {
  return {
    id: "",
    href: "",
    image: "",
    badgeKr: "",
    badgeJp: "",
    titleKr: "",
    titleEn: "",
    titleJp: "",
    bodyKr: "",
    bodyJp: "",
    active: true
  };
}

function createEmptyActivityDetail(slug = "") {
  return {
    slug,
    heroImage: "",
    badgeKr: "",
    badgeJp: "",
    heroTitleKr: "",
    heroTitleEn: "",
    heroTitleJp: "",
    typeKr: "",
    typeJp: "",
    noteKr: "",
    noteJp: "",
    visualBodyKr: "",
    visualBodyJp: "",
    active: true
  };
}

function getSiteSettings() {
  const site = state.catalog.site && typeof state.catalog.site === "object" ? state.catalog.site : defaultCatalog.site;
  return {
    brandLogo: String(site.brandLogo || "").trim(),
    backgroundImage: String(site.backgroundImage || "").trim(),
    heroImage: String(site.heroImage || "").trim(),
    longTermRentalMode: site.longTermRentalMode === true
  };
}

function getLongTermRentalMode() {
  return getSiteSettings().longTermRentalMode;
}

function ensureLongTermOption(options, site = defaultCatalog.site) {
  let safeOptions = Array.isArray(options) ? cloneCatalog(options) : [];
  safeOptions = ensureRequiredOption(safeOptions, CAR_SEAT_OPTION_ID, true);
  safeOptions = ensureRequiredOption(safeOptions, BABY_SEAT_OPTION_ID, true);
  safeOptions = ensureRequiredOption(safeOptions, LONG_TERM_OPTION_ID, site.longTermRentalMode);
  return safeOptions;
}

function ensureRequiredOption(options, optionId, forceActive) {
  const safeOptions = Array.isArray(options) ? cloneCatalog(options) : [];
  const existingIndex = safeOptions.findIndex((option) => option && option.id === optionId);
  const defaultOption = cloneCatalog(defaultCatalog.options.find((option) => option.id === optionId));
  if (!defaultOption) {
    return safeOptions;
  }

  if (existingIndex >= 0) {
    safeOptions[existingIndex] = {
      ...defaultOption,
      ...safeOptions[existingIndex],
      active: forceActive ? true : safeOptions[existingIndex].active !== false
    };
    return safeOptions;
  }

  safeOptions.push({
    ...defaultOption,
    active: forceActive ? true : defaultOption.active !== false
  });
  return safeOptions;
}

function getActiveVehicles() {
  return state.catalog.vehicles.filter((vehicle) => vehicle.active !== false);
}

function getActiveTourProducts() {
  return Array.isArray(state.catalog.tourProducts)
    ? state.catalog.tourProducts.filter((tour) => tour.active !== false)
    : [];
}

function getActiveActivityProducts() {
  return Array.isArray(state.catalog.activityProducts)
    ? state.catalog.activityProducts.filter((activity) => activity.active !== false)
    : [];
}

function getActiveOptions() {
  return state.catalog.options.filter((option) => option.active !== false || (getLongTermRentalMode() && option.id === LONG_TERM_OPTION_ID));
}

function getSelectedOptionIds() {
  return Array.from(document.querySelectorAll('input[name="selectedOption"]:checked')).map((input) => input.value);
}

function getSeatSelection() {
  const childSeatCount = Number(document.getElementById("childSeatCount")?.value || 0);
  const babySeatCount = Number(document.getElementById("babySeatCount")?.value || 0);
  const summaryParts = [];

  if (childSeatCount > 0) {
    const extraCharge = Math.max(0, childSeatCount - 1) * 1000;
    summaryParts.push(
      isJapanese()
        ? `チャイルドシート ${childSeatCount}台${extraCharge ? ` (${extraCharge.toLocaleString("ko-KR")}円)` : " (1台無料)"}`
        : `카시트 ${childSeatCount}개${extraCharge ? ` (${extraCharge.toLocaleString("ko-KR")}엔)` : " (1개 무료)"}`
    );
  }

  if (babySeatCount > 0) {
    const totalCharge = babySeatCount * 1500;
    summaryParts.push(
      isJapanese()
        ? `ベビーシート ${babySeatCount}台 (${totalCharge.toLocaleString("ko-KR")}円)`
        : `베이비시트 ${babySeatCount}개 (${totalCharge.toLocaleString("ko-KR")}엔)`
    );
  }

  return {
    childSeatCount,
    babySeatCount,
    summary: summaryParts.join(", ")
  };
}

function updatePriceSummary() {
  if (!bookingTotalValue || !bookingTotalMeta) {
    return;
  }

  if (getLongTermRentalMode()) {
    bookingTotalValue.textContent = isJapanese() ? "別途相談" : "별도 상담";
    bookingTotalMeta.textContent = isJapanese() ? "長期レンタルは期間と車両条件に応じて相談後にお見積もりをご案内します。" : "장기렌트는 기간과 차량 조건에 따라 상담 후 견적으로 안내합니다.";
    return;
  }

  const vehicleId = vehicleSelect.value;
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;

  if (!vehicleId || !startDate || !endDate) {
    bookingTotalValue.textContent = isJapanese() ? "車両選択後に計算" : "차량 선택 후 계산";
    bookingTotalMeta.textContent = isJapanese() ? "車両と日付を選択すると、予想合計金額が表示されます。" : "차량과 날짜를 선택하면 예상 합계금액이 표시됩니다.";
    return;
  }

  const chargeableDays = getChargeableDayCount(startDate, endDate);
  if (!chargeableDays) {
    bookingTotalValue.textContent = isJapanese() ? "日付確認が必要" : "날짜 확인 필요";
    bookingTotalMeta.textContent = isJapanese() ? "返却日は開始日と同日またはそれ以降である必要があります。" : "반납일은 시작일보다 같거나 늦어야 합니다.";
    return;
  }

  const vehicle = state.catalog.vehicles.find((item) => item.id === vehicleId);
  const vehiclePrice = parsePriceDisplay(vehicle?.price);
  if (!vehiclePrice.amount || !vehiclePrice.currency) {
    bookingTotalValue.textContent = isJapanese() ? "金額確認が必要" : "금액 확인 필요";
    bookingTotalMeta.textContent = isJapanese() ? "車両価格表示をご確認ください。" : "차량 가격표시를 확인해 주세요.";
    return;
  }

  const seatSelection = getSeatSelection();
  const seatTotal = Math.max(0, seatSelection.childSeatCount - 1) * 1000 + seatSelection.babySeatCount * 1500;
  const selectedOptionIds = getSelectedOptionIds();
  const selectedOptions = getActiveOptions().filter((option) => (
    selectedOptionIds.includes(option.id) &&
    !isHiddenOption(option.id) &&
    !isDedicatedSeatOption(option.id) &&
    option.id !== LONG_TERM_OPTION_ID
  ));

  const totalsByCurrency = new Map();
  const breakdown = [];
  const freeOptions = [];
  const consultOptions = [];

  const vehicleTotal = vehiclePrice.amount * chargeableDays;
  addCurrencyAmount(totalsByCurrency, vehiclePrice.currency, vehicleTotal);
  breakdown.push(isJapanese()
    ? `車両 ${formatAmount(vehiclePrice.amount, vehiclePrice.currency)} x ${chargeableDays}日`
    : `차량 ${formatAmount(vehiclePrice.amount, vehiclePrice.currency)} x ${chargeableDays}일`);

  if (seatTotal > 0) {
    addCurrencyAmount(totalsByCurrency, "엔", seatTotal);
    breakdown.push(isJapanese() ? `シート追加 ${formatAmount(seatTotal, "엔")}` : `시트 추가 ${formatAmount(seatTotal, "엔")}`);
  }

  selectedOptions.forEach((option) => {
    const parsed = parsePriceDisplay(option.price);
    const localizedOption = getLocalizedOption(option);
    if (parsed.amount > 0 && parsed.currency) {
      addCurrencyAmount(totalsByCurrency, parsed.currency, parsed.amount);
      breakdown.push(`${localizedOption.title} ${formatAmount(parsed.amount, parsed.currency)}`);
      return;
    }

    if (/무료/.test(option.price || "")) {
      freeOptions.push(localizedOption.title);
      return;
    }

    consultOptions.push(localizedOption.title);
  });

  const totalParts = Array.from(totalsByCurrency.entries())
    .filter(([, amount]) => amount > 0)
    .map(([currency, amount]) => formatAmount(amount, currency));

  bookingTotalValue.textContent = totalParts.length ? totalParts.join(" / ") : (isJapanese() ? "無料" : "무료");

  const metaParts = [isJapanese() ? `${resolveVehicleName(vehicleId)} 料金基準` : `${resolveVehicleName(vehicleId)} 요금 기준`];
  metaParts.push(...breakdown);
  if (freeOptions.length > 0) {
    metaParts.push(isJapanese() ? `無料オプション: ${freeOptions.join(", ")}` : `무료 옵션: ${freeOptions.join(", ")}`);
  }
  if (consultOptions.length > 0) {
    metaParts.push(isJapanese() ? `別途案内: ${consultOptions.join(", ")}` : `별도 안내: ${consultOptions.join(", ")}`);
  }
  bookingTotalMeta.textContent = metaParts.join(" · ");
}

function getChargeableDayCount(startDate, endDate) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(startDate) || !/^\d{4}-\d{2}-\d{2}$/.test(endDate)) {
    return 0;
  }

  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) {
    return 0;
  }

  return Math.max(1, Math.floor((end - start) / 86400000));
}

function parsePriceDisplay(text) {
  const raw = String(text || "").trim();
  const numericTokens = raw.match(/\d[\d,]*/g) || [];
  const amountToken = numericTokens.length
    ? numericTokens.reduce((best, current) => (current.length > best.length ? current : best), "")
    : "";
  let currency = "";

  if (/원|₩|krw/i.test(raw)) {
    currency = "원";
  } else if (/엔|円|¥|jpy/i.test(raw)) {
    currency = "엔";
  }

  return {
    amount: amountToken ? Number(amountToken.replace(/,/g, "")) : 0,
    currency,
    raw
  };
}

function addCurrencyAmount(bucket, currency, amount) {
  if (!currency || !amount) {
    return;
  }

  bucket.set(currency, (bucket.get(currency) || 0) + amount);
}

function formatAmount(value, unit) {
  if (isJapanese()) {
    const localizedUnit = unit === "원" ? "ウォン" : unit === "엔" ? "円" : unit;
    return `${Number(value || 0).toLocaleString("ko-KR")}${localizedUnit}`;
  }
  return `${Number(value || 0).toLocaleString("ko-KR")}${unit}`;
}

function isDedicatedSeatOption(optionId) {
  return optionId === CAR_SEAT_OPTION_ID || optionId === BABY_SEAT_OPTION_ID;
}

function isHiddenOption(optionId) {
  return HIDDEN_OPTION_IDS.has(optionId);
}

function isLocalPreviewMode() {
  return window.location.protocol === "file:";
}
function getCachedCatalog() {
  try {
    const raw = window.localStorage.getItem(catalogCacheKey);
    if (!raw) {
      return null;
    }
    return normalizeCatalog(JSON.parse(raw));
  } catch (error) {
    console.error(error);
    return null;
  }
}

function persistCatalogCache(catalog) {
  try {
    const safeCatalog = normalizeCatalog(catalog);
    window.localStorage.setItem(catalogCacheKey, JSON.stringify(safeCatalog));
  } catch (error) {
    console.error(error);
  }
}
function normalizeCatalog(catalog) {
  const safeCatalog = catalog && typeof catalog === "object" ? catalog : defaultCatalog;
  const site = safeCatalog.site && typeof safeCatalog.site === "object"
    ? {
        brandLogo: String(safeCatalog.site.brandLogo || "").trim(),
        backgroundImage: String(safeCatalog.site.backgroundImage || "").trim(),
        heroImage: String(safeCatalog.site.heroImage || "").trim(),
        longTermRentalMode: safeCatalog.site.longTermRentalMode === true
      }
    : cloneCatalog(defaultCatalog.site);
  const options = Array.isArray(safeCatalog.options) ? safeCatalog.options : cloneCatalog(defaultCatalog.options);
  const tourProducts = Array.isArray(safeCatalog.tourProducts) ? safeCatalog.tourProducts : cloneCatalog(defaultCatalog.tourProducts);
  const supportCards = Array.isArray(safeCatalog.supportCards) ? safeCatalog.supportCards : cloneCatalog(defaultCatalog.supportCards);
  const activityProducts = Array.isArray(safeCatalog.activityProducts) ? safeCatalog.activityProducts : cloneCatalog(defaultCatalog.activityProducts);
  const activityDetails = safeCatalog.activityDetails && typeof safeCatalog.activityDetails === "object"
    ? safeCatalog.activityDetails
    : cloneCatalog(defaultCatalog.activityDetails);
  const vehicles = Array.isArray(safeCatalog.vehicles)
    ? safeCatalog.vehicles.map((vehicle) => {
        const fallback = defaultCatalog.vehicles.find((item) => item.id === vehicle?.id) || {};
        return {
          ...cloneCatalog(fallback),
          ...vehicle,
          image: String(vehicle?.image || fallback.image || "").trim()
        };
      })
    : cloneCatalog(defaultCatalog.vehicles);
  return {
    vehicles,
    options: ensureLongTermOption(options, site),
    policies: Array.isArray(safeCatalog.policies) ? safeCatalog.policies : cloneCatalog(defaultCatalog.policies),
    site,
    tourProducts: cloneCatalog(tourProducts),
    supportCards: cloneCatalog(supportCards),
    activityProducts: cloneCatalog(activityProducts),
    activityDetails: cloneCatalog(activityDetails)
  };
}

function cloneCatalog(value) {
  return JSON.parse(JSON.stringify(value));
}

function resolveVehicleName(vehicleId) {
  if (vehicleId === LONG_TERM_VEHICLE_ID) {
    return isJapanese() ? "長期レンタル相談" : "장기렌트 상담";
  }
  const vehicle = state.catalog.vehicles.find((item) => item.id === vehicleId);
  if (!vehicle) {
    return isJapanese() ? "非表示車両" : "비활성 차량";
  }
  return getLocalizedVehicle(vehicle).name;
}

function isEmailConfigured() {
  return Boolean(
    config.emailjs?.publicKey &&
    config.emailjs?.serviceId &&
    ((config.emailjs.adminTemplateId || config.emailjs.templateId) || config.emailjs.customerTemplateId) &&
    !config.emailjs.publicKey.startsWith("YOUR_")
  );
}

function addOneDay(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + 1);
  return formatLocalDate(date);
}

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function updateSubmitState() {
  const canProceed = canProceedToReservationIntake();

  if (reservationRevealButton) {
    reservationRevealButton.disabled = !canProceed;
  }

  submitButton.disabled = !state.reservationIntakeOpen || !canProceed;
}

function setStatus(message, type) {
  formStatus.textContent = message;
  formStatus.className = `form-status${type ? ` ${type}` : ""}`;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function escapeCssUrl(value) {
  return String(value || "").replace(/"/g, '\\"');
}









