describe('XHR testi', () => {  //api gibi dusunebiliriz
    it('cy.request Kullanimi', () => {
        
        cy.request('https://jsonplaceholder.cypress.io/comments').should((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
        })

    });
    
    it('cy.request Kullanimi 2', () => {
        cy.request({
            url:'https://jsonplaceholder.cypress.io/comments',
            method:'GET'
        
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
        })

    });
    it('cy.request Kullanimii 3', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments').its('headers').its('content-type')
        .should('include','application/json')
        
        

    });
    it('cy.intercept kullanimi', () => { // burda herhangi bir request gondermeyiz , basit click islemlerini yapariz

        cy.intercept('GET','url gireceksiniz').as('abc')
        cy.visit('url girip')
        cy.get('#loginbutton').click()
        cy.get('#username').type('deneme')
        cy.get('#password').type('test')
        cy.get('#btn').click()

    });
});


//XHR leri gizlemek icin iki yontem var 1.si e2e wicinde .
// 2.si terminale npm i cypress-plugin-xhr-toggle  yazip br plugin yukluyoruz
// sonr ae2e klasorune import ediyoruz : import 'cypress-plugin-xhr-toggle'
// sonra cypress.config.js ye  env:{hideXhr:true }   yazariz