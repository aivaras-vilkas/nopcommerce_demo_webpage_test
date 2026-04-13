import { Page } from "@playwright/test";

export class MainPage {
  public subscribeEmailField;
  public subscribeButton;
  public subscribeSuccessMessage;
  public pagePoll;
  public pagePollButton;
  public pagePollMessage;
  public pagePoolGoodOption;
  
  constructor(private page: Page) {
    this.subscribeEmailField = this.page.locator('#newsletter-email');
    this.subscribeButton = this.page.locator('#newsletter-subscribe-button');
    this.subscribeSuccessMessage = this.page.locator('.newsletter-result-block');
    this.pagePoll = this.page.locator('[name="pollanswers-1"]');
    this.pagePollButton = this.page.locator('#vote-poll-1');
    this.pagePollMessage = this.page.locator('#block-poll-vote-error-1');
    this.pagePoolGoodOption = this.page.locator('[name="pollanswers-1"][value="2"]');
  }

  async goToHomepage() {
    await this.page.goto('/');
  }
}