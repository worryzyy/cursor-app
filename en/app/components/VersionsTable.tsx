import Link from 'next/link'
import { Version } from '@/lib/types'

interface VersionsTableProps {
  versions: Version[]
}

export function VersionsTable({ versions }: VersionsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200" aria-label="Cursor historical version list">
        <caption className="sr-only">Cursor historical version list - including version number, supported platforms and operation options</caption>
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Version
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
               Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Platform
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Changelog
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Operation
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {versions.map((version) => (
            <tr key={version.version} className="hover:bg-gray-50">
              <td className="whitespace-nowrap px-6 py-4">
                <Link prefetch={false}
                  href={`/versions/${version.version}`}
                  className="font-medium text-blue-600 hover:text-blue-800"
                  title={`View Cursor ${version.version} version details`}
                >
                  {version.version}
                </Link>
                {version.isLatest && (
                  <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                    Latest
                  </span>
                )}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                {version.date}
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-nowrap gap-2" >
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">Windows</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">macOS</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">Linux</span>
                </div>
              </td>
              <td className="px-6 py-4">
              {version.changelog || 'N/A'}
              </td>

              <td className="whitespace-nowrap px-6 py-4 text-sm">
                <Link prefetch={false}
                  href={`/versions/${version.version}`}
                  className="font-medium text-blue-600 hover:text-blue-800"
                  aria-label={`View Cursor ${version.version} version details`}
                >
                  View details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 
