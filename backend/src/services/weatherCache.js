const cacheStore = new Map();

function normalizeCityQuery(city) {
  return city.trim().toLowerCase().replace(/\s+/g, ' ');
}

function buildCacheKey(city) {
  return `weather:${normalizeCityQuery(city)}`;
}

function get(city) {
  const key = buildCacheKey(city);
  const entry = cacheStore.get(key);

  if (!entry) {
    return null;
  }

  if (Date.now() >= entry.expiresAt) {
    cacheStore.delete(key);
    return null;
  }

  return {
    key,
    payload: entry.payload,
    expiresAt: entry.expiresAt,
    createdAt: entry.createdAt
  };
}

function set(city, payload, ttlMs) {
  const key = buildCacheKey(city);
  const createdAt = Date.now();
  const expiresAt = createdAt + ttlMs;

  cacheStore.set(key, {
    payload,
    createdAt,
    expiresAt
  });

  return {
    key,
    createdAt,
    expiresAt
  };
}

function getTtlRemaining(expiresAt) {
  return Math.max(expiresAt - Date.now(), 0);
}

function clear() {
  cacheStore.clear();
}

module.exports = {
  buildCacheKey,
  clear,
  get,
  getTtlRemaining,
  normalizeCityQuery,
  set
};
