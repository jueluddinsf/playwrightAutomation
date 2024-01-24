const { Page } = require('playwright');
const visionLocators = require('../locators/visionPage');
import { expect } from '@playwright/test';

class VisionPage {

    constructor(page) {
        this.page = page;
    }

    async visitVisionPage() {
        await this.page.goto('https://ui.vision/demo/webtest/frames/');
    }

    async verifyPageTitle() {

        // Expect a title "to contain" a substring.
        await expect(this.page).toHaveTitle(/Frames - Web Automation Test/);
    }

    async addTextToFrame1() {
        const frame1 = await this.page.frameLocator(visionLocators.frame1);
        await frame1.locator(visionLocators.textField1).fill('iframe number one');
    }

    async addTextToFrame2() {
        // frame 2 
        const frame2 = await this.page.frameLocator(visionLocators.frame2);
        await frame2.locator(visionLocators.textField2).fill('iframe number Two');
    }


}

module.exports = VisionPage;