import { getAllVersions } from '@/lib/versions'
import { Suspense } from 'react'
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
      <h1 className="mb-6 text-3xl font-bold">Alle Versionen</h1>
      <VersionsTable versions={versions} />
    </div>
  )
}

export default function VersionsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Cursor Historische Versionen</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="mb-4">
            Diese Seite listet alle verfügbaren historischen Versionen des Cursor-Editors auf. Jede Version ist für Windows-, macOS- und Linux-Plattformen verfügbar, abhängig von der Verfügbarkeit der jeweiligen Version.
          </p>
          <p>
            Klicken Sie auf eine beliebige Version, um Details und Download-Optionen für Ihr spezifisches Betriebssystem und Ihre Architektur anzuzeigen.
          </p>
        </div>
      </div>
      <Suspense fallback={<VersionsLoading />}>
        <VersionsList />
      </Suspense>
    </main>
  )
} 