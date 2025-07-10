import Link from 'next/link'
import { getLatestVersion } from '@/lib/versions'
import { platformLabels } from '@/config/site'
import { Platform } from '@/lib/types'

export async function Hero() {
  const latestVersion = await getLatestVersion()

  // 按主要平台分组
  const platformGroups = {
    windows: [] as [string, Platform][],
    mac: [] as [string, Platform][],
    linux: [] as [string, Platform][]
  };

  // 对平台进行分组
  if (latestVersion) {
    Object.entries(latestVersion.platforms).forEach(([platform]) => {
      const typedPlatform = platform as Platform;
      if (typedPlatform.startsWith('windows')) {
        platformGroups.windows.push([platformLabels[typedPlatform], typedPlatform]);
      } else if (typedPlatform.startsWith('mac')) {
        platformGroups.mac.push([platformLabels[typedPlatform], typedPlatform]);
      } else if (typedPlatform.startsWith('linux')) {
        platformGroups.linux.push([platformLabels[typedPlatform], typedPlatform]);
      }
    });
  }

  return (
    <section className="rounded-lg bg-gradient-to-r from-indigo-900 to-purple-900 px-6 py-12 text-white shadow-lg sm:px-12 sm:py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Cursor 历史版本下载
        </h1>
        <p className="mb-8 text-lg text-blue-100 sm:text-xl">
          Cursor 是一款由 AI 驱动的代码编辑器，帮助开发者更快、更智能地编写代码。
          在这里，您可以找到并下载 Cursor 的各个历史版本。
        </p>
        {latestVersion && (
          <div className="mb-6 text-center">
            <p className="mb-2 text-xl font-semibold">最新版本：Cursor {latestVersion.version}</p>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Windows 平台 */}
              {platformGroups.windows.length > 0 && (
                <div className="rounded-md bg-white/10 p-4 backdrop-blur-sm">
                  <h3 className="mb-3 text-lg font-medium text-white">Windows</h3>
                  <div className="space-y-2">
                    {platformGroups.windows.map(([label, platform]) => (

                      <Link prefetch={false}
                        key={platform}
                        href={latestVersion.platforms[platform].url}
                        className="group flex w-full items-center justify-between rounded-md bg-white px-3 py-1.5 text-xm font-medium text-indigo-700 transition-all duration-150 hover:bg-indigo-50 hover:shadow-sm"
                      >
                        <span>{label}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500 transition-transform duration-150 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* macOS 平台 */}
              {platformGroups.mac.length > 0 && (
                <div className="rounded-md bg-white/10 p-4 backdrop-blur-sm">
                  <h3 className="mb-3 text-lg font-medium text-white">macOS</h3>
                  <div className="space-y-2">
                    {platformGroups.mac.map(([label, platform]) => (
                      <Link prefetch={false}
                        key={platform}
                        href={latestVersion.platforms[platform].url}
                        className="group flex w-full items-center justify-between rounded-md bg-white px-3 py-1.5 text-xm font-medium text-indigo-700 transition-all duration-150 hover:bg-indigo-50 hover:shadow-sm"
                      >
                         <span>{label}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500 transition-transform duration-150 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Linux 平台 */}
              {platformGroups.linux.length > 0 && (
                <div className="rounded-md bg-white/10 p-4 backdrop-blur-sm">
                  <h3 className="mb-3 text-lg font-medium text-white">Linux</h3>
                  <div className="space-y-2">
                    {platformGroups.linux.map(([label, platform]) => (
                      <Link prefetch={false}
                        key={platform}
                        href={latestVersion.platforms[platform].url}
                        className="group flex w-full items-center justify-between rounded-md bg-white px-3 py-1.5 text-xm font-medium text-indigo-700 transition-all duration-150 hover:bg-indigo-50 hover:shadow-sm"
                      >
                        <span>{label}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500 transition-transform duration-150 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <Link prefetch={false}
          href="/versions"
          className="inline-flex items-center justify-center rounded-md border border-indigo-300 bg-transparent px-4 py-2 text-xm font-medium text-white shadow-sm transition-all duration-150 hover:bg-white/10 hover:shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          查看所有版本
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
} 
