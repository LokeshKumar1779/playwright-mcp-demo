/* import { Browser, BrowserContext, chromium, Page } from "playwright";

/* (async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://playwright.dev/");
  console.log(await page.title());
  await browser.close();
})(); */

/*(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
  });
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();
  await page.goto("https://playwright.dev/");
  console.log(await page.title());
  await page.screenshot({ path: "screenshot.png" });
  await browser.close();
})();*/
