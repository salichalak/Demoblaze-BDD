import TestData from "../data/TestData";

class PlaceOrderModal {
    elements = {
        modal: () => cy.get('#orderModal'),
        nameInput: () => cy.get('#name'),
        countryInput: () => cy.get('#country'),
        cityInput: () => cy.get('#city'),
        creditCardInput: () => cy.get('#card'),
        monthInput: () => cy.get('#month'),
        yearInput: () => cy.get('#year'),
        purchaseButton: () => cy.get('button[onclick="purchaseOrder()"]'),
        totalPriceLabel: () => cy.get('#totalm'),
        thankYouMessageHeading: () => cy.get('div[data-animation="pop"]>h2'),
        orderDataParagraph: () => cy.get('div[data-animation="pop"]>p'),
        confirmButton: () => cy.get('button[class="confirm btn btn-lg btn-primary"]')
    }

    submitPlaceOrderForm() {
        const userData = TestData.userPaymentData;

        this.elements.nameInput().type(userData.name);
        this.elements.countryInput().type(userData.country);
        this.elements.cityInput().type(userData.city);
        this.elements.creditCardInput().type(userData.creditCard);
        this.elements.monthInput().type(userData.month);
        this.elements.yearInput().type(userData.year);

        this.elements.purchaseButton().click();
    }

    assertOrderData(productPrice) {
        this.elements.orderDataParagraph()
        .should('contain', `Amount: ${productPrice} USD`)
        .should('contain', `Card Number: ${TestData.userPaymentData.creditCard}`)
        .should('contain', `Name: ${TestData.userPaymentData.name}`);
    }
}

export default new PlaceOrderModal();