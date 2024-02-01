import { test, expect } from '@playwright/test';

test('filter by descending order (Name Z-A) Hub3', async ({ page }) => {
  const LoginPageAction = require('../pageObjects/actions/tdLogin')
  const frFilter = require('../pageObjects/actions/frFilter')

  let loginPageAction;
  let Frfilter;

  test('test', async ({ page }) => {
    loginPageAction = new LoginPageAction(page);
    Frfilter = new frFilter(page);


    await loginPageAction.visitLoginPage();
    await loginPageAction.validateLoginPage();
    await loginPageAction.enterUsername();
    await loginPageAction.enterPassword();
    await loginPageAction.loginInToSite();
    await frFilter.validatefilter();
    await frFilter.testallthing();

  });


});