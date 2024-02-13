import { test, expect } from '@playwright/test';
const DemoqaPage = require('../pageObjects/actions/demoqaPage')

let demoqaPage;

test('Verify browser windows, alerts, frames, nested frames and modal diologs', async ({ page }) => {

    demoqaPage = new DemoqaPage(page);

    await demoqaPage.visitDemoqaPage();
    await demoqaPage.verifyDemoqaPage();
    await demoqaPage.clickOnDemoqaPage();
    await demoqaPage.verifyDemoqaNewPage();
    await demoqaPage.clickOnBrowserWindowsPage();
    await demoqaPage.verifyBrowserWindowsPage();
    await demoqaPage.browserWindowsPageVerifcation();
    await demoqaPage.browserWindowsPageVerifcation2();
    await demoqaPage.browserWindowsPageVerifcation3();
    await demoqaPage.clickOnAlertsPage();
    await demoqaPage.verifyAlertsPage();
    await demoqaPage.clickOnTimerAlertButton ();
    await demoqaPage.verifyTimerAlertButton ();
    await demoqaPage.clickOnConfirmButtonAlert()
    await demoqaPage.verifyConfirmButtonAlert();
    await demoqaPage.clickOnPromptButtonAlert();
    await demoqaPage.verifyOnPromptButtonAlert();
    await demoqaPage.verifyOnFramesPage();
    await demoqaPage.verifyOnNestedFramesPage();
    await demoqaPage.clickOnModelDialogsPage ();
    await demoqaPage.verifyOnModelDialogsPage ();
    await demoqaPage.verifyOnModelDialogs();
    await demoqaPage.clickOnLargeModalButton();
    await demoqaPage.verifyLargeModal();
    
    










});