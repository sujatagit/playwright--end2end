const fs = require('fs');
const { expect } = require('@playwright/test');

exports.Base = class Base {

    /**
     * [navigateFromMenu description]
     * this will click the emcommerce option in the menu and open the pager
     * @return  {[page navigation]}  
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

    /**
     * [this will select the text box in the form and input the data]
     */

    async shippingDetails(detailFormName, dataInput) {

        await page.getByRole('textbox', { name: detailFormName }).pressSequentially(dataInput, { delay: 100 });
        await page.keyboard.press("Enter");


    };
    /**
     * [dropDownSelection]
     *
     * @param   {[drop down]}  countryName  [United States of America]
     *
     * @return  {[string}               [return country selection]
     */
    async dropDownSelection(countryName) {

        await page.locator('#countries_dropdown_menu').selectOption(countryName);
    };

    async clickingButton(buttonName) {

        if (buttonName == 'Submit Order') {

            await page.getByRole('button', { name: buttonName }).click();

        }

        if (buttonName == 'Home') {

            await page
                .getByRole('listitem')
                .filter({ hasText: 'Home' })
                .click();

        }

    };

    async openFromMenu(menuName) {

        switch (menuName) {

            case 'Visual testing':
                let visualPagelink = page.locator('a#visual');
                await expect(visualPagelink).toBeVisible();
                await visualPagelink.click();
                await expect(page.getByRole('heading', { name: 'GIF page' })).toBeVisible();
                break;

            case 'Dropdown':
                let dropDownLink = page.locator('a#forms');
                await expect(dropDownLink).toBeVisible();
                await dropDownLink.click();
                await expect(page.locator('#dropdown-menu')).toBeVisible();
                break;

        }

    };

};