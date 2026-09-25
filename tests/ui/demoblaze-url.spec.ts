import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const DEMOBLAZE_URL = "https://www.demoblaze.com";

test.describe("UI smoke", () => {
  
  test("home loads", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/.+/);
  });




  test("accessibility smoke", async ({ page }) => {
    
    const results = await new AxeBuilder({ page }).analyze();
    console.log("test12");

    expect(results.violations).toEqual([]);
  });
});

test.describe("Demoblaze URL kontrolü", () => {

  test("ana sayfa doğru URL'de açılıyor", async ({ page }) => {
    await page.goto(DEMOBLAZE_URL);

    // URL kontrolü
    await expect(page).toHaveURL(DEMOBLAZE_URL + "/");

    // Sayfa başlığı kontrolü
    await expect(page).toHaveTitle(/STORE/);

    // Navbar'ın görünür olduğunu kontrol et
    const navbar = page.locator("#narvbarx");
    await expect(navbar).toBeVisible();
  });

});
