import { expect } from '@playwright/test';
const frFilter = require('../locators/frFilter');



class frFilter {

    constructor(page) {
        this.page = page;
    }
    async validatefilter() {
        const filter = await this.page.locator(frFilter).click();
    }

    async testallthing() {
        await expect(this.page.locator(frFilter.testallthing)).toContainText('Test.allTheThings() T-Shirt (Red)')

    }

}
