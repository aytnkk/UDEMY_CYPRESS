
//npm i -D cypress-slow-down  yuklemesi yapariz

import { slowCypressDown } from 'cypress-slow-down'
// e2e.js klasorune gidip  import 'cypress-slow-down/commands'  yaziyoruz 

const {faker} =require('@faker-js/faker')

let fakeEmail=faker.internet.email()
let fakePassword=faker.internet.password()
let fakeName=faker.name.firstName()

slowCypressDown() // butun testleri yazilaan saniye icinde calistirip gececek .

describe('Slow Down kullanimi', () => {
    it('Slow Down ile ornek test ', () => {

        cy.slowDown(3000)   // sadece burda kullanmak istersek 

        cy.visit('https://automationexercise.com/login')

        cy.get('[data-qa="login-email"]').type(fakeEmail)
        cy.get('[data-qa="login-password"]').type(fakePassword)
        cy.get('[data-qa="login-button"]').click()
       
       cy.slowDownEnd()  // sonunda da bunu end blogu ile bitirmeliyiz yoksa devam eder  eger it blogiunun icine kullancaksak ,
       // en ustteki slowCypressDown() blogunun icine false yazmaliyiz yoksa hata verir
        
    });
    it('Slow Down ile ornek test 2', () => {
        cy.visit('https://automationexercise.com/login')// beforeach yapabiliriz

        cy.get('[data-qa="login-email"]').type(fakeName) // burda farkli senaryolar ile negatif test yaptik ,hata mesaji aldik
        cy.get('[data-qa="login-password"]').type(fakePassword)
        cy.get('[data-qa="login-button"]').click()

       cy.get('[data-qa="login-email"]').invoke('prop',"validationMessage").should('eq',`Please include an '@' in the email address. '${fakeName}' is missing an '@'.` )

        // son kismi POM model icine koyup da kullanabiliriz .  
    });
});