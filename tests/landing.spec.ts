import { test, expect } from '@playwright/test';

const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

test('should navigate to /gateway when the logo is clicked', async ({
  page,
}) => {
  await page.goto(baseUrl);

  const logo = await page.locator('img[alt="BCN Logo"]');

  await logo.click();

  await expect(page).toHaveURL(`${baseUrl}/gateway`);
});
