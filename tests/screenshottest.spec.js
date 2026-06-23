const { test, expect } = require('@playwright/test')

test("page screenshot", async ({ page }) => {

    await page.goto("http://localhost/orangehrm");
    // await page.screenshot({ path: 'screenshots/' + Date.now() + 'HomePage.png' })

    await page.locator("//input[@placeholder='Username']").fill("admintushar");

    await page.locator("//input[@placeholder='Password']").fill("TushOHRM@1999")

    await page.locator("//button[normalize-space()='Login']").click()

    await page.waitForTimeout(3000)

    await page.locator("//nav[@aria-label='Sidepanel']").screenshot({ path: "screenshots/" + Date.now() + "sidepanel.png" })

})


test("Full page screenshot", async ({ page }) => {

    await page.goto("http://localhost/orangehrm");
    await page.screenshot({ path: 'screenshots/' + Date.now() + 'FullPage.png', fullPage: true })


})

test('Element screenshot', async ({ page }) => {
    await page.goto("http://localhost/orangehrm");
    await page.locator("//div[@class='orangehrm-login-slot']").screenshot({ path: 'screenshots/' + Date.now() + 'loginslot.png' })
    await page.waitForTimeout(3000)
    await page.locator("//div[@class='orangehrm-login-branding']").screenshot({ path: 'screenshots/' + Date.now() + 'loginslot.png' })


})