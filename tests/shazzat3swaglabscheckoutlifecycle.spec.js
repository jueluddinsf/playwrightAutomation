import { test, expect } from '@playwright/test';

test('verify user should be able tofinished up the checkout lifecyecle', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');
    await expect(page.locator('.login_logo')).toBeVisible();
    await expect(page.locator('#login_button_container')).toContainText('LOGIN');
    await page.locator('[data-test="username"]').click({
        button: 'right'
    });
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click({
        button: 'right'
    });
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect(page.locator('#header_container div').nth(1)).toBeVisible();
    await expect(page.locator('#contents_wrapper')).toContainText('Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.$29.99ADD TO CARTSauce Labs Bike LightA red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.$9.99ADD TO CARTSauce Labs Bolt T-ShirtGet your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.$15.99ADD TO CARTSauce Labs Fleece JacketIt\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.$49.99ADD TO CARTSauce Labs OnesieRib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.$7.99ADD TO CARTTest.allTheThings() T-Shirt (Red)This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.$15.99ADD TO CART');
    await expect(page.locator('.peek')).toBeVisible();
    await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
    await page.getByRole('button', { name: 'ADD TO CART' }).nth(1).click();
    await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
    await page.locator('div').filter({ hasText: /^\$49\.99ADD TO CART$/ }).getByRole('button').click();
    await expect(page.locator('#shopping_cart_container')).toContainText('4');
    await page.getByRole('link', { name: '4' }).click();
    await expect(page.locator('#header_container div').nth(1)).toBeVisible();
    await expect(page.locator('#cart_contents_container')).toContainText('QTYDESCRIPTION1Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.29.99REMOVE1Sauce Labs Bolt T-ShirtGet your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.15.99REMOVE1Sauce Labs Bike LightA red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.9.99REMOVE1Sauce Labs Fleece JacketIt\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.49.99REMOVEContinue ShoppingCHECKOUT');
    await page.getByRole('link', { name: 'CHECKOUT' }).click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('sh');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('hh');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('10111');
    await page.getByRole('button', { name: 'CONTINUE' }).click();
    await expect(page.locator('#checkout_summary_container')).toContainText('QTYDESCRIPTION1Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.$29.991Sauce Labs Bolt T-ShirtGet your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.$15.991Sauce Labs Bike LightA red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.$9.991Sauce Labs Fleece JacketIt\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.$49.99');
    await expect(page.locator('#checkout_summary_container')).toContainText('FINISH');
    await page.getByRole('link', { name: 'FINISH' }).click();
    await expect(page.locator('#header_container div').nth(1)).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('THANK YOU FOR YOUR ORDER');
    await expect(page.locator('#contents_wrapper')).toContainText('Finish');
});