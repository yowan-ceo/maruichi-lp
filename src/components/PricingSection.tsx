"use client";

import React from "react";
import Image from "next/image";
import { Home, Building2, Check, AlertCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export const PricingSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-brand-blue-100 text-brand-blue-700 text-xs sm:text-sm font-bold mb-3 tracking-wider">
            SERVICES & PRICE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            サービス内容・料金一覧
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            分かりやすく明瞭な料金体系。ご予算やご要望に合わせた柔軟なお見積りも承ります。
          </p>
          <div className="mt-3 inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-md">
            ※表示価格はすべて税別価格です
          </div>
        </div>

        {/* 2-Column Pricing Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Column 1: Household Services */}
          <div className="bg-gradient-to-b from-brand-blue-50/40 to-white rounded-2xl border-2 border-brand-blue-200/80 shadow-lg p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-500 text-white flex items-center justify-center shadow-md">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-blue-600 tracking-wide uppercase">
                      For Residence
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      一般家庭向けサービス
                    </h3>
                  </div>
                </div>
                <div className="relative w-16 h-12 rounded-lg overflow-hidden hidden sm:block border border-slate-200">
                  <Image
                    src="/images/home.jpg"
                    alt="一般家庭クリーニング"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-slate-100">
                {SITE_DATA.householdServices.map((item) => (
                  <div
                    key={item.id}
                    className="py-3.5 flex items-center justify-between gap-4 group hover:bg-white/80 px-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-brand-blue-100 text-brand-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-800 text-sm sm:text-base">
                            {item.name}
                          </span>
                          {item.popular && (
                            <span className="bg-red-500 text-white text-[10px] font-black px-1.5 py-0.2 rounded">
                              一番人気
                            </span>
                          )}
                        </div>
                        {item.note && (
                          <span className="block text-xs text-slate-500 mt-0.5 font-medium">
                            {item.note}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-lg sm:text-xl font-black text-brand-blue-700 tracking-tight">
                        {item.price}
                      </span>
                      <span className="block text-[10px] text-slate-400">（税別）</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Household Note */}
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/70 flex items-start gap-2.5 text-xs text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>エアコンクリーニングに関するお願い：</strong><br />
                  お掃除機能付きエアコンクリーニングの場合は、お問い合わせの際にその旨をお伝えください。
                </p>
              </div>

            </div>

            {/* Column CTA */}
            <div className="pt-6 mt-6 border-t border-slate-100 text-center">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-bold text-sm shadow transition-colors"
              >
                <span>一般家庭のクリーニングを無料相談</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Business & Commercial Services */}
          <div className="bg-gradient-to-b from-slate-50 to-white rounded-2xl border-2 border-slate-200/90 shadow-lg p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center shadow-md">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-navy tracking-wide uppercase">
                      For Business & Office
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      店舗・法人向けサービス
                    </h3>
                  </div>
                </div>
                <div className="relative w-16 h-12 rounded-lg overflow-hidden hidden sm:block border border-slate-200">
                  <Image
                    src="/images/business.jpg"
                    alt="業務用クリーニング"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-slate-100">
                {SITE_DATA.businessServices.map((item) => (
                  <div
                    key={item.id}
                    className="py-3.5 flex items-center justify-between gap-4 group hover:bg-white/80 px-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-800 text-sm sm:text-base">
                            {item.name}
                          </span>
                          {item.popular && (
                            <span className="bg-brand-blue-600 text-white text-[10px] font-black px-1.5 py-0.2 rounded">
                              定期需要No.1
                            </span>
                          )}
                        </div>
                        {item.note && (
                          <span className="block text-xs text-slate-500 mt-0.5 font-medium">
                            {item.note}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-lg sm:text-xl font-black text-brand-navy tracking-tight">
                        {item.price}
                      </span>
                      <span className="block text-[10px] text-slate-400">（税別）</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Note */}
              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
                <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>店舗・オフィスの定期清掃も対応：</strong><br />
                  複数台の一括清掃や月次・隔月の定期訪問プランなど、現場規模に応じた個別お見積りを作成いたします。
                </p>
              </div>

            </div>

            {/* Column CTA */}
            <div className="pt-6 mt-6 border-t border-slate-100 text-center">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-brand-navy hover:bg-slate-800 text-white font-bold text-sm shadow transition-colors"
              >
                <span>店舗・オフィスクリーニングを無料相談</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Disinfection & Antibacterial Cleaning Explanatory Box (Official Specification) */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-brand-blue-900 to-slate-900 text-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-72 h-72 bg-brand-blue-500/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-blue-500 text-white flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-yellow tracking-wider">
                    CLEAN & SAFE TECHNOLOGY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black">
                    {SITE_DATA.disinfectionInfo.title}
                  </h3>
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-brand-blue-200">
                公式サイト掲載の安心施工工程
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              目に見える汚れの除去だけでなく、清潔で安心な空間づくりのために、科学的根拠に基づいた2段階の除菌・抗菌プロセスを施工に取り入れています。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-xs p-4 sm:p-5 rounded-xl border border-white/10">
                <div className="text-xs font-bold text-brand-yellow mb-1">
                  工程 01｜有機物・雑菌の分解洗浄
                </div>
                <div className="text-sm sm:text-base font-bold mb-1">
                  高濃度アルカリ電解水 × 高温スチーム
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  高濃度のアルカリ電解水で雑菌や有機物を強力に分解した後、高温スチームでしっかりと洗浄・汚れを浮き上がらせます。
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs p-4 sm:p-5 rounded-xl border border-white/10">
                <div className="text-xs font-bold text-brand-yellow mb-1">
                  工程 02｜仕上げ除菌施工
                </div>
                <div className="text-sm sm:text-base font-bold mb-1">
                  有機物除去後の次亜塩素酸水コーティング
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  施工面の有機物をあらかじめ除去した清浄な状態にした上で次亜塩素酸水を施工することで、最大限の除菌効果を発揮させます。
                </p>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-right">
              ※効果を誇張せず、公式サイトに記載された施工技術を正確にご説明しております。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
