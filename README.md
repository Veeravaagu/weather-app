# Weather App

A full-stack weather application with a React frontend and an Express backend.
It supports city search, current conditions, a 7-day forecast, in-memory TTL
caching, Chart.js visualizations, and Jest-based test coverage for the frontend
and backend cache logic.

## Features

- City search powered by the backend weather API
- Current weather summary for the selected city
- 7-day forecast with daily high, low, and precipitation probability
- Temperature and precipitation charts built with Chart.js
- In-memory TTL caching for normalized weather responses
- Separate frontend and backend test suites with Jest

## Tech Stack

- Frontend: React, Vite, Chart.js, `react-chartjs-2`
- Backend: Node.js, Express, native `fetch`, `dotenv`
- Testing: Jest, React Testing Library
- Data source: OpenWeather Geocoding API + One Call API 3.0

## Project Structure

```text
.
├── backend
│   ├── src
│   │   ├── config
│   │   ├── routes
│   │   ├── services
│   │   └── utils
│   └── package.json
├── frontend
│   ├── src
│   │   ├── components
│   │   └── services
│   └── package.json
└── package.json
```

## Environment Variables

### Backend

Create `backend/.env` from `backend/.env.example`.

```env
OPENWEATHER_API_KEY=your_openweather_api_key
PORT=3001
CLIENT_ORIGIN=http://localhost:5173
CACHE_TTL_MS=600000
```

Variable notes:

- `OPENWEATHER_API_KEY`: required for all weather lookups
- `PORT`: backend server port
- `CLIENT_ORIGIN`: allowed frontend origin for CORS
- `CACHE_TTL_MS`: cache time-to-live in milliseconds

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

Then add your OpenWeather API key to `backend/.env`.

## Run the App

Start the backend:

```bash
npm run backend:dev
```

Start the frontend in a second terminal:

```bash
npm run frontend:dev
```

Frontend default URL:

```text
http://localhost:5173
```

Backend default URL:

```text
http://localhost:3001
```

## Build

Build the frontend:

```bash
npm run frontend:build
```

Run the backend in non-watch mode:

```bash
npm run backend:start
```

## Tests

Run all tests:

```bash
npm test
```

Run frontend tests only:

```bash
npm run frontend:test
```

Run backend tests only:

```bash
npm run backend:test
```

## Notes

- Weather data is normalized on the backend before it reaches the UI.
- Cache entries are stored in memory and reset when the backend restarts.
- The app currently uses metric units.
- OpenWeather One Call 3.0 access is required for 7-day forecast support.
