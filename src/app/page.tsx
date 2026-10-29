import React from "react";
import { DemoNoticeBanner } from "@/components/DemoNoticeBanner";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import { ReasonsSection } from "@/components/ReasonsSection";
import { PricingSection } from "@/components/PricingSection";
import { ResultsSection } from "@/components/ResultsSection";
import { FlowSection } from "@/components/FlowSection";
import { CtaSection } from "@/components/CtaSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { MobileStickyCta } from "@/components/MobileStickyCta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* 提案デモバナー */}
      <DemoNoticeBanner />

      {/* SECTION 01: ヘッダー */}
      <Header />

      <main className="flex-grow">
        {/* SECTION 02: ファーストビュー */}
        <HeroSection />

        {/* SECTION 03: こんなお悩みはありませんか？ */}
        <ProblemsSection />

        {/* SECTION 04: マルイチが選ばれる3つの理由 */}
        <ReasonsSection />

        {/* SECTION 05: サービス内容・料金 ＆ 除菌抗菌クリーニング */}
        <PricingSection />

        {/* SECTION 06: クリーニング実績 ＆ Before/After */}
        <ResultsSection />

        {/* SECTION 07: クリーニングまでの流れ */}
        <FlowSection />

        {/* SECTION 08: 最終CTA（コンシェルジュ誘導） */}
        <CtaSection />

        {/* SECTION 09: お問い合わせフォーム */}
        <ContactSection />
      </main>

      {/* SECTION 10: フッター */}
      <Footer />

      {/* モバイル用固定CTAバー */}
      <MobileStickyCta />
    </div>
  );
}
