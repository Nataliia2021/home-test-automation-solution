import { test, expect } from '@playwright/test';


test('Cart Total is correct for 6 products', async ({ page }) => {
    await page.goto('/checkout');
  
  // Get all price elements (including total)
  const priceElements = await page.locator('.price').elementHandles();

  if (priceElements.length === 0) {
    throw new Error('No price elements found');
  }

  // Separate product prices (all except last)
  const productPriceElements = priceElements.slice(0, -1);

  let sum = 0;
  for (const elem of productPriceElements) {
    const text = await elem.textContent();
    if (!text) continue;
    const match = text.match(/\$([\d.]+)/);
    if (match) {
      sum += parseFloat(match[1]);
    }
  }
  console.log('Calculated sum of product prices:', sum);
  // Get the displayed total from the last element
  const totalText = await priceElements[priceElements.length - 1].textContent() || '';
  const displayedTotal = parseFloat(totalText.match(/[\d.]+/)?.[0] || '0');

  console.log('Displayed total:', displayedTotal);

  expect(displayedTotal).toBe(sum);
  expect(sum).toBe(453);
});