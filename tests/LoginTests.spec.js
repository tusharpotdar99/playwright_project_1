const { test, expect } = require('@playwright/test');


test('Login Test', async ({ page }) => {


    await page.goto("http://localhost/orangehrm");

    await expect(page).toHaveTitle("OrangeHRM")

    await expect(page).toHaveURL("http://localhost/orangehrm/web/index.php/auth/login");

    // const logo =  await page.getByAltText("company-branding");
    const logo = await page.locator("//img[@alt='company-branding']")

    await expect(logo).toBeVisible();

    const loginText = await page.locator("//h5[normalize-space()='Login']");

    await expect(loginText).toBeVisible();

    await page.locator("//input[@placeholder='Username']").fill("admintushar");

    await page.locator("//input[@placeholder='Password']").fill("TushOHRM@1999")

    await page.locator("//button[normalize-space()='Login']").click()


    await page.waitForTimeout(3000)
    const dashboard = await page.locator("//h6[normalize-space()='Dashboard']").textContent();

    console.log(dashboard)


    await expect(page.locator("//h6[normalize-space()='Dashboard']")).toHaveText("Dashboard");




    // const username = page.getByLabel('Username');
    // await username.fill('Admin');



    await page.close()





})