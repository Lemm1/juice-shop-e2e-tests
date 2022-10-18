import {
  Given,
  When,
  Before,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../../pages/login.page";
import { creatRandomUser } from "../../api/users";

const loginPage = new LoginPage();

Before({ tags: "@validUser" }, () => {
  cy.then(() => {
    this.user = creatRandomUser();
  });
});

Given("User opens the login page", () => {
  loginPage.open();
});

When("User enters credentials of existing user", () => {
  loginPage.typeEmail(this.user.email);
  loginPage.typePassword(this.user.password);
});

When("User click on the login button", () => {
  cy.intercept("POST", "/rest/user/login").as("login");
  loginPage.clickLogin();
});

Then("User should be logged in", () => {
  cy.wait("@login").its("response.statusCode").should("eq", 200);
  cy.getCookie("token").should("exist");
});

When("User enters email of existing user", () => {
  loginPage.typeEmail(this.user.email);
});

When("User enters wrong password", () => {
  loginPage.typePassword(faker.internet.password());
});

Then("User should not be logged in", () => {
  cy.wait("@login").its("response.statusCode").should("eq", 401);
  cy.getCookie("token").should("not.exist");
});

Then("User should see error message", () => {
  loginPage.invalidCredentialsErrorMessageShouldExist();
});

Then("Login button should be disabled", () => {
  loginPage.loginShouldBeDisabled();
});

When("User enters email", () => {
  loginPage.typeEmail(faker.internet.email());
});

When("User enters password", () => {
  loginPage.typeEmail(faker.internet.password());
});

When("User clears email", () => {
  loginPage.clearEmail();
});
