import { expect, test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { credentials } from '../utils/testData';

export const test = base.extend<{ authPage: Page }>({
  authPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto("/");
    await loginPage.login(credentials.validUser.username, credentials.validUser.password);

    const dashboardPage = new DashboardPage(page);
    await expect(dashboardPage.welcomeBanner).toBeVisible({ timeout: 10000 });

    await use(page);
  }
});
