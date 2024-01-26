class LoginModal {
    elements = {
        modal: () => cy.get('#logInModal'),
        usernameInput: () => cy.get('#loginusername'),
        passwordInput: () => cy.get('#loginpassword'),
        loginButton: () => cy.get('button[onclick="logIn()"]'),
    }

    logIn(username, password) {
        this.elements.modal().click();
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.loginButton().click();
    }
}

export default new LoginModal();