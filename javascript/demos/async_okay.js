var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

var instance='ldnscall2019-dev-ed.lightning.force.com';

driver.get('https://login.salesforce.com');
driver.wait(until.elementsLocated(By.name('username')), 10000);
driver.findElement(By.name('username')).sendKeys('keir.bowden@ldnscall2019.trn');

driver.findElement(By.name('username')).getAttribute("value").then(function(text){
    if (text=='keir.bowden@ldnscall2019.trn') {
        console.log('Found text as expected');
    }
    else {
        console.log('Error - expected to find the keys I sent');
    }   
});
