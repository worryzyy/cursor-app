import * as path from 'path';
import { fetchLatestCursorVersions } from './cursor-tracker';

// 项目根目录路径
const ROOT_DIR = process.cwd();

// 版本历史文件路径
const VERSION_ARCHIVE_PATH = path.join(ROOT_DIR, 'public', 'version', 'cursor-version-archive.json');

/**
 * 抓取最新版本
 * 返回最新版本信息
 */
export async function updateCursorVersions(): Promise<{
  newVersionFound: boolean;
  latestVersion: string | null;
}> {
  try {
    // 抓取最新版本信息
    console.log('正在抓取最新的Cursor版本信息...');
    const result = await fetchLatestCursorVersions(VERSION_ARCHIVE_PATH);
    
    return {
      newVersionFound: result.newVersionFound,
      latestVersion: result.latestVersion
    };
  } catch (error) {
    console.error('更新版本信息失败:', error instanceof Error ? error.message : '未知错误');
    throw error;
  }
} 