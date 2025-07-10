import { NextRequest, NextResponse } from 'next/server'
import { getVersionByNumber } from '@/lib/versions'

export async function GET(
	request: NextRequest,
	{ params }: { params: { version: string; platform: string } }
) {
	const versionParam = params.version
	const platformParam = params.platform
	// 验证平台参数
	const validPlatforms = [
		'mac',
		'mac_arm64',
		'mac_intel',
		'mac_universal',
		'windows',
		'windows_arm',
		'windows_arm64',
		'linux',
		'linux_arm'
	]
	if (!validPlatforms.includes(platformParam)) {
		return NextResponse.json({ error: '不支持的平台' }, { status: 400 })
	}

	// 获取版本信息
	const versionData = await getVersionByNumber(versionParam)

	if (!versionData) {
		return NextResponse.json({ error: '版本不存在' }, { status: 404 })
	}

	// 构建下载URL
	let downloadUrl = '';
	const baseUrl = 'https://storage.googleapis.com/cursor-history-exe';
	const versionNumber = versionParam.replace('v', ''); // 移除版本号前的'v'
	
	// 根据平台类型构建URL
	if (platformParam.startsWith('windows')) {
		const arch = platformParam.includes('arm') ? 'arm64' : 'x64';
		const armSuffix = arch === 'arm64' ? '-arm64' : '';
		downloadUrl = `${baseUrl}/v${versionNumber}/windows/${arch}/Cursor-Setup-${versionNumber}${armSuffix}.exe`;
	} 
	else if (platformParam.startsWith('mac')) {
		let arch = 'x64';
		if (platformParam.includes('arm')) {
			arch = 'arm64';
		} else if (platformParam.includes('universal')) {
			arch = 'universal';
		}
		
		const archSuffix = arch === 'x64' ? '' : `-${arch}`;
		downloadUrl = `${baseUrl}/v${versionNumber}/macos/${arch}/Cursor-${versionNumber}${archSuffix}.dmg`;
	}
	else if (platformParam.startsWith('linux')) {
		const arch = platformParam.includes('arm') ? 'arm64' : 'x64';
		downloadUrl = `${baseUrl}/v${versionNumber}/linux/${arch}/Cursor-${versionNumber}.AppImage`;
	}
	
	console.log(`下载请求: 版本=${versionParam}, 平台=${platformParam}, 生成URL=${downloadUrl}`);
	
	if (!downloadUrl) {
		return NextResponse.json({ error: '无法生成下载链接' }, { status: 500 })
	}

	// 重定向到下载 URL
	return NextResponse.redirect(downloadUrl)
}
