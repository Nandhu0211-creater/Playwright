import {test, expect} from '@playwright/test'
test('Check Box function', async({page})=>
{
await page.goto('https://testautomationpractice.blogspot.com/')
const button=page.locator('#sunday')
await button.check() //await button.check().toBeChecked()
await expect(button).toBeChecked()
await page.waitForTimeout(5000)
})
