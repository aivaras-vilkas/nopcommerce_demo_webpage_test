import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test.beforeEach(async ({ page }) => {
  await page.context().clearCookies();
  await page.context().clearPermissions();
});

test('Main page screenshot comparison', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await expect(page).toHaveScreenshot('mainPageScreenshot.png', { fullPage: true });
});
test.describe('Newsletter subscription tests', () => {
test('Newsletter subscription success', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();
  await main.subscribeEmailField.fill('test@example.com');
  await main.subscribeButton.click();
  await expect(main.subscribeSuccessMessage).toHaveText('Thank you for signing up! A verification email has been sent. We appreciate your interest.');
});

test('Newsletter with no email error appears', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();
  await main.subscribeEmailField.fill('');
  await main.subscribeButton.click();
  await expect(main.subscribeSuccessMessage).toBeVisible();
  await expect(main.subscribeSuccessMessage).toHaveText('Enter valid email');
});
});

test.describe('Opinion poll tests', () => {
test('Page opinion poll selection works', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

   const selectionOptions = [
    { label: 'Good', value: '2' },
    { label: 'Poor', value: '3' },
    { label: 'Very bad', value: '4' }
  ];
  
  for (const option of selectionOptions) {
    const cycleOptions = page.getByLabel(option.label);

    await cycleOptions.check();
    await expect(cycleOptions).toBeChecked();
    await expect(cycleOptions).toHaveAttribute('value', option.value);
  }
});

test('Page opinion only for registered users message appears', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.pagePoolGoodOption.check();
  await main.pagePollButton.click();
  await expect(main.pagePollMessage).toHaveText('Only registered users can vote.');
});
});

test('Recently view product is added to the list', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await expect(main.firstProductGrid.first()).toBeVisible();
  const firstProductGridName = (await main.firstProductGrid.first().innerText()).trim();
  await main.firstProductGrid.first().click();
  await main.goToHomepage();

  const recentlyViewedFirstProductName = (await main.recentlyViewedFirstProduct.innerText()).trim();
  await expect(recentlyViewedFirstProductName).toBe(firstProductGridName);
  console.log('Recently viewed product name:', recentlyViewedFirstProductName);
  console.log('First product grid name:', firstProductGridName);
});

test.describe('Category navigation tests', () => {
test('Books category navigation', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToCategory('books');
  await expect(main.page).toHaveURL('/books');
});

test('Computers category navigation', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToCategory('computers');
  await expect(main.page).toHaveURL('/computers');
});

test('Electronics category navigation', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToCategory('electronics');
  await expect(main.page).toHaveURL('/electronics');
});

test('Apparel & Shoes category navigation', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToCategory('apparel-shoes');
  await expect(main.page).toHaveURL('/apparel-shoes');
});

test('Digital Downloads category navigation', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToCategory('digital-downloads');
  await expect(main.page).toHaveURL('/digital-downloads');
});

test('Jewelry category navigation', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToCategory('jewelry');
  await expect(main.page).toHaveURL('/jewelry');
});

test('Gift Cards category navigation', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.goToCategory('gift-cards');
  await expect(main.page).toHaveURL('/gift-cards');
});
});

test.describe('Looping slider tests', () => {
  test('Looping slider changes after pressing middle button next', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await expect(main.loopingSlider.first()).toBeVisible();
  await expect(main.loopingSlider.first()).toHaveAttribute('style', /display:\s*block/);
  await main.loopingSliderMiddleNext.click();
  await page.waitForTimeout(500);
  await expect(main.loopingSlider.nth(1)).toHaveAttribute('style', /display:\s*block/);
});

test('Looping slider changes after pressing lower button next', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await expect(main.loopingSlider.first()).toBeVisible();
  await expect(main.loopingSlider.first()).toHaveAttribute('style', /display:\s*block/);
  await main.loopingSliderLowerNext.nth(1).click();
  await page.waitForTimeout(500);
  await expect(main.loopingSlider.nth(1)).toHaveAttribute('style', /display:\s*block/);
});
});

test.describe('Search tests', () => {
  test('Search for product starting with a letter', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.enterSearchTerm('laptop');
  await expect(page).toHaveURL(/search\?q=laptop/);
});
  test('Search results contain the search term', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await main.enterSearchTerm('computer');
  await expect(page).toHaveURL(/search\?q=computer/);
  await main.searchResultsContain('computer');
});
});

