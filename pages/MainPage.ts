import { Page } from "@playwright/test";
import { expect } from '@playwright/test';

export class MainPage {
  public pageLogo;
  public toRegister;
  public toLogIn;
  public toShoppingCart;
  public toWishlist;
  public topMenuBooks;
  public topMenuComputers;
  public topMenuElectronics;
  public topMenuApparelShoesl;
  public topMenuDigitalDownloads;
  public topMenuJewelry;
  public topMenuGiftCards;
  public subscribeEmailField;
  public manufacturerTricentisLink;
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
  public productGrid;
  public footerInformationSitemap;
  public footerInformationShippingReturn;
  public footerInformationPrivacyNotice;
  public footerInformationConditionsOfUse;
  public footerInformationAboutUs;
  public footerInformationContactUs;
  public footerCustomerServiceSearch;
  public footerCustomerServiceNews;
  public footerCustomerServiceBlog;
  public footerCustomerServiceRecentlyViewedProducts;
  public footerCustomerServiceCompareProductsList;
  public footerCustomerServiceNewProducts;
  public addToCartButton;
  public addedToCartNotification;

  constructor(public page: Page) {
    this.pageLogo = this.page.locator('img[alt="Tricentis Demo Web Shop"]');
    this.toRegister = this.page.locator('a[href="/register"]');
    this.toLogIn = this.page.locator('a[href="/login"]');
    this.toShoppingCart = this.page.locator('#topcartlink');
    this.toWishlist = this.page.locator('.header-links a.ico-wishlist');
    this.topMenuBooks = this.page.locator('.top-menu a[href="/books"]');
    this.topMenuComputers = this.page.locator('.top-menu a[href="/computers"]');
    this.topMenuElectronics = this.page.locator('.top-menu a[href="/electronics"]');
    this.topMenuApparelShoesl = this.page.locator('.top-menu a[href="/apparel-shoes"]');
    this.topMenuDigitalDownloads = this.page.locator('.top-menu a[href="/digital-downloads"]');
    this.topMenuJewelry = this.page.locator('.top-menu a[href="/jewelry"]');
    this.topMenuGiftCards = this.page.locator('.top-menu a[href="/gift-cards"]');
    this.manufacturerTricentisLink = this.page.locator('.block-manufacturer-navigation').getByRole('link', { name: 'Tricentis' });
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
    this.productGrid = this.page.locator('.product-grid .product-item');
    this.footerInformationSitemap = this.page.locator('.footer a[href="/sitemap"]');
    this.footerInformationShippingReturn = this.page.locator('.footer a[href="/shipping-returns"]');
    this.footerInformationPrivacyNotice = this.page.locator('.footer a[href="/privacy-policy"]');
    this.footerInformationConditionsOfUse = this.page.locator('.footer a[href="/conditions-of-use"]');
    this.footerInformationAboutUs = this.page.locator('.footer a[href="/about-us"]');
    this.footerInformationContactUs = this.page.locator('.footer a[href="/contactus"]');
    this.footerCustomerServiceSearch = this.page.locator('.customer-service a[href="/search"]');
    this.footerCustomerServiceNews = this.page.locator('.customer-service a[href="/news"]');
    this.footerCustomerServiceBlog = this.page.locator('.customer-service a[href="/blog"]');
    this.footerCustomerServiceRecentlyViewedProducts = this.page.locator('.customer-service a[href="/recentlyviewedproducts"]');
    this.footerCustomerServiceCompareProductsList = this.page.locator('.customer-service a[href="/compareproducts"]');
    this.footerCustomerServiceNewProducts = this.page.locator('.customer-service a[href="/newproducts"]');
    this.addToCartButton = this.page.locator('.product-box-add-to-cart-button');
    this.addedToCartNotification = this.page.locator('.bar-notification.success');
  }

  async goToHomepage() {  
    await this.page.goto('/');
  }

  async expectMainPageLoaded() {
    await expect(this.pageLogo).toBeVisible();
  }

  async goToRegisterLink() {
    await this.toRegister.click();
    await expect(this.page).toHaveURL(/register/);
  }

  async goToLogInLink() {
    await this.toLogIn.click();
    await expect(this.page).toHaveURL(/login/);
  }

  async goToShoppingCart() {
    await this.toShoppingCart.click();
    await expect(this.page).toHaveURL(/cart/);
  }

  async goToWishlist() {
    await this.toWishlist.click();
    await expect(this.page).toHaveURL(/wishlist/);
  }

  async goToTopMenuBooks() {
    await this.topMenuBooks.click();
    await expect(this.page).toHaveURL(/books/);
  }

  async goToTopMenuComputers() {
    await this.topMenuComputers.click();
    await expect(this.page).toHaveURL(/computers/);
  }

  async goToTopMenuElectronics() {
    await this.topMenuElectronics.click();
    await expect(this.page).toHaveURL(/electronics/);
  }

  async goToTopMenuApparelShoes() {
    await this.topMenuApparelShoesl.click();
    await expect(this.page).toHaveURL(/apparel-shoes/);
  }

  async goToTopMenuDigitalDownloads() {
    await this.topMenuDigitalDownloads.click();
    await expect(this.page).toHaveURL(/digital-downloads/);
  }

  async goToTopMenuJewelry() {
    await this.topMenuJewelry.click();
    await expect(this.page).toHaveURL(/jewelry/);
  }

  async goToTopMenuGiftCards() {
    await this.topMenuGiftCards.click();
    await expect(this.page).toHaveURL(/gift-cards/);
  }

  async goToManufacturerTricentis() {
    await this.manufacturerTricentisLink.click();
    await expect(this.page).toHaveURL(/\/tricentis/);
  }

  async productGridVisible() {
     await expect((this.productGrid).first()).toBeVisible();
  }
  
  async footerInformationSitemapWorks() {
     await this.footerInformationSitemap.click();
     await expect(this.page).toHaveURL(/\/sitemap/);
  }
  
  async footerInformationShippingReturnWorks() {
     await this.footerInformationShippingReturn.click();
     await expect(this.page).toHaveURL(/\/shipping-returns/);
  }
  
  async footerInformationPrivacyNoticeWorks() {
     await this.footerInformationPrivacyNotice.click();
     await expect(this.page).toHaveURL(/\/privacy-policy/);
  }

  async footerInformationConditionsOfUseWorks() {
     await this.footerInformationConditionsOfUse.click();
     await expect(this.page).toHaveURL(/\/conditions-of-use/);
  }

  async footerInformationAboutUsWorks() {
     await this.footerInformationAboutUs.click();
     await expect(this.page).toHaveURL(/\/about-us/);
  }

  async footerInformationContactUsWorks() {
     await this.footerInformationContactUs.click();
     await expect(this.page).toHaveURL(/\/contactus/);
  }

  async footerCustomerServiceSearchWorks() {
     await this.footerCustomerServiceSearch.click();
     await expect(this.page).toHaveURL(/\/search/);
  }

  async footerCustomerServiceNewsWorks() {
     await this.footerCustomerServiceNews.click();
     await expect(this.page).toHaveURL(/\/news/);
  }

  async footerCustomerServiceBlogWorks() {
     await this.footerCustomerServiceBlog.click();
     await expect(this.page).toHaveURL(/\/blog/);
  }

  async footerCustomerServiceRecentlyViewedProductsWorks() {
     await this.footerCustomerServiceRecentlyViewedProducts.click();
     await expect(this.page).toHaveURL(/\/recentlyviewedproducts/);
  }

  async footerCustomerServiceCompareProductsListWorks() {
     await this.footerCustomerServiceCompareProductsList.click();
     await expect(this.page).toHaveURL(/\/compareproducts/);
  }

  async footerCustomerServiceNewProductsWorks() {
     await this.footerCustomerServiceNewProducts.click();
     await expect(this.page).toHaveURL(/\/newproducts/);
  }

  async addProductFromTheGridToCart(productNumber:number) {
     await this.addToCartButton.nth(productNumber).click();
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