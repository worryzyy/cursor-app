/**
 * 校验和更新脚本
 *
 * 这个脚本用于批量下载 Cursor 安装文件，并生成新的校验和
 * 使用方法: npx ts-node scripts/update-checksums.ts
 */

import fs from 'fs/promises'
import path from 'path'
import { cursorVersions } from '../lib/cursor_version'
import { processDownload } from '../lib/download'
import { Platform, CursorVersionsData } from '../lib/types'

// 存储下载的文件的目录
const DOWNLOAD_DIR = path.join(process.cwd(), 'downloads')

// 确保下载目录存在
async function ensureDownloadDir() {
	try {
		await fs.mkdir(DOWNLOAD_DIR, { recursive: true })
		console.log(`下载目录已创建: ${DOWNLOAD_DIR}`)
	} catch (error) {
		console.error('创建下载目录失败:', error)
		throw error
	}
}

// 更新版本数据中的校验和
async function updateChecksums() {
	// 创建一个新的版本数据对象，用于存储更新后的数据
	const updatedVersionsData: CursorVersionsData = { ...cursorVersions }

	// 遍历所有版本
	for (const [version, versionData] of Object.entries(cursorVersions)) {
		console.log(`处理版本 ${version}...`)

		// 确保版本存在于更新后的数据中
		if (!updatedVersionsData[version]) {
			updatedVersionsData[version] = JSON.parse(JSON.stringify(versionData))
		}

		// 遍历该版本的所有平台
		for (const [platform, fileData] of Object.entries(versionData.platforms)) {
			try {
				console.log(`  处理平台 ${platform}...`)

				// 处理下载
				const downloadResult = await processDownload(
					fileData.url,
					version,
					platform as Platform
				)

				// 保存文件到本地（可选）
				const filePath = path.join(DOWNLOAD_DIR, downloadResult.fileName)
				await fs.writeFile(filePath, Buffer.from(downloadResult.buffer))
				console.log(`  文件已保存: ${filePath}`)

				// 确保平台存在于更新后的数据中
				const typedPlatform = platform as keyof typeof versionData.platforms
				if (
					updatedVersionsData[version] &&
					updatedVersionsData[version].platforms[typedPlatform]
				) {
					// 更新校验和
					updatedVersionsData[version].platforms[typedPlatform].checksum =
						downloadResult.checksum
					console.log(`  校验和已更新: ${downloadResult.checksum}`)
				}

				// 可选：添加MD5校验和
				// updatedVersionsData[version].platforms[platform].md5Checksum = downloadResult.md5Checksum;
			} catch (error) {
				console.error(`  处理失败 ${version}/${platform}:`, error)
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
	console.log(`更新后的版本数据已保存到: ${outputPath}`)
}

// 主函数
async function main() {
	try {
		await ensureDownloadDir()
		await updateChecksums()
		console.log('校验和更新完成!')
	} catch (error) {
		console.error('更新校验和失败:', error)
		process.exit(1)
	}
}

// 执行主函数
main()
