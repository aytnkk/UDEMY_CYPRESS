describe('Web Scrapping', () => {  // urunleri adlari veya rakamlariyla yazsirabiliriz
    it('write file to txt for products ', () => {

        cy.step('Shopist.io sandalyeler sayfasina gidiyor')// bu yorum yapmak icin kullanilir // bu isaret gibi yani
        
        cy.visit('https://www.shopist.io/department/chairs')
        cy.get('.description').as('chairsPrice').its('length').should('eq',9)

      const results=[];
      cy.step('sonuclari logluyoruz')

      cy.get('@chairsPrice').each(($el,index)=>{
        cy.log("Results:" + index + " " + $el.text())

        results.push($el.text())
      }).then(()=>{
    cy.writeFile('CypressWriteFileDoc/chairsPrice.txt',results)
      })

    });
});