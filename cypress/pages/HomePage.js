class HomePage {
    elements = {
        cartButton: () => cy.get('#cartur'),
        loginButton: () => cy.get('#login2'),
        signUpButton: () => cy.get('#signin2'),
        logOutButton: () => cy.get('#logout2'),
        welcomeUserAnchor: () => cy.get('#nameofuser')
    }

    assertUserIsLoggedIn(username) {
        cy.wait(1500);
        expect(this.elements.welcomeUserAnchor().should('include.text', `Welcome ${username}`));
        expect(this.elements.logOutButton().should('be.visible'));
    }

    assertUserIsLoggedOut() {
        expect(this.elements.loginButton().should('be.visible'));
        expect(this.elements.signUpButton().should('be.visible'));
        expect(this.elements.logOutButton().should('not.be.visible'));
    }

    selectSpecificProduct(product) {
        cy.get('div[class="card-block"] > h4 > a')
        .contains(product)
        .click();
    }
}

export default new HomePage();