/// <reference types="cypress" />
/* global Given, When, Then */
import { LoginPage } from "../ui/pages/LoginPage"
const UsernameValidationMsg = "Please provie a username."
const PasswordValidationMsg = "Please enter a password."

const login = new LoginPage();

Given(`I navigate to the login page`, () => {
    login.visit()    
    login.getPageTitle().should("eq", "Automation Test App")
    login.getTheHeaderText().contains("Sign in")
});

When(`I enter the valid login credetials`, () => {
    //TODO : need to pass from Cypress.env("USERNAME") and Cypress.env("PASSWORD")
    login.getUserNameLabel().contains("Username")
    login.getPasswordLabel().contains("Password")
    login.fillEmail(Cypress.env("USERNAME"))
    login.fillPassword(Cypress.env("PASSWORD"))
    login.submit()
});

When(`I enter invalid login credetials`, () => {
    login.fillEmail("TEST")
    login.fillPassword("Test")
    login.submit()
})

When(`I submit the login form`, () => {
    login.submit()
})

Then(`I should see the username,password validation messages`,()=>{
    login.getEmailError().contains(UsernameValidationMsg)
    login.getPasswordError().contains(PasswordValidationMsg)
})

When(`I enter only username`,()=>{
    login.fillEmail("l.jenkins")
    login.submit()
})

Then(`I should see the password validation messages`,()=>{
    login.getPasswordError().contains(PasswordValidationMsg)
    login.getValidationMessage(UsernameValidationMsg).should("not.exist")
})

Then(`I should see the Feedback Form`, () => {
    login.getTheHeaderText().contains("Feedback Form")
})

Then(`I should see the invalid login error messages`, () => {
    login.getEmailError().should("not.exist")
    login.getPasswordError().contains("Please enter a valid username/password")
})