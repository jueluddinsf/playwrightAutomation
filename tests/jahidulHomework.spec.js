import { test, expect } from '@playwright/test';

test('Verify the product search page', async ({ page }) => {
  await page.goto('https://jpetstore.aspectran.com/catalog/');
  await expect(page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
  await page.getByPlaceholder('Product Search').click();
  await page.getByPlaceholder('Product Search').fill('fish');
  await page.getByPlaceholder('Product Search').press('Enter');
  await expect(page.locator('h3')).toContainText('Search Results for "fish"');
  await page.getByRole('link', { name: 'FI-SW-' }).click();
});

import { test, expect } from '@playwright/test';

test('Verify a user can checkout', async ({ page }) => {
  await page.goto('https://jpetstore.aspectran.com/catalog/');
  await expect(page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
  await page.locator('#SidebarContent').getByRole('link', { name: 'Fish' }).click();
  await expect(page.locator('h3')).toContainText('Fish');
  await page.getByRole('link', { name: 'FI-SW-01' }).click();
  await expect(page.locator('h3')).toContainText('Angelfish');
  await page.getByRole('link', { name: 'Add to Cart' }).first().click();
  await expect(page.locator('h3')).toContainText('Shopping Cart');
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await expect(page.locator('#Signon')).toContainText('Please enter your username and password.');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#CenterForm')).toContainText('Payment Details');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.locator('#CenterForm')).toContainText('Order');
  await page.getByRole('button', { name: 'Confirm' }).click();
});

import { test, expect } from '@playwright/test';

test('Verify a user can register', async ({ page }) => {
  await page.goto('https://jpetstore.aspectran.com/catalog/');
  await expect(page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await expect(page.locator('#Signon')).toContainText('Please enter your username and password.');
  await page.getByRole('link', { name: 'Register Now!' }).click();
  await expect(page.locator('#CenterForm')).toContainText('User Information');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('johndoe22');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('pancake');
  await page.locator('input[name="repeatedPassword"]').click();
  await page.locator('input[name="repeatedPassword"]').fill('pancake');
  await page.locator('input[name="firstName"]').click();
  await page.locator('input[name="firstName"]').fill('john');
  await page.locator('input[name="lastName"]').click();
  await page.locator('input[name="lastName"]').fill('doe');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('johndow@gmail.com');
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('2223334444');
  await page.locator('input[name="address1"]').click();
  await page.locator('input[name="address1"]').fill('66-22 east');
  await page.locator('input[name="address2"]').click();
  await page.locator('input[name="address2"]').fill('987');
  await page.locator('input[name="city"]').click();
  await page.locator('input[name="city"]').fill('queens');
  await page.locator('input[name="state"]').click();
  await page.locator('input[name="state"]').fill('new york');
  await page.locator('input[name="zip"]').click();
  await page.locator('input[name="zip"]').fill('11111');
  await page.locator('input[name="country"]').click();
  await page.locator('input[name="country"]').fill('queens');
  await page.getByRole('button', { name: 'Save Account Information' }).click();
  await expect(page.locator('#Signon')).toContainText('Please enter your username and password.');
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('johndoe22');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('pancake');
  await page.getByRole('button', { name: 'Login' }).click();
});