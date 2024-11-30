Feature: Shopping cart checkout

    Scenario: Add an item to the shopping cart and checkout
        Given the shopping cart page is visible
        When I add 'Apple iPhone 13, 128GB, Blue' to the shopping cart
        Then I proceed to checkout
        And the shipping details form is visible








