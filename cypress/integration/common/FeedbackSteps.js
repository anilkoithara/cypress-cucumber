/// <reference types="cypress" />
/* global Given, When, Then */
import { LoginPage } from "../ui/pages/LoginPage"
import { FeedBackPage } from "../ui/pages/FeedbackPage"
import {Users} from "../../fixtures/Users"

const feedBackPage = new FeedBackPage();

Given(`I login`, () => {
    const loginPage = new LoginPage();
    //Custom login command
    loginPage.login()
});

When(`I enter the required feedback details`, () => {
    feedBackPage.getSubmitButton().should("be.disabled")
    cy.contains("paragraph", "Fields marked as * are required.")
    feedBackPage.fillFirstname(Users.User1[0].firstName)
    feedBackPage.fillLastname(Users.User1[0].lastName)
    feedBackPage.fillEmail(Users.User1[0].email)
    feedBackPage.fillPhone(Users.User1[0].phone)
    feedBackPage.fillPostcode(Users.User1[0].postCode)
    feedBackPage.fillFeedback(Users.User1[0].feedBack)
})

When(`I filled all the feedback details fields`, () => {
    feedBackPage.fillFirstname(Users.User1[0].firstName)
    feedBackPage.getSubmitButton().should("be.disabled")
    feedBackPage.fillLastname(Users.User1[0].lastName)
    feedBackPage.fillEmail(Users.User1[0].email)
    feedBackPage.fillPhone(Users.User1[0].phone)
    feedBackPage.fillCompany(Users.User1[0].company)
    feedBackPage.selectPriority(Users.User1[0].priority)
    feedBackPage.fillPostcode(Users.User1[0].postCode)
    feedBackPage.getSubmitButton().should("be.disabled")
    feedBackPage.fillFeedback(Users.User1[0].feedBack)
})

When(`I provide invalid input data`,()=>{
    feedBackPage.fillFirstname(Users.User2[0].firstName)
    feedBackPage.fillLastname(Users.User2[0].lastName)
    feedBackPage.fillFeedback(Users.User2[0].feedBack)
    feedBackPage.fillEmail(Users.User2[0].email)
    feedBackPage.fillPhone(Users.User2[0].phone)
    feedBackPage.fillPostcode(Users.User2[0].postCode)
    feedBackPage.getSubmitButton().should("be.disabled")    
    feedBackPage.fillEmail(Users.User1[0].company)    
})

Then(`I am not allowed to submit the feedback form`, () => {
    feedBackPage.getPostcodeInput().invoke('attr', 'aria-invalid').should('contain', 'true')
    feedBackPage.getSubmitButton().should("be.disabled")
})

When(`I submit feedback form`, () => {
    feedBackPage.submitForm()
})

Then(`all the labels are present on the page`, () => {
    feedBackPage.getFirstNameLabel().contains("First name")
    feedBackPage.getLastNameLabel().contains("Last name")
    feedBackPage.getEmailLabel().contains("Email Address")
    feedBackPage.getPhoneLabel().contains("Phone Number")
    feedBackPage.getCompanyLabel().contains("Company")
    feedBackPage.getPostcodeLabel().contains("Postcode")
    feedBackPage.getPrioritylabel().contains("Priority")
    feedBackPage.getFeedbackLabel().contains("Your Feedback")
})

Then(`I should see the thank you messages`, () => {
    feedBackPage.getTheHeaderText().contains("Feedback Form")
    cy.contains('h2', 'Thank you for your feedback')
})