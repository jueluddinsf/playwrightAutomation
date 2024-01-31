// Import required modules and page action classes
import { test, expect } from '@playwright/test';
const LoginPageActions = require('../pageObjects/actions/tdLogin')
const HomepageActions = require('../pageObjects/actions/tdHomepage')

// Declare variables for page actions
let loginPageActions;
let homepageActions

test('Verify user able to click on LinkedIn page', async ({ page }) => {

    // Creating instances of page action classes
    loginPageActions = new LoginPageActions(page);
    homepageActions = new HomepageActions(page);

    // Execute login process
    await loginPageActions.visitLoginPage();
    await loginPageActions.validateLoginPage();
    await loginPageActions.enterUsername();
    await loginPageActions.enterPassword();
    await loginPageActions.loginInToSite();
    // Validate products on homepage
    await homepageActions.validateHomeBackpack();
    await homepageActions.validateHomeBikeLight();
    // Validating the visibility of the LinkedIn icon/link
    await homepageActions.validateLinkedInVisible();


});