# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tags.spec.js >> Test the Practice Page
- Location: tests\tags.spec.js:11:1

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Practice"
Received: "Practice | Practice Test Automation"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × locator resolved to <html lang="en-US">…</html>
       - unexpected value "Practice | Practice Test Automation"

```

```yaml
- link "Press \"Enter\" to skip to content":
  - /url: "#main-container"
- banner:
  - navigation
  - link "Practice Test Automation":
    - /url: https://practicetestautomation.com/
    - img "Practice Test Automation"
  - navigation:
    - navigation:
      - list:
        - listitem:
          - link "Home":
            - /url: https://practicetestautomation.com/
        - listitem:
          - link "Practice":
            - /url: https://practicetestautomation.com/practice/
        - listitem:
          - link "Courses":
            - /url: https://practicetestautomation.com/courses/
        - listitem:
          - link "AI Workshop":
            - /url: https://practicetestautomation.com/workshop
        - listitem:
          - link "Blog":
            - /url: https://practicetestautomation.com/blog/
        - listitem:
          - link "Contact":
            - /url: https://practicetestautomation.com/contact/
- main:
  - article:
    - heading "Practice" [level=1]
    - separator
    - paragraph:
      - link "Test Login Page":
        - /url: https://practicetestautomation.com/practice-test-login/
    - paragraph:
      - emphasis: Simple login page where testers can execute positive and negative login test cases
    - separator
    - paragraph:
      - link "Test Exceptions":
        - /url: https://practicetestautomation.com/practice-test-exceptions/
    - paragraph:
      - emphasis: Page to reproduce the most common Selenium Exceptions.
    - separator
    - paragraph:
      - link "Test Table":
        - /url: https://practicetestautomation.com/practice-test-table/
    - paragraph: Page to practice UI interactions and data validation with dynamic tables, filters, and sorting controls.
    - separator
    - paragraph
- contentinfo:
  - text: © Copyright 2020
  - link "Practice Test Automation.":
    - /url: https://practicetestautomation.com/
  - text: All rights reserved |
  - link "Privacy Policy":
    - /url: https://practicetestautomation.com/privacy-policy/
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test' 
  2  | test ('Test login page',{tag:'@login'}, async({page})=>{
  3  |     await page.goto('https://practicetestautomation.com/practice-test-login/')
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
> 14 | await expect(page).toHaveTitle('Practice')
     |                    ^ Error: expect(page).toHaveTitle(expected) failed
  15 | await page.waitForTimeout(3000)
  16 |     
  17 | 
  18 | 
  19 | })
```