import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.nordstrom.com/');
  await page.getByRole('link', { name: 'Nordstrom Logo' }).click();
  await page.getByRole('link', { name: 'Nordstrom Logo' }).click();
  await page.getByRole('link', { name: 'Sign In | Create Account' }).click();
 
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('galina.moeed@outlook.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('First name*').click();
  await page.getByLabel('First name*').fill('gala');
  await page.getByLabel('First name*').press('Tab');
  await page.getByLabel('Last name*').fill('moeed');
  await page.getByLabel('Last name*').press('Tab');
  await page.getByLabel('Create password*Show').fill('galamoeed2024');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByLabel('Create password*Show').click();
  await page.getByText('Show').click();
  await page.getByLabel('Create password*Hide').click();
  await page.getByLabel('Create password*Hide').fill('Galamoeed2024');
  await page.getByRole('button', { name: 'Create Account' }).click();
});