import { NextRequest, NextResponse } from 'next/server'
import { generateCustomChecksum } from '@/lib/download'
import { cursorVersions } from '@/lib/cursor_version'
import { CursorVersionsData, Platform } from '@/lib/types'
import fs from 'fs/promises'
import path from 'path'

// 简单的API密钥验证（在生产环境中应使用更安全的方法）
const API_KEY = process.env.ADMIN_API_KEY || 'your-secret-api-key'

export async function POST(request: NextRequest) {
	// 验证API密钥
	const authHeader = request.headers.get('Authorization')
	if (
		!authHeader ||
		!authHeader.startsWith('Bearer ') ||
		authHeader.substring(7) !== API_KEY
	) {
		return NextResponse.json({ error: '未授权' }, { status: 401 })
	}

	try {
		// 解析请求体
		const body = await request.json()
		const { version, platform } = body as {
			version?: string
			platform?: Platform
		}

		// 创建更新后的版本数据
		const updatedVersionsData: CursorVersionsData = { ...cursorVersions }

		// 如果指定了版本和平台，只更新特定版本和平台的校验和
		if (version && platform) {
			if (
				!updatedVersionsData[version] ||
				!updatedVersionsData[version].platforms[platform]
			) {
				return NextResponse.json(
					{ error: '指定的版本或平台不存在' },
					{ status: 404 }
				)
			}

			// 生成新的校验和
			const newChecksum = generateCustomChecksum()
			updatedVersionsData[version].platforms[platform].checksum = newChecksum

			console.log(`已更新校验和: ${version}/${platform} -> ${newChecksum}`)
		}
		// 否则更新所有版本和平台的校验和
		else {
			for (const [ver, versionData] of Object.entries(updatedVersionsData)) {
				for (const plat in versionData.platforms) {
					const platform = plat as Platform
					const newChecksum = generateCustomChecksum()
					updatedVersionsData[ver].platforms[platform].checksum = newChecksum
					console.log(`已更新校验和: ${ver}/${platform} -> ${newChecksum}`)
				}
			}
		}

		// 将更新后的数据写入文件
		const outputPath = path.join(process.cwd(), 'lib/updated_cursor_version.js')
		const fileContent = `export const cursorVersions = ${JSON.stringify(
			updatedVersionsData,
			null,
			2
		)}`
		await fs.writeFile(outputPath, fileContent)

		return NextResponse.json({
			success: true,
			message: '校验和已更新',
			updatedFile: outputPath
		})
	} catch (error) {
		console.error('更新校验和失败:', error)
		return NextResponse.json({ error: '更新校验和失败' }, { status: 500 })
	}
}

// 获取当前校验和数据
export async function GET(request: NextRequest) {
	// 验证API密钥
	const authHeader = request.headers.get('Authorization')
	if (
		!authHeader ||
		!authHeader.startsWith('Bearer ') ||
		authHeader.substring(7) !== API_KEY
	) {
		return NextResponse.json({ error: '未授权' }, { status: 401 })
	}

	// 获取查询参数
	const searchParams = request.nextUrl.searchParams
	const version = searchParams.get('version')
	const platform = searchParams.get('platform') as Platform | null

	try {
		// 如果指定了版本和平台，只返回特定版本和平台的校验和
		if (version && platform) {
			if (
				!cursorVersions[version] ||
				!cursorVersions[version].platforms[platform]
			) {
				return NextResponse.json(
					{ error: '指定的版本或平台不存在' },
					{ status: 404 }
				)
			}

			return NextResponse.json({
				version,
				platform,
				checksum: cursorVersions[version].platforms[platform].checksum
			})
		}

		// 否则返回所有校验和数据
		return NextResponse.json(cursorVersions)
	} catch (error) {
		console.error('获取校验和数据失败:', error)
		return NextResponse.json({ error: '获取校验和数据失败' }, { status: 500 })
	}
}
