describe('Login page', () => {
    it('shows a login', () => {
        cy.visit('/login');

        cy.get('#email').type('evandro@live.com')

        cy.contains('Laravel');
    });
});
