// Import required modules and page action classes
import { test, expect } from '@playwright/test';
const LoginPageActions = require('../pageObjects/actions/tdLogin');
const HomepageActions = require('../pageObjects/actions/tdHomepage');
const CommonPageActions = require('../pageObjects/actions/tdCommon');
const CartPageActions = require('../pageObjects/actions/tdCartPage');
const YourInformationPageActions = require('../pageObjects/actions/tdYourInformation');
const CheckoutOverviewPageActions = require('../pageObjects//actions/tdCheckoutOverview');
const CheckoutCompleteThankYouPageActions = require('../pageObjects/actions/tdCheckoutCompleteThankYou');

// Declare variables for page actions
let loginPageActions;
let homepageActions;
let commonPageActions;
let cartPageActions;
let yourInformationPageActions;
let checkoutOverviewPageActions;
let checkoutCompleteThankYouPageActions;

test('Verify user able to cancel order using my own locator', async ({ page }) => {

    // Creating instances of page action classes
    loginPageActions = new LoginPageActions(page);
    homepageActions = new HomepageActions(page);
    commonPageActions = new CommonPageActions(page);
    cartPageActions = new CartPageActions(page);
    yourInformationPageActions = new YourInformationPageActions(page);
    checkoutOverviewPageActions = new CheckoutOverviewPageActions(page);
    checkoutCompleteThankYouPageActions = new CheckoutCompleteThankYouPageActions(page);

    // Execute login process
    await loginPageActions.visitLoginPage();
    await loginPageActions.validateLoginPage();
    await loginPageActions.enterUsername();
    await loginPageActions.enterPassword();
    await loginPageActions.loginInToSite();
    // Validate products on homepage
    await homepageActions.validateHomeBackpack();
    await homepageActions.validateHomeBikeLight();

    // Add product to cart and navigate to cart
    await homepageActions.addToCartSauceLabsBikeLight();
    await commonPageActions.goToCart();
    // Proceed with checkout process
    await cartPageActions.validateBikeLightInCart();
    await cartPageActions.clickCheckoutInCart();
    await yourInformationPageActions.fillFirstName();
    await yourInformationPageActions.fillLastName();
    await yourInformationPageActions.fillPostalCode();
    await yourInformationPageActions.clickContinu();
    // Validate information on checkout overview page
    await checkoutOverviewPageActions.validateBikeLightInCheckoutOverview();
    await checkoutOverviewPageActions.validatePaymentInformationInCheckoutOverview();
    await checkoutOverviewPageActions.validateShippingInformationInCheckoutOverview();
    await checkoutOverviewPageActions.validatePriceTotalInCheckoutOverview();
    // Perform cancellation action in the checkout overview
    await checkoutOverviewPageActions.clickCancelInCheckoutOverview();
    // Validate products are still available on homepage after cancellation
    await homepageActions.validateHomeBackpack();
    await homepageActions.validateHomeBikeLight();



});