import { test, expect } from '@playwright/test';

test('verify user should be able to login to swahlabs page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  await expect(page.getByRole('img')).toBeVisible();
  await expect(page.locator('.login_logo')).toBeVisible();
  await expect(page.locator('body')).toContainText('LOGIN');
  await expect(page.locator('#login_credentials')).toContainText('Accepted usernames are: standard_user locked_out_user problem_user performance_glitch_user');
  await page.locator('[data-test="username"]').click({
    button: 'right'
  });
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('#header_container div').nth(1)).toBeVisible();
  await expect(page.locator('#inventory_filter_container')).toContainText('Products');
  await expect(page.locator('#item_4_title_link')).toContainText('Sauce Labs Backpack');
  await expect(page.locator('#contents_wrapper')).toContainText('Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.$29.99ADD TO CARTSauce Labs Bike LightA red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.$9.99ADD TO CARTSauce Labs Bolt T-ShirtGet your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.$15.99ADD TO CARTSauce Labs Fleece JacketIt\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.$49.99ADD TO CARTSauce Labs OnesieRib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.$7.99ADD TO CARTTest.allTheThings() T-Shirt (Red)This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.$15.99ADD TO CART');
});