import { faker } from '@faker-js/faker';

describe('template spec', () => {
  it('passes', () => {
    const userEmail = faker.internet.email();
    const userPassword = faker.internet.password();
    cy.visit('http://localhost:3000/');
    cy.get('.signinbtn').contains('Sign In').click();
    cy.get('.sigup').contains('Sign up now').click();

    // cy.get('#users-input-email').type('sumanpok9@gmail.comd9dds909');
    // cy.get('input[placeholder="Password*"]').type('password');

    cy.get('#users-input-email').type(userEmail);
    cy.get('input[placeholder="Password*"]').type(userPassword);
    cy.get('input[placeholder="Confirm Password*"]').type(userPassword);
    // cy.get('.input-container').children('.linkbtn').click();
    cy.get('.linkbtn').click();

    cy.get('#loginEmail').type('sumanpok9@gmail.com');
    cy.get('#loginPassword').type('password');
    cy.get('.linkbtn').click();
  });
});
