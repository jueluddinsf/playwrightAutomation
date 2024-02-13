const { test, expect } = require('@playwright/test');

test.describe('Interaction with Web Page Dialogs', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/frames');
        await expect(page).toHaveTitle(/DEMOQA/);


    });
        test('Verify user can locate iFrame within a page',async ({ page}) => {
            
            await expect(page).toHaveTitle('Frames');
             await page.locator('frame1Wrapper').click('This is a sample page');
            
            
            
            
            
            });
    










});