import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

test("user can log in with valid credentials", async ({page}) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  await expect(page).toHaveURL(/inventory/);

});

test("user sees an error message with invalid credentials", async ({page}) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('invalid_user', 'wrong_password');

  await expect(loginPage.errorMessage).toBeVisible();
});
