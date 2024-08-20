const { BeforeAll, Before, AfterAll, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
// const fs = require('fs');
const path = require('path');

BeforeAll(async function () {

    browser = await chromium.launch({
        headless: false,
        // timeout: timeout
    })
    const context = await browser.newContext({
        // viewport: { width: 1920, height: 800 },
        // viewport: { width: 1536, height: 960 },
        // acceptDownloads: true
    });
    await context.setDefaultTimeout(timeout);
    page = await context.newPage();
});

Before(async function (scenario) {
    // Print feature names while tests are running
    if (featureName != scenario.gherkinDocument.feature.name) {
        featureName = scenario.gherkinDocument.feature.name
        console.log(`\n ${featureName}`);
    }
});

AfterAll(async function () {

    if (typeof page !== 'undefined') {
        await page.close();
    }

    if (typeof context !== 'undefined') {
        await context.close();
    }
    if (typeof browser !== 'undefined') {
        await browser.close();
    }

});

After(async function () {

    console.log('Finished running tests')


});