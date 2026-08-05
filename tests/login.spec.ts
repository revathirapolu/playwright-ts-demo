import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { credentials } from '../utils/testData';

test.describe('Login Flow', () => {
  test('should log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto("/");
    await loginPage.login(credentials.validUser.username, credentials.validUser.password);

    await expect(dashboardPage.welcomeBanner).toBeVisible();
  });
});
