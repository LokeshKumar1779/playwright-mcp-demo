import { test, expect } from "@playwright/test";
/* test.describe.parallel("Parallel test suite", () => {
  test("Test 1 - Google.com has correct title", async ({ page }) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle("Google");
  });
  test("Test 2 - Playwright.dev has correct title", async ({ page }) => {
    await page.goto("https://playwright.dev");
    await expect(page).toHaveTitle(/Playwright/);
  });
  test("Test 3 - GitHub has correct title", async ({ page }) => {
    await page.goto("https://github.com");
    await expect(page).toHaveTitle(/GitHub/);
  });
});  */

test.describe.configure({ mode: "parallel", retries: 1 });
test.describe("slow tests", () => {
  test.slow(true, "Waiting for long API response");
  test("Test 1 - Google.com has correct title", async ({ page }) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle("Google");
  });
  test("Test 2 - Playwright.dev has correct title", async ({ page }) => {
    await page.goto("https://playwright.dev");
    await expect(page).toHaveTitle(/Playwright/);
  });
  test("Test 3 - GitHub has correct title", async ({ page }) => {
    await page.goto("https://github.com");
    await expect(page).toHaveTitle(/GitHub/);
  });

  test("Test 4 - Slow test", async ({ page }) => {
    // test.slow();
    await page.waitForTimeout(10000);
  });
});
