const { test, expect } = require('@playwright/test');
const GoogleSearchPage = require('../pageObjects/actions/GoogleSearchPage');
//const readKeyWords = require('../pageObjects/actions/csvReader');
const CsvReader = require('../pageObjects/actions/csvReader');

let googleSearchPage;
let keywords;
let csvReader;


test('Google test', async ({ page }) => {
    googleSearchPage = new GoogleSearchPage(page);
    csvReader = new CsvReader();
    keywords = await csvReader.readKeyWords('../testData/keywords.csv')


    
    await googleSearchPage.goToUrl('https://www.google.com/')
    //googlePage = new GooglePage(page);
    //csvReader = new CsvReader();
   // keywords = await CsvReader.readKeyWords('tests\cvsTestData\keywords.csv');


    for (let ele of keywords) {

        await googlePage.searchKeyWords(ele)
        await page.waitForTimeout(5000);
        console.log(ele);  

    }

})







