import { test } from "../fixtures/console.fixture";

test.describe("Page load console logs", () => {
  test("should load the page without any console errors", async ({ page }) => {
    // Navigate to the URL.
    // The `noConsoleErrors` fixture is active during this navigation.
    await page.goto("https://with-bugs.practicesoftwaretesting.com/#/");
  });
});
