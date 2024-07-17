// import { test, expect } from '@playwright/test';
import { test, expect } from "@chromatic-com/playwright";

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vite/);
});

test('increment count', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page.getByRole('button', { name: 'count is 0' })).toBeVisible();

  await page.getByRole('button', { name: 'count is 0' }).click();

  await expect(page.getByRole('button', { name: 'count is 1' })).toBeVisible();
});
