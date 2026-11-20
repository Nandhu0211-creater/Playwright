import {test, expect} from '@playwright/test';
test('Handle dynamic dropdown', async({page})=>{
    await page.goto('https://demoqa.com/automation-practice-form')
    await page.locator('#state').click();
    await page.getByText('NCR',{exact:true}).click();
    await expect (page.locator('#state')).toContainText('NCR');
    await page.locator('#city').click();
    await page.getByText('Delhi',{exact:true}).click();
    await expect (page.locator('#city')).toContainText('Delhi');
    await page.waitForTimeout(2000)
})

