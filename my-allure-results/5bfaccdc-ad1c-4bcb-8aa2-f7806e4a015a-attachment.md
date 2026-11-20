# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tags.spec.js >> Test login page
- Location: tests\tags.spec.js:2:1

# Error details

```
Error: page.goto: net::ERR_NETWORK_CHANGED at https://practicetestautomation.com/practice-test-login/
Call log:
  - navigating to "https://practicetestautomation.com/practice-test-login/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "Your connection was interrupted" [level=1] [ref=e7]
    - paragraph [ref=e8]: A network change was detected.
    - generic [ref=e9]: ERR_NETWORK_CHANGED
  - button "Reload" [ref=e12] [cursor=pointer]
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test' 
  2  | test ('Test login page',{tag:'@login'}, async({page})=>{
> 3  |     await page.goto('https://practicetestautomation.com/practice-test-login/')
     |                ^ Error: page.goto: net::ERR_NETWORK_CHANGED at https://practicetestautomation.com/practice-test-login/
  4  |     const userName=page.locator("//div[@id='form']/div/label[text()='Username']/following-sibling::input[@id='username']")
  5  |     await (userName).fill('student')
  6  |     const password=page.locator("//div[@id='form']/div/input[@type='password']")
  7  |     await password.fill('Password123')
  8  |     await page.waitForTimeout(3000)
  9  |  
  10 | })
  11 | test('Test the Practice Page', {tag:'@practice'},async({page})=>{
  12 | await page.goto('https://practicetestautomation.com/practice-test-login/')
  13 | await page.locator("//a[@href='https://practicetestautomation.com/practice/']").click()
  14 | await expect(page).toHaveTitle('Practice')
  15 | await page.waitForTimeout(3000)
  16 |     
  17 | 
  18 | 
  19 | })
```