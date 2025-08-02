import { test, expect } from '@playwright/test';
import { CheckoutForm } from './selectors/formSelectors';

test('Checkout - Show alert when shipping address is different', async ({ page }) => {
  await page.goto('/checkout');
  
  const formData: Record<string, string> = {
    fullName: 'Alice Smith',
    email: 'alice@example.com',
    address: '123 Billing St',
    city: 'Springfield',
    state: 'IL',
    zip: '62704',
    cardName: 'Alice Smith',
    cardNumber: '4111111111111111',
    expMonth: 'January',
    expYear: '2025',
    cvv: '123',
  };

  for (const [field, value] of Object.entries(formData)) {
    const selector = CheckoutForm.selectors[field as keyof typeof CheckoutForm.selectors];
    if (!selector) throw new Error(`Selector not found for field: ${field}`);

    const element = page.locator(selector);

    if (field === 'expMonth') {
      await element.selectOption({ label: value });
    } else {
      await element.click();
      await element.fill(value);
    }
  }

  // If the "same as billing" checkbox is checked, uncheck it
  const shippingCheckbox = page.locator('input[name="sameadr"]');
  if (await shippingCheckbox.isChecked()) {
    await shippingCheckbox.uncheck();
  }

  // Expect an alert to appear and accept it
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Shipping address same as billing checkbox must be selected.');
    await dialog.accept();
  });

  // Assert alert is gone
  await Promise.all([
    expect(page.locator('form[action="/form-validation"]')).toBeVisible(),
    expect(page.locator('button:has-text("Continue to Checkout")')).toBeVisible()
  ]);
});
