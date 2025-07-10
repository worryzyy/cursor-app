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
      <h1 className="mb-6 text-3xl font-bold">所有版本</h1>
      <VersionsTable versions={versions} />
    </div>
  )
}

export default function VersionsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Cursor Historical Versions</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="mb-4">
            本页列出了 Cursor 编辑器的所有可用历史版本。每个版本均适用于 Windows、macOS 和 Linux 平台，具体取决于发行版的可用性。
          </p>
          <p>
            点击任何版本以查看详细信息和适用于您特定操作系统和架构的下载选项。
          </p>
        </div>
      </div>
      <Suspense fallback={<VersionsLoading />}>
        <VersionsList />
      </Suspense>
    </main>
  )
} 