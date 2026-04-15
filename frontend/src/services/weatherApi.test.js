import { fetchWeatherByCity } from './weatherApi';

describe('fetchWeatherByCity', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns parsed weather data on success', async () => {
    const payload = {
      location: { name: 'Buffalo' },
      current: { temperature: 22 },
      forecast: []
    };

    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => payload
    });

    await expect(
      fetchWeatherByCity('Buffalo', 'http://localhost:3001')
    ).resolves.toEqual(payload);

    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:3001/api/weather?city=Buffalo'
    );
  });

  it('throws the backend error message on failure', async () => {
    global.fetch.mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'City query parameter is required.' })
    });

    await expect(
      fetchWeatherByCity('   ', 'http://localhost:3001')
    ).rejects.toThrow('City query parameter is required.');
  });

  it('falls back to a generic error message when the payload has no error', async () => {
    global.fetch.mockResolvedValue({
      ok: false,
      json: async () => ({})
    });

    await expect(
      fetchWeatherByCity('Buffalo', 'http://localhost:3001')
    ).rejects.toThrow('Unable to load weather data.');
  });
});
