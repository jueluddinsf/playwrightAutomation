// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Frames - Web Automation Test/);
  const frame1 = await page.frameLocator('[src="frame_1.html"]');
  await frame1.locator('[name="mytext1"]').fill('iframe number one');



});