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
    cy.get('.btn').click()
    cy.get('.container > .nav > :nth-child(2) > .nav-link').should('be.visible').and('contain','New Post')

    })




    })
    
