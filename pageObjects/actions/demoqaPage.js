const { Page } = require('playwright');
const demoqaPageLocators = require('../locators/demoqaPage');
import { expect } from '@playwright/test';

class DemoqaPage {

    constructor(page) {
        this.page = page;
    }
    
    async visitDemoqaPage() { 
        await this.page.goto('https://demoqa.com/');
    }

    async verifyDemoqaPage() { 
        await expect(this.page.locator(demoqaPageLocators.app)).toContainText('Alerts, Frame & Windows');
    }

    async clickOnDemoqaPage () {
        await this.page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();

    }

    async verifyDemoqaNewPage () {  
        await expect(this.page.locator(demoqaPageLocators.app)).toContainText('Please select an item from left to start practice.');
    }
    
    async clickOnBrowserWindowsPage () {  
        await this.page.getByText('Browser Windows').click();
    }

    async verifyBrowserWindowsPage () {  
        await expect(this.page.locator(demoqaPageLocators.tabButton)).toContainText('New Tab');
    }

    async browserWindowsPageVerifcation () {  
    const page1Promise = this.page.waitForEvent('popup');
    await this.page.getByRole('button', { name: 'New Tab' }).click();
    const page1 = await page1Promise;
    await expect(page1.locator(demoqaPageLocators.sampleHeading)).toContainText('This is a sample page');
    }

    async browserWindowsPageVerifcation2 () {
        
        const page2Promise = this.page.waitForEvent('popup');
        await this.page.getByRole('button', { name: 'New Window', exact: true }).click();
        const page2 = await page2Promise;
        await expect(page2.locator(demoqaPageLocators.sampleHeading)).toContainText('This is a sample page');
      

    }

    async browserWindowsPageVerifcation3 () {
        
       const page3Promise = this.page.waitForEvent('popup');
       await this.page.getByRole('button', { name: 'New Window Message' }).click();
       const page3 = await page3Promise;
       await expect(page3.locator(demoqaPageLocators.body)).toContainText('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.');

    }

    async clickOnAlertsPage () {  
        await this.page.locator('li').filter({ hasText: 'Alerts' }).click();
    
    }
    async verifyAlertsPage () {  
        await expect(this.page.locator(demoqaPageLocators.javascriptAlertsWrapper)).toContainText('On button click, alert will appear after 5 seconds');
    
    }
   
    async clickOnTimerAlertButton() {  
    await this.page.locator(demoqaPageLocators.timerAlertButton).click();
    }
    
    async verifyTimerAlertButton() { 
        
        this.page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
      });
      await this.page.locator(demoqaPageLocators.timerAlertButton).click();
        
    }

    async clickOnConfirmButtonAlert() { 
        await this.page.locator(demoqaPageLocators.confirmbutton).click();
    }

    async verifyConfirmButtonAlert() {
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
          await this.page.locator(demoqaPageLocators.confirmbutton).click();

    }

    async clickOnPromptButtonAlert() {
        await this.page.locator(demoqaPageLocators.promtButton).click();

    }

    async verifyOnPromptButtonAlert() {
        
        this.page.once('dialog', dialog => {
          console.log(`Dialog message: ${dialog.message()}`);
          dialog.dismiss().catch(() => {});
        });
        await this.page.locator(demoqaPageLocators.promtButton).click();

    }

    async verifyOnFramesPage() {
        await this.page.locator(demoqaPageLocators.li).filter({ hasText: /^Frames$/ }).click();

    }

    async verifyOnNestedFramesPage() {
        await this.page.getByText(demoqaPageLocators.NestedFrames).click();
    }

    async clickOnModelDialogsPage () {
        await this.page.getByText(demoqaPageLocators.modalDialog).click();
    }

    async verifyOnModelDialogsPage() {
        await expect(this.page.locator(demoqaPageLocators.modalWrapper)).toContainText('Click on button to see modal');
    }
    async verifyOnModelDialogs() {
    
        await this.page.getByRole('button', { name: 'Small modal' }).click();
        await expect(this.page.getByLabel(demoqaPageLocators.smallModal).getByRole('document')).toContainText('This is a small modal. It has very less content');
        await this.page.locator(demoqaPageLocators.closeSmallModal).click();
    }
    async clickOnLargeModalButton() {
    
        await this.page.getByRole('button', { name: 'Large modal' }).click();
    }
    
    async verifyOnLargeModal() {

        await expect(this.page.getByRole(demoqaPageLocators.paragraph)).toContainText('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');
        await this.page.locator(demoqaPageLocators.closeLargeModal).click();
    }









   
         



      
}

module.exports = DemoqaPage;