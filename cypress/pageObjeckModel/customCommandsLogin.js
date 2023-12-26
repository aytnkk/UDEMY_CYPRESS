class CustomCommandsLogin{
 
  get  usernameField(){
       return cy.get('input[data-qa="login-email"]')

        
    }
   get   passwordField(){
        return   cy.get('input[data-qa="login-password"]')
 
         
     }
    get  loginBtn(){
        return  cy.get('[data-qa="login-button"]')
 
         
     }
}
export default new CustomCommandsLogin()


// bu classi commands.js klasorune import etmemiz gerekir