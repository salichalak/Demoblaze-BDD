Feature: User Registration and Login tests

Scenario: Register user and log in to the system
    Given The user loads the home page
    And Clicks Sign Up to register
    When Submits the register form
    Then Success message confirms that user is signed up
    Given Clicks Log In to login to the account
    And Submits the login form
    Then The user is logged in
    Given Click Sign Out to return to anonymous area
    Then The user is logged out