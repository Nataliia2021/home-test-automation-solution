import { test, expect } from '@playwright/test';

test('Search Success', async ({ page }) => {
  const searchTerm = 'automation';
 
  await page.goto('/search');

  // Fill the search input
  await page.fill('input[name="searchWord"]', searchTerm);

  // Submit the form
  await page.click('button[type="submit"]');

  // Wait for "searching..." to appear
  const searchingLocator = page.locator('text=searching...');
  await expect(searchingLocator).toBeVisible();

  // Wait for "searching..." to disappear
  await expect(searchingLocator).toBeHidden();

  // Now assert the final result message
  const resultLocator = page.locator(`text=Found one result for ${searchTerm}`);
  await expect(resultLocator).toBeVisible();
});

