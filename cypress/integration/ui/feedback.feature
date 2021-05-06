@ui
Feature: Feedback Form
    Feature Description
    Verify that user is able to submit the Feedback Form with correct details
    and verify generic form validations and form elements. 

    Background: Login and navigate to feedback page
        Given I login

    Scenario: User should be able to submit feedback form filling up all the required fields
        When I enter the required feedback details
        And I submit feedback form
        Then I should see the thank you messages

    Scenario: User should be able to submit feedback form filling up all the fields
    and also verify the submit button disabled when the required data is not filled

        When I filled all the feedback details fields
        And I submit feedback form
        Then I should see the thank you messages

    Scenario: Without filling all the required fields, user should not be able to submit 
    the feedback form and verify the form with invalid input

        When I provide invalid input data
        Then I am not allowed to submit the feedback form

    Scenario: Verify all the input fields labels are displayed correctley 
        Then all the labels are present on the page

