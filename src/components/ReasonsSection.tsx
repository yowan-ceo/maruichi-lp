"use client";

import React from "react";
import { DollarSign, Sparkles, Building2, Check } from "lucide-react";

export const ReasonsSection: React.FC = () => {
  const cards = [
    {
      num: "01",
      title: "地域最安値を目指す価格",
      subtitle: "明確＆安心の料金システム",
      icon: DollarSign,
      image: "/images/campaign.jpg",
      points: [
        "中間マージンをカットした良心的な適正価格",
        "現場調査・事前お見積りは完全無料",
        "作業後の不当な追加請求・不明瞭な費用はゼロ",
      ],
      desc: "福井地域の皆様に気軽にプロのクリーニングをご利用いただけるよう、無駄な営業コストや仲介料を省き、地域最安値水準の価格に挑戦し続けています。",
    },
    {
      num: "02",
      title: "丁寧なクリーニング",
      subtitle: "細部の隙間まで徹底清掃",
      icon: Sparkles,
      image: "/images/worker-ac.jpg",
      imagePosition: "object-[center_15%]",
      points: [
        "高圧洗浄機＋専用薬剤による徹底洗浄",
        "機械が届かない隙間や角は手作業で仕上げ",
        "養生を徹底し家具やお部屋をしっかり保護",
      ],
      desc: "「最丁寧」をモットーに掲げ、見えない内部や取り外しにくいパーツの奥まで妥協なく綺麗にします。お客様の大切なお住まい・店舗を丁寧に扱います。",
    },
    {
      num: "03",
      title: "家庭から法人まで幅広く対応",
      subtitle: "豊富な施工実績と柔軟な体制",
      image: "/images/business.jpg",
      imagePosition: "object-center",
      points: [
        "一般住宅の水回り・エアコン1台から歓迎",
        "飲食店厨房・クリニック・オフィス等の定期清掃",
        "高校宿舎150台以上の大規模一括施工実績",
      ],
      desc: "一般家庭の日常的なお掃除から、店舗の頑固な油汚れ、クリニックのソファ衛生管理、学校宿舎の大規模施工まで、場所や規模を問わず柔軟に対応可能です。",
    },
  ];

  return (
    <section id="reasons" className="py-16 sm:py-24 bg-gradient-to-b from-brand-blue-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            <span className="inline-block">ホームクリーニング マルイチが</span><br className="sm:hidden" />
            <span className="text-brand-blue-600 inline-block mt-1 sm:mt-0">選ばれる3つの理由</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            <span className="inline-block">福井市・坂井市を中心に、</span>
            <span className="inline-block">確かな技術と誠実な価格で地域の皆様に選ばれています。</span>
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group"
              >
                {/* Image & Number Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`w-full h-full object-cover ${card.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent" />
                  
                  {/* Number Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-brand-blue-600 text-white font-black text-xs px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                    <span>理由</span>
                    <span className="text-brand-yellow font-extrabold text-sm">{card.num}</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-semibold text-brand-blue-200 block">
                      {card.subtitle}
                    </span>
                    <h3 className="text-lg font-black leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    {card.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-brand-blue-100 text-brand-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
