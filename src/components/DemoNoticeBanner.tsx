"use client";

import React, { useState } from "react";
import { Info, ExternalLink, X } from "lucide-react";

export const DemoNoticeBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-slate-900 text-slate-100 text-xs sm:text-sm py-2 px-4 border-b border-slate-700 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Info className="w-4 h-4 text-brand-blue-400 shrink-0 hidden sm:inline" />
          <span>
            <strong className="bg-brand-blue-600 text-white px-1.5 py-0.5 rounded text-[11px] font-semibold mr-2">
              ご提案デモ
            </strong>
            本サイトは「ホームクリーニング マルイチ」様へのLPリニューアル提案用プレビューサイトです。
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="https://home-cleaning-maruichi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue-300 hover:text-white underline flex items-center gap-1 transition-colors"
          >
            現行公式サイトを見る
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="バナーを閉じる"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
