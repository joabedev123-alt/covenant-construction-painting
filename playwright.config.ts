import { defineConfig } from "@playwright/test";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
export default defineConfig({
  testDir: "./tests",
  workers: 1,
  timeout: 240000,
  use: {
    baseURL: "http://localhost:3100",
    browserName: "chromium",
    ...(process.platform === "darwin" ? { channel: "chrome" } : {}),
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run dev -- --port 3100",
    url: "http://localhost:3100/admin",
    reuseExistingServer: false,
    timeout: 120000,
    env: {
      NEXT_DIST_DIR: ".next-cms-test",
      CMS_DATA_DIR: mkdtempSync(path.join(tmpdir(), "covenant-cms-test-")),
    },
  },
});
