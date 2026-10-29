"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, ExternalLink, ShieldCheck, X } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    kana: "",
    email: "",
    emailConfirm: "",
    content: "",
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = "お名前を入力してください。";
    }

    if (!formData.kana.trim()) {
      errs.kana = "フリガナを入力してください。";
    }

    if (!formData.email.trim()) {
      errs.email = "メールアドレスを入力してください。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "有効なメールアドレス形式で入力してください。";
    }

    if (!formData.emailConfirm.trim()) {
      errs.emailConfirm = "確認用メールアドレスを入力してください。";
    } else if (formData.email !== formData.emailConfirm) {
      errs.emailConfirm = "メールアドレスが一致しません。";
    }

    if (!formData.content.trim()) {
      errs.content = "お問い合わせ内容を入力してください。";
    }

    if (!formData.agree) {
      errs.agree = "プライバシーポリシーへの同意が必要です。";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate validation and processing safely without sending dummy data anywhere
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccessModalOpen(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-brand-blue-100 text-brand-blue-700 text-xs sm:text-sm font-bold mb-3 tracking-wider">
            CONTACT FORM
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            お問い合わせ・無料お見積り
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            清掃のご相談や現場調査のお申し込みは、下記フォームよりお気軽にご連絡ください。
          </p>
        </div>

        {/* Demo Safe Notice Banner */}
        <div className="mb-8 p-4 rounded-xl bg-brand-blue-50/80 border border-brand-blue-200 text-xs sm:text-sm text-brand-blue-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-brand-blue-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">
              【リニューアル提案デモに関するご案内】
            </p>
            <p className="text-slate-600 text-xs leading-relaxed">
              本ページは営業提案用のデモのため、入力された個人情報は外部へ送信されません。動作検証（バリデーションや入力体験）をお試しいただけます。実際の正式なお問い合わせをご希望の方は、公式サイトの専用フォームまたはお電話（{SITE_DATA.company.tel}）をご利用ください。
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-card">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-800 mb-2">
                お名前 <span className="bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded ml-1.5">必須</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="例）丸一 太郎"
                className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.name ? "border-red-500 focus:ring-red-200" : "border-slate-300 focus:border-brand-blue-500 focus:ring-brand-blue-200"
                }`}
              />
              {errors.name && <p className="text-xs text-red-600 mt-1.5 font-medium">{errors.name}</p>}
            </div>

            {/* Furigana */}
            <div>
              <label htmlFor="kana" className="block text-sm font-bold text-slate-800 mb-2">
                フリガナ <span className="bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded ml-1.5">必須</span>
              </label>
              <input
                type="text"
                id="kana"
                value={formData.kana}
                onChange={(e) => setFormData({ ...formData, kana: e.target.value })}
                placeholder="例）マルイチ タロウ"
                className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.kana ? "border-red-500 focus:ring-red-200" : "border-slate-300 focus:border-brand-blue-500 focus:ring-brand-blue-200"
                }`}
              />
              {errors.kana && <p className="text-xs text-red-600 mt-1.5 font-medium">{errors.kana}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-800 mb-2">
                メールアドレス <span className="bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded ml-1.5">必須</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="例）maruichi@example.com"
                className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.email ? "border-red-500 focus:ring-red-200" : "border-slate-300 focus:border-brand-blue-500 focus:ring-brand-blue-200"
                }`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1.5 font-medium">{errors.email}</p>}
            </div>

            {/* Email Confirm */}
            <div>
              <label htmlFor="emailConfirm" className="block text-sm font-bold text-slate-800 mb-2">
                メールアドレス（確認） <span className="bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded ml-1.5">必須</span>
              </label>
              <input
                type="email"
                id="emailConfirm"
                value={formData.emailConfirm}
                onChange={(e) => setFormData({ ...formData, emailConfirm: e.target.value })}
                placeholder="確認のためもう一度ご入力ください"
                className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.emailConfirm ? "border-red-500 focus:ring-red-200" : "border-slate-300 focus:border-brand-blue-500 focus:ring-brand-blue-200"
                }`}
              />
              {errors.emailConfirm && <p className="text-xs text-red-600 mt-1.5 font-medium">{errors.emailConfirm}</p>}
            </div>

            {/* Inquiries / Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-bold text-slate-800 mb-2">
                お問い合わせ内容 <span className="bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded ml-1.5">必須</span>
              </label>
              <textarea
                id="content"
                rows={5}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="清掃箇所（エアコン、浴室、店舗厨房など）、台数、ご希望の日程やご住所などをご記入ください。"
                className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all resize-y ${
                  errors.content ? "border-red-500 focus:ring-red-200" : "border-slate-300 focus:border-brand-blue-500 focus:ring-brand-blue-200"
                }`}
              />
              {errors.content && <p className="text-xs text-red-600 mt-1.5 font-medium">{errors.content}</p>}
            </div>

            {/* Privacy Policy Check */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded text-brand-blue-600 border-slate-300 focus:ring-brand-blue-400"
                />
                <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <button
                    type="button"
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="text-brand-blue-600 hover:text-brand-blue-800 underline font-bold"
                  >
                    プライバシーポリシー
                  </button>
                  に同意する <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded ml-1">必須</span>
                </span>
              </label>
              {errors.agree && <p className="text-xs text-red-600 mt-1.5 font-medium">{errors.agree}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-80 py-4 px-8 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange-hover hover:to-orange-600 text-white font-extrabold text-base sm:text-lg shadow-cta hover:shadow-xl transition-all transform active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? "確認中..." : "入力内容を確認して送信する"}
              </button>
              <p className="text-xs text-slate-400 mt-3">
                ※営業デモのため、送信ボタン押下後も外部への情報送信は行われません。
              </p>
            </div>

          </form>
        </div>

      </div>

      {/* Success / Demo Completion Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 animate-fade-in relative">
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-black text-slate-900">
                バリデーション検証完了（デモ動作）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                フォームの入力バリデーションは正常にクリアされました。<br />
                本提案デモでは安全のため<strong>実際の外部送信は行っておりません</strong>。
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
              <div className="font-bold text-slate-800">入力された内容（デモ確認）:</div>
              <div>お名前: {formData.name}（{formData.kana}）</div>
              <div>メールアドレス: {formData.email}</div>
              <div>内容: {formData.content.slice(0, 60)}...</div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href="https://home-cleaning-maruichi.com/#mailForm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold text-sm shadow transition-colors"
              >
                <span>公式サイトの本番フォームで問い合わせる</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-sm transition-colors"
              >
                デモ画面に戻る
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl relative">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-blue-600" />
                プライバシーポリシー（個人情報保護方針）
              </h3>
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                ホームクリーニングマルイチ（以下「当社」といいます。）は、本ウェブサイト上で提供するサービスにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。
              </p>
              
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">第1条（個人情報）</h4>
                <p>「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報を指します。</p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">第2条（個人情報の収集方法）</h4>
                <p>当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。</p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">第3条（個人情報を収集・利用する目的）</h4>
                <p>当社サービスの提供・運営のため、ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）、メンテナンスや重要なお知らせなど必要に応じたご連絡のため。</p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">第4条（個人情報の第三者提供）</h4>
                <p>当社は、法令その他に別段の定めのある場合を除き、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。</p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">第5条（お問い合わせ窓口）</h4>
                <p>
                  住所：〒910-0066 福井市八ツ島1-202-1<br />
                  社名：ホームクリーニングマルイチ<br />
                  代表：丸山 孝一<br />
                  TEL：090-7746-2561
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 text-right">
              <button
                type="button"
                onClick={() => setIsPrivacyModalOpen(false)}
                className="py-2 px-5 rounded-lg bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold text-xs"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
