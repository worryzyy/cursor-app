import { getAllVersions } from '@/lib/versions'
import { NextResponse } from 'next/server'

let cachedSitemap: string | null = null;
let lastCacheTime: number = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24小时

export async function GET() {
  // 如果缓存有效，直接返回
  if (cachedSitemap && (Date.now() - lastCacheTime < CACHE_DURATION)) {
    return new NextResponse(cachedSitemap, {
      headers: { 'Content-Type': 'application/xml' },
    });
  }

  try {
    const versions = await getAllVersions()
    console.log(`获取到 ${versions.length} 个版本`);
    
    const domain = 'https://cursorhistory.com'
    
    // 生成基础URL
    let urlEntries = [
      {
        loc: `${domain}/`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: '1.0'
      },
      {
        loc: `${domain}/versions`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: '0.8'
      }
    ];
    
    // 添加版本URL
    if (versions && versions.length > 0) {
      const versionEntries = versions.map(version => ({
        loc: `${domain}/versions/${version.version}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: version.isLatest ? '0.9' : '0.7'
      }));
      
      urlEntries = [...urlEntries, ...versionEntries];
    }
    
    // 生成XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlEntries.map(entry => `
  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>
  `).join('')}
</urlset>`;

    // 更新缓存
    cachedSitemap = xml;
    lastCacheTime = Date.now();

    // 返回XML响应
    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('生成站点地图时出错:', error);
    return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cursorhistory.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`, {
      headers: {
        'Content-Type': 'application/xml',
      },
      status: 500
    });
  }
} 
