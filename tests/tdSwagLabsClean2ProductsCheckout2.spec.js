// Import required modules and page action classes
import { test, expect } from '@playwright/test';
const LoginPageActions = require('../pageObjects/actions/tdLogin');
const HomepageActions = require('../pageObjects/actions/tdHomepage');
const CommonPageActions = require('../pageObjects/actions/tdCommon');
const CartPageActions = require('..//pageObjects/actions/tdCartPage');
const YourInformationPageActions = require('../pageObjects/actions/tdYourInformation');
const CheckoutOverviewPageActions = require('../pageObjects/actions/tdCheckoutOverview');
const CheckoutCompleteThankYouPageActions = require('../pageObjects/actions/tdCheckoutCompleteThankYou');

// Declare variables for page actions
let loginPageActions;
let homepageActions;
let commonPageActions;
let cartPageActions;
let yourInformationPageActions;
let checkoutOverviewPageActions;
let checkoutCompleteThankYouPageActions;

test('Verify user able to compete checkout 2 products life cycle unsing my own locator', async ({ page }) => {

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
    // Validate product availability on homepage
    await homepageActions.validateHomeBackpack();
    await homepageActions.validateHomeBikeLight();

     // Add products to the cart
    await homepageActions.addToCartSauceLabsBackpack();
    await homepageActions.addToCartSauceLabsBikeLight();
     // Navigate to the cart page and validate added items
    await commonPageActions.goToCart();
    await cartPageActions.validateBackpackInCart();
    await cartPageActions.validateBikeLightInCart();
    // Proceed with the checkout process
    await cartPageActions.clickCheckoutInCart();
    await yourInformationPageActions.fillFirstName();
    await yourInformationPageActions.fillLastName();
    await yourInformationPageActions.fillPostalCode();
    await yourInformationPageActions.clickContinu();
    // Validate items and information in the checkout overview
    await checkoutOverviewPageActions.validateBackpackInCheckoutOverview();
    await checkoutOverviewPageActions.validateBikeLightInCheckoutOverview();
    await checkoutOverviewPageActions.validatePaymentInformationInCheckoutOverview();
    await checkoutOverviewPageActions.validateShippingInformationInCheckoutOverview();
    await checkoutOverviewPageActions.validatePriceTotalInCheckoutOverview();
    // Finalize the checkout process
    await checkoutOverviewPageActions.clickFinishInCheckoutOverview();
    // Validate the completion and acknowledgment of the order
    await checkoutCompleteThankYouPageActions.validateThankYouInCheckoutCompleteThankYou();
    await checkoutCompleteThankYouPageActions.validateOrderDispatchedInCheckoutCompleteThankYou();
    // Option to return to the homepage after completing the checkout
    await checkoutCompleteThankYouPageActions.clickBackHomeInCheckoutCompleteThankYou();



});