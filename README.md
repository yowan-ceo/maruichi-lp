# ホームクリーニング マルイチ｜LP全面リニューアル提案デモ

福井県のハウスクリーニング・オフィス清掃事業者「ホームクリーニング マルイチ」様に向けた、LP全面リニューアルの営業提案用Webアプリケーションです。

単なる静的デザイン画像ではなく、ブラウザ上で実際に動作する高品質なレスポンシブWebサイトとして開発されています。

- **Vercel 公開URL（デモサイト）**: [https://maruichi-lp.vercel.app](https://maruichi-lp.vercel.app)
- **GitHub リポジトリ**: [https://github.com/yowan-ceo/maruichi-lp](https://github.com/yowan-ceo/maruichi-lp)

---

## 1. 特徴とデザインのこだわり

- **地域密着の信頼感と清潔感**:
  鮮やかなブルー（`#00a5d4`）と誠実なネイビーを基調に、水や空気を連想させる柔らかな曲面グラフィックを配し、清潔感を極大化。
- **公式データの100%継承**:
  現行公式サイト（`https://home-cleaning-maruichi.com/`）の料金（すべて税別）、注意事項、4つの公式施工事例、代表情報、除菌抗菌の施工プロセスを正確に反映。
- **高転換率（CVR）を追求した情報設計**:
  - ファーストビューでの「地域最安値 × 最丁寧」の明示と写真コラージュ
  - 「1,000円OFFキャンペーン」の視覚的強調
  - エアコン内部の汚れ写真による問題意識の喚起
  - 一般家庭向け vs 店舗法人向けの2カラム明瞭料金表
  - クリック拡大機能付きの施工事例＆Before/Afterギャラリー
  - 終盤CTAでの女性コンシェルジュによる親しみやすい視線誘導（無料見積もり・TEL・LINE相談の3大導線）
- **完全レスポンシブ対応**:
  デスクトップ（1440px）からスマートフォン（375px / 390px）まで最適化。スマホ閲覧時には画面下部に常駐する固定CTAバーを実装。

---

## 2. 技術スタック

| 分野 | 採用技術 |
|---|---|
| **フレームワーク** | Next.js 14（App Router） |
| **言語** | TypeScript |
| **スタイリング** | Tailwind CSS 3.4 |
| **アイコン** | Lucide React |
| **ヘッドレス検証** | Puppeteer Core（Chrome Headless） |

---

## 3. ディレクトリ構成

```text
maruichi-lp/
├── FACT_SHEET.md          # 公式情報との照合記録表
├── QA_REPORT.md           # 品質保証・デバイス検証・ファクトチェック報告書
├── README.md              # 本ドキュメント（起動・公開・WP移行手順）
├── capture.js             # ブラウザスクリーンショット自動撮影スクリプト
├── screenshots/           # 各画面幅（375, 390, 768, 1440px）の検証画像
├── public/
│   ├── favicon.ico
│   └── images/            # 公式ロゴ、施工写真、生成コンシェルジュ画像等
└── src/
    ├── app/
    │   ├── globals.css    # グローバルスタイル・アニメーション
    │   ├── layout.tsx     # メタデータ（noindex設定）、フォント定義
    │   └── page.tsx       # 全セクションを統括するメインLP
    ├── components/        # 全10セクションのUIコンポーネント
    │   ├── DemoNoticeBanner.tsx # 提案デモ専用通知バー
    │   ├── Header.tsx           # ヘッダー・TEL・LINE・ナビ・SPドロワー
    │   ├── HeroSection.tsx      # ファーストビュー・キャンペーン・写真コラージュ
    │   ├── ProblemsSection.tsx  # お悩み喚起・エアコン汚れ写真
    │   ├── ReasonsSection.tsx   # 選ばれる3つの理由
    │   ├── PricingSection.tsx   # 料金表2カラム・除菌抗菌施工解説
    │   ├── ResultsSection.tsx   # 施工事例・Before/After拡大モーダル
    │   ├── FlowSection.tsx      # ご利用の流れ（4ステップ）
    │   ├── CtaSection.tsx       # 女性コンシェルジュ案内CTA
    │   ├── ContactSection.tsx   # 入力フォーム・バリデーション・ポリシーモーダル
    │   ├── Footer.tsx           # 会社概要・フッター
    │   └── MobileStickyCta.tsx  # スマホ画面下部固定CTA
    └── data/
        └── siteData.ts    # 料金・事例・連絡先等のマスターデータ（データ分離設計）
```

---

## 4. ローカル起動・ビルド方法

### 4-1. 開発サーバーの起動

```bash
cd /Users/kawamotoyuuki/.gemini/antigravity/scratch/maruichi-lp
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

### 4-2. プロダクションビルドと実行

```bash
npm run build
npm start
```

### 4-3. スクリーンショットの再撮影

```bash
node capture.js
```

`screenshots/` 配下に最新の画像が生成されます。

---

## 5. 将来のWordPress移植に向けた引き継ぎメモ

本プロジェクトは、将来クライアント様の既存WordPress環境へ移行することを前提に設計されています。

### 5-1. データ層の独立設計（`src/data/siteData.ts`）
料金表、施工事例、連絡先情報がすべて `siteData.ts` に集約されています。
- **ACF（Advanced Custom Fields）へのマッピング**:
  - `householdServices` / `businessServices` → リピーターフィールド「料金一覧」
  - `caseStudies` → カスタム投稿タイプ「施工実績（works）」
  - `company` → オプションページ（テーマ設定）
- **REST API / ヘッドレスWordPress連携**:
  Next.jsをフロントエンドとしてそのまま維持し、WordPressをヘッドレスCMS（WP REST API）として投稿管理する構成へスムーズに拡張可能です。

### 5-2. 既存プラグイン（MW WP Form / Contact Form 7）への連携
- 本デモの `ContactSection.tsx` は、既存サイトで使用されている `MW WP Form` の全入力項目（お名前、フリガナ、メール、確認用メール、内容、同意チェック）と完全に互換性を持たせています。
- WordPressの固定ページにHTML/PHPとして埋め込む場合は、本フォームのクラス名・構造をMW WP Formのショートコードに容易に置換できます。

---

## 6. 公開にあたってのライセンス・コンプライアンス留意事項

- **検索避け（noindex）**:
  営業提案段階でのサイト競合を防ぐため、`robots: { index: false, follow: false }` を設定しています。本番公開時には `index: true` へ切り替えてください。
- **画像ライセンス**:
  公式サイトから取得した施工写真・ロゴは、営業提案用デモとしての仮使用前提です。正式公開時にはクライアント様より高解像度オリジナルデータをご提供いただくか、使用許諾を再確認してください。
