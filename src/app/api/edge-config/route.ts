import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
import { Section } from '../../../stores/edge-config-store';

type SiteData = {
  sections?: Section[];
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const site = url.searchParams.get('site') || 'bcn';

  const siteData = await get(site);

  if (siteData && typeof siteData === 'object' && 'sections' in siteData) {
    const sectionsData = (siteData as SiteData).sections ?? [];
    return NextResponse.json({ sections: sectionsData });
  }

  return NextResponse.json({ sections: [] });
}
