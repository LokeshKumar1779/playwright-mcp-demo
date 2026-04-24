/* import { test } from "@playwright/test";
test("Measure navigation timings", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  // Wait until the page is fully loaded
  await page.waitForLoadState("load");
  // Extract navigation timing metrics
  const timing = await page.evaluate(() => {
    const navEntry = performance.getEntriesByType(
      "navigation" as any,
    )[0] as any;
    return {
      startTime: navEntry.startTime,
      connectEnd: navEntry.connectEnd,
      domContentLoaded: navEntry.domContentLoadedEventEnd,
      loadTime: navEntry.loadEventEnd - navEntry.startTime,
    };
  });
  // Log the timings (you can also add assertions here if you want)
  console.log("Navigation timings:", timing);
  // Example assertion: ensure loadTime is less than 5 seconds
  // expect(timing.loadTime).toBeLessThan(5000);

  const resources = await page.evaluate(() => {
    return performance.getEntriesByType("resource").map(r => ({
      name: r.name,
      startTime: r.startTime,
      duration: r.duration,
    }));
  });
  console.log("Resource timings:", resources);
});
 */
