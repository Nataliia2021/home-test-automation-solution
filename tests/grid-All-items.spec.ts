import { test, expect } from '@playwright/test';


test('Grid All Items Test - all items have title, price, image and button', async ({ page }) => {
    await page.goto('/grid');
  
    const items = await page.locator('div.item').elementHandles();
  
    for (const item of items) {
      // Title
      const titleEl = await item.$('[data-test-id="item-name"]');
      const title = await titleEl?.innerText();
      expect(title?.trim().length).toBeGreaterThan(0);
  
      // Price
      const priceEl = await item.$('#item-price');
      const price = await priceEl?.innerText();
      expect(price?.trim().length).toBeGreaterThan(0);
  
      // Image
      const imgEl = await item.$('img');
      expect(imgEl).not.toBeNull();
      const src = await imgEl?.getAttribute('src');
      expect(src?.trim().length).toBeGreaterThan(0);
  
      // Button
      const buttonEl = await item.$('button');
      expect(buttonEl).not.toBeNull();
    }
  });