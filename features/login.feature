Feature: Login to the testing site

    Scenario: User logs into the site successfully
        Given I open the testing page
        And I nagivate to the ecommerce login page
        When I login with user credentials
        Then the shopping cart page is visible





