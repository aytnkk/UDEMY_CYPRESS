

const { defineConfig } = require("cypress");



const { removeDirectory } = require("cypress-delete-downloads-folder");

module.exports = defineConfig({
  
  viewportHeight:1000,
  viewportWidth:1500,
  
  reporter: 'cypress-mochawesome-reporter',
  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

     require('cypress-mochawesome-reporter/plugin')(on);
    // on('task', { removeDirectory })

    },
    env:{
   // baseUrl:"https://example.cypress.io/"

   hideXhr: true,
   amazon:"https://www.amazon.de",
   google:"https://www.googl.com",
   saucedemo:"https://www.saucedemo.com"
  },
  specPattern:'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  experimentalWebKitSupport:true, // npm i -D playwright-webkit eklemeliyiz terminale // farkli browserlarda test ekmek icin kullanilir

   experimentalRunAllSpecs:true, 
   experimentalStudio:true


},
});
  

