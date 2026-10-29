"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, X, MapPin, Tag } from "lucide-react";
import { SITE_DATA, CaseStudy, BeforeAfterImage } from "@/data/siteData";

export const ResultsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  return (
    <section id="results" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3.5 py-1 rounded-full bg-brand-blue-100 text-brand-blue-700 text-xs sm:text-sm font-bold mb-3 tracking-wider">
            CASE STUDIES & RESULTS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            実際のクリーニング施工実績
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            公式サイトに掲載されている実際の施工現場とビフォーアフター事例をご紹介します。<br className="hidden sm:inline" />
            写真はすべて現場で撮影された本物の施工記録です。
          </p>
        </div>

        {/* 4 Official Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SITE_DATA.caseStudies.map((item: CaseStudy) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group"
            >
              {/* Photo with zoom trigger */}
              <div
                className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() =>
                  setSelectedImage({
                    src: item.image,
                    title: `${item.category}｜${item.location}`,
                    description: item.description,
                  })
                }
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <ZoomIn className="w-4 h-4" />
                    拡大して見る
                  </span>
                </div>

                {/* Category & Location Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="bg-brand-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                    {item.category}
                  </span>
                  <span className="bg-slate-900/80 backdrop-blur-xs text-white text-xs font-medium px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                    <MapPin className="w-3 h-3 text-brand-yellow" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                    >
                      <Tag className="w-3 h-3 text-brand-blue-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before / After Gallery Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-1">
              PROVEN RESULTS
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900">
              Before / After 施工事例
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              同一現場の施工前・施工後を撮影した公式記録写真です。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SITE_DATA.beforeAfterGallery.map((ba: BeforeAfterImage) => (
              <div
                key={ba.id}
                className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 sm:h-72 w-full rounded-xl overflow-hidden shadow-inner group cursor-pointer bg-slate-200 mb-4"
                    onClick={() =>
                      setSelectedImage({
                        src: ba.image,
                        title: ba.title,
                        description: ba.description,
                      })
                    }
                  >
                    <Image
                      src={ba.image}
                      alt={ba.title}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                        <ZoomIn className="w-4 h-4" />
                        クリックで全体を拡大
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    {ba.title}
                  </h4>
                  <p className="text-xs font-semibold text-brand-blue-700 mb-2">
                    {ba.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ba.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="閉じる"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-[55vh] sm:h-[65vh] w-full bg-slate-950">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 bg-white space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
