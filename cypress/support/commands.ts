// Well thats how Cypress handles adding new commands so...
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable {
    setDefaultCookies(): Chainable<void>;
  }
}

Cypress.Commands.add("setDefaultCookies", () => {
  cy.setCookie("welcomebanner_status", "dismiss");
  cy.setCookie("cookieconsent_status", "dismiss");
  cy.setCookie("language", "en");
});
