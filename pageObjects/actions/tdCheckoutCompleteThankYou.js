const { Page } = require('playwright');
const checkoutCompleteThankYouLocators = require('../locators/tdCheckoutCompleteThankYou');
import { expect } from '@playwright/test';

class CheckoutCompleteThankYouLocators {

    constructor(page) {
        this.page = page;
    }

    async validateThankYouInCheckoutCompleteThankYou() {
        await expect(this.page.locator(checkoutCompleteThankYouLocators.thankYouInCheckoutCompleteThankYou)).toContainText('Thank you for your order!')

    }

    async validateOrderDispatchedInCheckoutCompleteThankYou() {
        await expect(this.page.locator(checkoutCompleteThankYouLocators.orderDispatchedInCheckoutCompleteThankYou)).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')

    }
   
    async clickBackHomeInCheckoutCompleteThankYou() {
        await this.page.locator(checkoutCompleteThankYouLocators.backHomeInCheckoutCompleteThankYou).click();

    }
  


}

module.exports = CheckoutCompleteThankYouLocators;
