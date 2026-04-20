import { Page } from "@playwright/test";
import { expect } from '@playwright/test';

export class MainPage {
  public subscribeEmailField;
  public subscribeButton;
  public subscribeSuccessMessage;
  public pagePoll;
  public pagePollButton;
  public pagePollMessage;
  public pagePoolGoodOption;
  public recentlyViewedFirstProduct;
  public firstProductGrid;
  public categoriesBooks;
  public categoriesComputers;
  public categoriesElectronics;
  public categoriesApparelShoes;
  public categoriesDigitalDownloads;
  public categoriesJewelry;
  public categoriesGiftCards;
  public loopingSlider;
  public loopingSliderMiddleNext;
  public loopingSliderLowerNext;
  public searchInputField;
  public searchButton;
  public searchResultsText;

  constructor(public page: Page) {
    this.subscribeEmailField = this.page.locator('#newsletter-email');
    this.subscribeButton = this.page.locator('#newsletter-subscribe-button');
    this.subscribeSuccessMessage = this.page.locator('.newsletter-result-block');
    this.pagePoll = this.page.locator('[name="pollanswers-1"]');
    this.pagePollButton = this.page.locator('#vote-poll-1');
    this.pagePollMessage = this.page.locator('#block-poll-vote-error-1');
    this.pagePoolGoodOption = this.page.locator('[name="pollanswers-1"][value="2"]');
    this.recentlyViewedFirstProduct = this.page.locator('.block-recently-viewed-products li'); //.first()
    this.firstProductGrid = this.page.locator('.home-page-product-grid .product-title a'); //.first()
    this.categoriesBooks = this.page.locator('.block-category-navigation a[href="/books"]');
    this.categoriesComputers = this.page.locator('.block-category-navigation a[href="/computers"]');
    this.categoriesElectronics = this.page.locator('.block-category-navigation a[href="/electronics"]');
    this.categoriesApparelShoes = this.page.locator('.block-category-navigation a[href="/apparel-shoes"]');
    this.categoriesDigitalDownloads = this.page.locator('.block-category-navigation a[href="/digital-downloads"]');
    this.categoriesJewelry = this.page.locator('.block-category-navigation a[href="/jewelry"]');
    this.categoriesGiftCards = this.page.locator('.block-category-navigation a[href="/gift-cards"]');
    this.loopingSlider = this.page.locator('#nivo-slider a');
    this.loopingSliderMiddleNext = this.page.locator('.nivo-nextNav');
    this.loopingSliderLowerNext = this.page.locator('.nivo-control');
    this.searchInputField = this.page.locator('#small-searchterms');
    this.searchButton = this.page.locator('.button-1.search-box-button');
    this.searchResultsText = this.page.locator('.product-grid h2 a[href]');
  }

  async goToHomepage() {  
    await this.page.goto('/');
  }

  async goToCategory(category: string) {
    switch (category.toLowerCase()) {
      case 'books':
        await this.categoriesBooks.click();
        break;
      case 'computers':
        await this.categoriesComputers.click();
        break;
      case 'electronics':
        await this.categoriesElectronics.click();
        break;
      case 'apparel-shoes':
        await this.categoriesApparelShoes.click();
        break;
      case 'digital-downloads':
        await this.categoriesDigitalDownloads.click();
        break;
      case 'jewelry':
        await this.categoriesJewelry.click();
        break;
      case 'gift-cards':
        await this.categoriesGiftCards.click();
        break;
      default:
        throw new Error(`Category not found: ${category}`);
    }
  }

  async enterSearchTerm(term:string) {  
    await this.searchInputField.fill(term);
    await this.searchButton.click();
  }

  async searchResultsContain(term: string) {
    const results = this.searchResultsText;

    const count = await results.count();
    expect(count).toBeGreaterThan(0);

    const searchResultsCount = await results.count();
    for (let i = 0; i < searchResultsCount; i++) {
        await expect(results.nth(i)).toContainText(new RegExp(term, 'i'));
    }
  }

}