# Airport Gap API Automation

This repository contains automated tests for the Airport Gap API using Mocha, Chai, and Axios. These tests validate only 3 endpoints.

## Setup

1. Clone the Repository

   First, clone this repository to your local machine.
   ```bash
   git clone https://github.com/iqbalalfarizy/airport-gap-api.git
   
2. Install Dependencies

   Navigate to your project directory and install the required npm packages.
   ```bash
   npm install
   
3. Running Tests

   To run the automated tests, use the following command.

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
   ```


1. API Login
   
   - The response contains status code: 200.
     
   - The response contains a valid token.
     
   - The response JSON schema matches `schemaLogin`.
     ```javascript
     {
        type: 'object',
        required: ['token'],
        properties: {
        token: { type: 'string' }
        }
     }


2. API Airport Distance
   
   - The response contains status code: 200.
     
   - The response contains distance information between the two airports.
     
   - The response JSON schema matches `schemaDistance`.
     ```javascript
      {
          type: 'object',
          required: ['data'],
          properties: {
            data: {
              type: 'object',
              required: ['attributes'],
              properties: {
                id: { type: 'string' },
                type: { type: 'string' },
                attributes: {
                  type: 'object',
                  required: ['from_airport', 'to_airport', 'kilometers', 'miles', 'nautical_miles'],
                  properties: {
                    from_airport: {
                      type: 'object',
                      required: ['altitude', 'city', 'country', 'iata', 'icao', 'id', 'latitude', 'longitude', 'name', 'timezone'],
                      properties: {
                        altitude: { type: 'number' },
                        city: { type: 'string' },
                        country: { type: 'string' },
                        iata: { type: 'string' },
                        icao: { type: 'string' },
                        id: { type: 'number' },
                        latitude: { type: 'string' },
                        longitude: { type: 'string' },
                        name: { type: 'string' },
                        timezone: { type: 'string' }
                      }
                    },
                    to_airport: {
                      type: 'object',
                      required: ['altitude', 'city', 'country', 'iata', 'icao', 'id', 'latitude', 'longitude', 'name', 'timezone'],
                      properties: {
                        altitude: { type: 'number' },
                        city: { type: 'string' },
                        country: { type: 'string' },
                        iata: { type: 'string' },
                        icao: { type: 'string' },
                        id: { type: 'number' },
                        latitude: { type: 'string' },
                        longitude: { type: 'string' },
                        name: { type: 'string' },
                        timezone: { type: 'string' }
                      }
                    },
                    kilometers: { type: 'number' },
                    miles: { type: 'number' },
                    nautical_miles: { type: 'number' }
                  }
                }
              }
            }
          }
        }

3. API Airport Favorites
   
   - The response contains status code: 200.
     
   - The response contains a list of favorite airports.
     
   - The response JSON schema matches `schemaFavorite`.
     ```javascript
      {
          
        type: 'object',
        required: ['data'],
        properties: {
          data: {
            type: 'array',
            items: {
              type: 'object',
              required: ['id', 'type', 'attributes'],
              properties: {
                id: { type: 'string' },
                type: { type: 'string' },
                attributes: {
                  type: 'object',
                  required: ['airport', 'note'],
                  properties: {
                    airport: {
                      type: 'object',
                      required: ['altitude', 'city', 'country', 'iata', 'icao', 'id', 'latitude', 'longitude', 'name', 'timezone'],
                      properties: {
                        altitude: { type: 'number' },
                        city: { type: 'string' },
                        country: { type: 'string' },
                        iata: { type: 'string' },
                        icao: { type: 'string' },
                        id: { type: 'number' },
                        latitude: { type: 'string' },
                        longitude: { type: 'string' },
                        name: { type: 'string' },
                        timezone: { type: 'string' }
                      }
                    },
                    note: { type: 'string' }
                  }
                }
              }
            }
          }
        }
      }

