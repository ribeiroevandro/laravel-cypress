describe('Welcome', () => {
    it('shows a homepage', () => {
        cy.visit('/');

        cy.contains('Laravel');
    });
});
