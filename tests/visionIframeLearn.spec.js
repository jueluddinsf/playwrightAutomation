const { test, expect } = require('@playwright/test');
const VisionPage = require('../pageObjects/actions/visionPage')

test('learning iframe via ui vision application', async ({ page }) => {
  const visionObject = new VisionPage(page);
  visionObject.visitVisionPage();

  // Expect a title "to contain" a substring.
  visionObject.verifyPageTitle();
  
  visionObject.addTextToFrame1();

  // frame 2 
  visionObject.addTextToFrame2();


});