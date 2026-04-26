import { Page } from "@playwright/test";
import { expect } from '@playwright/test';

export class ShoppingCartPage {
  public pageLogo;
  public productName;
  public addToCartButtonProductPage;
  public addToCartSuccessNotification;
  public InShoppingCartProductName;
  public cartItemQuantityInput;
  public updateShoppingCartButton;
  public continueShoppingButton;
  public discountCodeInput;
  public applyDiscountButton;
  public discountFailureMessage;
  public giftCardCodeInput;
  public applyGiftCardButton;
  public giftCardFailureMessage;
  public removeFromCartButton;
  public productUnitPrice;
  public productTotalPrice;
  public cartSummaryMessage;
  public shippingCountryDropdown;
  public shippingStateDropdown;
  public shippingEstimateShippingButton;
  public shippingEstimationResults;

  constructor(public page: Page) {
    this.pageLogo = this.page.locator('img[alt="Tricentis Demo Web Shop"]');
    this.productName = this.page.locator('.product-name');
    this.addToCartButtonProductPage = this.page.locator('.add-to-cart-button-25');
    this.addToCartSuccessNotification = this.page.locator('.bar-notification.success');
    this.InShoppingCartProductName = this.page.locator('.cart-item-row .product-name');
    this.cartItemQuantityInput = this.page.locator('.cart-item-row .qty-input');
    this.updateShoppingCartButton = this.page.locator('.update-cart-button');
    this.continueShoppingButton = this.page.locator('.continue-shopping-button');
    this.discountCodeInput = this.page.locator('.discount-coupon-code');
    this.applyDiscountButton = this.page.locator('.apply-discount-coupon-code-button');
    this.discountFailureMessage = this.page.locator('.coupon-box .message');
    this.giftCardCodeInput = this.page.locator('.discount-coupon-code');
    this.applyGiftCardButton = this.page.locator('.apply-gift-card-coupon-code-button');
    this.giftCardFailureMessage = this.page.locator('.giftcard-box .message');
    this.removeFromCartButton = this.page.locator('.remove-from-cart');
    this.productUnitPrice = this.page.locator('.product-unit-price');
    this.productTotalPrice = this.page.locator('.product-subtotal');
    this.cartSummaryMessage = this.page.locator('.order-summary-content');
    this.shippingCountryDropdown = this.page.locator('#CountryId');
    this.shippingStateDropdown = this.page.locator('#StateProvinceId');
    this.shippingEstimateShippingButton = this.page.locator('.estimate-shipping-button');
    this.shippingEstimationResults = this.page.locator('.shipping-results');
}

  async goToShoppingCart() {  
    await this.page.goto('/cart');
}

  async addToCartClick() {  
    await this.addToCartButtonProductPage.click();
}

  async checkIfProductPriceCalculatedCorrectly(nthProduct: number) {
    const unitPriceText = await this.productUnitPrice.nth(nthProduct).innerText();
    const totalPriceText = await this.productTotalPrice.nth(nthProduct).innerText();
    const quantityValue = await this.cartItemQuantityInput.nth(nthProduct).inputValue();

    const unitPrice = parseFloat(unitPriceText.replace(/[^0-9.-]+/g, ''));
    const totalPrice = parseFloat(totalPriceText.replace(/[^0-9.-]+/g, ''));
    const numberOfItems = parseInt(quantityValue);

    expect(totalPrice).toBeCloseTo(unitPrice * numberOfItems, 2);
}

  async updateQuantityAndCheck(rowIndex: number, quantity: number) {
    await this.cartItemQuantityInput.nth(rowIndex).fill(quantity.toString());
    await this.updateShoppingCartButton.click();
    await this.checkIfProductPriceCalculatedCorrectly(rowIndex);
}
}
