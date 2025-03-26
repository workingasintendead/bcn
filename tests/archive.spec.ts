import { test, expect, Page } from '@playwright/test';

const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
const archiveUrl = `${baseUrl}/archive`;

const testSection = async ({
  page,
  sectionText,
  expectedUrl,
}: {
  page: Page;
  sectionText: string;
  expectedUrl: string;
}) => {
  await page.goto(archiveUrl);

  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator(`text=${sectionText}`).click(),
  ]);

  await expect(newPage).toHaveURL(expectedUrl);
};

test('should navigate to the Edgewater portfolio page when the link is clicked', async ({
  page,
}) => {
  await testSection({
    page,
    sectionText: 'Edgewater Landscaping Project 1',
    expectedUrl: 'https://projectmk.vercel.app/portfolio',
  });

  await testSection({
    page,
    sectionText: 'Edgewater Landscaping Project 2',
    expectedUrl: 'https://projectmk.vercel.app/portfolio',
  });
});
