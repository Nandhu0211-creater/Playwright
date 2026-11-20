import {test, expect} from '@playwright/test';
test('TestWebPage', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await expect(page.getByText ('Test login')).toBeVisible()
    await expect(page.getByLabel('Username')).toBeVisible();
    await page.getByLabel('Username').fill('student')
    await expect(page.getByLabel('Username')).toHaveValue('student')
    await page.getByLabel('Password').fill('Password123')
    await expect(page.getByLabel('Password')).toHaveValue('Password123')
    await page.locator('#submit').click()
    await expect(page.getByText('Congratulations student. You successfully logged in!'))
    await page.waitForTimeout(5000)
    await page.getByText('Log out',{exact:true}).click()
    await expect(page.getByText('Test Login')).toBeVisible()

    await page.locator('#menu-item-20').click()
   await expect (page.locator('.post-title')).toBeVisible()
    await expect (page.locator('.post-title')).toHaveText('Practice')
    await page.getByRole('link',{name:'Test Login Page',exact:true}).click()
    await expect(page.getByText('Test Login')).toBeVisible()



    await page.waitForTimeout(5000)

})