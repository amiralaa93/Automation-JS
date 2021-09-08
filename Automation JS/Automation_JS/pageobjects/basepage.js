var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const assert = require('assert');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor(){
        global.driver = driver;
    }

    go_to_url(){
        driver.get('https://www.saucedemo.com/');
        driver.manage().window().maximize();
    }

    clickById(id){
        driver.findElement(By.id(id)).click();
    }

    clickByXpath(xpath){
        driver.findElement(By.xpath(xpath)).click();
    }

    enterTextById(id, text){
        driver.findElement(By.id(id)).sendKeys(text);
    }

    clickByText(text){
        driver.findElement(By.linkText(text)).click();
    }

    close(){
        driver.quit();
    }

    waits(){
        driver.manage().setTimeouts( { implicit: 10000 } );
    }
    
    assertionsByXpath(xpath){
        let productText = driver.findElement(By.xpath(xpath)).getText().then(function(value){
            return value;
        });
        console.log(productText);
        //assert.strictEqual(productText,expected);
    }

    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }
}

module.exports = BasePage;