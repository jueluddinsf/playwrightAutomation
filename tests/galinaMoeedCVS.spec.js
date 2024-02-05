const {test, expect} =require('@playwright/test');
const GooglePage = require('../pageObjects/actions/GooglePage');

let googlePage;

test ('Google test', async  ({page}) => {

googlePage = new GooglePage(page);
await googlePage.goToUrl('https://www.google.com/');

})







