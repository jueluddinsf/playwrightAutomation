import { test, expect } from '@playwright/test';

test('Verify that customer can fill out request boat quote', async ({ page }) => {
  await page.goto('https://insurancewebsitedemo.com/');
  await expect(page.locator('#skrollr-body')).toContainText('Your IndependentInsurance Agency');
  await expect(page.getByRole('link', { name: 'Request A Quote', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Request A Quote', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Free No-Obligation Quote Forms');
  await expect(page.getByRole('link', { name: 'Boat Insurance Boat Insurance' })).toBeVisible();
  await page.getByRole('link', { name: 'Boat Insurance Boat Insurance' }).click();
  await expect(page.locator('h1')).toContainText('Secure Boat Insurance Quote Request Form');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('e');
  await page.getByLabel('First Name').press('Tab');
  await page.getByLabel('Last Name').fill('k');
  await page.getByLabel('Last Name').press('Tab');
  await page.getByLabel('Email Address:').fill('e@gmail.com');
  await page.getByLabel('Email Address:').press('Tab');
  await page.getByLabel('Phone Number:').fill('5465555555');
  await page.getByLabel('Phone Number:').press('Tab');
  await page.getByLabel('Digit Zip:').fill('11111');
  await expect(page.getByRole('button', { name: 'Continue to Step 2... ' })).toBeVisible();
  await page.getByRole('button', { name: 'Continue to Step 2... ' }).click();
});