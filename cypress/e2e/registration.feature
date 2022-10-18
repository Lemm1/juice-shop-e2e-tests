Feature: Registration

  Scenario Outline: User can register in the application
    Given User opens the registration page
    When User enters valid email
    And User enters valid password
    And User repeats password
    And User selects security question
    And User enters security question answer
    And User click on the register button
    Then User should see the login page
    And User should see a success flash message

  Scenario Outline: Error is displayed when invalid email entered
    Given User opens the registration page
    When User enters invalid email
    Then User should see email validation error

  Scenario Outline: Error is displayed when weak password entered
    Given User opens the registration page
    When User enters weak password
    Then User should see password validation error

  Scenario Outline: Error is displayed when password and passowrd repeat don't match
    Given User opens the registration page
    When User enters valid password
    And User repeats wrong password
    Then User should see passwords don't match error
