import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../pages/login.page";
import { createDefaultUser } from "../../support/api/users";

const loginPage = new LoginPage();

Before({ tags: "@validUser" }, () => {
  createDefaultUser();
});

Given("User opens the login page", () => {
  loginPage.open();
});

When("User enters email as {string}", (email: string) => {
  loginPage.typeEmail(email);
});

When("User enters password as {string}", (password: string) => {
  loginPage.typePassword(password);
});

When("User click on the login button", () => {
  loginPage.clickLogin();
});
