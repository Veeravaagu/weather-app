const weatherCache = require('./weatherCache');

describe('weatherCache', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2026-04-15T12:00:00Z'));
    weatherCache.clear();
  });

  afterEach(() => {
    weatherCache.clear();
    jest.useRealTimers();
  });

  it('returns cached data for repeat lookups within the TTL window', () => {
    const payload = { location: { name: 'Buffalo' } };

    weatherCache.set('Buffalo', payload, 60_000);

    const entry = weatherCache.get('buffalo');

    expect(entry).not.toBeNull();
    expect(entry.key).toBe('weather:buffalo');
    expect(entry.payload).toEqual(payload);
  });

  it('returns null after the cache entry has expired', () => {
    weatherCache.set('Buffalo', { id: 1 }, 60_000);

    jest.advanceTimersByTime(60_001);

    expect(weatherCache.get('Buffalo')).toBeNull();
  });

  it('normalizes city queries into the same cache key', () => {
    expect(weatherCache.buildCacheKey('buffalo')).toBe('weather:buffalo');
    expect(weatherCache.buildCacheKey('Buffalo')).toBe('weather:buffalo');
    expect(weatherCache.buildCacheKey('  buffalo  ')).toBe('weather:buffalo');
    expect(weatherCache.buildCacheKey('New   York')).toBe('weather:new york');
  });
});
