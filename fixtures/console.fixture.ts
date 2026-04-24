import { test as base, expect } from "@playwright/test";

/**
 * checks for console logs on page load
 */

// 1. Define a type for your new fixture
type MyFixtures = {
  noConsoleErrors: void; // Use 'void' since this fixture just runs logic and doesn't return a value
};

export const test = base.extend<MyFixtures>({
  noConsoleErrors: [
    async ({ page }, use) => {
      const consoleErrors: string[] = [];
      // Set up a listener for the 'console' event.
      page.on("console", msg => {
        // Check if the message type is error.
        if (msg.type() === "error") {
          consoleErrors.push("\n" + msg.text());
        }
      });
      // Use the fixture in the test. The test code will run here.
      await use();
      // After the test, assert that no console errors were logged.
      // This part is the "tear-down" of the fixture.
      expect(
        consoleErrors,
        `Unexpected console errors: ${consoleErrors.join()}`,
      ).toHaveLength(0);
    },
    {
      auto: true,
    },
  ],
});
