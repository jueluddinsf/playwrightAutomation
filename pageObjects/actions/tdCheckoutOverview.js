const { Page } = require('playwright');
const checkoutOverviewPageLocators = require('../locators/tdCheckoutOverview');
import { expect } from '@playwright/test';

class CheckoutOverviewPageLocators {

    constructor(page) {
        this.page = page;
    }

    async validateBackpackInCheckoutOverview() {
        await expect(this.page.locator(checkoutOverviewPageLocators.backpackInCheckoutOverview)).toContainText('Sauce Labs Backpack')

    }
   
  
    async validateBikeLightInCheckoutOverview() {
        await expect(this.page.locator(checkoutOverviewPageLocators.bikeLightInCheckoutOverview)).toContainText('Sauce Labs Bike Light')

    }
   
    async validatePaymentInformationInCheckoutOverview() {
        await expect(this.page.locator(checkoutOverviewPageLocators.paymentInformationInCheckoutOverview)).toContainText('Payment Information')

    }
 
    async validateShippingInformationInCheckoutOverview() {
        await expect(this.page.locator(checkoutOverviewPageLocators.shippingInformationInCheckoutOverview)).toContainText('Shipping Information')

    }
    
    async validatePriceTotalInCheckoutOverview() {
        await expect(this.page.locator(checkoutOverviewPageLocators.priceTotalInCheckoutOverview)).toContainText('Price Total')

    }

    async clickFinishInCheckoutOverview() {
        await this.page.locator(checkoutOverviewPageLocators.finishInCheckoutOverview).click();
  
      }

      async clickCancelInCheckoutOverview() {
        await this.page.locator(checkoutOverviewPageLocators.cancelInCheckoutOverview).click();
  
      }

}

module.exports = CheckoutOverviewPageLocators;
