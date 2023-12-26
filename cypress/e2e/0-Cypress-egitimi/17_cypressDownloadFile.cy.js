describe('Cypress Download File', () => {

      
    before(() => {
        cy.on('uncaught:exception',(err,runnable)=> {return false})  //uncaught:exception probleriyle karsilasinca bu codu eklemek yeterli 
    
   //cy.deleteDownloadsFolder()  // bu codu daha once commands.js ve config.js klasorune de birseyler keliyoruzklasorune felaan koyuyoruz
    
    });
    it('Download File', () => {
        cy.visit('https://demoqa.com/upload-download')
        cy.get('#downloadButton').click()
        
    });
});