

describe('Cypress Write File', () => {
    it('Write file', () => {
        cy.writeFile('CypressWriteFileDoc/exampleFile.txt','Sifirdan cypress derslerine hosgeldiniz.\n')
        //CypressWriteFileDoc/exampleFile.txt bu uzanti altindaki dosyaya yazdigimiz seyleri yazar

        cy.writeFile('CypressWriteFileDoc/exampleFile.txt','Bu egitim serisinde sifirdan cypress ogreneceksiniz',{flag:'a+'})
        //Not: eger flag eklememzseniz en son yazdirdiginiz yazdirilir
    });


    it('Read file', () => {
        cy.readFile('CypressWriteFileDoc/exampleFile.txt').should('contain','cypress')
       //ykuaridaki it bloginda yazdirdigimizi okumaya yarar
     
    });

    it('Read file 2', () => {
        cy.readFile('CypressWriteFileDoc/exampleFile.txt').then((text)=>{
            expect(text).to.contain('egitim')
        })

});
});