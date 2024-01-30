import { test, expect } from '@playwright/test';

test('verify user able to click icc ranking tab and ranking faqs)', async ({ page }) => {

    
  await page.goto('https://www.icc-cricket.com/');
  await expect(page.locator('#galaxyBar')).toContainText('Event Page');
  await expect(page.locator('#nav').getByRole('img').first()).toBeVisible();
  await expect(page.getByLabel('Rankings', { exact: true })).toContainText('Rankings');
  await page.getByLabel('Rankings', { exact: true }).click();
  await expect(page.locator('h1')).toContainText('ICC World Rankings');
  await page.getByRole('heading', { name: 'Men\'s team rankings', exact: true }).click();
  await page.getByRole('heading', { name: 'Jump to' }).click();
  await expect(page.getByLabel('player rankings faqs')).toBeVisible();
  await page.getByLabel('player rankings faqs').click();
  await page.getByRole('link', { name: 'Header Logo' }).click();
});