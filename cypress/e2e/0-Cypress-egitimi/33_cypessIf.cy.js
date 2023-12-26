//kurulum icin :  npm i -D cypress-if
//support e2e klasorune: import 'cypress-if'
//Not :xpath ile kullanilmaz
describe('Cypress If Kullanimi', () => {
   
    it('IF kullanimina ornek ', () => {
        cy.on('uncaught:exception',(err,runnable)=> {return false}) 

        cy.visit('https://demoqa.com/text-box')
        cy.get('#userName').if('visible').type('deneme bir isim').then(()=>{
            cy.get('#userEmail').type('deneme0@gmail.com')
        }).else().log('Cypress if kullanimi basarili').then(()=>{
            cy.get('#currentAddress').should('be.visible').type('deneme bir adres girilsin')
        }).finally().log('deneme bir adres girilsin yazildi ve test bitti') // en son ne yazmak istiyorsak onu yazabiliriz finally ile
        // .should('have.text')// bunu da ekleyebilirsin finally 'e

    });
/*
    cy.getCookie().then((cookie)=>{ // cookiesöleri bu sekilde yazmak yerine yukardaki gibi yazabiliiz
        if(cookie){
            //conditior girildi
        }else{
            //test biter 
        }
    })
    */
});