# Simple Automation tests using cypress + cypress

A simple log in page with feedback form behind it.

To sign in, use the following (hard coded) values:
```
Username: l.jenkins
Password: hunter2
```

The feedback form has validation to check that all required items are present, and phone, email and postcodes all look like they should. It doesn't actually do anything with the values, it just takes the user to a 'submitted' page. This is good enough for the test.

## To run:
`docker-compose up --build -d`

## Testing
`npm test` to execute tests

## UI Tests using cypress

Simple UI integration feature using cypress, for more information about cypress and documentation, go to https://docs.cypress.io

## Setup and start running the test in docker

We can run the all the test with `@ui` using the below command - need to setup docker before running docker commands and set the `baseUrl` to `http://localhost:8000` in `cypress.json` file 

`docker-compose up --build --exit-code-from cypress`

NOTE:

If you are using docker to run the test you can skip all installation steps and jump direct to `Test` steps documentation about test details, framework improvements and suggestions

## Setup and start running the test without docker
## Prerequisites
If you are using npm to install Cypress, please install Node.js 8 or above

Install

`Node.js`

### clone the repository

```
https://github.com/anilkoithara/cypress-cucumber.git

```

### Installation
cd into the project folder and run the install command

```
npm install
```

### Start Cypress Test locally

And start running the app locally using the command shown and run open cypress command 

```
npm run start
```

```
npm run cy:open
```

Cypress window will open and then click on the test you want to run

Please make sure that the baseUrl to `http://localhost:3000` in `cypress.json` file 

### Run all the tests in headless mode and generate reports follow these steps

Install all the depedencies and run app and then run test, 3 steps are shown below
```shell
npm install 
npm run start
npm run cy:run
```

### Test results and reports

- Test will start running one by one and generate xml reports and results files will be available in `\results` folder.
- In case of test failure screenshot will capture automatically and placed in the `cypress\screenshots` folder, and test run `videos` also will be available in the `cypress\videos` folder.

### Tests Features

| Type | Location                                             |
| ---- | ---------------------------------------------------- |
| ui   | [cypress/integration/ui](./cypress/integration/ui)   |



We have automated two features the login and feedback form features, details are shown below

1) `login.feature` 
- Contains 3 scenarios - first scenario covers `happy path`, and second and third scenarios covers `unhappy path`

2) `feedback.feature`
- Contains four scenarios - first and second scenarios covers `happy path` and third and fouth scenarios cover `unhappy` path.

- Base URL and other test configuration can be viewed inside `cypress.json` file, I have setup 2 config files inside `cypress\config` folder, can be used to run the test against different environment.

- You can select the browser to run the test, when running the test in headless mode the default browser is `Electron 87 (headless)`

 ### Adding new test 
  - Need to add `@ui` into feature file to start running as a UI test.

### Automation Framework details 
 --- Tools 
  -- Cucumber BDD -- https://cucumber.io/
  -- Cypress - Test runner -- https://www.cypress.io/
  -- Docker - Container -- https://hub.docker.com/r/cypress/included
  Good to have a test architecture diagram
### Framework and Feature improvements

Improvement suggestions and options 
- Need to generate dynamic test data
- Parallel testing (cypress dashboard is required to run the test in parallel)
- Similar to custom login command, we can need add more custom command wherever possible
- Can use more reusable steps using cucumber `DataTable`, and can use cucumber `Scenario Outline`
- We can modify the page object to have a base page and create static methods for more code clarity and reusability
- We can load the element locators from `support\locators.js` file,

`export default {
  //Dashboard
  link: "a[href="/somelink"]",
  plus_icon: "[data-testid=new-search-icon]"
  }`

then in test file we can import the file 

`import locators from "../../support/element_locators";`
..........
..........
`cy.(locators.link).should("contain", "Click here")`


- More unhappy test scenario can also be included as component test.

- `Code Coverage` matrix can be also be generated after test completions for more details visit https://docs.cypress.io/guides/tooling/code-coverage.html#E2E-and-unit-code-coverage,

- Mochawesome reporter can be added to generate nice html reports
- Need to setup add test run in different browser chrome and firefox( easily be achievable in cypress with passing --browser firefox) with different viewport (Internet Explorer and mobile testing in not currently supported)
- Good to have a smoke pack

## Technical debates
- We remove cypress dependency from package.json if we setting up the cypress docker image. 
- Cypress test scenarios are clearly readable without using cucumber, we can have more flexibility in that way.
- We can add more unit test, component and integration api tests to get more test coverage at lower levels and try to reduce E2E test 
Good testing `pyramid approach` reference can be viewed here https://martinfowler.com/articles/practical-test-pyramid.html
- Cypress retry options to get rid of test flakiness