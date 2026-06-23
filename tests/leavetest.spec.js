
const { test, expect } = require("@playwright/test");
const { type } = require("node:os");


test("Leave Management", async ({ page }) => {

    await page.goto("http://localhost/orangehrm");

    await page.locator("//input[@placeholder='Username']").fill("admintushar");

    await page.locator("//input[@placeholder='Password']").fill("TushOHRM@1999")

    await page.locator("//button[normalize-space()='Login']").click()

    // await page.getByText('Leave', { exact: true }).click()

    await page.getByRole('link', { name: 'Leave' }).click()


    await page.waitForTimeout(3000);

    // const options = await page.$$("(//div[@class='oxd-select-wrapper'])[1]")

    const options = await page.locator("//div[@role='listbox']")
    // const ops = await page.$$("//div[@role='option']//span")

    const count = await options.count();
    console.log(options)


    // console.log(typeof options)
    // console.log(options.length)

    for (let i = 0; i < count; i++) {
        const month = await options.nth(i).textContent();
        console.log(month)

    }
    // for (let option of options) {
    //     const month = await option.textContent();
    //     console.log(month)
    // }


})