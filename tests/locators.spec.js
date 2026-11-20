import {test, ecpect} from '@playwright/test'
test ('Check login functionality in website', async({page})=>
{
    await page.goto('https://www.demoblaze.com/');
    //const LoginButton =page.locator('#login2') // id-->locator
    //const products=page.locator('.nav-link') // class-->locator
    const products=page.locator('[id="login2"]')//attribute locator

    //locate any element....(sign up)
    
    
}) 
