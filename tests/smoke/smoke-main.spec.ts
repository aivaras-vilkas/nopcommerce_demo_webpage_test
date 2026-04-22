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