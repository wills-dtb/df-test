Feature: Route checks on the German site
    Background:
        Given I am on the Homepage

    Scenario: 1 - German site - I search for a route and get taken to the right quote page 
        And I have selected route 'Amalfi - Neapel'
        And I click Search on the dealfinder
        And I wait for quotes to load
        Then I am viewing route from 'Amalfi' to 'Neapel'

    Scenario: 2 - German site - I search for a route and get taken to the right quote page 
        And I have selected route 'Neapel - Sorrent'
        And I click Search on the dealfinder
        And I wait for quotes to load
        Then I am viewing route from 'Neapel' to 'Sorrent'

    Scenario: 3 - German site - I search for a split route and get taken to the right quote page 
        And I have selected route 'Sorrent - Ischia'
        And I click different details for return trip
        And I have selected return route 'Amalfi - Neapel'
        And I click Search on the dealfinder 
        And I wait for quotes to load
        Then I am viewing route from 'Sorrent' to 'Ischia'
        And I am viewing route from 'Amalfi' to 'Neapel'
