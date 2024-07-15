Feature: A route check on the German site

    Scenario: 1 - German site - I search for a route and get taken to the right quote page 
        Given I am on the homepage
        And I have selected route 'Amalfi - Neapel'
        And I click Search on the dealfinder
        And I wait for quotes to load
        Then I am viewing route from 'Amalfi' to 'Neapel'

    Scenario: 2 - German site - I search for a route and get taken to the right quote page 
        Given I am on the homepage
        And I have selected route 'Neapel - Sorrent'
        And I click Search on the dealfinder
        And I wait for quotes to load
        Then I am viewing route from 'Neapel' to 'Sorrent'