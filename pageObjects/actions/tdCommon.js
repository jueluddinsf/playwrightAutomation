const { Page } = require('playwright');
const commonPageLocators = require('../locators/tdCommon');
import { expect } from '@playwright/test';
// import LoginPageLocators from '../locators/login';

class CommonPageActions {

    constructor(page) {
        this.page = page;
    }

    async goToCart() {
        const shoppingCart = await this.page.locator(commonPageLocators.shoppingCart);
        await shoppingCart.click();
   
    }
    // async goToCart() {
    //     await this.page.locator(commonPageLocators.shoppingCart).click();
  
    //   }

    async clickHamburgerMenu() {
        const hamburgerMenu = await this.page.locator(commonPageLocators.hamburgerMenu);
        await hamburgerMenu.click();
   
    }

    
    async clickLogout() {
        const logout = await this.page.locator(commonPageLocators.logout);
        await logout.click();
   
    }





}

module.exports = CommonPageActions;
