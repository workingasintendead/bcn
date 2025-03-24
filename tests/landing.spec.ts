import { test, expect } from '@playwright/test';

test('should navigate to /gateway when the logo is clicked', async ({
  page,
}) => {
  await page.goto('http://localhost:3000');

  const logo = await page.locator('img[alt="BCN Logo"]');

  await logo.click();

  await expect(page).toHaveURL('http://localhost:3000/gateway');
});
