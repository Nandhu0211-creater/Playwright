/* play wright.... testcase to verify the title of the demoblaze website..
import { test, expect } from '@playwright/test';

test('Verify DemoBlaze title', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    await expect(page).toHaveTitle(/STORE/);
});*/
// To verify the title of the youtube website
import {test, expect} from '@playwright/test';
test('Check the video player website title',async({page})=>
    {
    await page.goto('https://www.youtube.com/');

        await expect(page).toHaveTitle(/YouTube/);

});
