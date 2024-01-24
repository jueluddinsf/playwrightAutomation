import { test } from '@playwright/test';
const ContactUsPage = require('../pageObjects/actions/contactUsPage');
const CommonPage = require('../pageObjects/actions/common');

test('verify user can click on contact us and visit contact us page', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    const commonPage = new CommonPage(page);
    await commonPage.visitHomePage();
    await commonPage.waitForScrollBody();
    await contactUsPage.verifyContactUsLink();
});

