const { test, expect } = require('@playwright/test');

test('Interact with iframes on the page', async ({ page }) => {
    // Navigate to the URL
    await page.goto('https://demoqa.com/frames');

    // Switch to the first iframe
    const frame1 = await page.frame({ name: 'frame1' });

    // Check if we are in the first iframe
    const frame1Heading = await frame1.$('h1');
    expect(await frame1Heading.textContent()).toBe('This is a sample page');

    // Switch back to the main page
    

    // Switch to the second iframe
    const frame2 = await page.frame({ name: 'frame2' });

    // Check if we are in the second iframe
    const frame2Heading = await frame2.$('h1');
    expect(await frame2Heading.textContent()).toBe('This is a sample page');

});





