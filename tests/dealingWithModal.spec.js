const { test, expect } = require('@playwright/test');


test.describe('Interaction with Web Page Dialogs', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/modal-dialogs');
        await expect(page).toHaveTitle(/DEMOQA/);
    });
});
    test('Verify small Model can be clicked  ', async ({ page }) => {
        await page.on('dialog', async dialog => {
            const modal = await page.locator('#showSmallModal');
            await modal.click();
            await expect(page.locator('.modal-body')).toHaveText('This is a small modal. It has very less content');
            await page.locator('#closeSmallModal').click();

        

        });
    });
        test('Verify large Model can be clicked  ', async ({ page }) => {
            await page.on('dialog', async dialog => {
                const modal1 = await page.locator('#showLargeModal');
                await modal1.click();
                await expect(page.locator('.modal-body')).toHaveText('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
                await page.locator('#closeLargeModal').click();


            });
        });