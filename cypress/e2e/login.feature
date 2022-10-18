Feature: Login

  @validUser
  Scenario Outline: User can login to the application
    Given User opens the login page
    When User enters credentials of existing user
    And User click on the login button
    Then User should be logged in
    And User should see the search page

  Scenario Outline: User cannot login with incorrect password
    Given User opens the login page
    When User enters email of existing user
    And User enters wrong password
    And User click on the login button
    Then User should not be logged in
    And User should see error message

  Scenario Outline: Login button is disabled without both email and password
    Given User opens the login page
    Then Login button should be disabled
    When User enters email
    Then Login button should be disabled
    When User clears email
    And User enters password
    Then Login button should be disabled
