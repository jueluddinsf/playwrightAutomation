import { test, expect } from '@playwright/test';

test('Verify user able return to main menu', async ({ page }) => {
  
  await page.goto('https://jpetstore.aspectran.com/catalog/');
  await expect(page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
  await page.locator('#SidebarContent').getByRole('link', { name: 'Fish' }).click();
  await expect(page.locator('h3')).toContainText('Fish');
  await page.getByRole('link', { name: 'FI-SW-01' }).click();
  await expect(page.locator('h3')).toContainText('Angelfish');
  await page.getByRole('link', { name: 'Return to FISH' }).click();

});