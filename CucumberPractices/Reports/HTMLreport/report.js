$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "Test the login functionality of orangehrm",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test the valid login",
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
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_enters_username_and_password()"
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
});