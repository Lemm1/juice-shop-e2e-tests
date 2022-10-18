import { faker } from "@faker-js/faker";
import { ISecurityQuestion } from "../interfaces/security.questions.interface";
import { IUser } from "../interfaces/user.interface";

export function creatRandomUser(): IUser {
  const password = faker.internet.password();
  const email = faker.internet.email();
  cy.fixture("securityQuestions").then((securityQuestionsFixture) => {
    const date = new Date().toISOString();
    const securityQuestion = faker.helpers.arrayElement<ISecurityQuestion>(
      securityQuestionsFixture
    );
    const payload = {
      email,
      password,
      passwordRepeat: password,
      sequirityQuestion: {
        createdAt: date,
        id: securityQuestion.id,
        question: securityQuestion.question,
        updatedAt: date,
      },
    };
    cy.request("POST", "/api/Users", payload);
  });
  return { email, password };
}

export default creatRandomUser;
