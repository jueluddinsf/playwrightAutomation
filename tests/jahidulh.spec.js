import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://jpetstore.aspectran.com/catalog/');
  await expect(page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
  await page.getByPlaceholder('Product Search').click();
  await page.getByPlaceholder('Product Search').fill('fish');
  await page.getByPlaceholder('Product Search').press('Enter');
  await expect(page.getByRole('rowgroup')).toContainText('Angelfish');
  await page.getByRole('link', { name: 'FI-SW-' }).click() });