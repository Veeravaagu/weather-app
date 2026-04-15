import { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeatherSection from './components/CurrentWeatherSection';
import ForecastSection from './components/ForecastSection';
import { fetchWeatherByCity } from './services/weatherApi';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3001';

export default function App() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSearch(city) {
    setIsLoading(true);
    setError('');

    try {
      const data = await fetchWeatherByCity(city, API_BASE_URL);
      setWeather(data);
    } catch (searchError) {
      setError(searchError.message);
      setWeather(null);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Search for a city to view current conditions and a 7-day forecast.</p>
        <h1>Weather dashboard</h1>
        <p className="intro">
          Search for a city to load current conditions and a normalized 7-day
          forecast through the Express API layer.
        </p>
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        {isLoading ? <p className="status">Loading weather data...</p> : null}
        {error ? <p className="status error">{error}</p> : null}
      </section>

      <div className="panel-grid">
        <CurrentWeatherSection weather={weather} isLoading={isLoading} />
        <ForecastSection weather={weather} isLoading={isLoading} />
      </div>
    </main>
  );
}
