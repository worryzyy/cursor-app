export interface PlatformFile {
	url: string // 下载链接
	checksum: string // 文件校验和
}


export interface VersionData {
	platforms: {
		windows: PlatformFile
		windows_arm?: PlatformFile
		windows_arm64?: PlatformFile
		mac?: PlatformFile
		mac_arm64?: PlatformFile
		mac_intel?: PlatformFile
		linux: PlatformFile
		linux_arm?: PlatformFile
	}
}

export interface Version {
	version: string // 版本号，如 "0.45.14"
	date?: string // 发布日期，ISO 格式
	releaseDate?: string // 发布日期，ISO 格式
	releaseNotes?: string // 版本更新内容（Markdown 格式）
	changelog?: string // 版本更新内容（Markdown 格式）
	platforms: {
		[key in Platform]?: PlatformFile
	}
	isLatest?: boolean // 是否为最新版本
}

export type Platform =
	| 'mac'
	| 'mac_arm64'
	| 'mac_intel'
	| 'windows'
	| 'windows_arm'
	| 'windows_arm64'
	| 'linux'
	| 'linux_arm64'

export interface DownloadLinkResponse {
	url: string
	filename: string
	platform: Platform
	version: string
	expiresAt: string
}

export interface CursorVersionsData {
	[version: string]: VersionData
}

// 以下是cursor-tracker模块的类型定义
export interface VersionHistoryEntry {
	date: string
	changelog?: string // 版本更新内容（Markdown 格式）
	platforms: {
		[platform: string]: {
			url: string
			checksum: string
		}
	}
}

export interface VersionHistory {
	[version: string]: VersionHistoryEntry
}

export interface CursorTrackerResult {
	newVersionFound: boolean
	latestVersion: string | null
	history: VersionHistory
}
