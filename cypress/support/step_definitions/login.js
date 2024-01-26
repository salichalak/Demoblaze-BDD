import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pages/HomePage.js";
import SignUpModal from "../../pages/SignUpModal.js";
import LoginModal from "../../pages/LoginModal.js";
import TestData from "../../data/TestData.js"

let username = TestData.username;
let password = TestData.password;

Given('The user loads the home page', () => {
    cy.visit('/');
});

And('Clicks Sign Up to register', () => {
    HomePage.elements.signUpButton().click();
    cy.wait(2000);
});

When('Submits the register form', () => {
    SignUpModal.signUp(username, password);
});

Then('Success message confirms that user is signed up', () => {
    cy.wait(2000);
    cy.on('window:alert',(userRegisteredMessage) => {
        SignUpModal.assertRegistedUserMessage(userRegisteredMessage);
    });
});

Given('Clicks Log In to login to the account', () => {
    HomePage.elements.loginButton().click();
    cy.wait(2000);
});

And('Submits the login form', () => {
    LoginModal.logIn(username, password);
});

Then('The user is logged in', () => {
    HomePage.assertUserIsLoggedIn(username);
});

Given('Click Sign Out to return to anonymous area', () => {
    HomePage.elements.logOutButton().click();
});

Then('The user is logged out', () => {
    HomePage.assertUserIsLoggedOut();
});