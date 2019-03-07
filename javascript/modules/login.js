var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

function login(driver, uname, pwd)
{
    console.log('Opening Salesforce');
    driver.get('https://login.salesforce.com');
    driver.wait(until.elementsLocated(By.name('username')), 10000).then (_ => console.log('About to login'));
    driver.findElement(By.name('username')).sendKeys(uname);
    driver.findElement(By.name('pw')).sendKeys(pwd);
    driver.findElement(By.name('Login')).click();
}

exports.login=login;
