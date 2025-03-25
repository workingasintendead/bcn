import { test, expect } from '@playwright/test';

const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

const archiveUrl = `${baseUrl}/archive`;

test('should navigate to Edgewate portfolio page when the link is clicked', async ({
  page,
}) => {
  await page.goto(archiveUrl);

  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=Edgewater Landscaping').click(),
  ]);

  await expect(newPage).toHaveURL('https://projectmk.vercel.app/portfolio');
});
