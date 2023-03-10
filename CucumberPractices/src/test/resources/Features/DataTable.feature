Feature: Test the login functionality of orangehrm using DataTable
  
  Scenario: Test the valid login using DataTable
    Given user is on login page
    When user enters credentails using DataTable
    | admin    | admin123  |
    And Click on login button
    Then user should navigates to home page
