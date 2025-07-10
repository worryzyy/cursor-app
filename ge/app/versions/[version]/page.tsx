import { platformLabels } from '@/config/site'
import { Platform, PlatformFile } from '@/lib/types'
import { getAllVersions, getVersionByNumber } from '@/lib/versions'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { Skeleton } from '../../components/ui/skeleton'

import Image from 'next/image'

interface VersionDetailPageProps {
  params: {
    version: string
  }
}

// 版本详情加载组件
function VersionDetailLoading() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  )
}

// 异步获取版本详情的组件
async function VersionDetail({ version }: { version: string }) {
  const versionData = await getVersionByNumber(version)

  if (!versionData) {
    notFound()
  }

  // 按主要平台分组
  const platformGroups = {
    windows: [] as [string, Platform, PlatformFile][],
    mac: [] as [string, Platform, PlatformFile][],
    linux: [] as [string, Platform, PlatformFile][]
  };

  // 对平台进行分组
  Object.entries(versionData.platforms).forEach(([platform, file]) => {
    const typedPlatform = platform as Platform;
    if (typedPlatform.startsWith('windows')) {
      platformGroups.windows.push([platformLabels[typedPlatform], typedPlatform, file]);
    } else if (typedPlatform.startsWith('mac')) {
      platformGroups.mac.push([platformLabels[typedPlatform], typedPlatform, file]);
    } else if (typedPlatform.startsWith('linux')) {
      platformGroups.linux.push([platformLabels[typedPlatform], typedPlatform, file]);
    }
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Cursor {versionData.version}
        </h1>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Windows 平台 */}
        {platformGroups.windows.length > 0 && (
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:border-indigo-200 hover:shadow-md">
            <div className="border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3">
              <h4 className="mb-3 text-xl font-medium text-indigo-900 flex items-center">
                <Image src="/images/Windows.png" alt="Windows" width={50} height={50} className="mr-2" />
                Windows</h4>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {platformGroups.windows.map(([label, platform, file]) => (
                  <div key={platform} className="border-t border-gray-100 pt-3">
                    <h4 className="mb-2 font-medium text-gray-800">{label.replace('Windows ', '')}</h4>
                    {/* <h4 className="mb-2 font-medium text-gray-800">{label}</h4> */}
                    <div className="mb-3 space-y-2">
                      <div className="flex items-start">
                        <span className="mr-2 text-sm font-medium text-gray-700">Prüfsumme:</span>
                        <code className="break-all rounded bg-gray-100 px-2 py-1 text-xs text-gray-800">
                          {file.checksum}
                        </code>
                      </div>
                    </div>
                    <a
                       href={file.url}
                      className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 text-xm font-medium text-white shadow-sm transition-all duration-150 hover:from-indigo-700 hover:to-purple-700 hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                      download
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Herunterladen
                    </a>

                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* macOS 平台 */}
        {platformGroups.mac.length > 0 && (
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:border-indigo-200 hover:shadow-md">
            <div className="border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3">
              <h4 className="mb-3 text-xl font-medium text-indigo-900 flex items-center">
                <Image src="/images/macos.png" alt="macOS" width={50} height={50} className="mr-2" />
                macOS</h4>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {platformGroups.mac.map(([label, platform, file]) => (
                  <div key={platform} className="border-t border-gray-100 pt-3">
                    <h4 className="mb-2 font-medium text-gray-800">{label.replace('macOS ', '')}</h4>
                    <div className="mb-3 space-y-2">
                      <div className="flex items-start">
                        <span className="mr-2 text-sm font-medium text-gray-700">Prüfsumme:</span>
                        <code className="break-all rounded bg-gray-100 px-2 py-1 text-xs text-gray-800">
                          {file.checksum}
                        </code>
                      </div>
                    </div>

                    <a
                       href={file.url}
                      className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 text-xm font-medium text-white shadow-sm transition-all duration-150 hover:from-indigo-700 hover:to-purple-700 hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                      download
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Herunterladen
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Linux 平台 */}
        {platformGroups.linux.length > 0 && (
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:border-indigo-200 hover:shadow-md">
            <div className="border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3">
              <h4 className="mb-3 text-xl font-medium text-indigo-900 flex items-center">
                <Image src="/images/linux.png" alt="Linux" width={50} height={50} className="mr-2" />
                Linux</h4>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {platformGroups.linux.map(([label, platform, file]) => (
                  <div key={platform} className="border-t border-gray-100 pt-3">
                    <h4 className="mb-2 font-medium text-gray-800">{label.replace('Linux ', '')}</h4>
                    <div className="mb-3 space-y-2">
                      <div className="flex items-start">
                        <span className="mr-2 text-sm font-medium text-gray-700">Prüfsumme:</span>
                        <code className="break-all rounded bg-gray-100 px-2 py-1 text-xs text-gray-800">
                          {file.checksum}
                        </code>
                      </div>
                    </div>
                    <a
                       href={file.url}
                      className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 text-xm font-medium text-white shadow-sm transition-all duration-150 hover:from-indigo-700 hover:to-purple-700 hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                      download
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Herunterladen
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8">
        <Link prefetch={false}
          href="/versions"
          className="inline-flex items-center text-indigo-600 hover:text-purple-600"
        >
          &larr; Zurück zu allen Versionen
        </Link>
      </div>
    </div>
  )
}

// 生成动态元数据
export async function generateMetadata({ params }: { params: { version: string } }): Promise<Metadata> {
  const version = await getVersionByNumber(params.version)

  if (!version) {
    return {
      title: 'Version nicht gefunden',
      description: 'Bitte schauen Sie auf andere verfügbare Cursor-Versionen',
    }
  }

  return {
    title: `Cursor ${version.version}${version.isLatest ? ' (Neueste Version)' : ''}`,
    description: `Laden Sie Cursor ${version.version} herunter - Unterstützt Windows, macOS und Linux-Plattformen für intelligente Programmierungstools`,
    keywords: ['Cursor', version.version, 'Cursor-Historie herunterladen', 'Programmierungstools', 'AI-Editor'],
    openGraph: {
      title: `Cursor ${version.version} Herunterladen - Cursor Historische Versionen`,
      description: `Laden Sie Cursor ${version.version} für Windows, macOS und Linux herunter. Verfügbar für alle Plattformen mit vollständigen Installationspaketen.`,
      url: `https://ge.cursorhistory.com/versions/${version.version}`,
      siteName: 'Cursor Historische Versionen Download',
      images: [
        {
          url: '/images/cursor-og.png',
          width: 1200,
          height: 630,
          alt: `Cursor ${version.version} Herunterladen`,
        },
      ],
    },
    canonical: `https://ge.cursorhistory.com/versions/${version.version}`,
  }
}

// 生成静态路径
export async function generateStaticParams() {
  const versions = await getAllVersions()
  return versions.map((version) => ({
    version: version.version,
  }))
}

export default function VersionDetailPage({ params }: VersionDetailPageProps) {
  const { version } = params

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">Version Details</h2>
          <p>
            Diese Seite bietet detaillierte Informationen zur Cursor-Version {version}. Sie können unter den folgenden Links für verschiedene Betriebssysteme und Architekturen herunterladen. Jede Download-Option enthält den für Ihr System geeigneten Installationspaket.
          </p>
        </div>
      </div>
      <Suspense fallback={<VersionDetailLoading />}>
        <VersionDetail version={version} />
      </Suspense>
    </main>
  )
} 
