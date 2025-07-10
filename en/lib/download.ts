import crypto from 'crypto'
import { Platform } from './types'
import { generateFileName } from './versions'

/**
 * 生成随机校验和
 * 生成与原始数据格式相似的校验和，但完全是我们自己的
 */
export function generateCustomChecksum(): string {
	// 生成20个字符长度的随机字符串，与原始校验和格式相似
	const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
	let result = ''
	for (let i = 0; i < 20; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length))
	}
	return result
}

/**
 * 计算文件的MD5哈希值
 * 这是一个更标准的校验和计算方法
 */
export async function calculateMD5Checksum(
	buffer: ArrayBuffer
): Promise<string> {
	const hash = crypto.createHash('md5')
	hash.update(Buffer.from(buffer))
	return hash.digest('hex')
}

/**
 * 从URL下载文件并返回ArrayBuffer
 */
export async function downloadFile(url: string): Promise<ArrayBuffer> {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error(`下载失败: ${response.status} ${response.statusText}`)
	}
	return await response.arrayBuffer()
}

/**
 * 处理下载过程
 * 下载文件，计算校验和，并返回结果
 */
export async function processDownload(
	url: string,
	version: string,
	platform: Platform
) {
	// 生成文件名
	const fileName = await generateFileName(version, platform)

	// 下载文件
	console.log(`  下载文件: ${url}`)
	const buffer = await downloadFile(url)
	console.log(`  文件已下载: ${buffer.byteLength} 字节`)

	// 计算校验和
	const checksum = generateCustomChecksum()
	console.log(`  生成校验和: ${checksum}`)

	// 计算MD5校验和（可选）
	const md5Checksum = await calculateMD5Checksum(buffer)
	console.log(`  MD5校验和: ${md5Checksum}`)

	return {
		fileName,
		buffer,
		checksum,
		md5Checksum
	}
}
