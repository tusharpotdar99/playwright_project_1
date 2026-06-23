import { test, expect } from '@playwright/test'


test('Locate Multiple Elements', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/index.html");

    const links = await page.$$('a');

    for (const link of links) {
        const linktext = await link.textContent();
        // console.log(linktext)
        process.stdout.write(linktext.trim() + ", ")
    }

    // const products = await page.$$("//div[@id='tbodyid']//div[1]//div//h4//a");

    // console.log(products.length);
    // for (const product of products) {

    //     const prodName = await product.textContent();

    //     process.stdout.write(prodName.trim() + ", ")
    // }

    // await page.waitForSelector('#tbodyid .card-title a');

    // const products = page.locator("//div[@id='tbodyid']//div[1]//div//h4//a");

    // const count = await products.count();

    // console.log("Number of products:", count);

    // for (let i = 0; i < count; i++) {
    //     const prodName = await products.nth(i).textContent();
    //     process.stdout.write(prodName + ", ");
    // }


    await page.waitForSelector("xpath=//div[@id='tbodyid']//h4/a");

    const products = await page.$$("//div[@id='tbodyid']//h4/a");

    console.log(products.length);

    for (const product of products) {
        const name = (await product.textContent())?.trim();
        console.log(name);
    }






})