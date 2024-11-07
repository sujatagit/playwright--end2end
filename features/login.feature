Feature: Login to the testing site

    Scenario: User logs into the site successfully
        Given I open the testing page
        And I nagivate to the ecommerce login page
        When I login with user credentials
        Then the shopping page is visible

    Scenario: Add an item to the shopping cart and checkout
        Given the shopping page is visible
        When I add 'Apple iPhone 13, 128GB, Blue' to the shopping cart
        Then I proceed to checkout
