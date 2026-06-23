// const {test, expect} = require('@playwright/test')
import { test, expect } from '@playwright/test'


test('Locators', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/index.html");

    await page.locator("//a[@id='nava']");

    await page.locator("id='nava'");

    await page.locator("//li[@class='nav-item active']//a[@class='nav-link']").click()
    await page.click("//li[@class='nav-item active']//a[@class='nav-link']");

    await page.getByText("Home").click();

    await page.getByText("Contact");

    await page.locator("//a[normalize-space() ='Contact'");

    await page.getByText("About us");

    await page.locator("id='cartur'");

    await page.getByText("Phones").click();

    await page.getByRole('link', { name: 'Phones' }).click();
    await page.getByRole('link', { name: 'Laptops' }).click();

})

