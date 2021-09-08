const { Key } = require('selenium-webdriver');
var BasePage = require('./basepage');

class InvalidLoginPage extends BasePage {

    username = 'user-name';
    password = 'password';
    loginBtn = 'login-button';
    productTitle = "//span[@class='title']";
    errorMsg = "//h3[contains(text(),'Epic sadface: Username and password do not match a')]";

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
module.exports = new InvalidLoginPage();