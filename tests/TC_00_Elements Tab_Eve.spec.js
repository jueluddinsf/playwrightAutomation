const {test} = require('@playwright/test');

// Test # 1 "Text Box"

test.only ('Elements Text Box' , async ({browser, page})=>
{
    await page.goto ('https://demoqa.com/text-box');
    console.log(await page.title());

    // css selector will help reach the location. 

    await page.locator('#userName').fill("John Doe");
    await page.locator('#userEmail').fill("johndoe@gmail.com");
    await page.locator('#currentAddress').fill("123 H Avenue, New York, NY 10023");
    await page.locator('#permanentAddress').fill("123 H Avenue, New York, NY 10023");
    await page.locator("#submit").click();

});

// Test # 2 "Check Box"

test ('Elements Check Box' , async ({browser, page})=>
{
    await page.goto ('https://demoqa.com/checkbox');
    console.log(await page.title());
    await page.locator('.rct-icon.rct-icon-uncheck').click();

});

// Test # 3 "Radio Button"

test ('Elements Radio Button' , async ({browser, page})=>
{
    await page.goto ('https://demoqa.com/radio-button');
    console.log(await page.title());
    await page.locator('.custom-control-label').first().click();

});

// Test # 4 "Web Tables"

test ('Elements Web Tables' , async ({browser, page})=>
{
    await page.goto ('https://demoqa.com/webtables');
    console.log(await page.title());
    await page.locator('#addNewRecordButton').click();
    await page.locator("#registration-form-modal");
    await page.locator('#firstName').fill("John");
    await page.locator('#lastName').fill("Doe"); 
    await page.locator('#userEmail').fill("johndoe@gmail.com");
    await page.locator('#age').fill("30"); 
    await page.locator('#salary').fill("$150,000"); 
    await page.locator('#department').fill("Automation Engineer"); 
    await page.locator('#submit').click();
});




