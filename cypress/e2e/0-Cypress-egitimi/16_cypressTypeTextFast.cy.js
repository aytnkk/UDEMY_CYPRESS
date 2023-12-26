describe('Hizli text yazimi', () => {
    it('Hizli text yazimi testi', () => {
        cy.visit('https://automationexercise.com/contact_us')
        cy.get('[data-qa="message"]').type('If you have any suggestion areas or improvements, do let us know. We will definitely work on it.')

        
    });
    
    it('Hizli text yazimi testi 2', () => {
        cy.visit('https://automationexercise.com/contact_us')
        cy.get('[data-qa="message"]').type('If you have any suggestion areas or improvements, do let us know. We will definitely work on it.',{delay:0})

        // bu codun en arkasina {delay:0}  bunu yazdiginizda boxa cok daha hizli bir sekilde metni yazacak 
    });
});