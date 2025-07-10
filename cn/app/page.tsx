import { Suspense } from 'react'
import { getAllVersions, getLatestVersion } from '@/lib/versions'
import { VersionCard } from './components/VersionCard'
import { VersionsTable } from './components/VersionsTable'
import { Hero } from './components/Hero'
import { Skeleton } from './components/ui/skeleton'

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
          <h2 className="text-2xl font-bold mb-4">最新版本</h2>
          <VersionCard version={latestVersion} />
        </div>
      )}

      <div>
        <h2 className="text-2xl font-bold mb-4">所有版本</h2>
        <VersionsTable versions={versions} />
      </div>
    </>
  )
}

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />
      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">关于 Cursor</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Cursor 是一款基于 VSCode 的 AI 优先代码编辑器。它旨在帮助开发人员借助 AI 更快地编写、理解和改进代码。此网站提供对 Windows、macOS 和 Linux 平台的 Cursor 所有历史版本的访问。
          </p>
          <p>
            无论您是在寻找最新功能还是出于兼容性原因需要特定版本，您都可以从我们下面全面的集合中找到并下载所需的内容。
          </p>
        </div>
      </section>
      <section className="mt-12">
        <Suspense fallback={<VersionsLoading />}>
          <VersionsList />
        </Suspense>
      </section>
    </main>
  )
}
