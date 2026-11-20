import {test, expect} from '@playwright/test';
test('Test Frames', async({page})=>{
    
     // 1. Launch website
    await page.goto('https://ui.vision/demo/webtest/frames/');
    // 2. Count total frames
    const allFrames = page.frames();
    console.log('Total Frames:', allFrames.length);

    // 3. Frame 1
    const frame1 = page.frameLocator("frame[src='frame_1.html']");
    await frame1.locator("input[name='mytext1']").fill('Hello Frame 1');

    // 4. Frame 2
    const frame2 = page.frameLocator("frame[src='frame_2.html']");
    await frame2.locator("input[name='mytext2']").fill('Hello Frame 2');

    // 5. Frame 3
    const frame3 = page.frameLocator("frame[src='frame_3.html']");
    await frame3.locator("input[name='mytext3']").fill('Hello Frame 3');

    // 6. Frame 4
    const frame4 = page.frameLocator("frame[src='frame_4.html']");
    await frame4.locator("input[name='mytext4']").fill('Hello Frame 4');

    // 7. Frame 5
    const frame5 = page.frameLocator("frame[src='frame_5.html']");
    await frame5.locator("input[name='mytext5']").fill('Hello Frame 5');

    await page.waitForTimeout(5000)

});

