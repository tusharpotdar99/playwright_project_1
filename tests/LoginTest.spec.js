import { test, expect } from '@playwright/test'


test('login test', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/index.html")


    await page.click('id=login2')

    await page.locator('#loginusername').fill('tusharpotdar1999@gmail.com')

    // await page.fill('#loginusername','tusharpotdar99@gmail.com')
    // await page.type('#loginusername','tusharpotdar99@gmail.com')

    await page.locator("input[id='loginpassword']").fill('TushDB@1999')

    await page.click("//button[normalize-space()='Log in']");

    await expect(page.locator("//a[@id='nameofuser']")).toHaveText("Welcome tusharpotdar1999@gmail.com");

    const logoutlink = await page.locator("//a[@id='logout2']")

    await expect(logoutlink).toBeVisible();


    await page.waitForTimeout(5000);

    await page.close();


})