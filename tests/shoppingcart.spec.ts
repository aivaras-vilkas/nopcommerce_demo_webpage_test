import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';

test.beforeEach(async ({ page }) => {
  await page.context().clearCookies();
  await page.context().clearPermissions();
});

test('Add to cart button works and product is added to the cart', async ({ page }) => {
  const main = new MainPage(page);
  const cart = new ShoppingCartPage(page);
  await main.goToHomepage();

  await main.addProductFromTheGridToCart(1);
  await expect(main.addedToCartNotification).toBeVisible();
  await cart.goToShoppingCart();
  await expect(cart.InShoppingCartProductName).toContainText('14.1-inch Laptop');
});

test('Product quantity can be changed and price changes accordingly', async ({ page }) => {
  const main = new MainPage(page);
  const cart = new ShoppingCartPage(page);
  await main.goToHomepage();

  await main.addProductFromTheGridToCart(1);
  await expect(main.addedToCartNotification).toBeVisible();
  await cart.goToShoppingCart();

  await cart.updateQuantityAndCheck(0, 5);
  await cart.updateQuantityAndCheck(0, 15);
  await cart.updateQuantityAndCheck(0, 100);
});

test('Remove from cart button', async ({ page }) => {
  const main = new MainPage(page);
  const cart = new ShoppingCartPage(page);
  await main.goToHomepage();

  await main.addProductFromTheGridToCart(1);
  await expect(main.addedToCartNotification).toBeVisible();
  await cart.goToShoppingCart();

  await cart.removeFromCartButton.click();
  await cart.updateShoppingCartButton.click();
  await expect(cart.page.locator('.cart-item-row')).toHaveCount(0);
});

test('Cannot enter letters in product quantity field', async ({ page }) => {
  const main = new MainPage(page);
  const cart = new ShoppingCartPage(page);
  await main.goToHomepage();

  await main.addProductFromTheGridToCart(1);
  await expect(main.addedToCartNotification).toBeVisible();
  await cart.goToShoppingCart();

  await cart.cartItemQuantityInput.fill('abc');
  await cart.updateShoppingCartButton.click();
  await expect(cart.cartItemQuantityInput).toHaveValue('1');
});

test('Cannot enter symbols in product quantity field', async ({ page }) => {
  const main = new MainPage(page);
  const cart = new ShoppingCartPage(page);
  await main.goToHomepage();

  await main.addProductFromTheGridToCart(1);
  await expect(main.addedToCartNotification).toBeVisible();
  await cart.goToShoppingCart();

  await cart.cartItemQuantityInput.fill('+-*/');
  await cart.updateShoppingCartButton.click();
  await expect(cart.cartItemQuantityInput).toHaveValue('1');
});

test('Cannot enter impossibly large numbers in product quantity field', async ({ page }) => {
  const main = new MainPage(page);
  const cart = new ShoppingCartPage(page);
  await main.goToHomepage();

  await main.addProductFromTheGridToCart(1);
  await expect(main.addedToCartNotification).toBeVisible();
  await cart.goToShoppingCart();

  await cart.cartItemQuantityInput.fill('1000000000000');
  await cart.updateShoppingCartButton.click();
  await expect(cart.cartItemQuantityInput).toHaveValue('1');
});

test('Entering 0 works as the remove product button', async ({ page }) => {
  const main = new MainPage(page);
  const cart = new ShoppingCartPage(page);
  await main.goToHomepage();

  await main.addProductFromTheGridToCart(1);
  await expect(main.addedToCartNotification).toBeVisible();
  await cart.goToShoppingCart();

  await cart.cartItemQuantityInput.fill('0');
  await cart.updateShoppingCartButton.click();
  await expect(cart.cartSummaryMessage).toContainText('Your Shopping Cart is empty!');
});

test('Discount coupon pressing apply with empty field throws and error', async ({ page }) => {
  const main = new MainPage(page);
  const cart = new ShoppingCartPage(page);
  await main.goToHomepage();

  await main.addProductFromTheGridToCart(1);
  await expect(main.addedToCartNotification).toBeVisible();
  await cart.goToShoppingCart();

  await cart.applyDiscountButton.click();
  await expect(cart.discountFailureMessage).toBeVisible();
  await expect(cart.discountFailureMessage).toContainText("The coupon code you entered couldn't be applied to your order");
  });

  test('Discount coupon pressing apply with not active code', async ({ page }) => {
  const main = new MainPage(page);
  const cart = new ShoppingCartPage(page);
  await main.goToHomepage();

  await main.addProductFromTheGridToCart(1);
  await expect(main.addedToCartNotification).toBeVisible();
  await cart.goToShoppingCart();

  await cart.discountCodeInput.fill('12345');
  await cart.applyDiscountButton.click();
  await expect(cart.discountFailureMessage).toBeVisible();
  await expect(cart.discountFailureMessage).toContainText("The coupon code you entered couldn't be applied to your order");
  });

  test('Gift coupon pressing apply with empty field throws and error', async ({ page }) => {
  const main = new MainPage(page);
  const cart = new ShoppingCartPage(page);
  await main.goToHomepage();

  await main.addProductFromTheGridToCart(1);
  await expect(main.addedToCartNotification).toBeVisible();
  await cart.goToShoppingCart();

  await cart.applyGiftCardButton.click();
  await expect(cart.giftCardFailureMessage).toBeVisible();
  await expect(cart.giftCardFailureMessage).toContainText("The coupon code you entered couldn't be applied to your order");
  });

  test('Gift coupon pressing apply with not active code', async ({ page }) => {
  const main = new MainPage(page);
  const cart = new ShoppingCartPage(page);
  await main.goToHomepage();

  await main.addProductFromTheGridToCart(1);
  await expect(main.addedToCartNotification).toBeVisible();
  await cart.goToShoppingCart();

  await cart.giftCardCodeInput.fill('12345');
  await cart.applyGiftCardButton.click();
  await expect(cart.giftCardFailureMessage).toBeVisible();
  await expect(cart.giftCardFailureMessage).toContainText("The coupon code you entered couldn't be applied to your order");
  });

  test('Estimate shipping works after entering US/state information and estimation appears', async ({ page }) => {
  const main = new MainPage(page);
  const cart = new ShoppingCartPage(page);
  await main.goToHomepage();

  await main.addProductFromTheGridToCart(1);
  await expect(main.addedToCartNotification).toBeVisible();
  await cart.goToShoppingCart();

  await cart.shippingCountryDropdown.selectOption({ label: 'United States' });
  await cart.shippingStateDropdown.selectOption({ label: 'Alaska' });
  await cart.shippingEstimateShippingButton.click();
  await expect(cart.shippingEstimationResults).toBeVisible();
  });

  test('State field is empty when non US country selected', async ({ page }) => {
  const main = new MainPage(page);
  const cart = new ShoppingCartPage(page);
  await main.goToHomepage();

  await main.addProductFromTheGridToCart(1);
  await expect(main.addedToCartNotification).toBeVisible();
  await cart.goToShoppingCart();

  await cart.shippingCountryDropdown.selectOption({ label: 'Albania' });
  await expect(cart.shippingStateDropdown).toHaveText('Other (Non US)');
  });