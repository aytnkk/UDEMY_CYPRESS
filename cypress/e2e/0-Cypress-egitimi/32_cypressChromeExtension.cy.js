
// bu da ilgili sayfada recorder ozelligi ve plugin i ile yapildi //npx cypress run --spec "path/to/your/saved/scenario.js"
describe('Chrome extensions', () => {
    it('extension 1', () => {
        cy.visit('https://www.shopist.io/department/chairs');

cy.url().should('contains', 'https://www.shopist.io/department/chairs');
cy.url().should('contains', 'https://www.shopist.io/');
cy.url().should('contains', 'https://www.shopist.io/department/chairs');
cy.url().should('contains', 'https://www.shopist.io/profile');
cy.url().should('contains', 'https://www.shopist.io/cart');
cy.get('.product:nth-child(1) .operator:nth-child(3) > div').click();
cy.get('.checkout').click();
cy.get('.modal-button:nth-child(2)').click();

    });
it('', () => {
    cy.visit('https://www.shopist.io/department/chairs');
cy.url().should('contains', 'https://www.shopist.io/department/chairs');
cy.url().should('contains', 'https://www.shopist.io/');
cy.url().should('contains', 'https://www.shopist.io/department/chairs');
cy.url().should('contains', 'https://www.shopist.io/department/chairs');
cy.url().should('contains', 'https://www.shopist.io/cart');
cy.get('.product:nth-child(1) .operator:nth-child(3) > div').click();
cy.get('.checkout').click();
cy.get('.modal-button:nth-child(2)').click();
cy.visit('https://www.shopist.io/cart');
cy.get('.product:nth-child(1) > .product-picture').click();
cy.get('.product:nth-child(2) > .product-picture').click();
cy.get('.remove-button').click();
cy.get('.checkout').click();
cy.get('.checkout-title').click();
cy.get('.checkout-title').click();
cy.get('.checkout > div > div:nth-child(2)').click();
cy.url().should('contains', 'https://www.shopist.io/');

});
    
});