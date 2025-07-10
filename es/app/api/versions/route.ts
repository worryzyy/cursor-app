import { NextResponse } from 'next/server'
import { getAllVersions } from '../../../lib/versions'

export async function GET() {
	try {
		const versions = getAllVersions()
		return NextResponse.json(versions)
	} catch (error) {
		console.error('获取版本列表失败', error)
		return NextResponse.json({ error: '获取版本列表失败' }, { status: 500 })
	}
}
