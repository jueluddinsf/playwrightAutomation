import { test, expect } from '@playwright/test';
const LoginPageActions = require('../pageObjects/actions/tdLogin');
const HomepageActions = require('../pageObjects/actions/tdHomepage');
const CommonPageActions = require('../pageObjects/actions/tdCommon');
const CartPageActions = require('..//pageObjects/actions/tdCartPage');
const YourInformationPageActions = require('../pageObjects/actions/tdYourInformation');
const CheckoutOverviewPageActions = require('../pageObjects/actions/tdCheckoutOverview');
const CheckoutCompleteThankYouPageActions = require('../pageObjects/actions/tdCheckoutCompleteThankYou');

let loginPageActions;
let homepageActions;
let commonPageActions;
let cartPageActions;
let yourInformationPageActions;
let checkoutOverviewPageActions;
let checkoutCompleteThankYouPageActions;

test('Verify user able to compete checkout 2 products life cycle unsing my own locator', async ({ page }) => {

    loginPageActions = new LoginPageActions(page);
    homepageActions = new HomepageActions(page);
    commonPageActions = new CommonPageActions(page);
    cartPageActions = new CartPageActions(page);
    yourInformationPageActions = new YourInformationPageActions(page);
    checkoutOverviewPageActions = new CheckoutOverviewPageActions(page);
    checkoutCompleteThankYouPageActions = new CheckoutCompleteThankYouPageActions(page);

    await loginPageActions.visitLoginPage();
    await loginPageActions.validateLoginPage();
    await loginPageActions.enterUsername();
    await loginPageActions.enterPassword();
    await loginPageActions.loginInToSite();
    await homepageActions.validateHomeBackpack();
    await homepageActions.validateHomeBikeLight();

    await homepageActions.addToCartSauceLabsBackpack();
    await homepageActions.addToCartSauceLabsBikeLight();
    await commonPageActions.goToCart();
    await cartPageActions.validateBackpackInCart();
    await cartPageActions.validateBikeLightInCart();
    await cartPageActions.clickCheckoutInCart();
    await yourInformationPageActions.fillFirstName();
    await yourInformationPageActions.fillLastName();
    await yourInformationPageActions.fillPostalCode();
    await yourInformationPageActions.clickContinu();
    await checkoutOverviewPageActions.validateBackpackInCheckoutOverview();
    await checkoutOverviewPageActions.validateBikeLightInCheckoutOverview();
    await checkoutOverviewPageActions.validatePaymentInformationInCheckoutOverview();
    await checkoutOverviewPageActions.validateShippingInformationInCheckoutOverview();
    await checkoutOverviewPageActions.validatePriceTotalInCheckoutOverview();
    await checkoutOverviewPageActions.clickFinishInCheckoutOverview();
    await checkoutCompleteThankYouPageActions.validateThankYouInCheckoutCompleteThankYou();
    await checkoutCompleteThankYouPageActions.validateOrderDispatchedInCheckoutCompleteThankYou();
    await checkoutCompleteThankYouPageActions.clickBackHomeInCheckoutCompleteThankYou();



});