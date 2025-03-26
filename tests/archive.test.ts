import { test, expect } from '@playwright/test';

const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

test.describe('Archive Page Links', () => {
  test('should open the correct link in a new tab', async ({ page }) => {
    await page.goto(`${baseUrl}/archive`);

    const sections = await page.locator('[data-testid="archive-section"]');

    const sectionCount = await sections.count();
    for (let i = 0; i < sectionCount; i++) {
      const section = sections.nth(i);
      const link = await section.locator('[data-testid="archive-link"]');
      const sectionLink = await link.getAttribute('href');

      const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        link.click(),
      ]);

      await newTab.waitForLoadState();

      expect(newTab.url()).toBe(sectionLink);
    }
  });
});
