import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost/orangehrm/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('img', { name: 'company-branding' }).click();
  await page.getByText('Username').click();
  await page.getByText('Password', { exact: true }).click();
  await page.locator('i').nth(1).click();
  await page.locator('i').first().click();
  await page.getByText('Username').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Forgot your password?').click();
  await page.locator('div').nth(2).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admintushar');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('TushOHRM@1999');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'Admin' }).click();
  await page.getByRole('heading', { name: '/ User Management' }).click();
  await page.getByLabel('Topbar Menu').getByText('User Management').click();
});