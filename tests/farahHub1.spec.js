import { test, expect } from '@playwright/test';
const LoginPageAction = require('../pageObjects/actions/tdLogin')
const HomepageActions = require('../pageObjects/actions/tdHomepage')
const yourInfo = require('../pageObjects/actions/frYourInfo')
const checkout = require('../pageObjects/actions/tdCheckoutOverview')
const thankYou = require('../pageObjects/actions/tdCheckoutCompleteThankYou')

let loginPageAction;
let homepageAction;
let frinfo;
let checkoutOverview;
let thankYouVar;


test('test', async ({ page }) => {
  loginPageAction = new LoginPageAction(page);
  homepageAction = new HomepageActions(page);
  frinfo = new yourInfo(page);
  checkoutOverview = new checkout(page);
  thankYouVar = new thankYou(page);


  await loginPageAction.visitLoginPage();
  await loginPageAction.validateLoginPage();
  await loginPageAction.enterUsername();
  await loginPageAction.enterPassword();
  await loginPageAction.loginInToSite();
  await homepageAction.validateHomeBackpack();
  await homepageAction.validateHomeBikeLight();
  await homepageAction.addToCartSauceLabsBackpack();
  await homepageAction.addToCartSauceLabsBikeLight();
  await cartPageActions.clickCheckoutInCart();
  await frinfo.fillFirstName();
  await frinfo.fillLastName();
  await frinfo.fillPostalCode();
  await frinfo.clickContinu();

  await checkoutOverview.clickFinishInCheckoutOverview();
  await thankYouVar.validateThankYouInCheckoutCompleteThankYou();

});
