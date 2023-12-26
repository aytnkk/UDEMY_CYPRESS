const { beforeEach } = require("mocha");

describe('Custom Commands', () => {  //POM deki customCommandLogin.js klasorunden aliyoruz bilgileri
    beforeEach(() => {
        cy.visit('https://automationexercise.com/login')
    });
    it('Custom Commands kullanim ornek invalid username valid password', () => {
     
        cy.login('deneme@abc.com','denemeParola')
    });
    it('Custom Commands kullanim ornek ivalid username invalid password', () => {
     
        cy.login('deneme@gmail.com','denemeParola2') // burdaki datalari fixture kullanrak artik boyle yazmaya gerek duymayaacagiz
    });
});