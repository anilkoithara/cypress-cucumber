export class FeedBackPage {

    fillFirstname(value) {
        const field = cy.get(`#firstname`);
        field.clear();
        field.type(value);
    }

    getFirstNameLabel() {
        return cy.get(`#firstname-label`)
    }

    getLastNameLabel() {
        return cy.get(`#lastname-label`)
    }

    getEmailLabel() {
        return cy.get(`#email-label`)
    }

    getPhoneLabel() {
        return cy.get("#phone-label")
    }

    getCompanyLabel() {
        return cy.get("#company-label")
    }

    getPostcodeLabel() {
        return cy.get("#postcode-label")
    }

    getPrioritylabel() {
        return cy.get(`[for="priority"]`)
    }

    getFeedbackLabel() {
        return cy.get("#feedback-label")
    }

    fillLastname(value) {
        const field = cy.get(`#lastname`);
        field.clear();
        field.type(value);
    }

    fillEmail(value) {
        const field = cy.get(`#email`);
        field.clear();
        field.type(value);
    }

    fillPhone(value) {
        const field = cy.get(`#phone`);
        field.clear();
        field.type(value);
    }

    fillCompany(value) {
        const field = cy.get(`#company`);
        field.clear();
        field.type(value);
    }

    selectPriority(value) {
        cy.get("select").select(value)
    }

    getPostcodeInput() {
        return cy.get(`#postcode`);
    }

    fillPostcode(value) {
        const field = this.getPostcodeInput();
        field.clear();
        field.type(value);
    }

    fillFeedback(value) {
        const field = cy.get(`#feedback`);
        field.clear();
        field.type(value);
    }

    getSubmitButton() {
        return cy.get(`#submit`);
    }

    submitForm() {
        this.getSubmitButton().click();
    }

    getTheHeaderText(){
        return cy.get("h1");
    }
}