import TestData from "../data/TestData";

class ProductPage {
    elements = {
        addToCartButton: () => cy.get('a[onclick*="addToCart"]'),
        productPriceHeading: () => cy.get('#totalp'),
        productsTable: () => cy.get('table[class*="table-bordered"]'),
        placeOrderButton: () => cy.get('button[data-target="#orderModal"]')
    }

    assertProductAddedToCartMessage(message) {
        expect(message).to.equal(TestData.addedToCartMessage);
    }

    removeProductFromCart(product) {
        cy.contains(product)
        .parent('tr')
        .find('td a')
        .click();
    }

    assertProductIsRemovedFromCart(product) {
        cy.get('body').contains(product).should('not.exist');
    }
}

export default new ProductPage();