export class Homepage{
    navigate(){
        cy.visit('https://cypress.io')
        //eger export yazmadan sacede class yazarsak bu sefer return this;  dememiz lazim. o zamanda objeyi cagirdimiz sayfada .navigate dememiz yterli olur.
    }
    pricingBtn(){
        cy.get(':nth-child(5) > .nav-bar-link').click()
    }
}