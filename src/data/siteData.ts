export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  note?: string;
  popular?: boolean;
}

export interface CaseStudy {
  id: string;
  category: string;
  location: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface BeforeAfterImage {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export const SITE_DATA = {
  company: {
    name: "ホームクリーニング マルイチ",
    legalName: "ホームクリーニング マルイチ",
    representative: "丸山 孝一",
    zipCode: "〒910-0066",
    address: "福井県福井市八ツ島1-202-1",
    tel: "090-7746-2561",
    telHref: "tel:09077462561",
    fax: "0776-21-3772",
    lineId: "@720zboaz",
    lineUrl: "https://line.me/R/ti/p/@720zboaz",
    officialUrl: "https://home-cleaning-maruichi.com/",
    privacyUrl: "https://home-cleaning-maruichi.com/privacy/",
    area: "福井市・坂井市を中心に福井県全域",
    motto: "地域最安値 × 最丁寧",
    catchphrase: "福井県のエアコン・店舗清掃なら、地域最安値 × 最丁寧を目指すマルイチへ。",
    subCatchphrase: "福井県を中心に、ご家庭から店舗・オフィスまで幅広く対応。エアコンや換気扇、床、ソファなど、さまざまな場所のクリーニングを丁寧に行います。",
  },

  campaign: {
    title: "家庭用エアコンクリーニング 1,000円OFF!",
    badge: "期間限定キャンペーン",
    description: "プロの徹底高圧洗浄で、奥のカビやホコリをすっきりリセット。",
    note: "※キャンペーンの適用条件やお掃除機能付きエアコンの詳細はお問い合わせ時にご確認ください。",
  },

  reasons: [
    {
      number: "01",
      title: "地域最安値を目指す価格設定",
      subtitle: "明確＆安心の料金システム",
      description: "余分な中間マージンをカットし、地域のお客様に寄り添った良心的な価格設定を実現。現場調査・事前お見積りは完全無料で、作業後の不当な追加請求も一切ございません。",
      icon: "ShieldCheck",
    },
    {
      number: "02",
      title: "見えない隙間まで徹底する丁寧清掃",
      subtitle: "細部まで妥協しない職人技",
      description: "専用の機材や高圧洗浄機を使用するだけでなく、機械が届かない細かな隙間や頑固な油汚れは手作業で丹念に除去。1件1件真心を込めて綺麗に仕上げます。",
      icon: "Sparkles",
    },
    {
      number: "03",
      title: "ご家庭から法人・店舗まで幅広く対応",
      subtitle: "確かな実績と柔軟な提案力",
      description: "一般住宅のエアコン・水回りから、飲食店・クリニック・オフィス・学校宿舎の大規模施工（150台以上）まで対応。定期メンテナンスからスポット清掃まで柔軟に対応いたします。",
      icon: "Building2",
    },
  ],

  householdServices: [
    { id: "h1", name: "エアコンクリーニング", price: "10,000円〜", note: "作業時間：1.5h程度", popular: true },
    { id: "h2", name: "浴室クリーニング", price: "15,000円〜" },
    { id: "h3", name: "キッチンクリーニング", price: "13,000円〜" },
    { id: "h4", name: "レンジフードクリーニング", price: "12,000円〜" },
    { id: "h5", name: "トイレクリーニング", price: "6,000円〜" },
    { id: "h6", name: "洗面所クリーニング", price: "6,000円〜" },
    { id: "h7", name: "鏡のウロコ取り（オプション）", price: "3,000円〜" },
  ] as ServiceItem[],

  businessServices: [
    { id: "b1", name: "業務用エアコン 簡易クリーニング", price: "5,000円〜／1台", popular: true },
    { id: "b2", name: "業務用エアコン クリーニング（本格分解）", price: "27,000円〜／1台" },
    { id: "b3", name: "業務用レンジフード", price: "25,000円〜／1台" },
    { id: "b4", name: "床ワックス", price: "10,000円〜" },
    { id: "b5", name: "窓ガラスクリーニング", price: "1,000円〜／1枚" },
    { id: "b6", name: "布ソファクリーニング", price: "4,000円／1席" },
  ] as ServiceItem[],

  disinfectionInfo: {
    title: "安心・安全の「除菌・抗菌クリーニング」",
    step1: "高濃度のアルカリ電解水で雑菌や有機物を強力分解後、プロ仕様のスチームで徹底洗浄。",
    step2: "施工面の有機物を除去した上で次亜塩素酸水を施工し、最大限の除菌効果を発揮します。",
    badge: "清潔空間づくり",
  },

  caseStudies: [
    {
      id: "case-01",
      category: "店舗クリーニング",
      location: "飲食店（坂井市）",
      title: "厨房コンクリート床・大型換気扇・客席床の全面清掃",
      description: "厨房のコンクリート床は専用クリーナーで一気に高圧洗浄。クリーナーが届かない隙間や細部は手作業で丁寧に汚れを落としました。大型換気扇や客席床もリフレッシュし、オーナー様に大変喜んでいただきました。",
      image: "/images/result01.jpg",
      tags: ["厨房床洗浄", "大型換気扇", "客席フロア"],
    },
    {
      id: "case-02",
      category: "定期清掃・ソファ",
      location: "某クリニック（福井市）",
      title: "待合室ソファ＆業務用エアコンの定期巡回クリーニング",
      description: "福井市の某クリニック様へ月1回のペースで定期訪問。不特定多数の患者様がご利用になる待合室ソファやエアコンは、見えない皮脂やホコリが蓄積しがちです。定期的な専用清掃で常に清潔で心地よい空間を保っています。",
      image: "/images/result02.jpg",
      tags: ["クリニック定期", "布ソファ洗浄", "衛生管理"],
    },
    {
      id: "case-03",
      category: "厨房・換気設備",
      location: "てんぷら料理店（福井市）",
      title: "天ぷら専門店の頑固な油汚れ・換気扇くまなく清掃",
      description: "油を多用する天ぷら店様にて、換気扇を中心に店内を隅々までクリーニング。日頃から店主様がお手入れされているものの、蓄積した頑固な油汚れはプロの専用洗剤と技で根こそぎ洗浄いたしました。",
      image: "/images/result03.jpg",
      tags: ["飲食店換気扇", "油汚れ徹底除去", "厨房衛生"],
    },
    {
      id: "case-04",
      category: "大規模エアコン",
      location: "高等学校生徒宿舎（福井県内）",
      title: "生徒様宿舎 館内150台超のエアコン一斉クリーニング",
      description: "福井県内高校の生徒様宿舎にある150台以上のエアコンを全面施工。3年ぶりの施工でフィルターや熱交換器に著しい汚れがあり、真っ黒な洗浄水が排出されました。定期メンテナンスの重要性を実感いただいた実績です。",
      image: "/images/result04.jpg",
      tags: ["150台超一括施工", "宿舎・学校", "高圧分解洗浄"],
    },
  ] as CaseStudy[],

  beforeAfterGallery: [
    {
      id: "ba-01",
      title: "浴室エプロン内部の防カビ高圧洗浄",
      subtitle: "普段開けないエプロン奥に潜むヘドロ・黒カビを徹底除去",
      image: "/images/result05-01.jpg",
      description: "浴槽エプロンを取り外すと、見えない裏側に長年の湯垢や黒カビがびっしり。専用薬剤とスチーム高圧洗浄で、新品同様の清潔さを取り戻しました。",
    },
    {
      id: "ba-02",
      title: "浴室床下・排水溝配管まわりの汚れリセット",
      subtitle: "悪臭やぬめりの原因となる配管まわりの頑固な蓄積汚れを洗浄",
      image: "/images/result05-02.jpg",
      description: "普段手の届かない排水トラップ奥やホース周りの汚れを徹底除去。水はけが改善し、バスルーム特有のこもった嫌なニオイも解消します。",
    },
  ] as BeforeAfterImage[],

  steps: [
    {
      step: "01",
      title: "お問い合わせ・無料相談",
      description: "お電話、公式LINE、またはWebフォームよりお気軽にご相談ください。ご希望の清掃箇所やご予算、ご希望日程をお伺いします。",
      point: "ご相談・概算見積もり無料",
    },
    {
      step: "02",
      title: "現場調査・無料お見積り",
      description: "家まるごとや事務所全体のクリーニングなど、必要に応じて現地を実際に確認し、その場で明確なお見積りを算出します。",
      point: "ここまでは完全無料",
    },
    {
      step: "03",
      title: "正式お申し込み・日程決定",
      description: "お見積り内容にご納得いただいた後、正式にお申込書をご記入いただき、施工日程を確定します。強引な営業は一切ありません。",
      point: "明朗会計・追加料金なし",
    },
    {
      step: "04",
      title: "丁寧なクリーニング作業",
      description: "周辺をしっかり養生し、熟練スタッフが細部まで妥協なくクリーニング。完了後にお客様立ち会いのもと仕上がりをご確認いただきます。",
      point: "仕上がり確認・安心の自社施工",
    },
  ],
};
