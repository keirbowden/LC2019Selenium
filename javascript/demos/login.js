var login=require('../modules/login');

var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

login.login(driver, 'keir.bowden@ldnscall2019.trn', '***********');
