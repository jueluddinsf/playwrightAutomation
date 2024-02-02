const { Page } = require('playwright');
const cartPageLocators = require('../locators/tdCartPage');
import { expect } from '@playwright/test';

class CartPageActions {

    constructor(page) {
        this.page = page;
    }
    async validateBackpackInCart() {
        await expect(this.page.locator(cartPageLocators.backpackInCart)).toContainText('Sauce Labs Backpack')

    }

    async validateBikeLightInCart() {
        await expect(this.page.locator(cartPageLocators.bikeLightInCart)).toContainText('Sauce Labs Bike Light')

    }

    async clickCheckoutInCart() {
        await this.page.locator(cartPageLocators.clickCheckoutInCart).click();
  
      }

      async fillFirstName() {
        const firstName = await this.page.locator(cartPageLocators.firstName);
        await firstName.click();
        await firstName.fill('Tamim');
      }

      async fillLastName() {
        const lastName = await this.page.locator(cartPageLocators.lastName);
        await lastName.click();
        await lastName.fill('Dhali');
      }

      async fillPostalCode() {
        const postalCode = await this.page.locator(cartPageLocators.postalCode);
        await postalCode.click();
        await postalCode.fill('11102');
      }


}

module.exports = CartPageActions;
