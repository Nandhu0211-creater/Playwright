//getByLable
import {test, expect} from '@playwright/test'
import { time } from 'node:console'
test ('Tom',async({page})=>{
await page.goto('https://www.demoblaze.com/')
await page.locator('#signin2').click()
await page.locator('#sign-username').fill('User@123')
await for time(1000)
})
