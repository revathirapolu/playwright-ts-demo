import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

test('dashboard loads correctly', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.goto("/");
  const loaded = await dashboardPage.isLoaded();

  expect(loaded).toBeTruthy();
});
