
# Playwright Page Object Model (POM) Structure

## Folder Structure

- **pageObjects**
  - **locators**
    - `loginPage.js`
  - **actions**
    - `loginPage.js`
- **tests**
  - `loginTest.spec.js`

## Step 1: Create the Page Objects

### File 1: `pageObjects/locators/loginPage.js`

This file in the `locators` folder will store the selectors for the login page.

```javascript
// pageObjects/locators/loginPage.js
const LoginPageLocators = {
    submitButton: 'button#submit',
    usernameField: 'input#username',
    passwordField: 'input#password',
    // Add more selectors as needed
};

module.exports = LoginPageLocators;
```

### File 2: `pageObjects/actions/loginPage.js`

This file in the `actions` folder defines the actions/methods for interacting with the login page.

```javascript
// pageObjects/actions/loginPage.js
const LoginPageLocators = require('../locators/loginPage');

class LoginPageActions {
    constructor(page) {
        this.page = page;
    }

    async enterUsername(username) {
        await this.page.fill(LoginPageLocators.usernameField, username);
    }

    async enterPassword(password) {
        await this.page.fill(LoginPageLocators.passwordField, password);
    }

    async clickSubmit() {
        await this.page.click(LoginPageLocators.submitButton);
    }

    // Add more methods as needed
}

module.exports = LoginPageActions;
```

## Step 2: Create the Test File

### File: `tests/loginTest.spec.js`

This file contains the test case(s) using the restructured Page Object Model.

```javascript
// tests/loginTest.spec.js
const { chromium } = require('playwright');
const LoginPageActions = require('../pageObjects/actions/loginPage');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const loginPageActions = new LoginPageActions(page);

    await page.goto('https://example.com/login');
    
    await loginPageActions.enterUsername('testuser');
    await loginPageActions.enterPassword('password123');
    await loginPageActions.clickSubmit();

    // Add assertions to verify the login was successful

    await browser.close();
})();
```

## Summary

1. Create the `pageObjects` folder with subfolders `locators` and `actions`. Each folder contains a `loginPage.js` file tailored to its purpose (locators and actions, respectively).

2. Create the `tests` folder and add your test file `loginTest.spec.js`.

3. Implement the Page Object Model in your test by using the `LoginPageActions` class, which utilizes locators from `LoginPageLocators`, to interact with the web page.

This setup ensures a clean and modular structure, where locators and actions are separated, enhancing maintainability and scalability of your test suite.
