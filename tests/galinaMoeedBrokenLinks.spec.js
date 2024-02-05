import { test, expect, request } from '@playwright/test';
//const {test, expect} = require('@playwright/test');

test('Verify links on a  Infosys web page', async ({ page }) => {
    await page.goto('https://www.infosys.com/');
    await page.locator('.navbar-brand').waitFor(30000);
    const linkElements = await page.$$('a');
    console.log(`total links on the page are: ${linkElements.length}`);

    let links = []

    for (const linkElement of linkElements) {

        if (linkElement) {
            links.push(await linkElement.getAttribute('href'));

        }
    }
    console.log(links.lenght);
    for (const link of links) {
        if (link && link.includes('http')) {
            const res = page.goto(link);
            if (res) {
                console.log(`${link} worked and the status is ${res.status()}`);

            }
            else {
                console.log(`${link} did not work or return 200`);

            }
            await page.waitForTimeout(1000);
        }




    } 


});
