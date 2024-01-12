// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*

{
    cypress.Commands.add('login', ( )=> {  //1.kullanim
        cy.get('#username').type('KullaniciAdi')
        cy.get('#password').type('parola')
        cy.get('#loginBtn').click()

    })

}
//2.kullanim
{
    cypress.Commands.add('login', ( username,password )=> {
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('#loginBtn').click()

    })

}

*/
/*
   Cypress.Commands.add('login',() => {
    cy.visit('https://automationexercise.com/login')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('input[data-qa="login-email"]').type('deneme@abs.com')
    cy.get('input[data-qa="login-password"]').type('denemeParola')
    cy.get('[data-qa="login-button"]').click()
})
*/
 import 'cypress-file-upload'

import customCommandsLogin from "../pageObjeckModel/customCommandsLogin"
import AmazonHomepage from '../pageObjeckModel/AmazonHomepage';



require('cypress-delete-downloads-folder').addCustomCommand();

Cypress.Commands.add('login',(username,password) => {
    
  customCommandsLogin.usernameField.type(username)
    customCommandsLogin.passwordField .type(password)
   customCommandsLogin.loginBtn.click()
})

//With Session
Cypress.Commands.add('loginWithSession',(username,password)=>{
    cy.session([username,password],()=>{

    cy.visit('https://react-redux.realworld.io/')
    cy.contains('Sign in').click()
    cy.get(':nth-child(1) > .form-control').type(username)
  
    cy.get(':nth-child(2) > .form-control').type(password)
      // cy.get(':nth-child(2) > .form-control').type(`${password}{enter}`, { log: false })  bu tarz da olur
    cy.get('.btn').click()
    cy.get('.container > .nav > :nth-child(2) > .nav-link').should('be.visible').and('contain','New Post')

    },
    {
        
            validate: () => {
              cy.getCookie('your-session-cookie').should('exist') //bu da eklenebilir
            },
    }
    )




    })

    /* bu method ile cypress ve  angular birlikte calistirilabilir
    // Example package.json
{
  "scripts": {
    "cy:open": "concurrently \"ng serve\" \"cypress open\"",
    "cy:run": "concurrently \"ng serve\" \"cypress run\""
  },
  "dependencies": { ... },
  "devDependencies": { ... }

  sonra 
  npm run cy:open

Cypress'i ve Angular uygulamamızı aynı anda başlatacak.





not:  birden fazla öğeye erişim sağlamak istediğinizde
// Get all list-item elements on the page
cy.get('li')

/// Get all elements by using a CSS selector.
cy.get('.list-item')

// Find an element using an input name selector.
cy.get('input[name="field-name"]')


}





Not: bu da  DOM   ogeleriyle test 

4// Click on the element
cy.get('button').click()

// Send keys to the element (usually an input)
cy.get('input').type('my text')

// Clear the text in an element (usually an input)
cy.get('input').clear()

// Check the first checkbox on a page
cy.get('[type="checkbox"]').first().check()

// Check a radio button with the value "radio1"
cy.get('[type="radio"]').check('radio1')

// Uncheck the first checkbox that is not disabled
cy.get('[type="checkbox"]').not('[disabled]').first().uncheck()

// Select an option with the text value "my value" from a select list
cy.get('select[name="optionsList"]').select('my value')

// Scroll an element into view
cy.get('#my-id').scrollIntoView()







// retry until we find 3 matching <li.selected>
cy.get('li.selected').should('have.length', 3)
// retry until this input does not have class disabled
cy.get('form').find('input').should('not.have.class', 'disabled')
/ retry until this textarea has the correct value
cy.get('textarea').should('have.value', 'foo bar baz')

    */
