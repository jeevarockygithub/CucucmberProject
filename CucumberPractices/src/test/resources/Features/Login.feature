Feature: Test the login functionality of orangehrm

  Scenario Outline: Test the valid login
    Given user is on login page
    When user enters <username> and <password>
    And Click on login button
    Then user should navigates to home page

    Examples: 
      | username | password  |
      | admin    | admin123  |
      | admin1   | admin1234 |
