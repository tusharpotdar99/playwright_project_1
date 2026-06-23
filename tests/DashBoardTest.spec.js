import { test, expect } from '@playwright/test';


test("DashBoard Test", async ({ page }) => {

    await page.goto("http://localhost/orangehrm");

    await page.locator("//input[@placeholder='Username']").fill("admintushar");

    await page.locator("//input[@placeholder='Password']").fill("TushOHRM@1999")

    await page.locator("//button[normalize-space()='Login']").click()


    await page.waitForTimeout(3000)
    const dashboard = await page.locator("//h6[normalize-space()='Dashboard']").textContent();

    console.log(dashboard)


    await expect(page.locator("//h6[normalize-space()='Dashboard']")).toHaveText("Dashboard");

    await expect(page.locator("//input[@placeholder='Search']")).toHaveAttribute('placeholder', 'Search');

    await expect(page.locator("//span[normalize-space()='Admin']")).toHaveText("Admin")

    await expect(page.locator("//span[normalize-space()='Admin']")).toContainText("Ad")


    await page.close()

})