const { Base } = require('./Base');
const fs = require('fs');
const { expect } = require('@playwright/test');

exports.Transaction = class tRansaction extends Base {

    shoppingItems = '.shop-items';

    /**
     * Clicking the proceed button will navigate to the next page
     *
     * @return {page}  [shopping deatils page]
     */
    async proceedToCheckout() {

        await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
        await expect(page.getByText('Shipping Details')).toBeVisible();

    };

};