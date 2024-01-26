const { Page } = require('playwright');
const LoginPageLocators = require('../locators/tdLogin');
import { expect } from '@playwright/test';
// import LoginPageLocators from '../locators/login';
// I need to different between line #2 and 4. Need to ask Juel

class LoginPageActions {

    constructor(page) {
        this.page = page;
    }
    async visitLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async validateLoginPage() {
        const loginButton = await this.page.locator(LoginPageLocators.loginButton);
        // loginButton.waitFor();
        await expect(loginButton).toContainText("Login")
    }

    async enterUsername() {
        const userName = await this.page.locator(LoginPageLocators.userName);
        await userName.click();
        await userName.fill('standard_user');
    }

    async enterPassword() {
        const password = await this.page.locator(LoginPageLocators.password);
        await password.click();
        await password.fill('secret_sauce');
    }

    async loginInToSite() {
        const login = await this.page.locator(LoginPageLocators.loginButton);
        await login.click();
  
    }

    
}

module.exports = LoginPageActions;
