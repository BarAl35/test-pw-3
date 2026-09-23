import "dotenv/config";
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests",

  // Run tests in files in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  reporter: [["list"], ["html", { open: "never" }], ["allure-playwright"]],
  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:3000",

    // Collect a trace when retrying a failed test.
    trace: "on-first-retry",
    headless:false
  },
  projects: [
    { name: "ui", testDir: "tests/ui", use: { ...devices["Desktop Chrome"] } }
  ],

  // Start your app before the tests run:
  // webServer: {
  //   command: "npm run start",
  //   url: process.env.BASE_URL ?? "http://localhost:3000",
  //   reuseExistingServer: !process.env.CI,
  // },
});
