import { test, expect } from '@playwright/test';

test('verify user should be able to get in to swahlabs product page and select a item to the cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  await expect(page.locator('.login_logo')).toBeVisible();
  await expect(page.locator('body')).toContainText('LOGIN');
  await page.locator('[data-test="username"]').click({
    button: 'right'
  });
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('#header_container div').nth(1)).toBeVisible();
  await expect(page.locator('#contents_wrapper')).toContainText('ProductsName (A to Z)Name (Z to A)Price (low to high)Price (high to low)');
  await expect(page.locator('#contents_wrapper')).toContainText('ADD TO CART');
  await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
  await expect(page.locator('#shopping_cart_container')).toContainText('1');
  await page.getByRole('link', { name: '1' }).click();
  await expect(page.locator('#header_container div').nth(1)).toBeVisible();
  await expect(page.locator('#cart_contents_container')).toContainText('QTYDESCRIPTION1Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.29.99REMOVE');
});
