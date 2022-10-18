export function createDefaultUser(): void {
  cy.fixture("users").then((userFixture) => {
    const date = new Date().toISOString();
    const payload = {
      email: userFixture.defaultUser.email,
      password: userFixture.defaultUser.password,
      passwordRepeat: userFixture.defaultUser.password,
      sequirityQuestion: {
        createdAt: date,
        id: userFixture.defaultUser.securityQuestion.id,
        question: userFixture.defaultUser.securityQuestion.question,
        updatedAt: date,
      },
    };
    cy.request("POST", "/api/Users", payload);
  });
}

export default createDefaultUser;
