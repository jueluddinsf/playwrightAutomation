import { test, expect } from '@playwright/test';

test('verify icc home page ranging feature', async ({ page }) => {
  await page.goto('https://www.icc-cricket.com/');
  await page.goto('https://www.icc-cricket.com/rankings');
  await expect(page.locator('h1')).toContainText('ICC World Rankings');
});