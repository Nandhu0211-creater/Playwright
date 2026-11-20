import {test, expect,chromium} from '@playwright/test'
test('Test Multiple Tabs', async()=>{
    //
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1=await context.newPage()


    //going to browser1
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const [inner_page]= await Promise.all([context.waitForEvent('page'),
        page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()
    
    ])
    await browser.close()




})