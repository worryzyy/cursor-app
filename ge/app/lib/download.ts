/**
 * 构建下载URL
 * @param version 版本号
 * @param platform 平台
 * @returns 下载URL
 */
export function buildDownloadUrl(version: string, platform: string): string {
	const baseUrl = 'https://storage.googleapis.com/cursor-history-exe'
	const versionNumber = version.replace('v', '') // 移除版本号前的'v'

	// 根据平台类型构建URL
	if (platform.startsWith('windows')) {
		const arch = platform.includes('arm') ? 'arm64' : 'x64'
		const armSuffix = arch === 'arm64' ? '-arm64' : ''
		return `${baseUrl}/v${versionNumber}/windows/${arch}/Cursor-Setup-${versionNumber}${armSuffix}.exe`
	} else if (platform.startsWith('mac')) {
		let arch = 'x64'
		if (platform.includes('arm')) {
			arch = 'arm64'
		} else if (platform.includes('universal')) {
			arch = 'universal'
		}

		const archSuffix = arch === 'x64' ? '' : `-${arch}`
		return `${baseUrl}/v${versionNumber}/macos/${arch}/Cursor-${versionNumber}${archSuffix}.dmg`
	} else if (platform.startsWith('linux')) {
		const arch = platform.includes('arm') ? 'arm64' : 'x64'
		return `${baseUrl}/v${versionNumber}/linux/${arch}/Cursor-${versionNumber}.AppImage`
	}

	// 默认返回空字符串
	return ''
}
