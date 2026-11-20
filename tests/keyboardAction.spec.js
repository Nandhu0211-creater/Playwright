import { test, expect } from '@playwright/test';

test('Test keyboard action', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    // lowercase "text1"
    await page.locator('[name="text1"]').fill('Welcome to great girikalan magic show');

    await page.locator('[name="text1"]').press('Control+A');
    await page.locator('[name="text1"]').press('Control+C');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');
    expect (page.locator('[name="text1"]')).toHaveValue('Welcome to great girikalan magic show');
    await page.waitForTimeout(5000)
});