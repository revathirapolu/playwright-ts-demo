import { test as base, Page } from '@playwright/test';

export const test = base.extend<{ authPage: Page }>({
  authPage: async ({ page }, use) => {
    await page.goto("/");
    await page.fill('[data-testid="username"]', 'testuser');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('[data-testid="login-btn"]');

    await use(page);
  }
});
