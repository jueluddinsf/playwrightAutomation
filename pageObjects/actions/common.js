
const { Page } = require('playwright');
const commonLocators = require('../locators/common');
import { expect } from '@playwright/test';
const addVehiclePage = require('../locators/addVehiclePage')

class CommonPage {

    constructor(page) {
        this.page = page;
    }

    async visitHomePage() {
        await this.page.goto('https://insurancewebsitedemo.com/');
    }

    async waitForScrollBody() {
        const scrollBody = await this.page.locator(commonLocators.scollBody);
        scrollBody.waitFor();
        await expect(scrollBody).toContainText('Your IndependentInsurance Agency');
    }

    async clickOnHomePage() {
        const firstLink = await page.locator(commonLocators.homePageButton).first();
        await firstLink.click();
    }

    async hoverOverSupport() {
        // hover over the support link
        const supportLink =  await this.page.locator(commonLocators.supportLink);
        supportLink.waitFor();
        supportLink.hover();

    }

    async clickOnAddNewVehicle() {
        // click on the add a vechile form 
        const addNewVehicle = await this.page.locator(commonLocators.addAVehicle);
        addNewVehicle.waitFor();
        addNewVehicle.click();
         // verify we are in the add a vehicle form
        await expect(this.page.locator(addVehiclePage.titleLocator)).toContainText('Secure Add a Vehicle Request Form');
    }


}

module.exports = CommonPage;
