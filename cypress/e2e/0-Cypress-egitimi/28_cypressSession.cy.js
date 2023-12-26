describe('Cypress Session kullanimi', () => {
     //commands.js'A gidiyoruz
    beforeEach(()=>{
        const username='deneme0@gmail.com'
        const password='4514226'
        cy.loginWithSession(username,password)

    });

    const {faker} =require('@faker-js/faker')
    let ramdomTitle = faker.random.words()
    it('Siteye git ve bir makale ekle', () => {
        
        cy.visit('https://react-redux.realworld.io/')
       cy.contains('New Post').click()
       cy.get(':nth-child(1) > .form-control').type(ramdomTitle)
       cy.get(':nth-child(2) > .form-control').type('herseyde vardir bir hayir')
       cy.get(':nth-child(3) > .form-control').type('Cypress ogren ve projeyi basariyla tamamla ')
       cy.get(':nth-child(4) > .form-control').type('hadi bakalim')
       cy.get('.btn').click()
       cy.contains('Edit Article').should('be.visible')
      

    });
    it('Global Feeds\e git', () => {
        cy.visit('https://react-redux.realworld.io/')
        cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .preview-link > h1').should('be.visible').and('contain',ramdomTitle)

    });
});