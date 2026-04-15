const { getRedisClient } = require('./redisClient');

function normalizeCityQuery(city) {
  return city.trim().toLowerCase().replace(/\s+/g, ' ');
}

function buildCacheKey(city) {
  return `weather:${normalizeCityQuery(city)}`;
}

async function get(city) {
  const key = buildCacheKey(city);
  const redis = getRedisClient();
  const cachedValue = await redis.get(key);

  if (!cachedValue) {
    return null;
  }

  const entry = JSON.parse(cachedValue);

  return {
    key,
    payload: entry.payload,
    expiresAt: entry.expiresAt,
    createdAt: entry.createdAt
  };
}

async function set(city, payload, ttlMs) {
  const key = buildCacheKey(city);
  const createdAt = Date.now();
  const expiresAt = createdAt + ttlMs;
  const redis = getRedisClient();
  const ttlSeconds = Math.max(Math.ceil(ttlMs / 1000), 1);

  await redis.set(
    key,
    JSON.stringify({
      payload,
      createdAt,
      expiresAt
    }),
    'EX',
    ttlSeconds
  );

  return {
    key,
    createdAt,
    expiresAt
  };
}

function getTtlRemaining(expiresAt) {
  return Math.max(expiresAt - Date.now(), 0);
}

async function clear() {
  const redis = getRedisClient();
  await redis.flushdb();
}

module.exports = {
  buildCacheKey,
  clear,
  get,
  getTtlRemaining,
  normalizeCityQuery,
  set
};
