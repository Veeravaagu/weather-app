const Redis = require('ioredis-mock');
const weatherCache = require('./weatherCache');
const {
  closeRedisConnection,
  setRedisClient
} = require('./redisClient');

describe('weatherCache', () => {
  let redisMock;

  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2026-04-15T12:00:00Z'));
    redisMock = new Redis();
    setRedisClient(redisMock);
  });

  afterEach(async () => {
    await weatherCache.clear();
    await closeRedisConnection();
    jest.useRealTimers();
  });

  it('returns cached data for repeat lookups within the TTL window', async () => {
    const payload = { location: { name: 'Buffalo' } };

    await weatherCache.set('Buffalo', payload, 60_000);

    const entry = await weatherCache.get('buffalo');

    expect(entry).not.toBeNull();
    expect(entry.key).toBe('weather:buffalo');
    expect(entry.payload).toEqual(payload);
  });

  it('returns null after the cache entry has expired', async () => {
    await weatherCache.set('Buffalo', { id: 1 }, 60_000);

    jest.advanceTimersByTime(60_001);

    await expect(weatherCache.get('Buffalo')).resolves.toBeNull();
  });

  it('normalizes city queries into the same cache key', () => {
    expect(weatherCache.buildCacheKey('buffalo')).toBe('weather:buffalo');
    expect(weatherCache.buildCacheKey('Buffalo')).toBe('weather:buffalo');
    expect(weatherCache.buildCacheKey('  buffalo  ')).toBe('weather:buffalo');
    expect(weatherCache.buildCacheKey('New   York')).toBe('weather:new york');
  });
});
