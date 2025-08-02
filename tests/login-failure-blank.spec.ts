import { test, expect } from '@playwright/test';


test('Login Failure - blank username/password shows error', async ({ page }) => {
  await page.goto('/login'); 

  await page.click('#signin-button');

  // Wait for error message
  const errorMessage = page.locator('text=Fields can not be empty');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText('Fields can not be empty');
});
