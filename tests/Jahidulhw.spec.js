import { test, expect } from '@playwright/test';

test('Verify the favorite pet page ', async ({ page }) => {
  await page.goto('https://jpetstore.aspectran.com/catalog/');
  await expect(page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await expect(page.locator('#Signon')).toContainText('Please enter your username and password.');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('h4')).toContainText('Pet Favorites');
  await page.getByRole('link', { name: 'Manx' }).click();
  await expect(page.locator('h3')).toContainText('Manx');
});