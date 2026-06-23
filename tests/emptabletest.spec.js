import { test, expect } from '@playwright/test';


test("Employee Table", async ({ page }) => {

    await page.goto("http://localhost/orangehrm");

    await page.locator("//input[@placeholder='Username']").fill("admintushar");

    await page.locator("//input[@placeholder='Password']").fill("TushOHRM@1999")

    await page.locator("//button[normalize-space()='Login']").click()

    await page.getByRole('link', { name: 'Leave' }).click()

    const table = await page.locator("//div[@role='table']")

    console.log(table.textContent()
    )

})