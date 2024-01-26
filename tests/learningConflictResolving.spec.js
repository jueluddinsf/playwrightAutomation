
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  
  await page.goto('https://www.usps.com/');
  await expect(page.locator('body')).toContainText('Search or Track Packages');
  await page.getByRole('link', { name: 'Locations' }).click();
  await expect(page.locator('body')).toContainText('Find USPS Locations');
});