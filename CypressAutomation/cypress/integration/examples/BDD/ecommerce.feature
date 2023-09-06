Feature: End to end Ecommerce validation

    application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open newlook Page
    When I click on Signin link
    Then I should be on log in page
    When I fill login details
    Then I click on submit button
    Then I validate i am on Myaccount page
    When I search for the product
    Then I select the 1st first product from the search result
    When I click on Add to basket
    Then I click on checkout button
    Then user pay the amount by pay by card option
   




