import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test');

test('has title', async({ page }) => {

    await page.goto('https://www.usps.com/');
    await expect(page.locator('body')).toContainText('Search or Track Packages');
    await page.getByRole('link', { name: 'Locations' }).click();
    await expect(page.locator('body')).toContainText('Find USPS Locations');
});

test('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('#item_4_title_link')).toContainText('Sauce Labs Backpack');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
});