'use client'

import { useState, useEffect } from 'react'
import { Platform } from '@/lib/types'
import { generateCustomChecksum } from '@/lib/download'

interface VersionFile {
  url: string
  checksum: string
}

interface VersionData {
  platforms: {
    [key in Platform]?: VersionFile
  }
}

interface VersionsData {
  [version: string]: VersionData
}

export default function VersionsManagementPage() {
  const [versions, setVersions] = useState<VersionsData>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [apiKey, setApiKey] = useState('')
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  const [isUpdating, setIsUpdating] = useState(false)

  // 加载版本数据
  const loadVersions = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/admin/update-checksums', {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      })

      if (!response.ok) {
        throw new Error(`请求失败: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      setVersions(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : '加载版本数据失败')
    } finally {
      setLoading(false)
    }
  }

  // 更新校验和
  const updateChecksum = async (version: string, platform: Platform) => {
    setIsUpdating(true)
    try {
      const response = await fetch('/api/admin/update-checksums', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ version, platform })
      })

      if (!response.ok) {
        throw new Error(`更新失败: ${response.status} ${response.statusText}`)
      }

      // 重新加载版本数据
      await loadVersions()

      // 显示成功消息
      alert(`版本 ${version} 平台 ${platform} 的校验和已更新`)
    } catch (err) {
      setError(err instanceof Error ? err.message : '更新校验和失败')
    } finally {
      setIsUpdating(false)
    }
  }

  // 批量更新所有校验和
  const updateAllChecksums = async () => {
    if (!confirm('确定要更新所有版本和平台的校验和吗？这可能需要一些时间。')) {
      return
    }

    setIsUpdating(true)
    try {
      const response = await fetch('/api/admin/update-checksums', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({})
      })

      if (!response.ok) {
        throw new Error(`更新失败: ${response.status} ${response.statusText}`)
      }

      // 重新加载版本数据
      await loadVersions()

      // 显示成功消息
      alert('所有校验和已更新')
    } catch (err) {
      setError(err instanceof Error ? err.message : '更新校验和失败')
    } finally {
      setIsUpdating(false)
    }
  }

  // 生成新的校验和（客户端预览）
  const generateNewChecksum = () => {
    return generateCustomChecksum()
  }

  // 当API密钥变化时重新加载版本数据
  useEffect(() => {
    if (apiKey) {
      loadVersions()
    }
  }, [apiKey])

  // 显示版本详情
  const showVersionDetails = (version: string) => {
    setSelectedVersion(version)
    setSelectedPlatform(null)
  }

  // 显示平台详情
  const showPlatformDetails = (version: string, platform: Platform) => {
    setSelectedVersion(version)
    setSelectedPlatform(platform)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">版本管理</h1>

      {/* API密钥输入 */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          API密钥
        </label>
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="输入API密钥"
        />
      </div>

      {/* 错误提示 */}
      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* 批量更新按钮 */}
      <div className="mb-6">
        <button
          onClick={updateAllChecksums}
          disabled={isUpdating || !apiKey}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isUpdating ? '更新中...' : '批量更新所有校验和'}
        </button>
      </div>

      {/* 版本列表 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">版本列表</h2>
        {loading ? (
          <div className="text-center py-4">加载中...</div>
        ) : Object.keys(versions).length === 0 ? (
          <div className="text-center py-4 text-gray-500">没有找到版本数据</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(versions).map(([version, versionData]) => (
              <div
                key={version}
                className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => showVersionDetails(version)}
              >
                <h3 className="text-lg font-medium mb-2">版本 {version}</h3>
                <div className="text-sm text-gray-500">
                  支持平台: {Object.keys(versionData.platforms).join(', ')}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 版本详情 */}
      {selectedVersion && versions[selectedVersion] && (
        <div className="border rounded-lg p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">版本 {selectedVersion} 详情</h2>

          {/* 平台列表 */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">支持的平台</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(versions[selectedVersion].platforms).map(([platform, fileData]) => (
                <div
                  key={platform}
                  className="border rounded-lg p-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => showPlatformDetails(selectedVersion, platform as Platform)}
                >
                  <h4 className="font-medium mb-2">平台: {platform}</h4>
                  <div className="text-sm text-gray-500 truncate">
                    校验和: {fileData.checksum}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 平台详情 */}
          {selectedPlatform && versions[selectedVersion].platforms[selectedPlatform] && (
            <div className="border rounded-lg p-4 bg-white">
              <h3 className="text-lg font-medium mb-4">平台 {selectedPlatform} 详情</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">下载URL</p>
                  <p className="mt-1 break-all">
                    <a
                      href={versions[selectedVersion].platforms[selectedPlatform]!.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {versions[selectedVersion].platforms[selectedPlatform]!.url}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">当前校验和</p>
                  <p className="mt-1 font-mono">
                    {versions[selectedVersion].platforms[selectedPlatform]!.checksum}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">新校验和预览</p>
                  <p className="mt-1 font-mono">{generateNewChecksum()}</p>
                  <p className="mt-1 text-xs text-gray-500">
                    (每次刷新页面会生成不同的校验和)
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => updateChecksum(selectedVersion, selectedPlatform)}
                  disabled={isUpdating}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {isUpdating ? '更新中...' : '更新校验和'}
                </button>
              </div>
            </div>
          )}

          <div className="mt-6">
            <button
              onClick={() => {
                setSelectedVersion(null)
                setSelectedPlatform(null)
              }}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              返回版本列表
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 