Feature: Direct Ferries homepages

    Scenario: Check UK homepage
        Given I am on the 'https://www.directferries.co.uk?dealfinderVersion=A' homepage
        Then I see popular operators
        Then I see top destinations
        Then I see latest offers

    Scenario: Check IT homepage
        Given I am on the 'https://www.directferries.it?dealfinderVersion=A' homepage
        Then I see popular operators
        Then I see top destinations
        Then I see latest offers

    Scenario: Check DE homepage
        Given I am on the 'https://www.directferries.de?dealfinderVersion=A' homepage
        Then I see popular operators
        Then I see top destinations
        Then I see latest offers