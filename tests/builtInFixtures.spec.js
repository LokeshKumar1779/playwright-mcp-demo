import { test, expect, chromium } from '@playwright/test';

/* test.use({
    viewport: { width: 1280, height: 720 }
}) */

test('check browser', async ({ browserName }) => {
    if (browserName === 'chromium') {
        console.log(`Running on ${browserName}`);
        const browser = await chromium.launch({
            // args: ['--window-size=1920,1080']
            args: ['--start-maximized'],
        });
        const context = await browser.newContext({
            /* userAgent: 'My custom user Agent',
            locale: 'fr-FR',
            timezoneId: '',
            colorScheme: 'dark',
            geolocation: '', */

            // viewport: { width: 1280, height: 720 }
            // deviceScaleFactor: 1.2,
            // viewport: null
            // viewport: { width: 375, height: 812 },
            // userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)...'
        })
        const page1 = await context.newPage();
        // await page1.setViewportSize(null);
        await page1.goto('https://rahulshettyacademy.com/client/#/auth/login');
        await expect(page1).toHaveTitle(/Let's Shop/);
        await page1.getByRole('textbox', { name: 'email@example.com' }).fill('kumarlokesh57@gmail.com');
        await page1.getByRole('textbox', { name: 'enter your passsword' }).fill('Samsung@135');
        await page1.getByRole('button', { name: 'Login' }).click();
        await expect(page1.getByRole('button', { name: 'Sign Out' })).toBeVisible();

        const page2 = await context.newPage();
        // await page2.setViewportSize({ width: 1366, height: 750 });
        await page2.goto("https://rahulshettyacademy.com/client/#/auth/login");
        await expect(page2.getByRole('button', { name: 'Sign Out' })).toBeVisible();
        await page2.getByRole('button', { name: 'Sign Out' }).click();

    } else {
        console.log(`Browser is ${browserName} skipping tests`);

    }


})