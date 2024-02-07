const{Page} = require('@playwright/test');
const googleLocator = require('../locators/googlePage');

class GoogleSearchPage {

    constructor(page) {
        this.page = page;
    } 

        async goToUrl(url) {
           await this.page.goto(url);
        }

       async searchKeyWords(keyword) {
            let searchBox = await this.page.locator(googleLocator.searchBoxLocator);
            await searchBox.waitFor();
            await searchBox.fill(keyword);
            await this.page.keyboard.press('Enter');
        }



    }
module.exports = GoogleSearchPage