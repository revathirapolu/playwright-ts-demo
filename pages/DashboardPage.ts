import { BasePage } from './BasePage';
import { Page, Locator } from '@playwright/test';

export class DashboardPage extends BasePage {
  readonly welcomeBanner: Locator;

  constructor(page: Page) {
    super(page);
    this.welcomeBanner = page.getByRole("heading", { name: "Dashboard" });
  }

  async isLoaded() {
    return this.welcomeBanner.isVisible();
  }
}
