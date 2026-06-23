const { test, expect } = require('@playwright/test');

test('Hard Assertion Tests', async ({ page }) => {

    await page.goto('http://localhost/orangehrm')

    await expect(page).toHaveURL("http://localhost/orangehrm/web/index.php/auth/login")

    await expect(page).toHaveTitle("OrangeHRM")

    await expect(page.locator("//img[@alt='company-branding']")).toBeVisible();

    await expect(page.locator("//h5[normalize-space()='Login']")).toBeVisible()

    await expect(page.locator("//input[@placeholder='Username']")).toBeEnabled()

    await expect(page.locator("//input[@placeholder='Password']")).toBeEnabled()

    await expect(page.locator("//button[normalize-space()='Login']")).toBeEnabled();


    await page.locator("//input[@placeholder='Username']").fill("admintushar");

    await page.locator("//input[@placeholder='Password']").fill("TushOHRM@1999");

    await page.locator("//button[normalize-space()='Login']").click()

    await expect(page.locator("//h6[normalize-space()='Dashboard']")).toBeVisible();



})

test('Soft Assertion Tests', async ({ page }) => {

    await page.goto('http://localhost/orangehrm')

    await expect.soft(page).toHaveURL("http://localhost/orangehrm/web/index.php/auth/login")

    await expect.soft(page).toHaveTitle("OrangeHR")

    await expect.soft(page.locator("//img[@alt='company-branding']")).toBeVisible();

    await expect.soft(page.locator("//h5[normalize-space()='Login']")).toBeVisible()

    await expect.soft(page.locator("//input[@placeholder='Username']")).toBeEnabled()

    await expect.soft(page.locator("//input[@placeholder='Password']")).toBeEnabled()

    await expect.soft(page.locator("//button[normalize-space()='Login']")).toBeEnabled();


    await page.locator("//input[@placeholder='Username']").fill("admintusha");

    await page.locator("//input[@placeholder='Password']").fill("TushOHRM@1999");

    await page.locator("//button[normalize-space()='Login']").click()

    await expect.soft(page.locator("//h6[normalize-space()='Dashboard']")).toBeVisible();



})