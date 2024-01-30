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



  test('verify user able to use icc events page feature ', async ({ page }) => {
    await page.goto('https://www.icc-cricket.com/');
    await page.getByRole('link', { name: 'Event Page' }).click();
    await expect(page.locator('#main')).toContainText('India continue to dominate; Pakistan, West Indies also start Super Six phase with wins');
    await page.getByRole('link', { name: 'Musheer Khan POTM Highlights' }).first().click();
    await page.getByRole('link', { name: 'The irresistible fanbase of' }).first().click();
    await page.getByRole('link', { name: 'Sri Lanka v West Indies |' }).first().click();
    await page.getByRole('link', { name: 'Fixtures confirmed for Super Six stage of U19 Men’s World Cup 2024 U19 Cricket' }).click();
    await expect(page.getByLabel('ICC Home')).toBeVisible();
    await page.getByLabel('ICC Home').click();
    
  });



  
});