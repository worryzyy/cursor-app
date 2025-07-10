#!/usr/bin/env ts-node
/**
 * Cursor版本更新脚本
 * 用于从网络获取最新的Cursor版本信息并更新本地数据
 * 
 * 可以通过命令行运行：
 * npm run update-cursor-versions
 * 
 * 也可以通过GitHub Actions定时运行
 */

import { fetchLatestCursorVersions } from '../lib/cursor-tracker';
import * as path from 'path';

async function main() {
  try {
    console.log('开始更新Cursor版本信息...');
    
    // 指定版本历史文件保存路径
    const outputFile = path.join('public', 'version', 'cursor-version-archive.json');
    
    // 直接调用fetchLatestCursorVersions，而不是updateCursorVersions
    // 这样可以只更新版本历史文件，而不是更新应用数据
    const result = await fetchLatestCursorVersions(outputFile);
    
    if (result.newVersionFound) {
      console.log(`✅ 成功更新版本信息至最新版本: ${result.latestVersion}`);
    } else {
      console.log(`✓ 当前版本已是最新: ${result.latestVersion || '未知'}`);
    }
  } catch (error) {
    console.error('更新过程中发生错误:', error instanceof Error ? error.message : '未知错误');
    process.exit(1);
  }
}

// 执行主函数
main(); 