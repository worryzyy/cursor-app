import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from "./components/Footer";
import Header from "./components/Header";
import './globals.css';
// import { AAdsAdvertisement } from './components/Advertisements'
// import { FloatingAdsContainer } from './components/Advertisements'
import Script from 'next/script';
import { siteConfig } from "../config/site";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Cursor历史版本下载',
    template: '%s | Cursor Historical Version Download'
  },
  description: 'Download Cursor historical versions - AI-powered code editor for Windows, macOS, and Linux. Free download of all Cursor editor versions with version rollback support. | Cursor历史版本下载',
  keywords: [
    'Cursor Historical Version Download',
    'Cursor Download',
    'Cursor Editor',
    'AI Code Editor',
    'VSCode Alternative',
    'Cursor历史版本下载',
    'Cursor下载',
    'Cursor旧版本',
    'Cursor编辑器下载',
    'AI代码编辑器'
  ],
  authors: [{ name: 'Cursor History Team' }],
  creator: 'Cursor History',
  publisher: 'Cursor History',
  openGraph: {
    title: 'Cursor Historical Version Download',
    description: 'Download Cursor historical versions - AI-powered code editor for Windows, macOS, and Linux platforms',
    url: 'https://cursorhistory.com',
    siteName: 'Cursor Historical Version Download',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://cursorhistory.com',
    languages: {
      'zh-CN': 'https://cn.cursorhistory.com',
      'en': 'https://cursorhistory.com'
    }
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursor Historical Version Download",
    description: "Download Cursor historical versions - AI-powered code editor",
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense 验证元标签 */}
        <meta name="google-adsense-account" content="ca-pub-4633597437741439" />

        {/* 现有的 AdSense 脚本 */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4633597437741439"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0JKE59HPK5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0JKE59HPK5');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          {/* <FloatingAdsContainer /> */}
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* 固定侧边栏广告 - 直接HTML实现 */}
        {/* <div
          className="hidden lg:block fixed top-1/2 right-0 transform -translate-y-1/2 z-30"
        >
          <ins className="adsbygoogle"
            style={{ display: 'block', width: '180px', height: '250px' }}
            data-ad-client="ca-pub-4633597437741439"
            data-ad-slot="7291292882"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
        </div>

        <Script id="sidebar-adsense" strategy="afterInteractive">
          {`
            (adsbygoogle = window.adsbygoogle || []).push({});
          `}
        </Script> */}

        {/* 左侧广告位招租 - 方案一：简洁文本版 */}
        {/* <div className="hidden lg:block fixed left-0 top-1/2 transform -translate-y-1/2 z-30">
          <div
            className="w-[180px] h-[250px] bg-white border-2 border-gray-300 p-4 flex flex-col justify-center items-center text-center shadow-sm"
          >
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Ad Space Available</h3>
              <p className="text-xs text-gray-600 mb-3">Business Cooperation</p>
            </div>
            <div className="mb-4">
              <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <a
                href="mailto:cursor@cursorhistory.com"
                className="text-xs text-blue-600 hover:text-blue-800 break-words"
              >
                cursor@cursorhistory.com
              </a>
            </div>
            <p className="text-xs text-gray-500 leading-tight">
              Contact us for advertising opportunities
            </p>
          </div>
        </div> */}


      </body>
    </html>
  )
}
