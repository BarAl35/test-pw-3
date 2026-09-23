import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("UI smoke", () => {
  
  test("home loads", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/.+/);
  });



  test("accessibility smoke", async ({ page }) => {
    
    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  });
});
