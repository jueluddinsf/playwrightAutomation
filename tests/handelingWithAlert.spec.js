const { test, expect } = require('@playwright/test');


test.describe('Handling alerts/modal in web application', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');
    await page.goto('https://demoqa.com/modal-dialogs')
    await expect(page).toHaveTitle(/DEMOQA/);

  });
});


// "Alert Handling "
test('verify alert handling', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  await expect(page).toHaveTitle(/DEMOQA/);
  await page.on('dialog', async dialog => {
  expect(dialog.message()).toContain("You clicked a button");
  await dialog.accept();
});

  const firstAlertBtn = await page.locator('#alertButton');
  //firstAlertBtn.waitFor();
  await firstAlertBtn.click();
  //await page.waitForTimeout(30000);

});

  
  // "Small-Modal Handling"

  test('verify small-modal handling', async ({ page }) => {
    await page.on('dialog', async dialog => {
    const modal = await page.locator('#showSmallModal');
    //firstAlertBtn.waitFor();
    await modal.click();
    await expect(page.locator('.modal-body')).toHaveText('This is a small modal. It has very less content');
    await page.locator('#closeSmallModal').click();

    });
});


    // "LARGE-MODAL Handling"
test('verify large-modal handling', async ({ page }) => {
  await page.on('dialog', async dialog => {
  const modal = await page.locator('#showLargeModal');
  //firstAlertBtn.waitFor();
  await modal.click();
  await expect(page.locator('.modal-body')).toHaveText('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  await page.locator('#closeLargeModal').click();

 });
});
