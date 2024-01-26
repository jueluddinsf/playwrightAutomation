import { test, expect } from '@playwright/test';
const LoginPageActions = require('../pageObjects/actions/tdLogin')
const HomepageActions = require('../pageObjects/actions/tdHomepage')

let loginPageActions;
let homepageActions

test('Verify user able to click on LinkedIn page', async ({ page }) => {

    loginPageActions = new LoginPageActions(page);
    homepageActions = new HomepageActions(page);

    await loginPageActions.visitLoginPage();
    await loginPageActions.validateLoginPage();
    await loginPageActions.enterUsername();
    await loginPageActions.enterPassword();
    await loginPageActions.loginInToSite();
    await homepageActions.validateHomeBackpack();
    await homepageActions.validateHomeBikeLight();
    await homepageActions.validateLinkedInVisible();


});