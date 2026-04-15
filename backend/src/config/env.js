const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const parsedCacheTtlMs = Number(process.env.CACHE_TTL_MS || 600000);

const config = {
  port: process.env.PORT || 3001,
  openWeatherApiKey: process.env.OPENWEATHER_API_KEY || '',
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  cacheTtlMs:
    Number.isFinite(parsedCacheTtlMs) && parsedCacheTtlMs > 0
      ? parsedCacheTtlMs
      : 600000
};

module.exports = config;
