# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multitab2.spec.js >> Test Multiple Tabs
- Location: tests\multitab2.spec.js:2:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect,chromium} from '@playwright/test'
  2  | test('Test Multiple Tabs', async()=>{
  3  |     //
  4  |     const browser = await chromium.launch()
  5  |     const context = await browser.newContext()
  6  | 
  7  |     const page1=await context.newPage()
  8  | 
  9  | 
  10 |     //going to browser1
> 11 |     await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     |                 ^ Error: page.goto: Target page, context or browser has been closed
  12 | 
  13 |     const [inner_page]= await Promise.all([context.waitForEvent('page'),
  14 |         page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()
  15 |     
  16 |     ])
  17 |     await browser.close()
  18 | 
  19 | 
  20 | 
  21 | 
  22 | })
```