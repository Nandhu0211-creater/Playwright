 import {test, expect} from '@playwright/test';
test('Test Frames', async({page})=>{
     // Launch website
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //  Locate Frame 3
    const frame3 = page.frameLocator('frame[src="frame_3.html"]');

    //  Locate Inner Iframe
    const innerFrame = frame3.frameLocator('iframe');

    //  Select I am a human option
    await innerFrame.getByText('I am a human', { exact: true }).click();

    // Select Other option
    await innerFrame.getByText('Other:', { exact: true }).click();

    //  Enter text in Other option
    await innerFrame.locator('input[type="text"]').fill('Playwright Automation');

    await page.waitForTimeout(10000)

});