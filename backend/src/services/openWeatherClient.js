const { normalizeWeatherPayload } = require('../utils/normalizeWeather');
const weatherCache = require('./weatherCache');

class WeatherApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'WeatherApiError';
    this.statusCode = statusCode;
  }
}

async function requestJson(url, message, statusCode = 502) {
  const response = await fetch(url);

  if (!response.ok) {
    const errorPayload = await response.json().catch(() => ({}));
    throw new WeatherApiError(errorPayload.message || message, statusCode);
  }

  return response.json();
}

async function fetchCoordinatesForCity(city, apiKey) {
  const requestUrl = new URL(
    'https://api.openweathermap.org/geo/1.0/direct'
  );
  requestUrl.searchParams.set('q', city);
  requestUrl.searchParams.set('limit', '1');
  requestUrl.searchParams.set('appid', apiKey);

  const locations = await requestJson(
    requestUrl,
    'Unable to resolve city coordinates.',
    502
  );

  if (!Array.isArray(locations) || locations.length === 0) {
    throw new WeatherApiError(`No weather results found for "${city}".`, 404);
  }

  return locations[0];
}

async function fetchWeatherByCoordinates(location, apiKey) {
  const requestUrl = new URL(
    'https://api.openweathermap.org/data/3.0/onecall'
  );
  requestUrl.searchParams.set('lat', location.lat);
  requestUrl.searchParams.set('lon', location.lon);
  requestUrl.searchParams.set('units', 'metric');
  requestUrl.searchParams.set('exclude', 'minutely,hourly,alerts');
  requestUrl.searchParams.set('appid', apiKey);

  return requestJson(
    requestUrl,
    'Unable to fetch forecast data from OpenWeather.',
    502
  );
}

async function fetchFreshWeatherByCity(city, apiKey) {
  const location = await fetchCoordinatesForCity(city, apiKey);
  const weatherData = await fetchWeatherByCoordinates(location, apiKey);

  return normalizeWeatherPayload({
    query: city,
    location,
    weatherData
  });
}

function attachCacheMetadata(payload, cacheDetails) {
  return {
    ...payload,
    meta: {
      ...payload.meta,
      cache: cacheDetails
    }
  };
}

async function fetchWeatherByCityWithCache(city, apiKey, ttlMs) {
  const cachedEntry = weatherCache.get(city);

  if (cachedEntry) {
    console.log(`[weather-cache] HIT ${cachedEntry.key}`);

    return attachCacheMetadata(cachedEntry.payload, {
      key: cachedEntry.key,
      status: 'hit',
      ttlMs,
      expiresAt: cachedEntry.expiresAt,
      ageMs: Date.now() - cachedEntry.createdAt,
      ttlRemainingMs: weatherCache.getTtlRemaining(cachedEntry.expiresAt)
    });
  }

  const cacheKey = weatherCache.buildCacheKey(city);
  console.log(`[weather-cache] MISS ${cacheKey}`);

  const freshPayload = await fetchFreshWeatherByCity(city, apiKey);
  const cacheWrite = weatherCache.set(city, freshPayload, ttlMs);

  return attachCacheMetadata(freshPayload, {
    key: cacheWrite.key,
    status: 'miss',
    ttlMs,
    expiresAt: cacheWrite.expiresAt,
    ageMs: 0,
    ttlRemainingMs: ttlMs
  });
}

module.exports = {
  WeatherApiError,
  fetchWeatherByCityWithCache
};
