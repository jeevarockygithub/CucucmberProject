Feature: Test the login functionality of orangehrm

Scenario: Test the valid login
Given user is on login page
When user enters username and password
And Click on login button
Then user should navigates to home page

#Scenario: Test the valid login1
#
#Given user is on login page
#When user enters username and password
#And Click on login button
#Then user should navigates to home page