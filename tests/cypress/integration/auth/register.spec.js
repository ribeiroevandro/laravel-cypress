describe('Register page', () => {
    it('register a new user', () => {
        cy.refreshDatabase()
        cy.visit('/register');
        cy.get('#name').type('Evandro Ribeiro');
        cy.get('#email').type('ribeiroevandro@live.com');
        cy.get('#password').type('SaVLAq3&vX6F!ik&k8kiA^bAyLPN$@io');
        cy.get('#password_confirmation').type('SaVLAq3&vX6F!ik&k8kiA^bAyLPN$@io');
        cy.get('[data-test-id="register_button"]').click()
        cy.url().should('be.equal', `${Cypress.config("baseUrl")}/dashboard`);
        cy.contains('You\'re logged in!');
    });

    it('display message if email is already registered', () => {
        cy.refreshDatabase()

        cy.visit('/register');
        cy.get('#name').type('Evandro Ribeiro');
        cy.get('#email').type('ribeiroevandro@live.com');
        cy.get('#password').type('SaVLAq3&vX6F!ik&k8kiA^bAyLPN$@io');
        cy.get('#password_confirmation').type('SaVLAq3&vX6F!ik&k8kiA^bAyLPN$@io');
        cy.get('[data-test-id="register_button"]').click()

        cy.visit('/register');
        cy.get('#name').type('Evandro Ribeiro');
        cy.get('#email').type('ribeiroevandro@live.com');
        cy.get('#password').type('SaVLAq3&vX6F!ik&k8kiA^bAyLPN$@io');
        cy.get('#password_confirmation').type('SaVLAq3&vX6F!ik&k8kiA^bAyLPN$@io');
        cy.get('[data-test-id="register_button"]').click()
        // cy.url().should('be.equal', `${Cypress.config("baseUrl")}/dashboard`);
        cy.contains('The email has already been taken.');
    });
});
