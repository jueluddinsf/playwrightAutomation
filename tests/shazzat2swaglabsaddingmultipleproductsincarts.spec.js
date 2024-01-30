import { test, expect } from '@playwright/test';

test('verify user should be able to select multiple product to the cart page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');
    await expect(page.locator('.login_logo')).toBeVisible();
    await expect(page.getByRole('img')).toBeVisible();
    await expect(page.locator('body')).toContainText('LOGIN');
    await page.locator('[data-test="username"]').click({
        button: 'right'
    });
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('form').click({
        button: 'right'
    });
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect(page.locator('#header_container div').nth(1)).toBeVisible();
    await expect(page.locator('#contents_wrapper')).toContainText('ProductsName (A to Z)Name (Z to A)Price (low to high)Price (high to low)');
    await expect(page.locator('#inventory_container').nth(1)).toBeVisible();
    await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
    await page.getByRole('button', { name: 'ADD TO CART' }).nth(1).click();
    await page.locator('div').filter({ hasText: /^\$7\.99ADD TO CART$/ }).getByRole('button').click();
    await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
    await expect(page.locator('#shopping_cart_container')).toContainText('4');
    await page.getByRole('link', { name: '4' }).click();
    await expect(page.locator('#header_container div').nth(1)).toBeVisible();
    await expect(page.locator('#cart_contents_container')).toContainText('QTYDESCRIPTION1Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.29.99REMOVE1Sauce Labs Bolt T-ShirtGet your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.15.99REMOVE1Sauce Labs OnesieRib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.7.99REMOVE1Sauce Labs Bike LightA red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.9.99REMOVEContinue ShoppingCHECKOUT');
});