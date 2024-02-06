import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.nordstrom.com/');
  await page.getByRole('link', { name: 'Sign In | Create Account' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('galina.moeed@outlook.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('PasswordShow').fill('Galinamoeed2024');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByLabel('PasswordShow').click();
  await page.getByLabel('PasswordShow').fill('Galinamoeed2024');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Show').click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByLabel('PasswordShow').click();
  await page.getByLabel('PasswordShow').fill('Galinamoeed2024');
  await page.getByText('Show').click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Hide').click();
});