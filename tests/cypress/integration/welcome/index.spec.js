describe('Welcome', () => {
    it('shows a homepage', () => {
        cy.visit('/');

        cy.contains('Laravel');
    });

    it('redirect to login', () => {
        cy.visit('/');

        cy.get('[data-cy="loginn"]').click()

    })
});
