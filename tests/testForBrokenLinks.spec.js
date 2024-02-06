const { test, expect, request } = require('@playwright/test');

test('verify all links on insurancewebsitedemo is working', async ({ page }) => {
  await page.goto('https://insurancewebsitedemo.com/');
  await page.locator('.get-a-quote').waitFor();

  const linkElements = await page.$$('a');
  console.log(`total links on the page are: ${linkElements.length}`);

  let links = []
 for(const linkElement of linkElements) {
    
    if(linkElement) {
        links.push(await linkElement.getAttribute('href'));
    }
}

console.log(links.length);
for(const link of links){
    if(link && link.includes('http')) {
        const res = await page.goto(link);
        if (res) {
            console.log(`${link} worked and the status is ${res.status()}`);
        } else {
            console.log(`${link} did not work or return 200}`);
        }
     
        await page.waitForTimeout(1000);
    }

}

    // if(link.includes('http')) {
    //     // console.log(link);
    //     await page.goto(link);
    //     await page.waitForTimeout(1000);
        
        // if(!response || response.status() === 200) {
        //     console.log(`found a broken link ${link} link status: ${response.status}`)
        // }





});
