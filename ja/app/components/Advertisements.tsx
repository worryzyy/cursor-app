'use client'

import { useEffect } from 'react'

export function AAdsAdvertisement() {
  useEffect(() => {
    // 动态创建脚本，避免 Next.js 的 hydration 问题
    const script = document.createElement('script')
    script.src = '//ad.a-ads.com/2385774?size=468x60'
    script.async = true

    // 找到广告容器并添加脚本
    const adContainer = document.getElementById('a-ads-container')
    if (adContainer) {
      // 清空容器以防止重复添加
      adContainer.innerHTML = ''

      // 创建iframe
      const iframe = document.createElement('iframe')
      iframe.setAttribute('data-aa', '2385774')
      iframe.src = '//ad.a-ads.com/2385774?size=468x60'
      iframe.style.width = '468px'
      iframe.style.height = '60px'
      iframe.style.border = '0'
      iframe.style.padding = '0'
      iframe.style.overflow = 'hidden'
      iframe.style.backgroundColor = 'transparent'

      // 创建广告链接
      const link = document.createElement('a')
      link.style.display = 'block'
      link.style.textAlign = 'right'
      link.style.fontSize = '12px'
      link.id = 'preview-link'
      link.href = 'https://aads.com/campaigns/new/?source_id=2385774&source_type=ad_unit&partner=2385774'
      link.textContent = 'Advertise here'

      // 添加到容器
      adContainer.appendChild(iframe)
      adContainer.appendChild(link)
    }
  }, [])

  return (
    <div className="flex justify-center my-4">
      <div id="a-ads-container" style={{ width: '468px', height: 'auto' }}></div>
    </div>
  )
}

export function FloatingAds({ position }: { position: 'left' | 'right' }) {
  useEffect(() => {
    // 找到广告容器
    const adContainer = document.getElementById(`floating-ad-${position}`)

    // 根据位置确定不同的广告ID
    const adId = position === 'left' ? '2389613' : '2389614';
    // const adId = position === 'left' ? '2386425' : '2386426';

    if (adContainer) {
      // 清空容器以防止重复添加
      adContainer.innerHTML = ''

      // 创建iframe
      const iframe = document.createElement('iframe')
      iframe.setAttribute('data-aa', adId)
      iframe.src = `//ad.a-ads.com/${adId}?size=160x600`
      iframe.style.width = '160px'
      iframe.style.height = '600px'
      iframe.style.border = '0'
      iframe.style.padding = '0'
      iframe.style.overflow = 'hidden'
      iframe.style.backgroundColor = 'transparent'

      // 创建广告链接
      const link = document.createElement('a')
      link.style.display = 'block'
      link.style.textAlign = 'right'
      link.style.fontSize = '12px'
      link.id = `floating-ad-link-${position}`
      link.href = `https://aads.com/campaigns/new/?source_id=${adId}&source_type=ad_unit&partner=${adId}`
      link.textContent = 'Advertise here'

      // 添加到容器
      adContainer.appendChild(iframe)
      adContainer.appendChild(link)
    }
  }, [position])

  // 根据位置设置不同的样式
  const positionStyles = {
    left: {
      left: 0,
      right: 'auto',
    },
    right: {
      left: 'auto',
      right: 0,
    }
  }

  // 响应式显示：只在大屏幕(lg及以上)显示
  return (
    <div
      className={`hidden lg:block fixed top-1/2 transform -translate-y-1/2 z-40`}
      style={{
        ...positionStyles[position],
        marginLeft: position === 'left' ? '10px' : 'auto',
        marginRight: position === 'right' ? '10px' : 'auto',
      }}
    >
      <div id={`floating-ad-${position}`} style={{ width: '160px', height: 'auto' }}></div>
    </div>
  )
}

// 同时渲染左右两侧的悬浮广告
export function FloatingAdsContainer() {
  return (
    <>
      <FloatingAds position="left" />
      <FloatingAds position="right" />
    </>
  )
} 