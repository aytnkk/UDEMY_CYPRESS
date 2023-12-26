describe('Back Froward Kullanimi', () => {
    it('Cypress.io sayfasina gidip tarayicida ileri geri komutlarini ogrenecegiz', () => {
        cy.visit('https://cypress.io/')

        cy.get(':nth-child(5) > .nav-bar-link').click()
        cy.title().should('eq','Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')
        
        cy.go('back')//anasayfaya geri döner
        cy.title().should('eq','JavaScript Component Testing and E2E Testing Framework | Cypress')//back yerine (-) de koyabiliz

        cy.go('forward')//pricing
        cy.title().should('eq',"Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing") // forward yeerine (1) de yazabiliriz 


        cy.go(-1)//anasayfaya geri döner
        cy.title().should('eq','JavaScript Component Testing and E2E Testing Framework | Cypress')//back yerine (-) de koyabiliz

        cy.go(1)//pricing
        cy.title().should('eq',"Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing") // forward yeerine (1) de yazabiliriz 

    });
});