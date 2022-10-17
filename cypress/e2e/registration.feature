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
