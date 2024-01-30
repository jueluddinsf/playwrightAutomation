import { test, expect } from '@playwright/test';

test('verify user able to click icc ranking tab and ranking faqs)', async ({ page }) => {

    
  await page.goto('https://www.icc-cricket.com/');
  await expect(page.locator('#galaxyBar')).toContainText('Event Page');
  await expect(page.locator('#nav').getByRole('img').first()).toBeVisible();
  await expect(page.getByLabel('Rankings', { exact: true })).toContainText('Rankings');
  await page.getByLabel('Rankings', { exact: true }).click();
  await expect(page.locator('h1')).toContainText('ICC World Rankings');
  await page.getByRole('heading', { name: 'Men\'s team rankings', exact: true }).click();
  await page.getByRole('heading', { name: 'Jump to' }).click();
  await expect(page.getByLabel('player rankings faqs')).toBeVisible();
  await page.getByLabel('player rankings faqs').click();
  await page.getByRole('link', { name: 'Header Logo' }).click();



  test('verify user able to use icc events page feature ', async ({ page }) => {
    await page.goto('https://www.icc-cricket.com/');
    await page.getByRole('link', { name: 'Event Page' }).click();
    await expect(page.locator('#main')).toContainText('India continue to dominate; Pakistan, West Indies also start Super Six phase with wins');
    await page.getByRole('link', { name: 'Musheer Khan POTM Highlights' }).first().click();
    await page.getByRole('link', { name: 'The irresistible fanbase of' }).first().click();
    await page.getByRole('link', { name: 'Sri Lanka v West Indies |' }).first().click();
    await page.getByRole('link', { name: 'Fixtures confirmed for Super Six stage of U19 Men’s World Cup 2024 U19 Cricket' }).click();
    await expect(page.getByLabel('ICC Home')).toBeVisible();
    await page.getByLabel('ICC Home').click();

    test('test', async ({ page }) => {
      await page.goto('https://www.icc-cricket.com/');
      await page.getByLabel('Awards', { exact: true }).click();
      await expect(page.locator('.bg-grey-light > div > .inline-block').first()).toBeVisible();
      await page.locator('.bg-grey-light > div > .inline-block').first().click();
      await expect(page.locator('#main')).toContainText('ICC Men’s ODI Cricketer of the Year 2023');
      await expect(page.getByText('ViratKohli').first()).toBeVisible();
      await expect(page.locator('#main')).toContainText('ViratKohli1Wickets1377Runs12Catches');
      await page.getByText('ViratKohli1Wickets1377Runs12Catches').first().click();
      await page.getByRole('link', { name: 'Header Logo' }).click();




      test('verfiy user is able to navigae sing up page and perform signIn process ', async ({ page }) => {
        await page.goto('https://www.icc-cricket.com/');
        await page.getByLabel('Sign in').click();
        await expect(page.getByLabel('Log in or Create Your Account').getByRole('heading')).toContainText('Log in or Create Your Account');
        await page.getByPlaceholder('Email Address').click();
        await page.getByPlaceholder('Password').click();
        await expect(page.getByLabel('Keep me logged in')).toBeVisible();
        await expect(page.getByLabel('Sign in with your social').getByRole('heading')).toContainText('Sign in with your social account');
        await expect(page.getByRole('paragraph')).toContainText('Don\'t have an account? Sign up today for exclusive content, early access to tickets and other membership rewardsSign Up');
        await page.goto('https://accounts.icc-cricket.com/4ba9f276-2497-440e-a6ba-d05d4831b967/b2c_1a_signinsignup/oauth2/v2.0/logout?post_logout_redirect_uri=https%3A%2F%2Fwww.icc-cricket.com%2F&client-request-id=a60f6a5b-624a-46ec-98ef-04fea9e04ca9');
        await page.goto('https://www.icc-cricket.com/');

        // Test in Progress
        // Pushing the changes into the new branch
        //


    });

    
  });



  
});