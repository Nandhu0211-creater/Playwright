import {test, expect,chromium} from '@playwright/test'
test('Test Multiple Tabs', async()=>{
    //
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1=await context.newPage()
    const page2=await context.newPage()

    //total tabs and pages
    console.log('No of pages:', context.pages().length)

    //going to browser1
    await page1.goto('https://www.youtube.com/')

    //going to Browser2
    await page2.goto('https://www.flipkart.com/')

    await browser.close()


    

})