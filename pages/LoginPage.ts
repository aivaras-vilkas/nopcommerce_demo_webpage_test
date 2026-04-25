import { Page } from "@playwright/test";
import { expect } from '@playwright/test';

export class LoginPage {
  public emailInputField;
  public passwordInputField;
  public loginButton;
  public loginErrorMessage;
  public registerButton;
  public rememberMeCheckbox;
  public forgotPasswordLink;
  public emailFieldErrorMessage;

  constructor(public page: Page) {
  this.emailInputField = this.page.locator('#Email');
  this.passwordInputField = this.page.locator('#Password');
  this.loginButton = this.page.locator('.login-button');
  this.loginErrorMessage = this.page.locator('.message-error');
  this.registerButton = this.page.locator('.register-button');
  this.rememberMeCheckbox = this.page.locator('#RememberMe');
  this.forgotPasswordLink = this.page.locator('a[href="/passwordrecovery"]');
  this.emailFieldErrorMessage = this.page.locator('[data-valmsg-for="Email"].field-validation-error');
  }

  async goToLogInPage() {  
    await this.page.goto('/login');
  }
}
