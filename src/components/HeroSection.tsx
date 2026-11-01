"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-50/70 via-white to-brand-blue-50/30 pt-6 pb-14 lg:pt-10 lg:pb-20">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-brand-blue-100/60 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Catchphrase & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Area & Quality Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-100/90 border border-brand-blue-300/60 text-brand-blue-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-blue-600 animate-pulse" />
              <span>福井市・坂井市を中心に福井県全域対応</span>
            </div>

            {/* Main Catchphrase */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-black text-slate-900 leading-[1.3] tracking-tight">
              <span className="inline-block">福井県の</span>
              <span className="inline-block text-brand-blue-600">エアコン・店舗清掃</span>なら、<br />
              <span className="relative inline-block mt-1 sm:mt-1.5">
                <span className="relative z-10 text-brand-navy">
                  地域最安値 × 最丁寧
                </span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-brand-yellow/60 -z-0 rounded" />
              </span>
              <span className="inline-block">を目指す</span><br />
              <span className="inline-block text-brand-blue-600">マルイチへ。</span>
            </h1>

            {/* Sub Catchphrase */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              <span className="inline-block">福井県を中心に、</span>
              <span className="inline-block">ご家庭から店舗・オフィスまで幅広く対応。</span><br className="hidden sm:inline" />
              <span className="inline-block">エアコンや換気扇、</span>
              <span className="inline-block">床、ソファなど、</span>
              <span className="inline-block">さまざまな場所のクリーニングを丁寧に行います。</span>
            </p>

            {/* Campaign Banner / Badge */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-100/80 border-2 border-brand-yellow shadow-sm max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full sm:w-36 h-28 sm:h-24 shrink-0 rounded-xl overflow-hidden border border-yellow-300 shadow-inner bg-slate-900">
                  <Image
                    src="/images/campaign.jpg"
                    alt={SITE_DATA.campaign.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
                    割引中
                  </div>
                </div>

                <div className="flex-1 space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="bg-brand-orange text-white text-[11px] font-extrabold px-2 py-0.5 rounded-full">
                      {SITE_DATA.campaign.badge}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 leading-snug">
                    <span className="inline-block">家庭用エアコンクリーニング</span>{" "}
                    <span className="inline-block text-red-600 text-xl sm:text-2xl font-black whitespace-nowrap">
                      1,000円OFF!
                    </span>
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

          {/* Right Column: Balanced Cleaning Photos Grid (Cleanly Contained) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 w-full">
            <div className="relative max-w-md mx-auto bg-white p-3 rounded-3xl shadow-xl border border-brand-blue-100 overflow-hidden">
              
              {/* Grid of actual photos */}
              <div className="grid grid-cols-2 gap-2.5">
                
                {/* Photo 1: AC cleaning action */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 group shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/worker-ac.jpg"
                    alt="エアコン高圧分解洗浄の施工風景"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-2">
                    <span className="text-white text-[11px] font-bold block">
                      エアコン高圧洗浄
                    </span>
                  </div>
                </div>

                {/* Photo 2: Home range hood */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 group shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/home.jpg"
                    alt="一般家庭向け換気扇・キッチンクリーニング"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-2">
                    <span className="text-white text-[11px] font-bold block">
                      家庭用キッチン
                    </span>
                  </div>
                </div>

                {/* Photo 3: Sofa cleaning action */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 group shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/worker-sofa.jpg"
                    alt="クリニック布ソファの専用機材バキューム清掃"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-2">
                    <span className="text-white text-[11px] font-bold block">
                      布ソファ洗浄
                    </span>
                  </div>
                </div>

                {/* Photo 4: Restaurant kitchen floor */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 group shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/result01.jpg"
                    alt="飲食店厨房の床・換気設備クリーニング"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-2">
                    <span className="text-white text-[11px] font-bold block">
                      店舗・厨房清掃
                    </span>
                  </div>
                </div>

              </div>

              {/* Contained bottom banner (No overflowing negative margins) */}
              <div className="mt-2.5 py-2 px-3 rounded-xl bg-brand-blue-50 border border-brand-blue-200/80 flex items-center justify-between text-left">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-brand-blue-500 text-white font-black text-xs flex items-center justify-center">
                    福井
                  </span>
                  <div>
                    <span className="text-[10px] text-slate-500 font-semibold block">地域密着サポート</span>
                    <span className="text-xs font-bold text-slate-900">福井市・坂井市対応</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-brand-blue-700 bg-white px-2.5 py-1 rounded-md border border-brand-blue-200">
                  お見積り完全無料
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
