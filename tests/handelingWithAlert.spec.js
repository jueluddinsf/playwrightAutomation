const { test, expect } = require('@playwright/test');



test.describe('Handling alerts/modal in web application', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');
    await page.goto('https://demoqa.com/modal-dialogs');
    await page.goto('https://demoqa.com/browser-windows');
    await page.goto('https://demoqa.com/sample');
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


   // "Browser Window

   test('verify New Tab button', async ({ page }) => {
    await page.on('dialog', async dialog => {
   
       // Click on the New Tab button
       const newTab = await page.locator('#newTab');
       await newTab.click();
       await page.goto('https://demoqa.com/sample');
   
       // Verify the message on the new tab
       await expect(page.locator('#sampleHeading')).toHaveText('This is a sample page.');
   });

  });


  test('verify New Window button', async ({ page }) => {
    await page.on('dialog', async dialog => {
    
    // Click on the New Window button
    await page.locator('#newWindow').click();

    // Wait for a new window to open
    const [newPage] = await Promise.all([
        new Promise(resolve => page.once('popup', resolve)),
        page.locator('#newWindow').click()
    ]);

    // Verify the URL of the new window
    await expect(newPage).toHaveURL('https://demoqa.com/sample');

    // Verify the message on the new window
    await expect(page.locator('#sampleHeading')).toHaveText('This is a sample page.');
});
  });


  test('verify New Window Message button', async ({ page }) => {
    await page.on('dialog', async dialog => {

  // Click on the New Window Message button
    await page.locator('#newWindowMessage').click();

    // Wait for a new window to open
    const [newPage] = await async.all([
        new async(resolve => page.once('popup', resolve)),
        page.click('#newWindowMessage')
    ]);

    // Verify the message on the new window
    await expect(page.locator('#sampleHeading')).toHaveText('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.');
});
  });


