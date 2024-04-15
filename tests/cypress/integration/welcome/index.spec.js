describe('Welcome', () => {
    it('shows a homepage', () => {
        cy.visit('/');

        cy.contains('Evandro');
    });

    it('redirect to login', () => {
        cy.visit('/');

        cy.get('[data-cy="login"]').click()

    })
});
