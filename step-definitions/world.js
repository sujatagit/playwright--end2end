const { setWorldConstructor, World } = require('@cucumber/cucumber');
var { setDefaultTimeout } = require('@cucumber/cucumber');

global.timeout = 30 * 1000;
global.moderateTimeout = 3 * 60 * 1000;
global.longTimeout = 30 * 60 * 1000;
global.visible = '';
global.length = '';
global.content = '';
global.displayIndex = -1;
global.featureName = '';
global.sideNav = '';
global.currentLink = '';

global.valueSet = false;
global.timestamp = '';


class CustomWorld extends World {

    constructor(options) {
        super(options)
        this.variable = 1;
    }

    test() {
        return this.variable;
    }
}

setWorldConstructor(CustomWorld);