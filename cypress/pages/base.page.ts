const locators = {
  flashMessage: ".mat-simple-snack-bar-content",
};

export default abstract class BasePage {
  constructor(protected name: string, protected path: string) {}

  public shouldBeOpened() {
    cy.url().should("include", this.path);
  }

  public open() {
    cy.visit(this.path);
  }

  protected getFlashMessage() {
    return cy.get(locators.flashMessage);
  }
}
