import {test, expect} from '@playwright/test'
test('Uplad Files',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#singleFileInput').setInputFiles('tests/testfile.pdf')
     // click the upload button
    await page.locator("button:has-text('Upload Single File')").click()

    //upload multiple documents 
    await page.locator('#multipleFilesInput').setInputFiles(['tests/testfile.pdf',
            'tests/FilesUpload/testfile2.pdf.pdf'])

            //click the upload button
    await page.locator("button:has-text('Upload Multiple File')").click()

    // remove the files
    await page.locator('#multipleFilesInput').setInputFiles([])
    //await page.waitForTimeout(3000)

 await page.waitForTimeout(5000)

})
