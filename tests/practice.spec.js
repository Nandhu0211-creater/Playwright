import {test,expect} from '@playwright/test';
test('Verify the website home page is launched', async ({ page }) => {

    // Step 1: Open the website
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Step 2: Verify the website URL
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

    // Step 3: Verify the home page is visible
    await expect(
        page.getByRole('heading', { name: 'Automation Testing Practice' })
    ).toBeVisible();

    // Enter the name
    await page.locator('#name').fill('Nandhakumar')
   

    //Enter the mail
    await page.locator('#email').fill('nandhkumar@gmail.com')
    
















































     await page.waitForTimeout(1000)


});