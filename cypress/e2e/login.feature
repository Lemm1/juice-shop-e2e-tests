Feature: Login

  @validUser
  Scenario Outline: User can login to the application
    Given User opens the login page
    When User enters email as "<email>"
    And User enters password as "<password>"
    And User click on the login button
    Then User should see the search page

    Examples: 
      | email              | password |
      | test_user@test.com | test1234 |
