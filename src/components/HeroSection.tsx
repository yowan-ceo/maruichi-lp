"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-50/70 via-white to-brand-blue-50/30 pt-6 pb-16 lg:pt-12 lg:pb-24">
      {/* Background graphic elements - subtle water/air curves */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-brand-blue-100/60 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Catchphrase & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Area & Quality Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-100/80 border border-brand-blue-300/60 text-brand-blue-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-blue-600 animate-pulse" />
              <span>福井市・坂井市を中心に福井県全域対応</span>
            </div>

            {/* Main Catchphrase */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-slate-900 leading-[1.25] tracking-tight">
              福井県の<br className="hidden sm:inline" />
              <span className="text-brand-blue-600 inline-block">エアコン・店舗清掃</span>なら、<br />
              <span className="relative inline-block mt-1">
                <span className="relative z-10 text-brand-navy whitespace-nowrap">
                  地域最安値 × 最丁寧
                </span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-brand-yellow/60 -z-0 rounded" />
              </span>
              を<br className="sm:hidden" />目指すマルイチへ。
            </h1>

            {/* Sub Catchphrase */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {SITE_DATA.company.subCatchphrase}
            </p>

            {/* Campaign Banner / Badge */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-100/80 border-2 border-brand-yellow shadow-sm max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full sm:w-36 h-24 shrink-0 rounded-xl overflow-hidden border border-yellow-300 shadow-inner">
                  <Image
                    src="/images/campaign.jpg"
                    alt={SITE_DATA.campaign.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-1 left-1 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    割引中
                  </div>
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-brand-orange text-white text-[11px] font-extrabold px-2 py-0.5 rounded-full">
                      {SITE_DATA.campaign.badge}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                    家庭用エアコンクリーニング{" "}
                    <span className="text-red-600 text-2xl font-black">1,000円OFF!</span>
                  </h2>
                  <p className="text-xs text-slate-500 leading-normal">
                    {SITE_DATA.campaign.note}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 space-y-3 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Main Estimate CTA */}
                <a
                  href="#contact"
                  className="flex-1 group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange-hover hover:to-orange-600 text-white font-black text-lg shadow-cta hover:shadow-lg transition-all transform active:scale-98"
                >
                  <span>無料で見積もりする</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Phone CTA */}
                <a
                  href={SITE_DATA.company.telHref}
                  className="group flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-white hover:bg-brand-blue-50 text-brand-blue-700 font-bold border-2 border-brand-blue-500 shadow-sm transition-all"
                >
                  <Phone className="w-5 h-5 text-brand-blue-600" />
                  <div className="text-left leading-none">
                    <span className="block text-[10px] text-slate-500">電話で直接相談</span>
                    <span className="text-base font-extrabold">{SITE_DATA.company.tel}</span>
                  </div>
                </a>
              </div>

              {/* LINE CTA Link */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-1">
                <a
                  href={SITE_DATA.company.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#06c755] transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-[#06c755] text-white flex items-center justify-center">
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  </span>
                  <span>公式LINEでも写真・お見積もり相談受付中（@{SITE_DATA.company.lineId.replace('@', '')}）</span>
                </a>
              </div>
            </div>

            {/* Key Trust Points */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/80 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-1.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0" />
                <span className="font-semibold">現場調査・お見積り無料</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0" />
                <span className="font-semibold">追加料金なし明朗会計</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0" />
                <span className="font-semibold">除菌・抗菌仕上げ対応</span>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Cleaning Photos Collage */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative max-w-md mx-auto">
              
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue-100 to-cyan-50 rounded-3xl transform rotate-2 -z-10 shadow-lg border border-brand-blue-200/50" />

              {/* Grid of actual photos */}
              <div className="grid grid-cols-2 gap-3 p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100">
                
                {/* Photo 1: Air conditioner deep high-pressure cleaning */}
                <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden group shadow-sm">
                  <Image
                    src="/images/worker-ac.jpg"
                    alt="エアコン高圧分解洗浄の施工風景"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-white text-xs font-bold bg-brand-blue-600/90 px-2 py-0.5 rounded backdrop-blur-xs">
                      エアコン高圧洗浄
                    </span>
                  </div>
                </div>

                {/* Photo 2: Home range hood cleaning */}
                <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden group shadow-sm">
                  <Image
                    src="/images/home.jpg"
                    alt="一般家庭向け換気扇・キッチンクリーニング"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-white text-xs font-bold bg-brand-navy/90 px-2 py-0.5 rounded backdrop-blur-xs">
                      家庭用キッチン・水回り
                    </span>
                  </div>
                </div>

                {/* Photo 3: Clinic Sofa Cleaning */}
                <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden group shadow-sm">
                  <Image
                    src="/images/worker-sofa.jpg"
                    alt="クリニック布ソファの専用機材バキューム清掃"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-white text-xs font-bold bg-brand-navy/90 px-2 py-0.5 rounded backdrop-blur-xs">
                      布ソファ専用洗浄
                    </span>
                  </div>
                </div>

                {/* Photo 4: Restaurant kitchen floor */}
                <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden group shadow-sm">
                  <Image
                    src="/images/result01.jpg"
                    alt="飲食店厨房の床・換気設備クリーニング"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-white text-xs font-bold bg-brand-blue-600/90 px-2 py-0.5 rounded backdrop-blur-xs">
                      店舗・厨房クリーニング
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white py-2.5 px-4 rounded-xl shadow-lg border border-brand-blue-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/30 flex items-center justify-center font-black text-amber-700 text-lg">
                  福井
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500">地域密着サポート</div>
                  <div className="text-sm font-extrabold text-slate-900">迅速＆親身な対応</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
