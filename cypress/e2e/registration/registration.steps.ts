import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import { ISecurityQuestion } from "../../interfaces/security.questions.interface";
import { RegistrationPage } from "../../pages/registration.page";

const registrationPage = new RegistrationPage();

Given("User opens the registration page", () => {
  registrationPage.open();
});

When("User enters valid email", () => {
  registrationPage.typeEmail(faker.internet.email());
});

When("User enters valid password", () => {
  cy.then(() => {
    this.password = faker.internet.password();
    registrationPage.typePassword(this.password);
  });
});

When("User repeats password", () => {
  registrationPage.typeRepeatPassword(this.password);
});

When("User selects security question", () => {
  cy.fixture("securityQuestions").then((securityQuestion) => {
    registrationPage.selectSecurityQuestion(
      faker.helpers.arrayElement<ISecurityQuestion>(securityQuestion).question
    );
  });
});

When("User enters security question answer", () => {
  registrationPage.typeSecurityQuestionAnswer(faker.lorem.words(2));
});

When("User click on the register button", () => {
  registrationPage.clickRegister();
});

Then("User should see a success flash message", () => {
  registrationPage.successFlashMessageShouldExist();
});

When("User enters invalid email", () => {
  registrationPage.typeEmail(faker.lorem.word());
});

Then("User should see email validation error", () => {
  registrationPage.emailValidationErrorShouldExist();
});

When("User enters weak password", () => {
  registrationPage.typePassword(faker.word.adjective(4));
});

Then("User should see password validation error", () => {
  registrationPage.passwordValidationErrorShouldExist();
});

When("User repeats wrong password", () => {
  registrationPage.typeRepeatPassword(faker.internet.password());
});

Then("User should see passwords don't match error", () => {
  registrationPage.passwordsDontMatchErrorShouldExist();
});
