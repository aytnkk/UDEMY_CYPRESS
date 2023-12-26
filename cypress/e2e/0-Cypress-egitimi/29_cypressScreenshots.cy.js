describe('Screenshot Kullanimi', () => {
    it('Ekran goruntusu alalim', () => {
        cy.visit('https://www.amazon.de/')
        cy.screenshot()
        //cy.get('#button').screenshot() ornek olarak idsi buton olan bir yerin schreenshotunu cekbeilirsin

    });
});