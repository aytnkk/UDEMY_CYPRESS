describe('Shadow ve Find kullanimi', () => {

    before(() => {
        cy.on('uncaught:exception',(err,runnable)=> {return false})  //uncaught:exception probleriyle karsilasinca bu codu eklemek yeterli 
    });
    it('Shadow ve find  kullanimina ornek test  ', () => {
        cy.visit('https://www.me.mercedes-benz.com/passengercars.html')

//burda ccokies cikmiyti videoda ama bende cikmadigi icin ornek yapamamdik
    });
    
});

/*

// Cypress ile bir web sayfasını ziyaret edelim
cy.visit('https://www.example.com')

// Shadow DOM içindeki bir elementi bulmak için `shadow` ve `find` kullanalım
cy.get('my-custom-element').shadow().find('.inner-element') .should('have.text', 'Hello, World!')
```

Yukarıdaki örnekte, `cy.visit` ile bir web sayfasını ziyaret ediyoruz. Ardından, `cy.get` ile `my-custom-element` adında bir elementi seçiyoruz.
 Bu element, Shadow DOM içinde yer alıyor olabilir. `shadow` komutunu kullanarak Shadow DOM'a erişiyoruz. 
 Daha sonra, `find` komutunu kullanarak Shadow DOM içindeki `.inner-element` adında bir alt elementi buluyoruz. 
 Son olarak, `.should` komutuyla bu iç elementin metninin "Hello, World!" olduğunu doğruluyoruz.

Bu örnek, Cypress ile Shadow DOM içindeki elementleri bulmak ve manipüle etmek için `shadow` ve `find` komutlarının nasıl kullanılabileceğini göstermektedir.
*/