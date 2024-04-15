describe('Login page', () => {
    it('shows a login', () => {
        cy.visit('/login');

        cy.get('[data-test-id="login_button"]').click()

        cy.contains('The email field is required.')
        cy.contains('The password field is required.')
    });
});
