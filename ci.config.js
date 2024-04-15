const { defineConfig } = require('cypress')

module.exports = defineConfig({
    chromeWebSecurity: false,
    retries: 0,
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    videosFolder: 'tests/cypress/videos',
    screenshotsFolder: 'tests/cypress/screenshots',
    fixturesFolder: 'tests/cypress/fixture',
    e2e: {
        setupNodeEvents(on, config) {
            return require('./tests/cypress/plugins/index.js')(on, config)
        },
        baseUrl: 'https://laravel-cypress.test',
        specPattern: 'tests/cypress/integration/**/*.spec.js',
        supportFile: 'tests/cypress/support/index.js',
        retries: 0
    },
})
