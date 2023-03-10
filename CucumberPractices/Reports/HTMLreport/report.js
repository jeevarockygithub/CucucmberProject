$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/DataTable.feature");
formatter.feature({
  "name": "Test the login functionality of orangehrm using DataTable",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test the valid login using DataTable",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters credentails using DataTable",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_enters_credentails_using_DataTable(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigates to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_should_navigates_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "Test the login functionality of orangehrm",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test the valid login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should navigates to home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "admin",
        "admin123"
      ]
    },
    {
      "cells": [
        "admin1",
        "admin1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test the valid login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin and admin123",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_enters_something_and_something(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigates to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_should_navigates_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test the valid login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin1 and admin1234",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_enters_something_and_something(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigates to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_should_navigates_to_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: //h6[normalize-space()\u003d\u0027Dashboard\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.8.0\u0027, revision: \u0027267030adea\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.stepDefinition.LoginSteps.user_should_navigates_to_home_page(LoginSteps.java:51)\r\n\tat ✽.user should navigates to home page(file:///C:/Users/hp/git/CucumberProject/CucumberPractices/src/test/resources/Features/Login.feature:7)\r\n",
  "status": "failed"
});
});