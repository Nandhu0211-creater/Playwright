import {test, expect} from '@playwright/test'
import { time } from 'node:console'
test ('Check Radio Button', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('#male').check()
await expect (page.locator('#male')).toBeChecked()
await  page.waitForTimeout(1000)
})