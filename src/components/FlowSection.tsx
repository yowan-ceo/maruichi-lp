"use client";

import React from "react";
import { MessageSquare, ClipboardCheck, CalendarCheck, Sparkles, ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export const FlowSection: React.FC = () => {
  const stepIcons = [MessageSquare, ClipboardCheck, CalendarCheck, Sparkles];

  return (
    <section id="flow" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            クリーニングまでの流れ
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            <span className="inline-block">ご相談から施工完了まで、</span>
            <span className="inline-block">明朗で安心の4ステップです。</span>
          </p>
        </div>

        {/* 4 Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {SITE_DATA.steps.map((item, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={idx}
                className="relative bg-gradient-to-b from-brand-blue-50/40 via-white to-white rounded-2xl p-6 border-2 border-slate-100 hover:border-brand-blue-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                {/* Step Number Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-brand-blue-200 group-hover:text-brand-blue-400 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1">
                  <div className="inline-block bg-brand-blue-100/80 text-brand-blue-800 text-[11px] font-bold px-2 py-0.5 rounded">
                    ステップ {item.step}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Point */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="block text-center text-xs font-bold text-brand-orange bg-brand-orange-light/50 py-1.5 px-2 rounded-lg">
                    {item.point}
                  </span>
                </div>

                {/* Desktop connector arrow */}
                {idx < SITE_DATA.steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-brand-blue-300 bg-white rounded-full p-1 shadow-sm border border-slate-200">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Free estimate note card */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-brand-blue-50 border border-brand-blue-200/80 max-w-2xl mx-auto text-center space-y-2">
          <p className="text-xs sm:text-sm font-bold text-brand-blue-900">
            現場調査やお見積りの算出までは【完全無料】です。
          </p>
          <p className="text-xs text-slate-600">
            無理な営業やご契約の強要は一切ございませんので、まずは気兼ねなくご相談ください。
          </p>
        </div>

      </div>
    </section>
  );
};
