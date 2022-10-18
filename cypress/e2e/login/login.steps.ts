import {
  Given,
  When,
  Before,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../pages/login.page";
import { createDefaultUser } from "../../api/users";

const loginPage = new LoginPage();

Before({ tags: "@validUser" }, () => {
  createDefaultUser();
});

Given("User opens the login page", () => {
  loginPage.open();
});

When("User enters valid credentials", () => {
  cy.fixture("users").then((userFixture) => {
    loginPage.typeEmail(userFixture.defaultUser.email);
    loginPage.typePassword(userFixture.defaultUser.password);
  });
});

When("User click on the login button", () => {
  cy.intercept("POST", "/rest/user/login").as("login");
  loginPage.clickLogin();
});

Then("User should be logged in", () => {
  cy.wait("@login").its("response.statusCode").should("eq", 200);
  cy.getCookie("token").should("exist");
});
