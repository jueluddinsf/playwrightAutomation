const {Page} = require('playwright');
import { expect } from '@playwright/test';
const requestAQuotePageLocators = require('../locators/requestAQuotePage');


class RequestAQuotePage {
    
        constructor(page) {
            this.page = page;
        } 
        
        async clickOnRequestAQuoteLink() {
            await expect(this.page.getByRole('link', { name: requestAQuotePageLocators.requestAQuoteLink, exact: true })).toBeVisible();
            await this.page.getByRole('link', { name: requestAQuotePageLocators.requestAQuoteLink, exact: true }).click();
        }

        async verifyRequestAQuoteFirstPage() {
            await expect(this.page.locator('h1')).toContainText('Free No-Obligation Quote Forms');
            await expect(this.page.getByRole('link', { name: 'Auto Insurance Auto Insurance' })).toBeVisible();
            await this.page.getByRole('link', { name: 'Auto Insurance Auto Insurance' }).click();
            await expect(this.page.locator('h1')).toContainText('Secure Auto Insurance Quote Request Form');
            await this.page.getByLabel('First Name').click();
            await this.page.getByLabel('First Name').fill('john');
            await this.page.getByLabel('Last Name').click();
            await this.page.getByLabel('Last Name').fill('doe');
            await this.page.getByLabel('Email Address:').click();
            await this.page.getByLabel('Email Address:').fill('johndoe123@gmail.com');
            await this.page.getByLabel('Phone Number:').click();
            await this.page.getByLabel('Phone Number:').fill('6468889999');
            await this.page.getByLabel('Digit Zip:').click();
            await this.page.getByLabel('Digit Zip:').fill('11101');
            await this.page.getByRole('button', { name: 'Continue to Step 2... ' }).click();
            await expect(this.page.locator('h1')).toContainText('Secure Auto Insurance Quote Request Form');
            await expect(this.page.locator('#progress_id')).toContainText('Step 1 of 4');
        }
      

}

module.exports = RequestAQuotePage;