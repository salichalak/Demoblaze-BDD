const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    supportFile: "cypress/support/index.js",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    baseUrl: "https://www.demoblaze.com",
    specPattern: "cypress/e2e/*.feature"
  },
});