import { test, expect } from '@playwright/test';
const CommonPage = require('../pageObjects/actions/common');
const AddVehiclePage = require('../pageObjects/actions/addVehiclePage');


test('verify that a user can add a new vehicle to the existing policy', async ({ page }) => {
    const commonPage = new CommonPage(page);
    const addVehiclePage = new AddVehiclePage(page);
    await commonPage.visitHomePage();
    await commonPage.hoverOverSupport();
    await commonPage.clickOnAddNewVehicle();
    await addVehiclePage.fillOutBasicInformation()
    await addVehiclePage.addPolicyNumber();
    await addVehiclePage.addDate();
    await addVehiclePage.addVehicleInformation();
    await addVehiclePage.submitAndVerify()
});