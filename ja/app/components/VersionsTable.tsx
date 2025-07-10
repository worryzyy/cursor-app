import Link from 'next/link'
import { Version } from '@/lib/types'

interface VersionsTableProps {
  versions: Version[]
}

export function VersionsTable({ versions }: VersionsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200" aria-label="Cursorバージョン一覧">
        <caption className="sr-only">Cursorソフトウェアバージョン一覧 - バージョン番号、サポートプラットフォーム、操作オプションを含む</caption>
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              バージョン
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              リリース日
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              プラットフォーム
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              更新内容
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              操作
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
                  title={`Cursor ${version.version}バージョン詳細を表示`}
                >
                  {version.version}
                </Link>
                {version.isLatest && (
                  <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                    最新
                  </span>
                )}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                {version.date}
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-nowrap gap-2">
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
                  aria-label={`Cursor ${version.version}バージョンの詳細情報を表示`}
                >
                  詳細を表示
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 
