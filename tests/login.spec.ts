import { test, expect } from '@playwright/test';


test('Login Success', async ({ page }) => {
  await page.goto('/login'); 

  await page.fill('input[name="username"]', process.env.USERNAME!);
  await page.fill('input[name="password"]', process.env.PASSWORD!);

await page.click('#signin-button');

  // Wait for navigation or some indication of login success
  await page.locator('text=Welcome!').waitFor();

  // Assert welcome message contains username
  const welcomeMessage = await page.locator('text=Welcome! johndoe19').textContent();
  expect(welcomeMessage).toContain('johndoe19');
});
