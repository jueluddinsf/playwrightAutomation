const { Page } = require('playwright');
const { expect } = require('@playwright/test');
const addVehiclePageLocators = require('../locators/addVehiclePage');
const { faker } = require('@faker-js/faker');


class AddVehiclePage {

    constructor(page) {
        this.page = page;
    }


    async fillOutBasicInformation() {
        const email = faker.internet.email();
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const phone =faker.phone.number();
        const zip = faker.location.zipCode();
        await this.page.locator(addVehiclePageLocators.firstName).fill(firstName);
        await this.page.locator(addVehiclePageLocators.lastName).fill(lastName);
        await this.page.locator(addVehiclePageLocators.email).fill(email);
        await this.page.locator(addVehiclePageLocators.phone).fill(phone);
        await this.page.locator(addVehiclePageLocators.zip).fill(zip);
    }

    async addPolicyNumber()  {
        const policyNumber = faker.string.fromCharacters('abcdefgh0987654321', { min: 8, max: 8})
        await this.page.locator(addVehiclePageLocators.policyNumber).fill(policyNumber);
    }

    async addDate() {
    await this.page.locator(addVehiclePageLocators.month).selectOption('February');
    await this.page.locator(addVehiclePageLocators.day).selectOption('20');
    await this.page.locator(addVehiclePageLocators.year).selectOption('2025');
    }

    async addVehicleInformation() { 
    await this.page.locator('select[name="form_data\\[vehicle_info\\]\\[_date_purchase_date_1\\]\\[month\\]"]').selectOption('02');
    await this.page.locator('select[name="form_data\\[vehicle_info\\]\\[_date_purchase_date_1\\]\\[day\\]"]').selectOption('19');
    await this.page.locator('select[name="form_data\\[vehicle_info\\]\\[_date_purchase_date_1\\]\\[year\\]"]').selectOption('2025');
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[year_1\\]"]').click();
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[year_1\\]"]').fill('2025');
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[make_1\\]"]').click();
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[make_1\\]"]').fill('Tesla');
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[model_1\\]"]').click();
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[model_1\\]"]').fill('X');
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[VIN_1\\]"]').click();
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[VIN_1\\]"]').fill('zmy456789434567');
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[VIN_1\\]"]').press('Tab');
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[primary_driver_1\\]"]').click();
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[primary_driver_1\\]"]').fill(' john');
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[primary_driver_1\\]"]').press('Tab');
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[current_odometer_1\\]"]').fill('0');
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[current_odometer_1\\]"]').press('Tab');
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[one_way_commute_distance_1\\]"]').fill('20');
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[one_way_commute_distance_1\\]"]').press('Tab');
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[yearly_mileage_1\\]"]').fill('5000');
    await this.page.locator('input[name="form_data\\[vehicle_info\\]\\[yearly_mileage_1\\]"]').press('Tab');
    await this.page.locator('select[name="form_data\\[vehicle_info\\]\\[ownership_1\\]"]').selectOption('Owned');
    await this.page.locator('select[name="form_data\\[vehicle_info\\]\\[use_1\\]"]').selectOption('Pleasure');
    await this.page.locator('select[name="form_data\\[vehicle_info\\]\\[Anti-Lock_brakes_1\\]"]').selectOption('Yes');
    await this.page.locator('select[name="form_data\\[vehicle_info\\]\\[daytime_running_lights_1\\]"]').selectOption('Yes');
    await this.page.locator('select[name="form_data\\[vehicle_info\\]\\[prior_damage_1\\]"]').selectOption('Yes');
    await this.page.locator('select[name="form_data\\[vehicle_info\\]\\[prior_damage_1\\]"]').selectOption('No');
    await this.page.locator('select[name="form_data\\[vehicle_info\\]\\[used_for_delivery_1\\]"]').selectOption('No');
    await this.page.locator('select[name="form_data\\[vehicle_info\\]\\[comprehensive_deductible_1\\]"]').selectOption('500');
    await this.page.locator('#divNumber_of_Vehicles1 div').filter({ hasText: 'Collision Deductible: Select' }).getByRole('combobox').selectOption('500');
    await this.page.locator('#divNumber_of_Vehicles1 div').filter({ hasText: 'Full Glass Coverage? Select' }).getByRole('combobox').selectOption('No');
    await this.page.locator('input[name="form_data\\[additional_information\\]\\[agent\\]"]').click();
    await this.page.locator('input[name="form_data\\[additional_information\\]\\[agent\\]"]').fill('craig');
    await this.page.locator('#divNumber_of_Vehicles1 div').filter({ hasText: 'Select... No Coverage 0 50' }).nth(3).click();
    }


    async submitAndVerify() {       
    await this.page.getByRole('button', { name: 'Submit' }).click();
    await expect(this.page.locator('h1')).toContainText('Thank You');
    await expect(this.page.locator('#main')).toContainText('Thank you for contacting Demo Insurance Agency. A representative will contact you shortly regarding your submission.');
  

    }

    
}

module.exports = AddVehiclePage;