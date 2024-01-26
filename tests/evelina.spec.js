import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.chewy.com/');
  await expect(page.locator('#zone-11')).toContainText('Shop By Pet');
  await expect(page.getByRole('link', { name: 'Dog Dog' })).toBeVisible();
  await page.getByRole('link', { name: 'Dog Dog' }).click();
  await expect(page.locator('h1')).toContainText('Dog Supplies');
  await expect(page.getByRole('link', { name: 'Dog Food Food' })).toBeVisible();
  await page.getByRole('link', { name: 'Dog Food Food' }).click();
  await expect(page.locator('h1')).toContainText('Dog Food');
});
