import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://home-cleaning-maruichi.com"),
  title: "ホームクリーニング マルイチ｜福井県のエアコン・店舗ハウスクリーニング【リニューアル提案デモ】",
  description:
    "福井市・坂井市を中心に一般住宅からオフィス・店舗まで幅広く対応。地域最安値×最丁寧を目指すホームクリーニングマルイチの公式サイトリニューアル提案デモページです。",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title: "ホームクリーニング マルイチ｜LP全面リニューアル提案デモ",
    description: "福井県のエアコン・店舗清掃なら、地域最安値×最丁寧を目指すマルイチへ。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/campaign.jpg",
        width: 1020,
        height: 680,
        alt: "ホームクリーニング マルイチ",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#00a5d4" />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-800 min-h-screen flex flex-col selection:bg-brand-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
