import { getAllVersions, getLatestVersion } from '@/lib/versions'
import { Suspense } from 'react'
import { Hero } from './components/Hero'
import { NavigationCard } from './components/NavigationCard'
import { Skeleton } from './components/ui/skeleton'
import { VersionCard } from './components/VersionCard'
import { VersionsTable } from './components/VersionsTable'
// import { AAdsAdvertisement } from './components/Advertisements'

// 结构化数据（支持中英文搜索）
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Cursor Editor Historical Versions",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": ["Windows", "macOS", "Linux"],
  "description": "Download historical versions of Cursor AI-powered code editor for Windows, macOS, and Linux platforms. Free download with version rollback support.",
  "url": "https://cursorhistory.com",
  "provider": {
    "@type": "Organization",
    "name": "Cursor History",
    "url": "https://cursorhistory.com"
  },
  "downloadUrl": "https://cursorhistory.com/versions",
  "softwareVersion": "Multiple versions available",
  "featureList": [
    "AI-powered code editing",
    "Intelligent code completion", 
    "Multi-platform support",
    "Historical version downloads",
    "Version rollback functionality"
  ],
  "inLanguage": ["en", "zh-CN"]
}

// 版本列表加载组件
function VersionsLoading() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  )
}

// 异步获取版本数据的组件
async function VersionsList() {
  const versions = await getAllVersions()
  const latestVersion = await getLatestVersion()

  return (
    <>
      {latestVersion && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest version</h2>
          <VersionCard version={latestVersion} />
        </div>
      )}

      <div>
        <h2 className="text-2xl font-bold mb-4">All versions</h2>
        <VersionsTable versions={versions} />
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      {/* 添加结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <main className="container mx-auto px-4 py-8">
        <Hero />

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">About Cursor Editor</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Cursor is an AI-first code editor based on VSCode. It&apos;s designed to help developers write, understand, and improve code faster with AI assistance.
            This site provides access to all historical versions of Cursor for Windows, macOS, and Linux platforms.
          </p>
          <p>
            Whether you&apos;re looking for the latest features or need a specific version for compatibility reasons,
            you can find and download what you need from our comprehensive collection below.
          </p>
        </div>
      </section>

 

      <section className="mt-12">
        <Suspense fallback={<VersionsLoading />}>
          <VersionsList />
        </Suspense>
      </section>


      <section className="mt-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <NavigationCard
            title="Blog Articles"
            description="Discover tips, tutorials, and best practices for using Cursor Editor effectively."
            href="/blog"
          />
          <NavigationCard
            title="Tutorials"
            description="Step-by-step guides for installation, configuration, and advanced usage."
            href="/tutorials"
          />
        </div>
      </section>
    </main>
    </>
  )
}
