describe('Cypress Locator', () => {
    it('Html element locator alma', () => {
        cy.get('#user-name')//id locate
        cy.get('.login-box') //class locate
        cy.get('input')//tag locate etme
        cy.get('input[name="user-name]') // attribute locator
        cy.get('input[placeholder]:contains("Username")')// text iceren element locate
        cy.get('a').contains("Login")//yukaridakinin aynisi
        cy.contains('Login') // yukaridakinin aynisi
        

        
    });
    
});