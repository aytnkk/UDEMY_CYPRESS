describe('Cypress Env Variables', () => {
    it('Ortam degiskenleri kullanim ornegi', () => { // oncesinde config.js'ye url'leri ekledik
        cy.visit(Cypress.env('amazon'))
    });
});