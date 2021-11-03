context('Task it', () => {
    it('Sign Up for new user', () => {
        cy.get(`a[data-target='signupbox']`).click();
        cy.get('input[name="name"]').type('')
    });

});