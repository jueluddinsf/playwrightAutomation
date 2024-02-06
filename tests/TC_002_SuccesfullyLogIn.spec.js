import { test, expect } from '@playwright/test';

test('test S', async ({ page }) => {
  await page.goto('https://www.nordstrom.com/');
  await page.getByRole('link', { name: 'Sign In | Create Account' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('galinamoeed@outlook.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('PasswordShow').fill('Rashid15#');
  await page.getByRole('button', { name: 'Sign In' }).click();
});
