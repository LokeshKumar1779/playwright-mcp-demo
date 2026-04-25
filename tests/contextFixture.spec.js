/* import { test, expect, chromium } from '@playwright/test';

test("should shared cookies between pages in the same context", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    await page1.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page1.context().addCookies([{
        name: 'test_cookie',
        value: 'test_value',
        domain: 'rahulshettyacademy.com',
        path: '/'
    }]);


    await page2.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const cookies = await page2.context().cookies();
    console.log(cookies);

    const testCookie = cookies.find(cookie => cookie.name === 'test_cookie');
    expect(testCookie).toBeDefined();
    expect(testCookie.value).toBe('test_value');
    await page2.pause();
    await page1.close();
    await page2.close();
}); */