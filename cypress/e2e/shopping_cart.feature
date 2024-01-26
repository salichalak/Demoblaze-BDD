Feature: Shopping Cart workflows - Add, Remove and Purchase product tests

Scenario Outline: Add and Delete product from cart
   Given The user loads the home page
   And Clicks on product "<product>" with price <price>
   When Adds the product to the cart
   Then Success message for product added to cart is displayed
   When The user loads the Cart page
   Then The product is displayed in the cart with correct data
   And Removes the product from the cart
   Then The product is removed from the cart

   Examples:
       | product            | price |
       | Samsung galaxy s6  | 360   |
       | Nokia lumia 1520   | 820   |

Scenario: Purchase a product
    Given The user loads the home page
    And Clicks Sign Up to register
    When Submits the register form
    Given Clicks Log In to login to the account
    And Submits the login form
    Then The user is logged in
    And Clicks on product "Samsung galaxy s6" with price 360
    When Adds the product to the cart
    When The user loads the Cart page
    And Click Place Order to proceed and verifies the total amount to pay
    When Submits the Place Order form
    Then Thank You message for successful purchase is displayed with user data
    And Click OK to complete and the user is redirected to the home page