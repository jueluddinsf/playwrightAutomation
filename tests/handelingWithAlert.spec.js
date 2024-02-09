const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
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


