import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test.beforeEach(async ({ page }) => {
  await page.context().clearCookies();
  await page.context().clearPermissions();
})

test('Check if main page loads', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.expectMainPageLoaded();
});

test.describe('Header links navigation tests', () => {
test('Check if register link works', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToRegisterLink();
});

test('Check if login link works', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToLogInLink();
});

test('Check if shopping cart link works', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToShoppingCart();
});

test('Check if wishlist link works', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToWishlist();
});
});

  test('Search works', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.enterSearchTerm('computer');
  await expect(page).toHaveURL(/search\?q=computer/);
  await main.searchResultsContain('computer');
});

test.describe('Top menu navigation tests', () => {
  test('Books top menu navigation', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToTopMenuBooks();
});

test('Computers top menu navigation', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToTopMenuComputers();
});

test('Electronics top menu navigation', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToTopMenuElectronics();
});

test('Apparel & Shoes top menu navigation', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToTopMenuApparelShoes();
});

test('Digital Downloads top menu navigation', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToTopMenuDigitalDownloads();
});

test('Jewelry top menu navigation', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToTopMenuJewelry();
});

test('Gift Cards top menu navigation', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToTopMenuGiftCards();
});
});

test('Manufacturer - Tricentis link', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToManufacturerTricentis();
});

test('Product grid loaded', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.productGridVisible();
});

test.describe('Footer information links tests', () => {
test('Sitemap link works', async ({ page }) => {
    const main = new MainPage(page);
    await main.goToHomepage();
    await main.footerInformationSitemapWorks();
});

test('Shipping & returns link works', async ({ page }) => {
    const main = new MainPage(page);
    await main.goToHomepage();
    await main.footerInformationShippingReturnWorks();
});

test('Privacy notice link works', async ({ page }) => {
    const main = new MainPage(page);
    await main.goToHomepage();
    await main.footerInformationPrivacyNoticeWorks();
});

test('Conditions of use link works', async ({ page }) => {
    const main = new MainPage(page);
    await main.goToHomepage();
    await main.footerInformationConditionsOfUseWorks();
});

test('About us link works', async ({ page }) => {
    const main = new MainPage(page);
    await main.goToHomepage();
    await main.footerInformationAboutUsWorks();
});

test('Contact us link works', async ({ page }) => {
    const main = new MainPage(page);
    await main.goToHomepage();
    await main.footerInformationContactUsWorks();
});

test('Customer service search link works', async ({ page }) => {
    const main = new MainPage(page);
    await main.goToHomepage();
    await main.footerCustomerServiceSearchWorks();
});

test('Customer service news link works', async ({ page }) => {
    const main = new MainPage(page);
    await main.goToHomepage();
    await main.footerCustomerServiceNewsWorks();
});

test('Customer service blog link works', async ({ page }) => {
    const main = new MainPage(page);
    await main.goToHomepage();
    await main.footerCustomerServiceBlogWorks();
});

test('Customer service recently viewed products link works', async ({ page }) => {
    const main = new MainPage(page);
    await main.goToHomepage();
    await main.footerCustomerServiceRecentlyViewedProductsWorks();
});

test('Customer service compare products list link works', async ({ page }) => {
    const main = new MainPage(page);
    await main.goToHomepage();
    await main.footerCustomerServiceCompareProductsListWorks();
});

test('Customer service new products link works', async ({ page }) => {
    const main = new MainPage(page);
    await main.goToHomepage();
    await main.footerCustomerServiceNewProductsWorks();
});
});