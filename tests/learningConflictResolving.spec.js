
// @ts-check
const { test, expect } = require('@playwright/test');

test.only('Verify Application Tittle', async function ({ page }) {
    //navigate the google website
    await page.goto("https://www.google.com/")
    // verify page tittle
   // const pTittle = await page.title()
    //console.log("the page tittle is " + pTittle)
    await expect(page).toHaveTitle("Google")

});
