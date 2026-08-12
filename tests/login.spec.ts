import { expect } from '@playwright/test';
import { test } from '../fixtures/authFixture';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Login Flow', () => {
  test('should log in successfully', async ({ authPage }) => {
    const dashboardPage = new DashboardPage(authPage);

    await expect(dashboardPage.welcomeBanner).toBeVisible();
  });
});
