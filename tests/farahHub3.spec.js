import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="product_sort_container"]')).toBeVisible();
  await page.locator('[data-test="product_sort_container"]').selectOption('za');
  await expect(page.locator('#item_3_title_link')).toContainText('Test.allTheThings() T-Shirt (Red)');
});