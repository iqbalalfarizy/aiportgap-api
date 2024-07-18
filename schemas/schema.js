export const schemaLogin = {
	type: 'object',
	required: ['token'],
	properties: {
		token: { type: 'string' }
	}
}

export const schemaDistance = {
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




export const schemaFavorite = {
    
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

