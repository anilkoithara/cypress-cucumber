export class LoginPage {

  visit() {
    cy.visit("/");
  }

  login() {
    this.visit()
    cy.login()
  }

  getTheHeaderText() {
    return cy.get("h1");
  }

  getPageTitle() {
    return cy.title()
  }

  getEmailError() {
    return cy.get(`#username-helper-text`);
  }

  getPasswordError() {
    return cy.get(`#password-helper-text`);
  }

  getUserNameLabel() {
    return cy.get(`#username-label`)
  }

  getPasswordLabel() {
    return cy.get(`#password-label`)
  }

  getValidationMessage(value){
    return cy.contains(value)
  }

  fillEmail(value) {
    const field = cy.get(`[data-testid=username]`);
    field.clear();
    field.type(value);
  }

  fillPassword(value) {
    const field = cy.get(`#password`);
    field.clear();
    field.type(value);
  }

  submit() {
    const button = cy.get(`button`).contains("Sign In");
    button.click();
  }
}