export const LoginCommand = (
    defaultUserName = Cypress.env("USERNAME"),
    defaultPassword = Cypress.env("PASSWORD")) => {

    cy.get('#username').type(defaultUserName)
    cy.get('#password').type(defaultPassword)
    cy.get('button').contains("Sign In").click()
}