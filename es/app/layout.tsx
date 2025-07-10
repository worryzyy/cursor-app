import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "./components/Header";
// import { FloatingAdsContainer } from './components/Advertisements'
// import { AAdsAdvertisement } from './components/Advertisements'
import { siteConfig } from "../config/site";
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Cursor 历史版本下载',
    template: '%s | Cursor 历史版本下载'
  },
  description: 'Cursor 历史版本下载，下载Cursor最新版本，一款基于AI的智能编程工具，支持Windows、macOS和Linux平台',
  keywords: ['Cursor', 'Cursor 历史版本下载', '编程工具', 'AI编程', '代码编辑器', '开发工具'],
  authors: [{ name: 'Cursor' }],
  creator: 'Cursor',
  publisher: 'Cursor',
  openGraph: {
    title: 'Cursor  历史版本下载',
    description: '下载Cursor最新版本，一款基于AI的智能编程工具，支持Windows、macOS和Linux平台',
    url: 'https://cursorhistory.com',
    siteName: 'Cursor 历史版本下载',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://cursorhistory.com',
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
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
    <html lang="zh-CN">
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
        {/* 悬浮广告容器 */}
        {/* <FloatingAdsContainer /> */}
        <div className="flex min-h-screen flex-col">
          <Header />
          {/* <AAdsAdvertisement /> */}
          <main className="flex-1">{children}</main>
          {/* <AAdsAdvertisement /> */}

          <div className="hidden lg:block fixed left-0 top-1/2 transform -translate-y-1/2 z-30">
            <div
              className="w-[180px] h-[250px] bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-lg p-4 flex flex-col justify-center items-center text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">广告位招租</h3>
                <p className="text-xs text-blue-600 font-medium">黄金位置</p>
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
                商务合作·广告投放
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
