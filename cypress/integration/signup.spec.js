context('Task it', () => {
    //array que contem os dados do teste e a localizacao da pasta onde estao os dados.
    const users = require('../fixtures/users')
    //for que irá buscar os dados de acordo com o idex e adiconar nos cy.get
    users.forEach((item,index) => {
        it(`${index+1} - Sign Up for new ser`, () => {
            cy.visit('http://www.juliodelima.com.br/taskit/');
            cy.get('a[data-target="signupbox"]').click();
            cy.get('input[name="name"]').type(item.name);
            cy.get(`input[placeholder="It's time to create a login"]`).type(item.login);
            cy.get(`input[placeholder='Take care, it need to be remembered']`).type(item.password);
            cy.get('#signupbox > .modal-footer > .modal-action').click()
    
            //verifica se a mensagem de erro aparece corretamente.
            //cy.get('.toast').should('be.visible').and('contain', 'Someone choose this login before, please pick another!')
        });
        
    });
});

