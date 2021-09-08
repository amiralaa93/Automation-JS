const validLoginPage = require('../pageobjects/validLoginPage');
const {By} = require('selenium-webdriver');
const assert = require('assert');
var should = require('chai').should();

describe('Adjust Automation Task', function () {
    this.timeout(50000);
    beforeEach(function () {
        //Actions performed before test
        validLoginPage.go_to_url();

    });

    afterEach(function () {
        //Actions to be performed after test
        validLoginPage.close();
    });

    it('Valid Login Scenario', function () {
        //Test steps
        validLoginPage.enter_username('standard_user');
        validLoginPage.sleep(5000);
        validLoginPage.enter_password('secret_sauce');
        validLoginPage.sleep(5000);
        validLoginPage.click_login_btn();
        validLoginPage.sleep(10000);
    })
})