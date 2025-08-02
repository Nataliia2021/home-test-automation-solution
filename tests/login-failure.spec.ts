import { test, expect } from '@playwright/test';


const username = 'wronguser';
const password = 'wrongpassword';

test('Login Failure - wrong username/password shows error', async ({ page }) => {
  await page.goto('/login'); 

  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);

  await page.click('#signin-button');

  // Wait for error message
  const errorMessage = page.locator('text=Wrong credentials');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText('Wrong credentials');
});
