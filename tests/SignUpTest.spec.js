// const {test, expect} = require('@playwright/test');

import fs from 'fs';

import { test, expect } from '@playwright/test';


test('Sign Up', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/index.html");

    const email = `test${Date.now()}@gmail.com`;
    const password = `Test@${Math.random().toString(36).substring(2, 8)}1`;
    const data = `Email: ${email} \nPassword: ${password}`;

    fs.writeFileSync('testData.txt', data);
    console.log('Data saved successfully')

    await page.locator("//a[@id='signin2']").click();

    await page.locator("//input[@id='sign-username']").fill(email);

    // await page.locator("//input[@id='sign-password']").fill("TushDB@1999");

    // await page.fill("//input[@id='sign-password']","TushDB@1999")

    await page.locator("//input[@id='sign-password']").fill(password);

    await page.locator("//button[normalize-space()='Sign up']").click();

    await page.waitForTimeout(5000);



    await page.close();






})//a[@id='nameofuser']