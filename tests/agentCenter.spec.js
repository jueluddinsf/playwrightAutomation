import { test, expect } from '@playwright/test';
const CommonPage = require('../pageObjects/actions/common');
const RequestAQuotePage = require('../pageObjects/actions/requestAQuotePage');

let commonPage;
let requestAQuotePage;

test.describe('insurance website for agent tests', () => {

    test.beforeEach(async ({ page }) => {
        commonPage = new CommonPage(page);
        await commonPage.visitHomePage();
        await commonPage.waitForScrollBody();
    });


    test('verify if agent can click on request a quote and at least finish the 1st page for auto insurance', async ({ page }) => {
        requestAQuotePage = new RequestAQuotePage(page);
        await requestAQuotePage.clickOnRequestAQuoteLink();
        await requestAQuotePage.verifyRequestAQuoteFirstPage();
    });

    test('verify that user can see company logo for nationwide at payment & claims page', async ({ page }) => {
        await page.getByRole('banner').getByRole('link', { name: 'Payments & Claims' }).click();
        await expect(page.locator('h1')).toContainText('Customer Payment and Claim Center');
        await expect(page.getByRole('img', { name: 'Allied' })).toBeVisible();
    });



});