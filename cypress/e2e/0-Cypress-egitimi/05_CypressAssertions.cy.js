describe('Cypress Assertion Kullanimi', () => {
    it('Assertion Kullanim Ornekleri', () => {
        cy.visit('https://shopist.io/')
        cy.title().should('eq','Shop.ist')
        cy.url().should('contain','shop')
        cy.get(':nth-child(3) > .jumbotron-box > :nth-child(1)').should('be.visible')
        
        cy.get(':nth-child(3) > .jumbotron-box > :nth-child(1)').should('be.visible').and('contain','Shop') //contain kullaniminda textin icerisindeki bir kelimenin bile olmasi yeterli
        
        cy.get(':nth-child(3) > .jumbotron-box > :nth-child(1)').should('have.text','Shop the look')// ama have.text 'te icersindeki butun testi almaniz gerekir. Tek bir kelimeyi dogrulamaz
        cy.get(':nth-child(3) > .jumbotron-box > :nth-child(1)').should('have.length', 1)
        cy.get(':nth-child(3) > .jumbotron-box > :nth-child(1)').its('length').and('eq',1)
 

       



    });
    
});