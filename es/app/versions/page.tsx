import { getAllVersions } from '@/lib/versions'
import { Suspense } from 'react'
import { VersionsTable } from '../components/VersionsTable'
import { Skeleton } from '../components/ui/skeleton'

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

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Todas las versiones</h1>
      <VersionsTable versions={versions} />
    </div>
  )
}

export default function VersionsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Versiones históricas de Cursor</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="mb-4">
            Esta página enumera todas las versiones históricas disponibles del editor Cursor. Cada versión está disponible para las plataformas Windows, macOS y Linux, según la disponibilidad de la distribución.
          </p>
          <p>
            Haga clic en cualquier versión para ver detalles y opciones de descarga para su sistema operativo y arquitectura específicos.
          </p>
        </div>
      </div>
      <Suspense fallback={<VersionsLoading />}>
        <VersionsList />
      </Suspense>
    </main>
  )
} 