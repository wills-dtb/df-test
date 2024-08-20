Feature: Direct Ferries - MyAccount Page

    Scenario: Attempt to login with incorrect booking details
        Given I am on the My Account page
        When I enter an incorrect email
        When I enter an incorrect booking reference
        When I click the 'Manage my booking' button
        Then I am presented with a booking reference error message


