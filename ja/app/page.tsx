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
          <h2 className="text-2xl font-bold mb-4">最新バージョン</h2>
          <VersionCard version={latestVersion} />
        </div>
      )}

      <div>
        <h2 className="text-2xl font-bold mb-4">すべてのバージョン</h2>
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
        <h2 className="text-2xl font-bold mb-4">Cursor について</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Cursor は VSCode ベースの AI ファーストコードエディターです。開発者が AI の助けを借りて、より速くコードを書き、理解し、改善できるように設計されています。このウェブサイトでは、Windows、macOS、Linux プラットフォーム向けの Cursor の全ての履歴バージョンにアクセスできます。
          </p>
          <p>
            最新機能をお探しの場合でも、互換性の理由で特定のバージョンが必要な場合でも、以下の包括的なコレクションから必要なものを見つけてダウンロードできます。
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
