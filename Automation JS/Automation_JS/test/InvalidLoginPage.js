const InvalidLoginPage = require('../pageobjects/InvalidLoginPage');
const {By} = require('selenium-webdriver');
const assert = require('assert');
var should = require('chai').should();

describe('Adjust Automation Task', function () {
    this.timeout(50000);
    beforeEach(function () {
        //Actions performed before test
        InvalidLoginPage.go_to_url();

    });

    afterEach(function () {
        //Actions to be performed after test
        InvalidLoginPage.close()
    });

    it('Invalid Login Scenario', function () {
        //Test steps
        InvalidLoginPage.enter_username('standard');
        InvalidLoginPage.sleep(5000);
        InvalidLoginPage.enter_password('secret_sauce');
        InvalidLoginPage.sleep(5000);
        InvalidLoginPage.click_login_btn();
        InvalidLoginPage.sleep(10000);
    })
})