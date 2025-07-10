/**
 * Cursor版本追踪器 - Next.js集成版
 * 此模块移除了README更新功能，专注于数据抓取与历史记录维护
 * 可直接集成到Next.js项目中
 */

import * as fs from 'fs';
import * as path from 'path';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio'






/**
 * 结果映射类型
 */
interface ResultMap {
  windows: {
    [platform: string]: {
      url: string;
      version: string;
    };
  };
  mac: {
    [platform: string]: {
      url: string;
      version: string;
    };
  };
  linux: {
    [platform: string]: {
      url: string;
      version: string;
    };
  };
}

interface DownloadResponse {
  downloadUrl: string;
}

// Interface for version history JSON
interface VersionHistoryEntry {
  date: string;
  changelog?: string;
  platforms: {
    [platform: string]: {
      url: string;
      checksum: string;
    };
  };
}

interface VersionHistory {
  [version: string]: VersionHistoryEntry;
}



/**
 * Extract version from URL or filename
 */
async function extractVersion(url: string): Promise<string> {
  // For Windows
  const winMatch = url.match(/CursorUserSetup-[^-]+-([0-9.]+)\.exe/);
  if (winMatch && winMatch[1]) return winMatch[1];
  
  // For Linux
  const linuxMatch = url.match(/Cursor-([0-9.]+)-/);
  if (linuxMatch && linuxMatch[1]) return linuxMatch[1];
  
  // For Mac - 尝试多种匹配模式
  // 1. 尝试匹配 darwin/universal/Cursor-darwin-universal-version.dmg 模式
  const macVersionMatch = url.match(/darwin\/[^\/]+\/Cursor-darwin-[^-]+-([0-9.]+)\.dmg/);
  if (macVersionMatch && macVersionMatch[1]) {
    return macVersionMatch[1];
  }
  
  // 1.1 尝试匹配 Cursor-darwin-* 格式
  const macStandardMatch = url.match(/Cursor-darwin-[^-]*-([0-9.]+)\.dmg/);
  if (macStandardMatch && macStandardMatch[1]) {
    return macStandardMatch[1];
  }
  
  // 1.2 尝试匹配其他可能的Mac格式
  const macAlternateMatch = url.match(/Cursor[_-]([0-9.]+)[_-]darwin/i);
  if (macAlternateMatch && macAlternateMatch[1]) {
    return macAlternateMatch[1];
  }
  
  // 2. 尝试从URL中提取版本号 - 一般格式
  const generalVersionMatch = url.match(/[\/\-]([0-9]+\.[0-9]+\.[0-9]+)[\.\-]/);
  if (generalVersionMatch && generalVersionMatch[1]) {
    return generalVersionMatch[1];
  }
  
  // 3. 如果是Mac平台但仍未找到版本号，尝试从URL路径中提取
  if (url.includes('/darwin/')) {
    // 从URL路径中提取可能的版本号
    const pathVersionMatch = url.split('/').find(segment => /^[0-9]+\.[0-9]+\.[0-9]+$/.test(segment));
    if (pathVersionMatch) {
      return pathVersionMatch;
    }
    
    // 从URL中提取构建哈希
    const buildHashMatch = url.match(/production\/([a-f0-9]+)\//);
    if (buildHashMatch && buildHashMatch[1]) {
      const buildHash = buildHashMatch[1];
      
      // 首先检查其他平台的版本
      const historyFilePath = 'public/version/cursor-version-archive.json';
      let historyPath;
      if (path.isAbsolute(historyFilePath)) {
        historyPath = historyFilePath;
      } else {
        historyPath = path.resolve(process.cwd(), historyFilePath);
      }
      
      if (fs.existsSync(historyPath)) {
        try {
          const jsonData = fs.readFileSync(historyPath, 'utf8');
          const history = JSON.parse(jsonData) as VersionHistory;
          
          // 查找具有相同构建哈希且已知版本的条目
          for (const [version, entry] of Object.entries(history)) {
            if (version !== 'Unknown') {
              for (const platformInfo of Object.values(entry.platforms)) {
                if (platformInfo.url && platformInfo.url.includes(buildHash)) {
                  return version;
                }
              }
            }
          }
        } catch (error) {
          // 出错时继续后续处理
          console.log('Error reading version history:', error instanceof Error ? error.message : 'Unknown error');
        }
      }
      
      // 如果找不到匹配的哈希，尝试简单的版本模式匹配
      // 由于异步操作复杂性，不再动态获取其他平台版本
    }
  }
  
  // 对所有平台的最后尝试：查找版本模式
  const versionMatch = url.match(/[0-9]+\.[0-9]+\.[0-9]+/);
  return versionMatch ? versionMatch[0] : 'Unknown';
}

/**
 * Format date as YYYY-MM-DD
 */
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Fetch latest download URL for a platform
 */
async function fetchLatestDownloadUrl(platform: string): Promise<string | null> {
  try {
    // Simple fetch without complex retry logic
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const response = await fetch(`https://www.cursor.com/api/download?platform=${platform}&releaseTrack=latest`, {
      headers: {
        'User-Agent': 'Cursor-Version-Checker',
        'Cache-Control': 'no-cache',
      },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json() as DownloadResponse;
    return data.downloadUrl;
  } catch (error) {
    console.error(`Error fetching download URL for platform ${platform}:`, error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

/**
 * Read version history from JSON file
 */
export function readVersionHistory(filePath: string = 'public/version/cursor-version-archive.json'): VersionHistory {
  // 确保路径正确，避免重复工作目录
  let historyPath;
  if (path.isAbsolute(filePath)) {
    historyPath = filePath;
  } else {
    historyPath = path.resolve(process.cwd(), filePath);
  }

  if (fs.existsSync(historyPath)) {
    try {
      const jsonData = fs.readFileSync(historyPath, 'utf8');
      return JSON.parse(jsonData) as VersionHistory;
    } catch (error) {
      console.error('Error reading version history:', error instanceof Error ? error.message : 'Unknown error');
      return {};
    }
  } else {
    console.log(`${filePath} not found, creating a new file`);
    return {};
  }
}

/**
 * Save version history to JSON file
 */
export function saveVersionHistory(history: VersionHistory, filePath: string = 'public/version/cursor-version-archive.json'): void {
  if (!history || typeof history !== 'object') {
    console.error('Invalid version history object provided');
    return;
  }
  
  // 确保路径正确，避免重复工作目录
  let historyPath;
  if (path.isAbsolute(filePath)) {
    historyPath = filePath;
  } else {
    historyPath = path.resolve(process.cwd(), filePath);
  }
  
  // 确保目录存在
  const dirPath = path.dirname(historyPath);
  if (!fs.existsSync(dirPath)) {
    try {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`Created directory: ${dirPath}`);
    } catch (error) {
      console.error('Error creating directory:', error instanceof Error ? error.message : 'Unknown error');
      throw error;
    }
  }
  
  try {
    // 按版本号排序，确保新版本在最前面
    const sortedHistory: VersionHistory = {};
    
    // 获取所有版本并按版本号排序
    const versions = Object.keys(history)
      .filter(v => v !== 'Unknown')
      .sort(compareVersions)
      .reverse(); // 降序排列，最新版本在前
    
    // 按排序后的顺序重建历史对象
    for (const version of versions) {
      sortedHistory[version] = history[version];
    }
    
    // 如果有Unknown版本，放在最后
    if (history['Unknown']) {
      sortedHistory['Unknown'] = history['Unknown'];
    }
    
    fs.writeFileSync(historyPath, JSON.stringify(sortedHistory, null, 2), 'utf8');
    console.log(`Version history saved to ${historyPath} (${versions.length} versions, sorted with newest first)`);
  } catch (error) {
    console.error('Error saving version history:', error instanceof Error ? error.message : 'Unknown error');
    throw error;
  }
}

/**
 * 处理历史记录中的未知版本条目
 */
async function processUnknownVersions(history: VersionHistory): Promise<void> {
  const unknownVersions = Object.keys(history).filter(version => version === 'Unknown');
  if (unknownVersions.length === 0) return;
  
  console.log('Found Unknown version entries, attempting to merge...');
  
  // 当前日期用于新条目
  const today = formatDate(new Date());
  
  // 首先尝试将 Unknown 版本的平台链接合并到相同构建哈希的已知版本中
  for (const unknownVersion of unknownVersions) {
    // 从第一个平台URL获取构建哈希
    const platformUrls = Object.values(history[unknownVersion].platforms).map(platform => platform.url);
    if (platformUrls.length === 0) continue;
    
    const buildHash = platformUrls[0].match(/production\/([a-f0-9]+)\//)?.[1];
    if (!buildHash) continue;
    
    // 查找具有相同构建哈希的非Unknown版本
    const targetVersion = Object.keys(history).find(version => 
      version !== 'Unknown' && 
      Object.values(history[version].platforms).some(platform => platform.url && platform.url.includes(buildHash))
    );
    
    if (targetVersion) {
      console.log(`Merging Unknown version with build hash ${buildHash} into version ${targetVersion}`);
      // 合并平台链接
      for (const [platform, platformInfo] of Object.entries(history[unknownVersion].platforms)) {
        if (!history[targetVersion].platforms[platform]) {
          history[targetVersion].platforms[platform] = platformInfo;
          console.log(`- Added ${platform} to version ${targetVersion}`);
        }
      }
    } else {
      // 如果没有找到匹配的版本，尝试从URL提取版本
      for (const url of platformUrls) {
        const extractedVersion = await extractVersion(url);
        if (extractedVersion !== 'Unknown') {
          console.log(`Extracted version ${extractedVersion} from Unknown entry URL`);
          // 创建新版本条目并合并平台
          if (!history[extractedVersion]) {
            history[extractedVersion] = {
              date: today,
              platforms: {}
            };
          }
          // 将Unknown版本的平台链接复制到提取的版本中
          for (const [platform, platformInfo] of Object.entries(history[unknownVersion].platforms)) {
            if (!history[extractedVersion].platforms[platform]) {
              history[extractedVersion].platforms[platform] = platformInfo;
            }
          }
          break;
        }
      }
    }
  }
  
  // 再次过滤，确保我们只删除仍然标记为 Unknown 的条目
  const remainingUnknown = Object.keys(history).filter(version => version === 'Unknown');
  if (remainingUnknown.length > 0) {
    console.log(`Removing ${remainingUnknown.length} unresolved Unknown version entries`);
    for (const unknownVersion of remainingUnknown) {
      delete history[unknownVersion];
    }
  }
}

/**
 * 从Cursor官网获取更新日志
 */
async function fetchChangelog(): Promise<Record<string, string>> {
  const changelogs: Record<string, string> = {};
  
  try {
    // 获取主更新日志页面
    const response = await fetch('https://www.cursor.com/cn/changelog');
    const html = await response.text();
    const $ = cheerio.load(html);
    
    // 判断版本号是否大于等于0.46.1
    function isVersionGreaterThanOrEqual(version: string, targetVersion: string = '0.46.1'): boolean {
      const versionParts = version.split('.').map(Number)
      const targetParts = targetVersion.split('.').map(Number)
      
      for (let i = 0; i < Math.max(versionParts.length, targetParts.length); i++) {
        const vPart = versionParts[i] || 0
        const tPart = targetParts[i] || 0
        if (vPart !== tPart) {
          return vPart > tPart
        }
      }
      return true // 相等的情况返回true
    }
    
    // 查找所有版本的li元素
    $('li').each((_: unknown, element: cheerio.Element) => {
      const $element = $(element);
      const text = $element.find('span').text();
      
      // 解析版本号和更新内容
      const match = text.split(' - ');
      if (match.length === 2) {
        const version = match[0].trim();
        const description = match[1].trim();
        
        // 验证版本号格式
        if (/^\d+\.\d+\.\d+$/.test(version)) {
          console.log(`解析更新日志: 版本=${version}, 描述=${description}`);
          // 只保存0.46.1及以后版本的更新日志
          if (isVersionGreaterThanOrEqual(version)) {
            changelogs[version] = description;
          }
        }
      }
    });
    
    console.log('获取到的更新日志:', changelogs);
    return changelogs;
  } catch (error) {
    console.error('获取更新日志失败:', error instanceof Error ? error.message : '未知错误');
    return {};
  }
}

/**
 * 获取最新的Cursor版本信息
 * 包括多个平台的下载链接
 * @param outputFile 输出JSON文件路径
 */
export async function fetchLatestCursorVersions(outputFile: string = 'public/version/cursor-version-archive.json'): Promise<{
  newVersionFound: boolean,
  latestVersion: string | null,
  history: VersionHistory
}> {
  console.log('Starting Cursor download link updater...');
  
  // 当前日期用于新条目
  const today = formatDate(new Date());
  
  // 已存在的版本历史记录
  const history = readVersionHistory(outputFile);
  
  // 抓取各平台版本信息
  const results = await fetchAllPlatforms();
  
  // 获取更新日志
  const changelogs = await fetchChangelog();
  console.log('Fetching changelogs...',changelogs);
  
  // 处理未知版本条目
  await processUnknownVersions(history);
  
  // 处理抓取到的版本信息
  let newVersionsFound = false;
  let latestVersion: string | null = null;
  
  // 平台映射，统一平台名称
  const platformMapping: Record<string, string> = {
    'linux-x64': 'linux',
    'linux-arm64': 'linux_arm64',
    'win32-x64': 'windows',
    'win32-arm64': 'windows_arm64',
    'darwin': 'mac_intel',
    'darwin-universal': 'mac',
    'darwin-arm64': 'mac_arm64'

  };
  
  // Process each platform
  for (const platforms of Object.values(results)) {
    for (const [platform, info] of Object.entries(platforms)) {
      const { url, version } = info as { url: string; version: string };
      
      // 转换平台名称到新格式
      const newPlatformName = platformMapping[platform] || platform;
      
      // 获取构建哈希用于检查跨平台版本一致性
      const buildHash = url.match(/production\/([a-f0-9]+)\//)?.[1] || '';
      
      // 对于Unknown版本，尝试使用其他平台的版本信息
      let effectiveVersion = version;
      if (version === 'Unknown' && buildHash) {
        // 查找其他平台相同哈希的已知版本
        const knownVersions = Object.entries(results)
          .flatMap(([, platforms]) => 
            Object.values(platforms).filter(p => {
              const info = p as { url: string; version: string };
              return info.version !== 'Unknown' && info.url.includes(buildHash);
            }).map(p => (p as { version: string }).version)
          );
        
        if (knownVersions.length > 0) {
          // 使用找到的第一个已知版本
          effectiveVersion = knownVersions[0];
          console.log(`Matched Unknown version for ${platform} to known version ${effectiveVersion} using build hash ${buildHash}`);
        }
      }
      
      // Check if we already have this version
      let versionEntry = history[effectiveVersion];
      
      if (!versionEntry) {
        // New version found
        console.log(`Adding new version ${effectiveVersion} to history`);
        versionEntry = {
          date: today,
          platforms: {}
        };
        history[effectiveVersion] = versionEntry;
        newVersionsFound = true;
        
        // 记录最新版本
        if (effectiveVersion !== 'Unknown' && (!latestVersion || compareVersions(effectiveVersion, latestVersion) > 0)) {
          latestVersion = effectiveVersion;
        }
      }
      
      // Update or add the platform URL
      if (!versionEntry.platforms[newPlatformName] || versionEntry.platforms[newPlatformName].url !== url) {
        console.log(`Updating ${newPlatformName} URL for version ${effectiveVersion}`);
        versionEntry.platforms[newPlatformName] = { 
          url, 
          checksum: buildHash
        };
        newVersionsFound = true;
      }
      // 更新changelog
      if (changelogs[effectiveVersion] && (!versionEntry.changelog || versionEntry.changelog !== changelogs[effectiveVersion])) {
        console.log(`Updating changelog for version ${effectiveVersion}`);
        versionEntry.changelog = changelogs[effectiveVersion];
        newVersionsFound = true;
      }
    }
  }
  
  // Save updates if any new versions found
  if (newVersionsFound) {
    console.log('Saving updated version history...');
    saveVersionHistory(history, outputFile);
  } else {
    console.log('No new versions found, no updates needed');
    
    // 如果没有找到新版本，但我们需要最新版本信息
    if (!latestVersion) {
      // 按版本号排序，找出最新版本
      const versions = Object.keys(history)
        .filter(v => v !== 'Unknown')
        .sort(compareVersions)
        .reverse();
      
      if (versions.length > 0) {
        latestVersion = versions[0];
      }
    }
  }
  
  return {
    newVersionFound: newVersionsFound,
    latestVersion,
    history
  };
}

/**
 * 比较两个版本号
 * 返回值：1 表示 v1 > v2，0 表示 v1 = v2，-1 表示 v1 < v2
 */
export function compareVersions(v1: string, v2: string): number {
  const v1Parts = v1.split('.').map(Number);
  const v2Parts = v2.split('.').map(Number);
  
  for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
    const part1 = i < v1Parts.length ? v1Parts[i] : 0;
    const part2 = i < v2Parts.length ? v2Parts[i] : 0;
    
    if (part1 > part2) return 1;
    if (part1 < part2) return -1;
  }
  
  return 0;
}

/**
 * 获取指定版本的下载链接
 */
export function getVersionDownloadLinks(version: string, history: VersionHistory): {
  date: string;
  platforms: {
    [platform: string]: {
      url: string;
      checksum: string;
    };
  };
} | null {
  if (history[version]) {
    return history[version];
  }
  return null;
}

/**
 * 获取所有版本，按日期排序（最新的在前）
 */
export function getAllVersionsSorted(history: VersionHistory): Array<{
  version: string;
  date: string;
  platforms: {
    [platform: string]: {
      url: string;
      checksum: string;
    };
  };
}> {
  const versions = Object.keys(history)
    .filter(v => v !== 'Unknown')
    .map(version => ({
      version,
      date: history[version].date,
      platforms: history[version].platforms
    }));
  
  return versions.sort((a, b) => {
    // 首先按日期排序
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    
    if (dateB !== dateA) {
      return dateB - dateA;
    }
    
    // 如果日期相同，按版本号排序
    return compareVersions(b.version, a.version);
  });
}

/**
 * 抓取所有平台的版本信息
 */
async function fetchAllPlatforms(): Promise<ResultMap> {
  // 当前支持的各平台配置
  const PLATFORMS = {
    windows: {
      platforms: ['win32-x64', 'win32-arm64']
    },
    mac: {
      platforms: ['darwin-universal','darwin', 'darwin-arm64']
    },
    linux: {
      platforms: ['linux-x64', 'linux-arm64']
    }
  };

  // 结果对象
  const results: ResultMap = {
    windows: {},
    mac: {},
    linux: {}
  };
  
  // 获取所有平台的下载链接
  for (const [osName, info] of Object.entries(PLATFORMS)) {
    for (const platform of info.platforms) {
      console.log(`Fetching download URL for ${platform}...`);
      const url = await fetchLatestDownloadUrl(platform);
      
      if (url) {
        const version = await extractVersion(url);
        console.log(`Found version ${version} for ${platform}: ${url}`);
        
        // 提取构建哈希，帮助对比不同平台同版本
        const buildHash = url.match(/production\/([a-f0-9]+)\//)?.[1] || '';
        if (buildHash) {
          console.log(`Build hash for ${platform}: ${buildHash}`);
        }
        
        if (version === 'Unknown') {
          console.log(`Warning: Could not extract version for ${platform} from URL: ${url}`);
        }
        
        if (osName === 'windows') {
          results.windows[platform] = { url, version };
        } else if (osName === 'mac') {
          results.mac[platform] = { url, version };
        } else if (osName === 'linux') {
          results.linux[platform] = { url, version };
        }
      } else {
        console.log(`Failed to fetch download URL for ${platform}`);
      }
    }
  }
  
  return results;
}