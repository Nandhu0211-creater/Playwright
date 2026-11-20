import {test, expect} from '@playwright/test'
test('Test Link', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
expect (page.getByText('Automation Testing Practice ',{exact:true})).toBeVisible()
const onlinetraining = page.getByRole('link',{name:'Online Trainings'})
await onlinetraining.click()
expect (page.locator('#navbar').getByRole('link', { name: 'Pavan Online Trainings logo' })).toHaveText('Pavan Online Trainings')
await page.waitForTimeout(5000)
})