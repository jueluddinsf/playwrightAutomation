import { test, expect } from '@playwright/test';
const LoginPageAction = require('../pageObjects/actions/tdLogin')
const CommonPageActions = require('../pageObjects/actions/tdCommon')

let loginPageAction;
let CommonPageActions;

test('test', async ({ page }) => {
  loginPageAction = new LoginPageAction(page);
  commonAction = new CommonPageActions();

  await loginPageAction.visitLoginPage();
  await loginPageAction.validateLoginPage();
  await loginPageAction.enterUsername();
  await loginPageAction.enterPassword();
  await loginPageAction.loginInToSite();
  await commonAction.clickHamburgerMenu();
  await commonAction.clickLogout();
});