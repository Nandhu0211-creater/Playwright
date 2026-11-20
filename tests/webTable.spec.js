import {test, expect} from '@playwright/test'
test('Test the CheckBox', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
 
const LaptopCheckBox=page.locator("//table[@id='productTable']//tr[2]/td[4]")
await LaptopCheckBox.getByRole('checkbox').check()

const TabletCheckBox=page.locator("//table[@id='productTable']//tr[3]/td[4]")
await TabletCheckBox.getByRole('checkbox').check()

const SmartWatchCheckBox=page.locator("//table[@id='productTable']//tr[4]/td[4]")
await SmartWatchCheckBox.getByRole('checkbox').check()

const WirelessEarBudsCheckBox=page.locator("//table[@id='productTable']//tr[5]/td[4]")
await WirelessEarBudsCheckBox.getByRole('checkbox').check()
    await page.waitForTimeout(5000)
})