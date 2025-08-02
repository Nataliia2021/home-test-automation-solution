import { test, expect } from '@playwright/test';


test('Grid Item Test', async ({ page }) => {
  await page.goto('/grid');
  const items = await page.locator('div.item').elementHandles();

  for (const item of items) {
    const cardLabel = await item.$('label[data-test-id="card-number"]');
    const cardNumber = await cardLabel?.innerText();

    if (cardNumber?.trim() === '7') {
      const itemNameEl = await item.$('[data-test-id="item-name"]');
      const itemName = await itemNameEl?.innerText();
      expect(itemName?.trim()).toBe('Super Pepperoni');

      const priceEl = await item.$('#item-price');
      const price = await priceEl?.innerText();
      expect(price?.trim()).toBe('$10');

      return; 
    }
  }
});
