const { test, expect } = require("@playwright/test");

test("Add Employee Test", async ({ page }) => {

    await page.goto("http://localhost/orangehrm");

    await page.locator("//input[@placeholder='Username']").fill("admintushar");

    await page.locator("//input[@placeholder='Password']").fill("TushOHRM@1999")

    await page.locator("//button[normalize-space()='Login']").click()

    // await page.waitForSelector("//a[@class='oxd-main-menu-item active']//span[1]")

    await page.getByText('PIM', { exact: true }).click()

    // await page.getByRole('link', { name: 'Admin' }).click()

    // await page.locator("//a[@class='oxd-main-menu-item active']//span[1]").click()

    // await expect(page.locator("//div[@class='oxd-topbar-header-title']")).toBeVisible()

    await page.waitForTimeout(2000)

    // await page.getByRole("button", { name: "Add" }).click();

    //a[normalize-space()='Add Employee']

    await page.getByRole("link", { name: "Add Employee" }).click()

    await page.locator("//input[@placeholder='First Name']").fill('saurabh')

    await page.locator("//input[@placeholder='Middle Name']").fill('uttam')

    await page.locator("//input[@placeholder='Last Name']").fill('potdar')

    await page.locator("//span[@class='oxd-switch-input oxd-switch-input--active --label-right']").check()

    await page.locator("(//input[@class= 'oxd-input oxd-input--active'])[3]").fill("empsaurabh")

    await page.locator("(//input[@type='password'])[1]").fill("Saurabh@2000")

    await page.locator("(//input[@type='password'])[2]").fill("Saurabh@2000")

    await page.locator("//button[normalize-space()='Save']").click()

    await page.waitForTimeout(2000)

    await expect(await page.locator("//h6[normalize-space()='Personal Details']")).toBeVisible()

    await page.locator("(//input[@placeholder='yyyy-mm-dd'])[2]").fill("2000-02-06")

    await page.locator("//label[normalize-space()='Male']").check()

    await expect(await page.locator("//label[normalize-space()='Male']")).toBeChecked()

})


test("Add Employee Test Another", async ({ page }) => {

    await page.goto("http://localhost/orangehrm");

    await page.locator("//input[@placeholder='Username']").fill("admintushar");

    await page.locator("//input[@placeholder='Password']").fill("TushOHRM@1999")

    await page.locator("//button[normalize-space()='Login']").click()

    // await page.waitForSelector("//a[@class='oxd-main-menu-item active']//span[1]")

    await page.getByText('PIM', { exact: true }).click()

    // await page.getByRole('link', { name: 'Admin' }).click()

    // await page.locator("//a[@class='oxd-main-menu-item active']//span[1]").click()

    // await expect(page.locator("//div[@class='oxd-topbar-header-title']")).toBeVisible()

    await page.waitForTimeout(2000)

    // await page.getByRole("button", { name: "Add" }).click();

    //a[normalize-space()='Add Employee']

    await page.getByRole("link", { name: "Add Employee" }).click()

    await page.locator("//input[@placeholder='First Name']").fill('saurabh')

    await page.locator("//input[@placeholder='Middle Name']").fill('uttam')

    await page.locator("//input[@placeholder='Last Name']").fill('potdar')

    await page.locator("//span[@class='oxd-switch-input oxd-switch-input--active --label-right']").check()

    await page.locator("(//input[@class= 'oxd-input oxd-input--active'])[3]").fill("empsaurabh")

    await page.locator("(//input[@type='password'])[1]").fill("Saurabh@2000")

    await page.locator("(//input[@type='password'])[2]").fill("Saurabh@2000")

    await page.locator("//button[normalize-space()='Save']").click()

    await page.waitForTimeout(2000)

    await expect(await page.locator("//h6[normalize-space()='Personal Details']")).toBeVisible()

    await page.locator("(//input[@placeholder='yyyy-mm-dd'])[2]").fill("2000-02-06")

    await page.locator("//label[normalize-space()='Male']").check()

    await expect(await page.locator("//label[normalize-space()='Male']")).toBeChecked()

})