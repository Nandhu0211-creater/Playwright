//conffirmation alert
import {test, expect} from '@playwright/test';
test('Confirmation Alert', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
page.once('dialog',dialog=>dialog.accept())// dialog.dismiss()--> for alert cancellation
await page.locator('#confirmBtn').click()
 
await expect(page.locator('#demo')).toHaveText('You pressed OK!')
await page.waitForTimeout(5000)

//Simple Alert
await page.locator('#alertBtn').click()




})