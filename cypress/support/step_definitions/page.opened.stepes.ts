import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../pages/login.page";

Then("User should see the login page", () => {
  new LoginPage().shouldBeOpened();
});

Then("User should see the search page", () => {
  cy.url().should("include", "#/search");
});
