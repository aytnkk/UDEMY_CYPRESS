describe('Alias, Then ,Each ,Wrap', () => {
    it('Kullanim örnegi', () => {

        let itemlength 

        cy.visit('https://shopist.io/')
        cy.get('.navbar-section a').should('be.visible').as('NavbarMenus') //Alias ornek   // as'i takma ad verirken kullaniriz

        cy.get('@NavbarMenus').then(($el)=>{
          itemlength=$el.lenght
          
        }).each(($el,index)=>{ // eger hemen alttaki yolu yaparsaniz buraya index eklemeyin ama ikinci yolu yapacaksaniz indexi buraya ekleyin
            //cy.log($el.text())     //  navbar-section menüsü altindaki her bir menuyu yazdirmasini talep ediyoruz
            // yada 
           cy.get('@NavbarMenus').should('be.visible')
            cy.log('Navbar Menu ' + index  + ":" + $el.text()) // bu sekilde de yazdirabiliz

          
            if ($el.text().includes('Bedding')) {
                cy.wrap($el).click()
                
            }



        })
    });
    
});