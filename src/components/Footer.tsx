"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Printer, MapPin, ExternalLink } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Company Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white p-3 rounded-xl inline-block">
              <div className="relative w-48 sm:w-56 h-10">
                <Image
                  src="/images/logo.svg"
                  alt={SITE_DATA.company.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              福井市・坂井市を中心に、一般住宅からオフィス・店舗まで幅広く対応。<br />
              地域最安値と最丁寧をモットーに、真心を込めたクリーニングをお届けします。
            </p>

            <div className="text-xs text-slate-400 space-y-1 pt-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-300">代表者：</span>
                <span>{SITE_DATA.company.representative}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-blue-400 shrink-0 mt-0.5" />
                <span>
                  {SITE_DATA.company.zipCode} {SITE_DATA.company.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue-400 shrink-0" />
                <span>TEL：{SITE_DATA.company.tel}</span>
              </div>
              <div className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-brand-blue-400 shrink-0" />
                <span>FAX：{SITE_DATA.company.fax}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-brand-blue-500 pl-2.5">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-brand-blue-400 transition-colors">
                  サービス内容・料金一覧
                </a>
              </li>
              <li>
                <a href="#reasons" className="hover:text-brand-blue-400 transition-colors">
                  マルイチが選ばれる理由
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-brand-blue-400 transition-colors">
                  クリーニング施工実績
                </a>
              </li>
              <li>
                <a href="#flow" className="hover:text-brand-blue-400 transition-colors">
                  ご利用の流れ（4ステップ）
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-blue-400 transition-colors">
                  お問い合わせ・無料見積り
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Official Link Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-brand-blue-500 pl-2.5">
              OFFICIAL & POLICY
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              本ページに掲載されているサービス名、施工料金、会社概要、施工実績写真は、公式サイトの正確な公開情報に基づき構成されています。
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <a
                href={SITE_DATA.company.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-blue-400 hover:text-white transition-colors underline"
              >
                <span>公式サイトトップページ</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <br />
              <a
                href={SITE_DATA.company.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <span>プライバシーポリシー（個人情報保護方針）</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center sm:text-left">
          <p>©2025 ホームクリーニングマルイチ All Rights Reserved.</p>
          <p className="text-slate-400">
            ※本サイトは株式会社ホームクリーニングマルイチ様へのリニューアル提案用デモサイトです（非公式・非公開プレビュー）。
          </p>
        </div>
      </div>
    </footer>
  );
};
