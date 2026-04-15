# Weather App

A full-stack weather application with a React frontend and an Express backend.
Users can search for a city, view current conditions, browse a derived 5-day
forecast, and explore weather trends through chart visualizations.

The backend handles geocoding, weather fetching, response normalization, and
Redis-backed TTL caching before data reaches the frontend.

## Features

- City search with backend-driven weather lookups
- Current weather summary with temperature, feels-like, humidity, wind, and description
- Derived 5-day forecast with daily high, low, and precipitation probability
- Temperature and precipitation charts built with Chart.js
- Redis-backed TTL caching for normalized weather responses
- Loading, error, and empty states across the UI
- Separate frontend and backend test suites with Jest

## Tech Stack

- Frontend: React, Vite, Chart.js, `react-chartjs-2`
- Backend: Node.js, Express, native `fetch`, `dotenv`, `cors`, `ioredis`
- Testing: Jest, React Testing Library, `jest-dom`, `ioredis-mock`
- Weather data: OpenWeather Geocoding API, Current Weather API, and 5 day / 3 hour Forecast API
- Cache: Redis

## How It Works

1. A user searches for a city in the React app.
2. The frontend sends the query to the backend `GET /api/weather` route.
3. The backend resolves the city to coordinates using OpenWeather geocoding.
4. The backend fetches:
   - current weather from the free `data/2.5/weather` endpoint
   - forecast data from the free `data/2.5/forecast` endpoint
5. The backend normalizes the raw provider responses into a frontend-friendly shape.
6. The backend caches the normalized payload in Redis by normalized city query with TTL metadata.
7. The frontend renders current weather, forecast rows, and charts from the normalized response.

## Environment Variables

### Backend

Create `backend/.env` from `backend/.env.example`.

```env
OPENWEATHER_API_KEY=your_openweather_api_key
PORT=3001
CLIENT_ORIGIN=http://localhost:5173
REDIS_URL=redis://127.0.0.1:6379
CACHE_TTL_MS=600000
```

- `OPENWEATHER_API_KEY`: required for weather lookups
- `PORT`: backend server port
- `CLIENT_ORIGIN`: allowed frontend origin for CORS
- `REDIS_URL`: Redis connection string
- `CACHE_TTL_MS`: cache TTL in milliseconds

### Frontend

Create `frontend/.env` from `frontend/.env.example` only if you want to
override the default backend URL.

```env
VITE_API_BASE_URL=http://localhost:3001
```

## Setup

From a fresh clone:

```bash
npm install --prefix backend
npm install --prefix frontend
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Then:

1. Add your OpenWeather API key to `backend/.env`
2. Make sure Redis is running locally or via Docker

## Running Redis

### Local Redis

If Redis is installed locally:

```bash
redis-server
```

Backend default Redis URL:

```text
redis://127.0.0.1:6379
```

### Redis via Docker

```bash
docker run --name weather-app-redis -p 6379:6379 redis:7
```

If you want it to keep running in the background:

```bash
docker run -d --name weather-app-redis -p 6379:6379 redis:7
```

## Run Locally

Start Redis first, then start the backend:

```bash
npm run backend:dev
```

Start the frontend in a second terminal:

```bash
npm run frontend:dev
```

Default local URLs:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3001`
- Redis: `redis://127.0.0.1:6379`

## Available Scripts

At the repo root:

- `npm run backend:dev` - start backend in watch mode
- `npm run backend:start` - start backend without watch mode
- `npm run frontend:dev` - start frontend dev server
- `npm run frontend:build` - build the frontend for production
- `npm run backend:test` - run backend tests
- `npm run frontend:test` - run frontend tests
- `npm test` - run backend and frontend tests

## Testing

Run all tests:

```bash
npm test
```

Run only backend tests:

```bash
npm run backend:test
```

Run only frontend tests:

```bash
npm run frontend:test
```

Backend cache tests do not require a live Redis server. They use `ioredis-mock`
to validate the Redis-backed cache behavior in memory.

## Build

Build the frontend:

```bash
npm run frontend:build
```

Run the backend in non-watch mode:

```bash
npm run backend:start
```

## API Notes

- The backend exposes:
  - `GET /api/health`
  - `GET /api/weather?city=<city>`
- Weather responses are normalized on the backend before reaching the frontend.
- Cache metadata is included in the backend response to indicate cache hit/miss state.
- Redis keys use the format:

```text
weather:<normalized-city-query>
```

Normalization rules:

- trim leading/trailing spaces
- lowercase the query
- collapse repeated internal whitespace to a single space

## Forecast Derivation Notes

This project uses OpenWeather free-plan endpoints, so the forecast is derived
from 3-hour forecast intervals rather than a paid daily forecast API.

That means:

- the app currently returns up to 5 forecast days
- daily highs and lows are aggregated from 3-hour intervals
- precipitation probability is derived from the maximum interval probability for a day
- description and icon are chosen from the forecast entry closest to local noon

## Redis Behavior Notes

- The backend now depends on Redis for cache storage.
- On startup, the backend verifies the Redis connection with `PING`.
- If Redis is unavailable, the backend exits with a clear startup error instead of silently falling back to a different cache.
- Cache entries are stored as serialized normalized payloads plus timestamps.

## Notes

- The app currently uses metric units.
- If deployed separately, make sure the backend `CLIENT_ORIGIN` matches the active frontend domain to avoid CORS issues.
