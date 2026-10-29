"use client";

import React from "react";
import Image from "next/image";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

export const ProblemsSection: React.FC = () => {
  const problems = [
    {
      title: "内部にホコリや黒カビがびっしり…",
      text: "フィルター掃除だけでは届かない奥のアルミフィンや送風ファンに、ホコリと湿気によるカビが徐々に蓄積してしまいます。",
    },
    {
      title: "スイッチを入れた時の嫌なニオイ…",
      text: "エアコンから出る風がなんとなくカビ臭い、すっぱいニオイがする…それは内部に溜まった汚れが原因かもしれません。",
    },
    {
      title: "ご家族が過ごす空間を清潔に保ちたい…",
      text: "小さなお子様やご高齢のご家族、ペットがいるご家庭では、毎日吸い込む空気の清潔さがとても大切です。",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs sm:text-sm font-bold mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>こんなお悩みはありませんか？</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            ご自宅のエアコン、<br />
            <span className="text-red-600 underline decoration-red-300 underline-offset-8">
              1〜2年お手入れしないと…
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            外見はきれいに見えても、エアコンの内部には思っている以上にホコリや湿気が潜んでいます。
          </p>
        </div>

        {/* Real Dirty AC Photo & Problem Points Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Photo: actual dirty AC from official site */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 group">
              <div className="relative h-64 sm:h-80 md:h-96 w-full">
                <Image
                  src="/images/care.jpg"
                  alt="埃とカビだらけのエアコン内部の写真"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute top-4 left-4 bg-red-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md backdrop-blur-xs flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-yellow-300" />
                <span>実際のエアコン内部の様子</span>
              </div>

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 text-white">
                <p className="text-xs sm:text-sm font-medium leading-relaxed">
                  表面のフィルターを洗うだけでは、奥の熱交換器や送風口に付着した頑固な汚れは落とせません。
                </p>
              </div>
            </div>
            <p className="text-center text-xs text-slate-400 mt-2">
              ※放置された家庭用エアコンの内部状況（実例写真）
            </p>
          </div>

          {/* Problem List Cards */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {problems.map((prob, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-blue-300 hover:bg-brand-blue-50/30 transition-all shadow-sm"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">
                    0{idx + 1}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {prob.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {prob.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Solution Prompt */}
            <div className="p-5 sm:p-6 rounded-xl bg-brand-blue-500 text-white shadow-lg space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-yellow shrink-0" />
                <h4 className="font-extrabold text-base sm:text-lg">
                  プロの高圧洗浄なら、内部の奥までスッキリ！
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-brand-blue-100 leading-relaxed">
                マルイチでは、専用の養生シートと高圧洗浄機で徹底洗浄。高濃度アルカリ電解水とスチーム除菌で、見違えるような爽快な空気を取り戻します。
              </p>
              <div className="pt-1">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-white text-brand-blue-700 hover:bg-brand-yellow hover:text-slate-900 px-4 py-2 rounded-lg transition-colors shadow-sm"
                >
                  <span>エアコンクリーニング料金を見る</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
