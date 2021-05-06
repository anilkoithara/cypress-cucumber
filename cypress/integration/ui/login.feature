@ui
Feature: Login Form
    Feature Description
    Verify authorized user can login to application and redirected to feedback form
    and verfiying generic form validation and elements. 
    
    Background: Navigate to login page
        Given I navigate to the login page

    Scenario: User should be able to login to the system with correct credentials
        When I enter the valid login credetials
        Then I should see the Feedback Form

    Scenario: Providing incorrect credentials user not allowed to login to system
        When I enter invalid login credetials
        Then I should see the invalid login error messages

    Scenario: Providing only one credentials user not allowed to login to system
        When I submit the login form
        Then I should see the username,password validation messages
        And I enter only username
        Then I should see the password validation messages
        


