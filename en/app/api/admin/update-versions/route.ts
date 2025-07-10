import { NextRequest, NextResponse } from 'next/server';
import { updateCursorVersions } from '@/lib/version-updater';

// 管理员密钥，应该从环境变量中获取
const ADMIN_API_KEY = process.env.ADMIN_API_KEY || 'default-key-for-development';

export async function POST(request: NextRequest) {
  // 验证管理员密钥
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.split(' ')[1] !== ADMIN_API_KEY) {
    return NextResponse.json({ error: '未授权访问' }, { status: 401 });
  }

  try {
    // 更新版本数据
    const result = await updateCursorVersions();
    
    return NextResponse.json({
      success: true,
      newVersionFound: result.newVersionFound,
      latestVersion: result.latestVersion,
      message: result.newVersionFound 
        ? `已更新至最新版本 ${result.latestVersion}` 
        : '没有发现新版本'
    });
  } catch (error) {
    console.error('更新版本信息失败:', error);
    return NextResponse.json({ 
      success: false,
      error: '更新版本信息失败',
      message: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 });
  }
} 