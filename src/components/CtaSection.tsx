"use client";

import React from "react";
import { Phone, MessageCircle, Mail, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-blue-50/60 via-brand-blue-100/40 to-white relative overflow-hidden">
      {/* Background graphic curves and water-like shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-blue-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-brand-blue-300/30 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border-2 border-brand-blue-200/80 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: Guiding Concierge Photo */}
            <div className="lg:col-span-5 relative flex justify-center bg-gradient-to-b from-brand-blue-50/50 to-white pt-6 lg:pt-0">
              <div className="relative w-full max-w-sm sm:max-w-md h-[380px] sm:h-[450px] lg:h-[480px] flex items-end justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/cta-concierge.jpg"
                  alt="お見積りをご案内するカスタマーコンシェルジュ"
                  loading="eager"
                  className="max-h-full w-auto object-contain object-bottom drop-shadow-md select-none"
                />

                {/* Subtle photo caption badge */}
                <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur-xs text-[10px] text-slate-500 px-2 py-0.5 rounded shadow-sm border border-slate-200">
                  ※リニューアル提案用イメージ
                </div>
              </div>
            </div>

            {/* Right Column: CTA Buttons & Heading */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 text-center lg:text-left">
              
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-100 text-brand-blue-800 text-xs sm:text-sm font-bold shadow-sm">
                <ShieldCheck className="w-4 h-4 text-brand-blue-600" />
                <span>現場調査・事前お見積りは完全無料</span>
              </div>

              {/* Main CTA Copy */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 leading-tight tracking-tight">
                  まずは無料でお見積もりください
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  ご家庭のエアコン・水回り清掃から、店舗やオフィスの定期メンテナンスまで。<br className="hidden sm:inline" />
                  気になる汚れやお悩みについて、まずはお気軽にご相談ください。
                </p>
              </div>

              {/* 3 Major CTA Buttons */}
              <div className="space-y-3.5 max-w-lg mx-auto lg:mx-0">
                
                {/* Button 1: Web Free Estimate (Orange, Large) */}
                <a
                  href="#contact"
                  className="group flex items-center justify-between gap-3 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange-hover hover:to-orange-600 text-white font-black text-lg sm:text-xl shadow-cta hover:shadow-2xl transition-all transform active:scale-98"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[11px] font-bold text-yellow-100">Webフォームから簡単受付</span>
                      <span>無料で見積もりする</span>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                </a>

                {/* Grid: Phone & LINE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Button 2: Phone consultation (Blue) */}
                  <a
                    href={SITE_DATA.company.telHref}
                    className="group flex items-center gap-3 py-3.5 px-4 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold transition-all shadow-md active:scale-98"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] text-brand-blue-100">電話で直接相談</span>
                      <span className="text-base font-extrabold">{SITE_DATA.company.tel}</span>
                    </div>
                  </a>

                  {/* Button 3: LINE consultation (Green) */}
                  <a
                    href={SITE_DATA.company.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 py-3.5 px-4 rounded-xl bg-[#06c755] hover:bg-[#05b34c] text-white font-bold transition-all shadow-md active:scale-98"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 fill-white" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] text-green-100">公式LINEで写真相談</span>
                      <span className="text-base font-extrabold">{SITE_DATA.company.lineId}</span>
                    </div>
                  </a>

                </div>

              </div>

              {/* Reassurance notes */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue-600" />
                  <span>しつこい営業・押し売りは一切いたしません</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-brand-blue-600" />
                  <span>現場調査・概算お見積りまで完全無料</span>
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
