
import { test, expect } from '@playwright/test'

test('Web Element', async ({ page }) => {

    await page.goto("http://localhost/orangehrm")

    const pageTitle = await page.title();

    console.log(pageTitle)

    if (pageTitle == 'OrangeHRM') {
        console.log("The Title test is Passed")
    } else {
        console.log("Test failed")
    }

    await expect(page).toHaveTitle('OrangeHRM')

})