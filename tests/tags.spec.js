import {test,expect} from '@playwright/test' 
test ('Test login page',{tag:'@login'}, async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    const userName=page.locator("//div[@id='form']/div/label[text()='Username']/following-sibling::input[@id='username']")
    await (userName).fill('student')
    const password=page.locator("//div[@id='form']/div/input[@type='password']")
    await password.fill('Password123')
    await page.waitForTimeout(3000)
 
})
test('Test the Practice Page', {tag:'@practice'},async({page})=>{
await page.goto('https://practicetestautomation.com/practice-test-login/')
await page.locator("//a[@href='https://practicetestautomation.com/practice/']").click()
await expect(page).toHaveTitle('Practice')
await page.waitForTimeout(3000)
    


})