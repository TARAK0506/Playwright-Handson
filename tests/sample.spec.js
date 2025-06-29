import { test, expect } from '@playwright/test';

test('project', async ({ page }) => {
  await page.goto('https://www.pepperfry.com/', { waitUntil: 'domcontentloaded'});
  console.log("Visited Pepperfry homepage");

  const furnitureLink = page.locator("//a[@name = 'Furniture']");
  await furnitureLink.waitFor({ state: 'visible', timeout: 20000 });
  await furnitureLink.click();
  console.log("Clicked Furniture link.");
});
