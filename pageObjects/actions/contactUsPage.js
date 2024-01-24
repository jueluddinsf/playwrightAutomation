
const{Page} = require('playwright');
const contactUsLocators = require('../locators/contactUsPage');
import { expect } from '@playwright/test';

class ContactUsPage {

    constructor(page) {
        this.page = page;
    } 

   async verifyContactUsLink() {
    await this.page.getByRole('link', { name: 'Contact Us', exact: true }).click();
    await expect(this.page.locator('h1')).toContainText('Contact Information');
    await expect(this.page.locator(contactUsLocators.address)).toContainText('Demo Insurance Agency301 N Pecos Rd, Suite CHenderson, NV 89074T: 888-578-0212P: 888-578-0212F: 215-449-2150E: Send a Secure Message Facebook');
    await expect(this.page.locator(contactUsLocators.main)).toContainText('Our Hours:Monday: 9:00 am - 5:00 pmTuesday: 9:00 am - 5:00 pmWednesday: 9:00 am - 5:00 pmThursday: 9:00 am - 5:00 pmFriday: 9:00 am - 4:00 pmSaturday: ClosedSunday: ClosedLunch 12-1');
    }

}

module.exports = ContactUsPage;