import { test, expect } from '@playwright/test';
const TdDemoQAPageActions = require('../pageObjects/actions/tdDemoQAActions')

let tdDemoQAPageActions;

test('Validate Alerts, Frame and Windows for DemoQA', async ({ page }) => {

    tdDemoQAPageActions = new TdDemoQAPageActions(page);


    await tdDemoQAPageActions.visitDemoQAPage();
    await tdDemoQAPageActions.validateDemoQAPage();
    await tdDemoQAPageActions.clickOnAlertsFrameWindows();
    await tdDemoQAPageActions.validateOnAlertsFrameWindows1();
    await tdDemoQAPageActions.validateOnAlertsFrameWindows2();
    await tdDemoQAPageActions.clickOnBrowserWindows();
    await tdDemoQAPageActions.clickNewTab();
    await tdDemoQAPageActions.clickNewWindow();
    await tdDemoQAPageActions.clickNewWindow();
    await tdDemoQAPageActions.clickNewWindowMessage();
    await tdDemoQAPageActions.clickAlerts();
    await tdDemoQAPageActions.clickAlertButton();
    await tdDemoQAPageActions.clickTimerAlertButton();
    await tdDemoQAPageActions.clickConfirmAlertButton();
    await tdDemoQAPageActions.validateConfirmAlertButton();
    await tdDemoQAPageActions.validatePromptAlertButton();
    await tdDemoQAPageActions.clickFrames();
    await tdDemoQAPageActions.validateFramesPage();
    await tdDemoQAPageActions.validateFrame1();
    await tdDemoQAPageActions.clickNestedFrames();
    await tdDemoQAPageActions.validateNestedFrameWrapper();
    await tdDemoQAPageActions.validateNestedFrame1();
    await tdDemoQAPageActions.validateNestedIframe1();
    await tdDemoQAPageActions.clickModalDialogs();
    await tdDemoQAPageActions.clickModalDialogsSmallModal();
    await tdDemoQAPageActions.validateModalDialogsSmallModal();
    await tdDemoQAPageActions.clickCloseSmallModal();
    await tdDemoQAPageActions.clickModalDialogsLargeModal();
    await tdDemoQAPageActions.validateModalDialogsLargeModal();
    await tdDemoQAPageActions.clickCloseLargeModal();


});