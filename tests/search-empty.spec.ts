import { test, expect } from '@playwright/test';

test('Search Empty', async ({ page }) => {
  await page.goto('/search');


  // Leave search input empty and submit
  await page.fill('input[name="searchWord"]', '');
  await page.click('button[type="submit"]');

  // Wait for "searching..." to appear
  const searchingLocator = page.locator('text=searching...');
  await expect(searchingLocator).toBeVisible();

  // Wait for "searching..." to disappear
  await expect(searchingLocator).toBeHidden();
  
  // Then assert error message is shown
  const errorMessage = page.locator('text=Please provide a search word.');
  await expect(errorMessage).toBeVisible();
});