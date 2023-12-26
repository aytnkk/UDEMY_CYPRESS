describe('Cypress Test Isolation', {testIsolation:false},() => { //
// testisolation özel senaryolar için veya önceki testlerin durumuyla etkileşime ihtiyaç duyan durumlar için false olarak ayarlanabilir.
    
    before(() => {
        cy.on('uncaught:exception',(err,runnable)=> {return false})  //uncaught:exception probleriyle karsilasinca bu codu eklemek yeterli 
    });
    it('Dosya yukleme 1', () => {
        cy.visit('https://www.qrcode-monkey.com/')

        cy.get('div:nth-child(3) > div.pane-header > h3').click()
       

  // daha sonra terminale  npm install --save-dev-file-upload yaziyoruz
  // support/commans.js dosyasina gidip   import   'cypress-file-upload' olarak import ediyoruz

        
// "photo.jpg"  veya herhangi bir adla fixture classinin altina file acmamiz lazim yani yukleyecegimiz seyi direkt dosyalardan surukleyip getirip birakabiliriz
        cy.get('.logo-preview > .loading-screen').attachFile({filePath : "photo.jpg"},{subjectType:'drag-n-drop'})
    });


    it('Dosya yukleme 2', () => {   // bu yol olasi bir fileUpload sikintisinda kullanilabilir
        cy.visit('https://www.qrcode-monkey.com/')

        cy.get('div:nth-child(3) > div.pane-header > h3').click()

        const fileName='wise1.jpg'
        cy.fixture('wise1.jpg').then(Cypress.Blob.base64StringToBlob)//convert islemi icin
        .then((fileContent)=> {
            cy.get('.logo-preview > .loading-screen').attachFile(
                {fileContent,fileName,mimeType:'image/**'},{subjectType:'drag-n-drop'}
            )
        })

       
});
});