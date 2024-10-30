const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
// import { test, expect } from "@playwright/test";
const { expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { Base } = require('../models/Base');


Given('I open the testing page', { timeout: 20000 }, async function () {

    await page.goto('https://qa-practice.netlify.app/');
    await page.waitForLoadState();

});

Then('I nagivate to the ecommerce login page', async function () {

    await tRansaction.navigateFromMenu();

});

When('I login with user credentials', async function () {

    await tRansaction.login();

});

Then('the shopping page is visible', async function () {

    let shoppingItems = page.locator('.shop-items');
    await expect(shoppingItems).toBeVisible();

});

