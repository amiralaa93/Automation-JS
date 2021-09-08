const { Key } = require('selenium-webdriver');
var BasePage = require('./basepage');

class validLoginPage extends BasePage {

    username = 'user-name';
    password = 'password';
    loginBtn = 'login-button';
    productTitle = "//span[@class='title']";

    enter_username(UsernameText) {
        this.enterTextById(this.username, UsernameText);
    }

    enter_password(passwordText) {
        this.enterTextById(this.password, passwordText);
    }

    click_login_btn() {
        this.clickById(this.loginBtn);
    }

    click_addCart_btn() {
        this.clickByXpath(this.add_cartBtn);
    }
}
module.exports = new validLoginPage();