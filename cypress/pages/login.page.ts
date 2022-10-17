import BasePage from "./base.page";

const locators = {
  emailInput: "#email",
  passwordInput: "#password",
  loginButton: "#loginButton",
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

  public typeEmail(email: string) {
    this.getEmailInput().type(email);
  }

  public typePassword(password: string) {
    this.getPasswordInput().type(password);
  }

  public clickLogin() {
    this.getLoginButton().click();
  }

  public open() {
    cy.clearCookies();
    cy.setDefaultCookies();
    super.open();
  }
}

export default LoginPage;
