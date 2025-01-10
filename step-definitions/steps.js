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

Then('the shopping cart page is visible', async function () {

    await expect(page.getByText('SHOPPING CART')).toBeVisible();

});

When('I add {string} to the shopping cart', async function (iphoneType) {

    await expect(page.getByText(iphoneType)).toBeVisible();
    await page.getByRole('button', { name: 'ADD TO CART' }).nth(4).click();

});

Then('I proceed to checkout', async function () {

    await tRansaction.proceedToCheckout();

});


Then('the shipping details form is visible', async function () {

    await expect(page.locator('#shipping-address')).toBeVisible();

});

When('I fill out the shipping form in {string} {string}', async function (detailFormName, dataInput) {

    await tRansaction.shippingDetails(detailFormName, dataInput);

});

When('I select {string} in the country box', async function (countryName) {

    await tRansaction.dropDownSelection(countryName);

});

Then('I click the {string} button', async function (buttonName) {

    await tRansaction.clickingButton(buttonName);

});

Then('I receive a successful order placed message', async function () {

    await expect(page.locator('#message')).toBeVisible();
    let homeButton = page.locator(`#navbarSupportedContent:has-text('Home')`);
    await homeButton.waitFor();

});

Then('I navigate to the home page', async function () {

    await expect(page.getByText('Welcome!')).toBeVisible();

});

Then('I open the {string} page', async function (menuName) {

    await tRansaction.openFromMenu(menuName);

});

Then('I expect the gif to be visible', async function () {

    // await expect(page.toHaveScreenshot('visual test.png'));
    await expect(page.locator(`#dynamic-gif`)).toBeVisible();

});





