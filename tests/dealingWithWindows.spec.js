const { test, expect } = require('@playwright/test');


test.describe('Interaction with Web Page Dialogs', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/browser-windows');
        await expect(page).toHaveTitle(/DEMOQA/);

    });
});

//New Tab on Window Browser
test('Verify Window Browser can be accessed ', async ({ page }) => {
   await expect(page.getByRole('list').getByText('Browser Windows')).toBeVisible();
    await expect(page.getByRole('button', { name: 'New Tab' })).toBeVisible();
    await expect(page.locator('#tabButton')).toContainText('New Tab');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'New Tab' }).click();
    const page1 = await page1Promise;
    await expect(page1.getByRole('heading', { name: 'This is a sample page' })).toBeVisible();
    await expect(page1.locator('#sampleHeading')).toContainText('This is a sample page');

});
//new window test 
test('Verify New Window can be  accessed ', async ({ page }) => {
await expect(page.locator('//*[@id="windowButton"]')).toContainText('New Window');
 await page.locator('//*[@id="windowButton"]').click();

});
//new window message 
test('Verify New Window message can be accessed ', async ({ page }) => {
await expect(page.locator('msgWindowButtonWrapper')).toContainText('New Window MessageKnowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.');
const page1Promise = page.waitForEvent('popup');
await page.getByRole('button', { name: 'New Tab' }).click();
await expect(page1.getByRole('heading', { name: 'This is a sample page' })).toBeVisible();
await expect(page1.locator('#sampleHeading')).toContainText('This is a sample page');


});
