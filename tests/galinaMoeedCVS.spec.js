const { test, expect } = require('@playwright/test');
const GoogleSearchPage = require('../pageObjects/actions/GoogleSearchPage');
const readKeyWords = require('../pageObjects/actions/csvHelper');

let googleSearchPage;
let keywords;


test('Google test', async ({ page }) => {
    googleSearchPage = new GoogleSearchPage(page);
    await googleSearchPage.goToUrl('https://www.google.com/');
    keywords = await csvHelper.readKeyWords('tests\cvsTestData\keywords.csv');


    

    googlePage = new GooglePage(page);
    csvHelper = new CsvHelper();
    keywords = await csvHelper.readKeyWords('tests\cvsTestData\keywords.csv');


    for (let ele of keywords) {

        await googlePage.searchKeyWords(ele)
        await page.waitForTimeout(5000);
        console.log(keyword);  

    }

})







