describe('Before After Kullanimi', () => {
 before(() => { // butun it bloklarindan once bir kez calisacak
    cy.log('Before Kullanimi -Cypress Test');
    cy.visit('https://automationexercise.com/')

 });
 after(() => { // butun it bloklarinin sonunda calisacak bir kere
    cy.log('After kullanimi')

 });
 it('Basligi dogrula', () => {
    cy.title().should('eq',"Automation Exercise")

    
 });
});