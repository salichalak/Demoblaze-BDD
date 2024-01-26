import TestData from "../data/TestData";

class SignUpModal {
    elements = {
        modal: () => cy.get('#signInModal'),
        usernameInput: () => cy.get('#sign-username'),
        passwordInput: () => cy.get('#sign-password'),
        signUpButton: () => cy.get('button[onclick="register()"]'),
    }

    signUp(username, password) {
        this.elements.modal().click();
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.signUpButton().click();
    }

    assertRegistedUserMessage(message) {
        expect(message).to.contains(TestData.userSignedUpMessage);
    }
}

export default new SignUpModal();