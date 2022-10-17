import BasePage from "./base.page";

const locators = {
  emailInput: "#emailControl",
  passwordInput: "#passwordControl",
  repeatPasswordInput: "#repeatPasswordControl",
  securityQuestionSelect: "mat-select[name='securityQuestion']",
  securityQuestionDropdown: "#mat-select-0-panel",
  securityQuestionAnswerInput: "#securityAnswerControl",
  registerButton: "#registerButton",
};

export class RegistrationPage extends BasePage {
  constructor() {
    super("Registration page", "#/register");
  }

  public typeEmail(email: string) {
    this.getEmailInput().type(email);
  }

  public typePassword(password: string) {
    this.getPasswordInput().type(password);
  }

  public typeRepeatPassword(password: string) {
    this.getRepeatPasswordInput().type(password);
  }

  public selectSecurityQuestion(securityQuestion: string) {
    this.getSecurityQuestionSelect().click();
    this.getSecurityQuestionDropdown()
      .find("mat-option")
      .filter(`:contains(${securityQuestion})`)
      .click();
  }

  public typeSecurityQuestionAnswer(securityQuestionAnswer: string) {
    this.getSecurityAnswerInput().type(securityQuestionAnswer);
  }

  public clickRegister() {
    this.getRegisterButton().click();
  }

  public successFlashMessageShouldExist() {
    this.getFlashMessage().should(
      "have.text",
      "Registration completed successfully. You can now log in."
    );
  }

  public open() {
    cy.clearCookies();
    cy.setDefaultCookies();
    super.open();
  }

  private getEmailInput() {
    return cy.get(locators.emailInput);
  }

  private getPasswordInput() {
    return cy.get(locators.passwordInput);
  }

  private getRepeatPasswordInput() {
    return cy.get(locators.repeatPasswordInput);
  }

  private getSecurityQuestionSelect() {
    return cy.get(locators.securityQuestionSelect);
  }

  private getSecurityQuestionDropdown() {
    return cy.get(locators.securityQuestionDropdown);
  }

  private getSecurityAnswerInput() {
    return cy.get(locators.securityQuestionAnswerInput);
  }

  private getRegisterButton() {
    return cy.get(locators.registerButton);
  }
}

export default RegistrationPage;
