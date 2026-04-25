import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.beforeEach(async ({ page }) => {
  await page.context().clearCookies();
  await page.context().clearPermissions();
});

test.describe('Login page tests', () => {
test('Register button leads to the register page', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goToLogInPage();
    
    await login.registerButton.click();
    await expect(page).toHaveURL(/\/register/);
});

test('Login with no information', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goToLogInPage();
    
    await login.loginButton.click();
    await expect(login.loginErrorMessage).toBeVisible();
    await expect(login.loginErrorMessage).toHaveText('Login was unsuccessful. Please correct the errors and try again.\nNo customer account found');
});

test('Login entering invalid email', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goToLogInPage();
    
    await login.emailInputField.fill('invalidemail');
    await login.loginButton.click();
    await expect(login.emailFieldErrorMessage).toHaveText('Please enter a valid email address.');
});

test('Login entering valid but not existing email', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goToLogInPage();
    
    await login.emailInputField.fill('notreal@takas.lt');
    await login.passwordInputField.fill('somepassword');
    await login.loginButton.click();
    await expect(login.loginErrorMessage).toBeVisible();
    await expect(login.loginErrorMessage).toHaveText('Login was unsuccessful. Please correct the errors and try again.\nNo customer account found');
});

test('Test if Remember Me checks/unchecks', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goToLogInPage();
    
    await login.rememberMeCheckbox.check();
    await expect(login.rememberMeCheckbox).toBeChecked();
    await login.rememberMeCheckbox.uncheck();
    await expect(login.rememberMeCheckbox).not.toBeChecked();
});

test('Check if forgot password button leads to the correct page', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goToLogInPage();
    
    await login.forgotPasswordLink.click();
    await expect(page).toHaveURL(/\/passwordrecovery/);
});
});