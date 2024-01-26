import { test, expect } from '@playwright/test';

test('Verify Customer Payment and Claim Center Page Content', async ({ page }) => {
  await page.goto('https://insurancewebsitedemo.com/customer-support/payments-and-claims');
  await expect(page.locator('h1')).toContainText('Customer Payment and Claim Center');
  await expect(page.getByText('Below are links that you can')).toBeVisible();
  await page.getByText('Below are links that you can').click();
});