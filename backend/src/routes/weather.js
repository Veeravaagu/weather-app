const express = require('express');
const config = require('../config/env');
const {
  WeatherApiError,
  fetchWeatherByCityWithCache
} = require('../services/openWeatherClient');

const router = express.Router();

router.get('/', async (req, res) => {
  const city = req.query.city?.trim();

  if (!city) {
    return res.status(400).json({ error: 'City query parameter is required.' });
  }

  if (!config.openWeatherApiKey) {
    return res.status(500).json({
      error: 'Missing OPENWEATHER_API_KEY in backend environment configuration.'
    });
  }

  try {
    const weather = await fetchWeatherByCityWithCache(
      city,
      config.openWeatherApiKey,
      config.cacheTtlMs
    );
    return res.json(weather);
  } catch (error) {
    const statusCode = error instanceof WeatherApiError ? error.statusCode : 502;

    return res.status(statusCode).json({
      error: error.message || 'Unable to fetch weather data.'
    });
  }
});

module.exports = router;
