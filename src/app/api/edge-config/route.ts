import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export async function GET() {
  const sectionsData = await get('sections');
  const responseData = { sections: sectionsData };
  return NextResponse.json(responseData);
}
