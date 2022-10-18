Feature: Login

  @validUser
  Scenario Outline: User can login to the application
    Given User opens the login page
    When User enters valid credentials
    And User click on the login button
    Then User should be logged in
    And User should see the search page
