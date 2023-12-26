const { beforeEach } = require("mocha");

describe('Before After Kullanimi', () => {
 beforeEach(() => { // her it blogundan once calisacak 
    cy.log('BeforeEach Kullanimi -Cypress Test');
    cy.visit('https://automationexercise.com/')

 });
 afterEach(() => { // her it blogunun sonunda olacak
    cy.log('AfterEach kullanimi')
    
 });
 it('Basligi dogrula', () => {
    cy.title().should('eq',"Automation Exercise")

    
 });
 it('url dogrula', () => {
   cy.url().should('include',"automation")
 });
 it('hostname dogrula', () => {
   cy.location('hostname').should('include','automation')
 });
});