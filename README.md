# Airport Gap API Automation

This repository contains automated tests for the Airport Gap API using Mocha, Chai, and Axios. These tests validate only 3 endpoints.

## Setup

1. Clone the Repository

   First, clone this repository to your local machine.
   ```bash
   git clone https://github.com/iqbalalfarizy/aiportgap-api.git
   
2. Install Dependencies

   Navigate to your project directory and install the required npm packages.
   ```bash
   npm install
   
3. Running Tests

   To run the automated tests, use the following command:

    ```bash
    npm test

4. Schema Definitions

   JSON schemas used in the tests can be found in the `schemas` directory. These schemas define the expected structure of API responses and are used to validate the responses during tests.


## Output

```cmd

> test
> mocha tests/**/*.spec.js  --timeout 10000s

  AIRPORT GAP API TESTING
    ✔ (API Login) (1264ms)
    ✔ (API Airport Distance) (815ms)
    ✔ (API Airport Favorites) (335ms)

  3 passing (2s)
