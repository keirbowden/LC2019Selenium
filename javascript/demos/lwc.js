var login=require('../modules/login');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

var instance='ldnscall2019-dev-ed.lightning.force.com';

login.login(driver, 'keir.bowden@ldnscall2019.trn', '***********');

driver.get('https://' + instance + '/lightning/n/SearchContacts');
driver.wait(until.elementsLocated(By.name('searchNameInput')), 10000).then (_ => console.log('Found search name input'));

driver.findElement(By.name('searchNameInput')).sendKeys('Sean');
driver.findElement(By.name('searchContacts')).click();

driver.wait(until.elementsLocated(By.xpath('//span[contains(text(), "sean@edge.com")]')), 10000).then (_ => console.log('Found expected result'));
