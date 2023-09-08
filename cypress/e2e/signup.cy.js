describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.signinbtn').contains('Sign In').click();
    cy.get('.sigup').contains('Sign up now').click();

    cy.get('#users-input-email').type('sumanpok9@gmail.comd9dds909');
    cy.get('input[placeholder="Password*"]').type('password');
    cy.get('input[placeholder="Confirm Password*"]').type('password');
    // cy.get('.input-container').children('.linkbtn').click();
    cy.get('.linkbtn').click();

    cy.get('#loginEmail').type('sumanpok9@gmail.com');
    cy.get('#loginPassword').type('password');
    cy.get('.linkbtn').click();
  });
});
