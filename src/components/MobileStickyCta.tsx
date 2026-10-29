"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export const MobileStickyCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down slightly past hero section
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-float transition-all animate-fade-in">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href={SITE_DATA.company.telHref}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200 active:bg-brand-blue-100 transition-colors"
          aria-label="電話をかける"
        >
          <Phone className="w-5 h-5 mb-0.5 text-brand-blue-600" />
          <span className="text-[10px] font-bold">電話相談</span>
        </a>

        {/* LINE Button */}
        <a
          href={SITE_DATA.company.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#06c755] text-white font-bold active:opacity-90 shadow-sm transition-colors"
          aria-label="LINEで相談"
        >
          <MessageCircle className="w-5 h-5 mb-0.5 fill-white" />
          <span className="text-[10px]">LINE相談</span>
        </a>

        {/* Web Estimate Button */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-orange text-white font-bold active:bg-brand-orange-hover shadow-sm transition-colors"
          aria-label="無料見積もりフォームへ"
        >
          <Mail className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">無料見積り</span>
        </a>

      </div>
    </div>
  );
};
