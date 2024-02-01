import { test, expect } from '@playwright/test';
const LoginPageAction = require('../pageObjects/actions/tdLogin')
const HomepageActions = require('../pageObjects/actions/tdHomepage')

let loginPageAction;



test('test', async ({ page }) => {
  loginPageAction = new LoginPageAction(page);

  await loginPageAction.visitLoginPage();
  await loginPageAction.validateLoginPage();
  await loginPageAction.enterUsername();
  await loginPageAction.enterPassword();
  await loginPageAction.loginInToSite();
  await loginPageAction.clickHamburgerMenu();
  await loginPageAction.clickLogout();
});