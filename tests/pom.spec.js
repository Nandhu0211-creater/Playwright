//import {test, expect} from '@playwright/test'
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');

test('login to Demoblaze', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('your_username', 'your_password');
  await expect(loginPage.welcomeText).toContainText('your_username');
});