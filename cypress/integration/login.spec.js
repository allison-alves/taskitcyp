context('Task it!', () => {
    const users = require('../fixtures/users')
    users.forEach((item,index) => {
        it(`${index+1} - Login with a valid user`, () => {
            cy.visit ('http://www.juliodelima.com.br/taskit/')
            cy.get('.right > li > .modal-trigger').click()
            cy.get('#signinbox > .modal-content > .s12 > :nth-child(3) > :nth-child(1) > .validate').type(item.login)
            cy.get(':nth-child(3) > :nth-child(2) > .validate').type(item.password)
            cy.wait(2000)
            cy.get('#signinbox > .modal-footer').contains('Sign in').click()
            cy.wait(2000)
            cy.get('.right > :nth-child(1) > .me').should('be.visible').and('contain',item.name)
            cy.get('.right > :nth-child(3) > a').click()
        });
    });

    const invalidLogin = require('../fixtures/invalidLogin')
    invalidLogin.forEach((item,index) => {
        it(`${index+1} - Login with alternative data`, () => {
            cy.visit ('http://www.juliodelima.com.br/taskit/')
            cy.get('.right > li > .modal-trigger').click()
            cy.get('#signinbox > .modal-content > .s12 > :nth-child(3) > :nth-child(1) > .validate').type(item.login)
            cy.get(':nth-child(3) > :nth-child(2) > .validate').type(item.password)
            cy.wait(2000)
            cy.get('#signinbox > .modal-footer').contains('Sign in').click()
            cy.wait(2000)
            cy.get('#toast-container > :nth-child(1)').should('be.visible').and('contain', 'Maybe you brain dropped the password or login in some place!')
        });
    });
});