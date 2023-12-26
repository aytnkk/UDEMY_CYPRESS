 class HomePageSecond{
    navigate(){
        cy.visit('https://cypress.io')
        //eger export yazmadan sacede class yazarsak bu sefer return this;  dememiz lazim. o zamanda objeyi cagirdimiz sayfada .navigate dememiz yterli olur.

    }
   get pricingBttn(){
       return  cy.get(':nth-child(5) > .nav-bar-link').click()

        
    }
}
export default new HomePageSecond()