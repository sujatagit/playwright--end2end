const { setWorldConstructor, World } = require('@cucumber/cucumber');
var { setDefaultTimeout } = require('@cucumber/cucumber');

global.timeout = 60 * 1000;
global.moderateTimeout = 3 * 60 * 1000;
global.longTimeout = 30 * 60 * 1000;
global.visible = '';
global.length = '';
global.content = '';

global.timestamp = '';
global.branch = '';
global.commit = '';
global.featureName = '';

global.myArgs = process.argv;

const { Transaction } = require('../models/Transaction');

tRansaction = new Transaction();


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