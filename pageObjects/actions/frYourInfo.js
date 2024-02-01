const { Page } = require('playwright');
const yourInformationPageLocators = require('../locators/tdYourInformation');
import { expect } from '@playwright/test';
// import YourInformationPageLocators from '../locators/yourInformation';

class YourInformationPageActions {

    constructor(page) {
        this.page = page;
    }
   
      async fillFirstName() {
        const firstName = await this.page.locator(yourInformationPageLocators.firstName);
        await firstName.click();
        await firstName.fill('Farah');
      }

      async fillLastName() {
        const lastName = await this.page.locator(yourInformationPageLocators.lastName);
        await lastName.click();
        await lastName.fill('Rashid');
      }

      async fillPostalCode() {
        const postalCode = await this.page.locator(yourInformationPageLocators.postalCode);
        await postalCode.click();
        await postalCode.fill('06010');
      }

      async clickContinu() {
        await this.page.locator(yourInformationPageLocators.continue).click();
  
      }

}

module.exports = YourInformationPageActions;
