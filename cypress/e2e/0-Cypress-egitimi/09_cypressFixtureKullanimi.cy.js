describe('Cypress Fixture Kullanimi', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/login')
    });
    it('Cypress Fixture Data  kullanim ornek invalid username valid password', () => {
        cy.fixture("loginData").as('credentials')  ////fixture  klasorunun icindeki    login.data.js klasorune bak . Biz login.Data.json icindeki verilere kendimiz yeni bir ad olarak  creditantiel adi veriyoruz  ama onceki degil
        cy.get('@credentials').then((data)=>{
            cy.login(data.invalidUsername,data.validPassword)

        })
     
        
    });
    it('Cypress Fixture Data  kullanim ornek ivalid username invalid password', () => {
        cy.fixture("loginData").as('credentials')
        cy.get('@credentials').then((data)=>{
            cy.login(data.validUsername,data.invalidPassword)

        })
     
       
    });
});
//fixture  klasorunun icindeki    login.data.js klasorune bak