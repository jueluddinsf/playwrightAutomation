const { test, expect } = require('@playwright/test');

test('Verify user can successfully Navigate to Login Page', async ({ page }) => {
  await page.goto('https://www.nordstrom.com/');
  await expect(page).toHaveTitle('Nordstrom Online & In Store: Shoes, Jewelry, Clothing, Makeup, Dresses'); 
  await expect(page.locator('#controls-account-links')).toContainText('Sign In');
  await expect(page.getByText('Sign In', { exact: true })).toBeVisible();
  await page.getByText('Sign In', { exact: true }).click();
  await expect(page.getByText('Sign In | Create Account')).toBeVisible();

 
});