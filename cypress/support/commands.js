// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
import { faker } from '@faker-js/faker';
import _ from 'lodash';

//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('generateFixtures', () => {
  cy.writeFile('cypress/fixtures/users.json', {
    hits: Cypress._.times(20, () => {
      return {
        email: faker.internet.email(),
        password: faker.internet.password(),
      };
    }),
  });
});
