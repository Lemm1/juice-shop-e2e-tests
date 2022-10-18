# juice-shop-e2e-tests
Small test project that tests login and registration functionality of juice-shop.

## Prerequirments
1. Node.JS 14.20.1;
1. Docker.

## Setup
1. Run `git clone https://github.com/Lemm1/juice-shop-e2e-tests.git`;
1. Go into the cloned folder with `cd juice-shop-e2e-tests`;
1. Run `npm install` to install packages;
1. Run `docker pull bkimminich/juice-shop` to download the juice-shop application.

## Usage
1. Run `npm run cy:run` to execute all tests;
1. Run `npm run cy:open` to start Cypress.

## Documentation
### Where are all tests?
All tests are located at `cypress/e2e` folder.

### Where are all test steps?
Feature specific steps are located at `cypress/e2e/NAME_OF_THE_FEATURE` folder.
Common steps that are reused between features are located at `cypress/support/step_definitions` folder.

### Where are all page objects?
All page objects are located in the `cypress/pages` folder.

### API calls?
Some tests need to set up the environment with existing data. To do it efficiently and quickly this project uses API calls to the application backend, all API calls can are located in the `cypress/api` folder.

### Licensing
This project is published under the [MIT license](LICENSE).
