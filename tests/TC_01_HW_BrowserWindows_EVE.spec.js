const { test, selectors } = require('@playwright/test');

// Test # 1: Click on New Tab. Verify that new tab will pop up. 


test ('New Tab' , async ({browser, page})=>
{
    await page.goto ('https://demoqa.com/browser-windows');
    console.log(await page.title());
    await page.locator('#tabButton').first().click();

});

// Test # 2: Click on "New Window" and verify that a new frame pops up. 

test ('New Window' , async ({browser, page})=>
{
    await page.goto ('https://demoqa.com/browser-windows');
    console.log(await page.title());
    await page.locator('#windowButton').first().click();

});


// Test # 3: Click on "New Window Message" and confirm the following message: "Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization."

test.only ('New Window Message' , async ({browser, page})=>
{
    await page.goto ('https://demoqa.com/browser-windows');
    console.log(await page.title());
    await page.locator('#messageWindowButton').first().click();
    await page.locator('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.');



});

