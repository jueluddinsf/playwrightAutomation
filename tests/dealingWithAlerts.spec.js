const { test, expect } = require('@playwright/test');

test.describe('Interaction with Alerts test case', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/alerts');
        await expect(page).toHaveTitle(/DEMOQA/);
    });
});


test('Click Button to see alert', async ({ page }) => {
    page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
        await page.click('//*[@id="alertButton"]');
        await page.waitForTimeout(2000);

    });

});

test('On button click, alert will appear after 5 seconds', async ({ page }) => {


    page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
        await page.click('//*[@id="timerAlertButton"]');
        await page.waitForTimeout(2000);
        if (dialog.message().includes())
            expect(dialog.message()).toContain("This alert appeared after 5 seconds");
        await dialog.accept();
    });

});


test('On button click, confirm box will appear', async ({ page }) => {
    page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
        await page.click('//*[@id="confirmButton"]');
        await page.waitForTimeout(2000);
        if (dialog.message().includes())
            expect(dialog.message()).toContain("Do you confirm action?");
        await dialog.accept();



    });

});

test('Verify that if button click, prompt box will appear', async ({ page }) => {

    page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
        await page.click('//*[@id="promtButton"]');
        await page.waitForTimeout(2000);
        if (dialog.message().includes())
            expect(dialog.message()).toContain("Please enter your name");
        await dialog.accept();

    });


});

