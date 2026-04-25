/* import { test, expect } from "@playwright/test";
import { chromium } from "playwright";

/* test("Multiple Browser Contexts", async () => {
  const browser = await chromium.launch();

  const [adminContext, userContext] = await Promise.all([
    browser.newContext(),
    browser.newContext(),
  ]);

  const adminPage = await adminContext.newPage();
  const userPage = await userContext.newPage();
  await Promise.all([
    adminPage.goto("https://www.google.com"),
    userPage.goto("https://www.amazon.com"),
  ]);
  await expect(adminPage).toHaveTitle(/Google/);
  await expect(userPage).toHaveTitle(/Amazon.com. Spend less. Smile more./);
}); */

// await expect(userPage.locator(".new-setting")).toBeVisible();

/*test("multiple browsers", async () => {
  const urls = ["https://www.google.com", "https://www.amazon.com"];
    for (const url of urls) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    await browser.close();
  } 

  const browser = await chromium.launch();
  for (const url of urls) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    //await page.route("{png,jpg,jpeg,svg,gif}", route => route.abort());
    // await page.pause();
    // await context.close();
  // }
  // await browser.close();
// }); */
