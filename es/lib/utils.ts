import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 合并类名工具函数，结合 clsx 和 tailwind-merge
 * 用于处理条件类名和合并 Tailwind 类名
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
