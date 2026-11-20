# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multitab.spec.js >> Test Multiple Tabs
- Location: tests\multitab.spec.js:2:1

# Error details

```
ReferenceError: Cannot access 'browser' before initialization
```

# Test source

```ts
  1  | import {test, expect,chromium} from '@playwright/test'
  2  | test('Test Multiple Tabs', async()=>{
  3  |     //
> 4  |     const browser = await browser.launch()
     |                     ^ ReferenceError: Cannot access 'browser' before initialization
  5  |     const context = await browser.newContext()
  6  | 
  7  |     const page1=await context.newPage()
  8  |     const page2=await context.newPage()
  9  | 
  10 |     //total tabs and pages
  11 |     console.log('No of pages:', context.pages().length)
  12 | 
  13 |     //going to browser1
  14 |     await page1.goto('https://www.youtube.com/')
  15 | 
  16 |     //going to Browser2
  17 |     await page2.goto('https://www.flipkart.com/')
  18 | 
  19 |     await browser.close()
  20 | 
  21 | 
  22 |     
  23 | 
  24 | })
```