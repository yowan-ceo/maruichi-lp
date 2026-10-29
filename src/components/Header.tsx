"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, Mail } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "サービス内容" },
    { href: "#reasons", label: "選ばれる理由" },
    { href: "#results", label: "施工実績" },
    { href: "#flow", label: "ご利用の流れ" },
    { href: "#contact", label: "お問い合わせ" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5"
          : "bg-white py-3.5 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-48 sm:w-56 h-10 sm:h-12">
              <Image
                src="/images/logo.svg"
                alt={SITE_DATA.company.name}
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-slate-700 hover:text-brand-blue-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue-500 hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Phone */}
            <a
              href={SITE_DATA.company.telHref}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-50 hover:bg-brand-blue-50 text-slate-800 hover:text-brand-blue-700 border border-slate-200 transition-all text-left"
            >
              <div className="w-8 h-8 rounded-full bg-brand-blue-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <span className="block text-[10px] text-slate-500 font-medium">お電話でのお問い合わせ</span>
                <span className="block text-sm sm:text-base font-bold tracking-tight text-slate-900">
                  {SITE_DATA.company.tel}
                </span>
              </div>
            </a>

            {/* LINE */}
            <a
              href={SITE_DATA.company.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#06c755] hover:bg-[#05b34c] text-white text-sm font-bold shadow-sm transition-transform active:scale-95"
              aria-label="LINEでお問い合わせ"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>LINE相談</span>
            </a>

            {/* Web Estimate CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold shadow-md shadow-brand-orange/20 transition-all active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>無料お見積り</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SITE_DATA.company.telHref}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue-500 text-white shadow-sm md:hidden"
              aria-label="電話する"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-brand-blue-600 hover:bg-slate-100 focus:outline-none"
              aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xl transition-all">
          <div className="px-5 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 pb-4 border-b border-slate-100">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-slate-800 hover:text-brand-blue-600 py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="space-y-3 pt-2">
              <a
                href={SITE_DATA.company.telHref}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-brand-blue-50 text-brand-blue-800 font-bold border border-brand-blue-200"
              >
                <Phone className="w-5 h-5 text-brand-blue-600" />
                <span>お電話：{SITE_DATA.company.tel}</span>
              </a>

              <a
                href={SITE_DATA.company.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#06c755] text-white font-bold shadow"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>公式LINEで気軽に相談する</span>
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-brand-orange text-white font-bold shadow-md shadow-brand-orange/30"
              >
                <Mail className="w-5 h-5" />
                <span>無料お見積りフォームへ</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
