const { Base } = require('./Base');
const fs = require('fs');
const { expect } = require('@playwright/test');

exports.Base = class Base {

    /**
     * [navigateFromMenu description]
     * this will click the emcommerce option in the menu and open the pager
     * @return  {[page navigation]}  [ecommerce login page opens]
     */
    async navigateFromMenu() {

        let loginOption = page.locator('a#auth-shop');
        await expect(loginOption).toBeVisible();
        await loginOption.click();
        await expect(page.getByRole('heading', { name: 'Login - Shop' })).toBeVisible();

    };

    /**
     * [Successful login will naviagte to checkout page]
     *
     * @return  {[login page navigation]}  [checkout page]
     */
    async login() {

        const userEmail = page.locator('#email');
        const userPassword = page.locator('#password');

        await userEmail.clear();
        await userEmail.pressSequentially('admin@admin.com', { delay: 100 });

        await userPassword.clear();
        await userPassword.pressSequentially('admin123', { delay: 100 });

        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.getByRole('button', { name: 'PROCEED TO CHECKOUT' })).toBeVisible();

    };

};