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

        {/* 左侧广告容器 */}
        <div className="hidden lg:block fixed left-0 top-1/2 transform -translate-y-1/2 z-10">
          <div className="flex flex-col space-y-4">
            {/* Hostinger广告 */}
            <div className="ml-2">
              <a href="https://www.hostg.xyz/aff_c?offer_id=6&aff_id=148530&file_id=1357">
                <img 
                  src="https://media.go2speed.org/brand/files/hostinger/6/EN-300x600.jpg" 
                  width={180} 
                  height={360} 
                  alt="Hostinger" 
                  className="w-[180px] h-auto shadow-lg"
                />
              </a>
              <img 
                src="https://www.hostg.xyz/aff_i?offer_id=6&file_id=1357&aff_id=148530" 
                width={0} 
                height={0} 
                style={{ position: 'absolute', visibility: 'hidden' }} 
                alt=""
              />
            </div>

            {/* 广告位招租 */}
            <div className="ml-2">
              <div
                className="w-[180px] h-[250px] bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-lg p-4 flex flex-col justify-center items-center text-center shadow-lg"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">Ad Space Available</h3>
                  <p className="text-xs text-blue-600 font-medium">Premium Location</p>
                </div>
                <div className="mb-4">
                  <a
                    href="mailto:cursor@cursorhistory.com"
                    className="text-xs text-gray-700 hover:text-blue-600 break-words font-medium transition-colors"
                  >
                    cursor@cursorhistory.com
                  </a>
                </div>
                <p className="text-xs text-gray-600 leading-tight font-medium">
                  Business Cooperation & Advertising Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

      </body>
    </html>
  )
}
