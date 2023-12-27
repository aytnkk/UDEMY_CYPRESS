describe('Trigger kullanimi', () => {
    it('Mousover Kullanimi ', () => { // bir menunun ustune gidince acilan menu 
        cy.visit('https://www.amazon.de')
        cy.get('#nav-link-accountList').trigger('mouseover')// ilgili butonun ustune gelip bekleme islemi 
        //.trigger('mousedown')
       // .trigger('mouseleave')

        cy.get('div#nav-flyout-ya-signin span').click()

    });
    it('Mousover Kullanimi 2 ', () => { // bir menunun ustune gidince acilan menu 
        cy.visit('https://www.amazon.de')
        cy.get('#nav-link-accountList').trigger('mousedown',{button:0})// mouse'in sol kismina tiklamis oluruz
        cy.get('#nav-link-accountList').trigger('mousedown',{button:1})//mousenin ortayi tiklamasi icin
        cy.get('#nav-link-accountList').trigger('mousedown',{button:2}) //mouse'in sag tiklamasi icin
        cy.get('div#nav-flyout-ya-signin span').click()
    });
});