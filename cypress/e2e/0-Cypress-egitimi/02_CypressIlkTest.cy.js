describe('Cypress ile ilk Test', () => {
    it('Ilk test', () => {
        cy.visit('https://automationexercise.com/') //base url tanimlanmamistir
        cy.title().should('eq','Automation Exercise')
        cy.url().should('eq','https://automationexercise.com/')
        
    });
    it('Ikinci test', () => {
        cy.visit('https://automationexercise.com/')
        cy.title().should('include','Automation')
        cy.url().should('include','automationexercise.com/')
        
    });
});