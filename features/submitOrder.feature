Feature: Submit order

    Scenario: Fill out the shopping order form
        Given the shipping details form is visible
        When I fill out the shipping form in "<detailFormName>" "<dataInput>"

        Examples:
            | detailFormName     | dataInput   |
            | Enter phone number | 6085580210  |
            | street             | New Street  |
            | London             | New Orleans |

    Scenario: Submit the shipping order form
        When I select "United States of America" in the country box
        And I click the "Submit Order" button
        Then I receive a successful order placed message

    Scenario: User go back to the home page
        Given I receive a successful order placed message
        When I click the "Home" button
        Then I navigate to the home page
