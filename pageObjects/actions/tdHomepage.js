const { Page } = require('playwright');
const homepageLocators = require('../locators/tdHomepage');
import { expect } from '@playwright/test';
// import homepageLocators from '../locators/homepage';

class HomepageActions {

  constructor(page) {
    this.page = page;
  }

  async validateHomeBackpack() {
    await expect(this.page.locator(homepageLocators.homepageBackpack)).toContainText('Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')

  }

  async validateHomeBikeLight() {
    await expect(this.page.locator(homepageLocators.homepageBikeLight)).toContainText('Sauce Labs Bike LightA red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.')

  }

  async addToCartSauceLabsBackpack() {
    await this.page.locator(homepageLocators.ToCartSauceLabsBackpack).click();

  }

  async addToCartSauceLabsBikeLight() {
    await this.page.locator(homepageLocators.ToCartSauceLabsBikeLight).click();

  }

  async validateFacebookVisible() {
    await expect(this.page.locator(homepageLocators.facebookInHomepage)).toBeVisible();

  }

  async validateLinkedInVisible() {
    await expect(this.page.locator(homepageLocators.linkedInInHomepage)).toBeVisible();

  }


  async validateXVisible() {
    await expect(this.page.locator(homepageLocators.xInHomepage)).toBeVisible();

  }





}

module.exports = HomepageActions;
