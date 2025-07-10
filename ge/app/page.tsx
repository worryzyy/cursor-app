import { getAllVersions, getLatestVersion } from '@/lib/versions'
import { Suspense } from 'react'
import { Hero } from './components/Hero'
import { Skeleton } from './components/ui/skeleton'
import { VersionCard } from './components/VersionCard'
import { VersionsTable } from './components/VersionsTable'

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
          <h2 className="text-2xl font-bold mb-4">Neueste Version</h2>
          <VersionCard version={latestVersion} />
        </div>
      )}

      <div>
        <h2 className="text-2xl font-bold mb-4">Alle Versionen</h2>
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
        <h2 className="text-2xl font-bold mb-4">Über Cursor</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Cursor ist ein AI-basierter Code-Editor, der auf VSCode aufbaut. Er zielt darauf ab, Entwicklern dabei zu helfen, mit Hilfe von KI schneller zu schreiben, zu verstehen und Code zu verbessern. Diese Website bietet Zugang zu allen historischen Versionen von Cursor für Windows-, macOS- und Linux-Plattformen.
          </p>
          <p>
            Egal, ob Sie nach den neuesten Funktionen suchen oder aus Kompatibilitätsgründen eine bestimmte Version benötigen, Sie können in unserer umfassenden Sammlung unten finden und herunterladen, was Sie brauchen.
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
