import BasePage from "./base.page";

const locators = {
  emailInput: "#email",
  passwordInput: "#password",
  loginButton: "#loginButton",
  errorMessage: ".error",
};

export class LoginPage extends BasePage {
  constructor() {
    super("Login page", "#/login");
  }

  private getEmailInput() {
    return cy.get(locators.emailInput);
  }

  private getPasswordInput() {
    return cy.get(locators.passwordInput);
  }

  private getLoginButton() {
    return cy.get(locators.loginButton);
  }

  private getErrorMessage() {
    return cy.get(locators.errorMessage);
  }

  public typeEmail(email: string) {
    this.getEmailInput().type(email);
  }

  public typePassword(password: string) {
    this.getPasswordInput().type(password);
  }

  public clickLogin() {
    this.getLoginButton().click();
  }

  public invalidCredentialsErrorMessageShouldExist() {
    this.getErrorMessage().should("have.text", "Invalid email or password.");
  }

  public loginShouldBeDisabled() {
    this.getLoginButton().should("be.disabled");
  }

  public clearEmail() {
    this.getEmailInput().clear();
  }

  public open() {
    cy.clearCookies();
    cy.setDefaultCookies();
    super.open();
  }
}

export default LoginPage;
