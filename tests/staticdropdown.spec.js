import { test, expect } from '@playwright/test';

test('Handle Static Dropdown', async ({ page }) => {

    // Open website
    await page.goto('https://www.playwrightautomation.com/practice.html');

    // Select Country
    await page.locator('select').first().selectOption({ label: 'India' });

    // Verify selected country
    await expect(page.locator('select').first()).toHaveValue('India');

    await page.waitForTimeout(2000);

});