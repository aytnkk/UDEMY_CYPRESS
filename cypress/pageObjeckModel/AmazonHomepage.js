 class AmazonHomepage{

    navigate(){
        cy.visit('https://www.amazon.de/')

    }
    get amazonAnmelde(){
       return cy.get('#nav-link-accountList').trigger('mouseover')
    }
    get anmeldeBtton(){
        return cy.get('div#nav-flyout-ya-signin span').click()
    }

    get amaznEmail(){
        return cy.get('#ap_email').type('aydemkk7665@gmail.com')
    }
get weiterClick(){
    return cy.get('.a-button-inner > #continue').click()
}
}
export default new AmazonHomepage()