/// <reference types="Cypress" />
context('Task it', () => {
    //array que contem os dados do teste e a localizacao da pasta onde estao os dados.
    const users = require('../fixtures/users')
    //for que irá buscar os dados de acordo com o idex e adiconar nos cy.get
    users.forEach((item,index) => {
        //Fluxo Normal
        it(`${index+1} - Sign Up for new ser`, () => {
            cy.visit('http://www.juliodelima.com.br/taskit/')
            cy.get('a[data-target="signupbox"]').click()
            cy.get('input[name="name"]').type(item.name)
            cy.get(`input[placeholder="It's time to create a login"]`).type(item.login)
            cy.get(`input[placeholder='Take care, it need to be remembered']`).type(item.password)
            cy.get('#signupbox > .modal-footer > .modal-action').click()
            cy.get('.right > :nth-child(1) > .me').should('be.visible').and('contain',item.name)
            cy.wait(1000)
            cy.get('.right > :nth-child(3) > a').click()
            });
        });
    //Fluxo Alternativo
    const usersExists = require('../fixtures/usersExists')
    //for que irá buscar os dados de acordo com o idex e adiconar nos cy.get
    usersExists.forEach((item,index) => {
        it(`${index+1} - Sign Up With Alternative data`, () => {
            cy.visit('http://www.juliodelima.com.br/taskit/')
            cy.get('a[data-target="signupbox"]').click()
            cy.get('input[name="name"]').type(item.name)
            cy.get(`input[placeholder="It's time to create a login"]`).type(item.login)
            cy.get(`input[placeholder='Take care, it need to be remembered']`).type(item.password)
            cy.get('#signupbox > .modal-footer > .modal-action').click()
            cy.wait(1000)
            cy.get('.toast').should('be.visible').and('contain', 'Someone choose this login before, please pick another!')
        });
    });
});