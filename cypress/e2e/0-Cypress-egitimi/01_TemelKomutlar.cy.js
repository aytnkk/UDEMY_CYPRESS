///<reference types="Cypress"/>

describe('Temel Komutlar', () => {
    it('Temel komutlar cy.visit kullanimi ', () => {
        
        cy.visit("/") //base url tanimliysa  
        cy.visit("/commands") //eger bir alt sayfasina gideceksek gidecegimiz alt sayfanin   sadece paht uzantisini slasin yanina eklememiiz yeterli

        cy.visit("https://example.cypress.io/commands") //baseUrl tanimli degilse
        cy.visit({
            url:"https://www.google.com/" ,//base url tanimlanmadiysa
            method:'Get'
        })
    
    
    });

    it('Temel komutlar cy.title kullanimi ', () => {
       cy.title().should('eq',"cypress") //tam esitlik olirsa dogrular
       cy.title().should('include','cypress')//title icersinde cypress geciyorsa dogrular
       cy.title().should('contain','cypress')// title icerisinde cypress geciyorsa dogrular

        
    });

    it('Temel komutlar cy.url ve cy.location kullanimi', () => {
        cy.url().should('eq','https://example.cypress.io/commands')//url tam esitlik olirsa dogrular
        cy.url().should('include','/commands')// url icerisinde commands geciyorsa dogrular

        cy.location('pathname').should('eq','/commans') // gidilen pathi dogrulamis olursunuz
        cy.location('protocol').should('eq','https')// gidilen protocolu dogrular

        cy.location('hostname').should('eq','https://example.cypress.io/') //tam esitlikse dogrular
        cy.location('hostname').should('include','cypress.io') // cypress.io icerirse hostname'i dogrular
        



    });
    it('Temel komutlar cy.get kullanimi', () => {
        cy.get('#button').click()//dogru kullanim
        cy.get('#button').as('deneme')//cy.get('@deneme') button locator i deneme ismiyle kodlayip istedigimiz yerde tekrar kullanabiliriz hatirlatici gibi
        cy.get('a[href="example.cypress.io]')
        cy.get('.dropdown-menu-list')
        cy.get('div.button')
        cy.get('ul li:first')

        
    });
    it('Temel Komutlar cy.log kullanimi', () => {
        cy.log('Temel Komutlar cy.log kullanimi') // teste bir mesaj eklemek icin kullanilir
        
        
    });
   
});
    













/*describe('ilk Test', () => {
    it.skip('Test Case 1', () => {
     
        cy.visit('https://www.google.com')
        cy.wait(3000)
        cy.scrollTo('top')//dogru kullanim
        cy.get('#input-01').scrollIntoView().should('be.visible').click()

        

        
    });
    it('Sauce Demo basarili  Login sayfasi testi', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq',"Swag Labs")

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()



    });
    it('02 Saucedemo basarisiz Login testi', () => {
        cy.visit('https://www.saucedemo.com/')

          cy.get('[data-test="username"]').type('user')//username
          cy.get('[data-test="password"]').type('1234')//paassword
          cy.get('[data-test="login-button"]').click()//click buttonu icin
          cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
    });
    
    
});
*/