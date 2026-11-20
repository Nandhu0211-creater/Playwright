const { test, expect } = require('@playwright/test');

test('Test1', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await expect(page).toHaveTitle('STORE');
});

test('Test2', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await expect(page).toHaveTitle('STORE');
});



test('Test3', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await expect(page).toHaveTitle('STORE');
});