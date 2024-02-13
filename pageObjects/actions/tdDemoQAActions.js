const { Page } = require('playwright');
const tdDemoQAPageLocators = require('../locators/tdDemoQALocators');
import { expect } from '@playwright/test';
// import YourInformationPageLocators from '../locators/yourInformation';

class TdDemoQAPageActions {

    constructor(page) {
        this.page = page;
    }

    async visitDemoQAPage() {
        await this.page.goto('https://demoqa.com/');
    }
    async validateDemoQAPage() {
        await expect(this.page.locator(tdDemoQAPageLocators.demoQAHomepageBanner)).toBeVisible();
    }

    async clickOnAlertsFrameWindows() {
        await this.page.locator(tdDemoQAPageLocators.alertsFrameWindowsLocator).click();
    }

    async validateOnAlertsFrameWindows1() {
        await expect(this.page.getByRole(tdDemoQAPageLocators.onAlertsFrameWindowsLocator1)).toContainText('Browser Windows');
    }

    async validateOnAlertsFrameWindows2() {
        await expect(this.page.locator(tdDemoQAPageLocators.onAlertsFrameWindowsLocator2)).toContainText('Alerts, Frame & Windows');
    }

    async clickOnBrowserWindows() {
        await this.page.getByText(tdDemoQAPageLocators.browserWindowsAFWLocator).click();
    }

    async clickNewTab() {
        const page1Promise = this.page.waitForEvent('popup'); // Use this.page instead of page
        await this.page.getByRole((tdDemoQAPageLocators.newTabAFWLocator), { name: 'New Tab' }).click();
        const page1 = await page1Promise;
        await expect(page1.locator(tdDemoQAPageLocators.newTabSampleHeaderAFWLocator)).toContainText('This is a sample page');
    }

    async clickNewWindow() {
        const page2Promise = this.page.waitForEvent('popup'); // Use this.page instead of page
        await this.page.getByRole((tdDemoQAPageLocators.newWindowAFWLocator), { name: 'New Window', exact: true }).click();
        const page1 = await page2Promise;
        await expect(page1.locator(tdDemoQAPageLocators.newWindowSampleHeaderAFWLocator)).toContainText('This is a sample page');
    }

    async clickNewWindowMessage() {
        const page3Promise = this.page.waitForEvent('popup'); // Use this.page instead of page
        await this.page.getByRole((tdDemoQAPageLocators.newWindowMessageAFWLocator), { name: 'New Window Message' }).click();
        const page1 = await page3Promise;
        await expect(page1.locator(tdDemoQAPageLocators.newWindowMessageSampleHeaderAFWLocator)).toContainText('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.');
    }

    async clickAlerts() {
        await this.page.locator(tdDemoQAPageLocators.alertsAFWLocator).filter({ hasText: 'Alerts' }).click();
    }

    async clickAlertButton() {
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => { });
        });
        await this.page.locator(tdDemoQAPageLocators.alertButtonAFWLocator).click();
    }


    async clickTimerAlertButton() {
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            new Promise(resolve => setTimeout(resolve, 6000)) // 6000 milliseconds = 6 seconds
                .then(() => dialog.dismiss().catch(() => { }));
        });
        await this.page.locator(tdDemoQAPageLocators.timerAlertButtonAFWLocator).click();
    }

    async clickConfirmAlertButton() {
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => { });
        });
        await this.page.locator(tdDemoQAPageLocators.alertConfirmAFWLocator).click();
    }

    async validateConfirmAlertButton() {
        await expect(this.page.locator(tdDemoQAPageLocators.confirmAlertsBoxAFWLocator)).toContainText('On button click, confirm box will appear');
    }

    async validatePromptAlertButton() {
        await expect(this.page.locator(tdDemoQAPageLocators.confirmAlertsBoxAFWLocator)).toContainText('On button click, prompt box will appear');
    }

    async clickFrames() {
        await this.page.locator(tdDemoQAPageLocators.alertsAFWLocator).filter({ hasText: /^Frames$/ }).click();
    }


    async validateFramesPage() {
        await expect(this.page.locator(tdDemoQAPageLocators.validateFramesPageWrapper)).toContainText('Sample Iframe page There are 2 Iframes in this page.');
    }

    async validateFrame1() {
        const frame = this.page.frameLocator(tdDemoQAPageLocators.frame1Locator);
        await expect(frame.locator(tdDemoQAPageLocators.validateFrame1Container)).toContainText('This is a sample page');
    }

    async clickNestedFrames() {
        await this.page.getByText(tdDemoQAPageLocators.nestedFrameAFWLocator).click();
    }

    async validateNestedFrameWrapper() {
        await expect(this.page.locator(tdDemoQAPageLocators.validateNestedFramesPageWrapper)).toContainText('Sample Nested Iframe page. There are nested iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the parent frame and the nested child frame.');
    }

    async validateNestedFrame1() {
        const frame = this.page.frameLocator(tdDemoQAPageLocators.validateNestedFrame1Locator);
        await expect(frame.locator(tdDemoQAPageLocators.validateNestedFrame101Locator)).toContainText('Parent frame');
    }

    async validateNestedIframe1() {
        const outerFrame = this.page.frameLocator(tdDemoQAPageLocators.validateNestedFrame1Locator);
        const nestedFrame = outerFrame.frameLocator(tdDemoQAPageLocators.validateNestedIframeLocator);
        await expect(nestedFrame.locator('p')).toContainText('Child Iframe');
    }

    async clickModalDialogs() {
        await this.page.getByText(tdDemoQAPageLocators.modelDialogsLinkLocator).click();
    }

    async clickModalDialogsSmallModal() {
        await this.page.locator(tdDemoQAPageLocators.modelDialogsSmallModalLocator).click();
    }

    async validateModalDialogsSmallModal() {
        await expect(this.page.getByLabel(tdDemoQAPageLocators.validateModalDialogsSmallModalLabel).getByRole(tdDemoQAPageLocators.validateModalDialogsSmallModalRole)).toContainText('This is a small modal. It has very less content');
    }

    async clickCloseSmallModal() {
        await this.page.locator(tdDemoQAPageLocators.closeSmallModalLocator).click();
    }

    async clickModalDialogsLargeModal() {
        await this.page.locator(tdDemoQAPageLocators.modelDialogsLargeModalLocator).click();

    }

    async validateModalDialogsLargeModal() {
        await expect(this.page.getByRole(tdDemoQAPageLocators.validateModalDialogsLargeModalRole)).toContainText('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
    }

    async clickCloseLargeModal() {
        await this.page.locator(tdDemoQAPageLocators.closeLargeModalLocator).click();
    }


}

module.exports = TdDemoQAPageActions;
