import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import PlaceOrderModal from "../../pages/PlaceOrderModal";

let productName;
let producPrice;

And('Clicks on product {string} with price {int}', (product, price) => {
    productName = product;
    producPrice = price;
    HomePage.selectSpecificProduct(productName);
});

When('Adds the product to the cart', () => {
    ProductPage.elements.addToCartButton().click();
});

Then('Success message for product added to cart is displayed', () => {
    cy.on('window:alert',(productAddedMessage) => {
        ProductPage.assertProductAddedToCartMessage(productAddedMessage);
    });
});

When('The user loads the Cart page', () => {
    HomePage.elements.cartButton().click();
    cy.url().should('include', '/cart.html');
    cy.get('h2').should('contain.text', 'Products');
});

Then('The product is displayed in the cart with correct data', () => {
    cy.wait(3000);
    ProductPage.elements.productsTable().should('be.visible');
    ProductPage.elements.productPriceHeading().should('have.text', producPrice);
    cy.get('.table tbody').contains('tr', productName).should('exist');
});

And('Removes the product from the cart', () => {
    ProductPage.removeProductFromCart(productName);
});

Then('The product is removed from the cart', () => {
    ProductPage.assertProductIsRemovedFromCart(productName);
});

And('Click Place Order to proceed and verifies the total amount to pay', () => {
    ProductPage.elements.placeOrderButton().click();
    cy.wait(2500);
    PlaceOrderModal.elements.totalPriceLabel().should('have.text', `Total: ${producPrice}`)
});

When('Submits the Place Order form', () => {
    PlaceOrderModal.submitPlaceOrderForm();
});

Then('Thank You message for successful purchase is displayed with user data', () => {
    PlaceOrderModal.elements.thankYouMessageHeading().should('contain', 'Thank you for your purchase!');
    PlaceOrderModal.assertOrderData(producPrice);
});

And('Click OK to complete and the user is redirected to the home page', () => {
    cy.wait(1500);
    PlaceOrderModal.elements.confirmButton().click();
    cy.url().should('include', '/index.html');
});