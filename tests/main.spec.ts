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

test('Recently view product is added to the list', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();

  await expect(main.firstProductGrid.first()).toBeVisible();
  const firstProductGridName = await main.firstProductGrid.first().innerText();
  await main.firstProductGrid.first().click();
  await main.goToHomepage();

  const recentlyViewedFirstProductName = await main.recentlyViewedFirstProduct.innerText();
  await expect(recentlyViewedFirstProductName).toBe(firstProductGridName);
});

