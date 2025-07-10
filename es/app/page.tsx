import { getAllVersions, getLatestVersion } from '@/lib/versions'
import { Suspense } from 'react'
import { Hero } from './components/Hero'
import { Skeleton } from './components/ui/skeleton'
import { VersionCard } from './components/VersionCard'
import { VersionsTable } from './components/VersionsTable'

// Componente de carga de lista de versiones
function VersionsLoading() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  )
}

// Componente para obtener datos de versiones de forma asíncrona
async function VersionsList() {
  const versions = await getAllVersions()
  const latestVersion = await getLatestVersion()

  return (
    <>
      {latestVersion && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Última versión</h2>
          <VersionCard version={latestVersion} />
        </div>
      )}

      <div>
        <h2 className="text-2xl font-bold mb-4">Todas las versiones</h2>
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
        <h2 className="text-2xl font-bold mb-4">Acerca de Cursor</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Cursor es un editor de código con IA como prioridad basado en VSCode. Está diseñado para ayudar a los desarrolladores a escribir, entender y mejorar código más rápido con la ayuda de la IA. Este sitio web proporciona acceso a todas las versiones históricas de Cursor para las plataformas Windows, macOS y Linux.
          </p>
          <p>
            Ya sea que esté buscando las últimas funciones o necesite una versión específica por razones de compatibilidad, puede encontrar y descargar lo que necesita de nuestra completa colección a continuación.
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
