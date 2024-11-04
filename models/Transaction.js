const { Base } = require('./Base');
const fs = require('fs');
const { expect } = require('@playwright/test');

exports.Transaction = class tRansaction extends Base {

    shoppingItems = '.shop-items';

    async proceedToCheckout() {

        await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
        await expect(page.locator('#phone')).toBeVisible();
    }

};