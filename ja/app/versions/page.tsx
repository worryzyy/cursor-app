import { Suspense } from 'react'
import { getAllVersions } from '@/lib/versions'
import { VersionsTable } from '../components/VersionsTable'
import { Skeleton } from '../components/ui/skeleton'

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

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">すべてのバージョン</h1>
      <VersionsTable versions={versions} />
    </div>
  )
}

export default function VersionsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Cursor 履歴バージョン</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="mb-4">
            このページでは、Cursor エディターの利用可能な全ての履歴バージョンを一覧表示しています。各バージョンはリリースの利用可能性に応じて、Windows、macOS、Linux プラットフォームで利用できます。
          </p>
          <p>
            任意のバージョンをクリックして、詳細情報とお使いの特定のオペレーティングシステムおよびアーキテクチャ向けのダウンロードオプションを確認してください。
          </p>
        </div>
      </div>
      <Suspense fallback={<VersionsLoading />}>
        <VersionsList />
      </Suspense>
    </main>
  )
} 