const {faker} =require('@faker-js/faker')  // bu codu commands.js klasorune koyupta kullanabiliriz

let fakeEmail=faker.internet.email()
let fakePassword=faker.internet.password()
let fakeName=faker.name.firstName()

describe('Fakers kullanimi', () => {
    it('Fakers ile ornek test ', () => {
        cy.visit('https://automationexercise.com/login')

        cy.get('[data-qa="login-email"]').type(fakeEmail)
        cy.get('[data-qa="login-password"]').type(fakePassword)
        cy.get('[data-qa="login-button"]').click()
       
        
    });
    it('Fakers ile ornek test 2', () => {
        cy.visit('https://automationexercise.com/login')// beforeach yapabiliriz

        cy.get('[data-qa="login-email"]').type(fakeName) // burda farkli senaryolar ile negatif test yaptik ,hata mesaji aldik
        cy.get('[data-qa="login-password"]').type(fakePassword)
        cy.get('[data-qa="login-button"]').click()

       cy.get('[data-qa="login-email"]').invoke('prop',"validationMessage").should('eq',`Please include an '@' in the email address. '${fakeName}' is missing an '@'.` )

        // son kismi POM model icine koyup da kullanabiliriz .  
        // termianalde faker icin install yapmaiz lazim
    });
});