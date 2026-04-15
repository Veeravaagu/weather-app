export default function CurrentWeatherSection({ weather, isLoading }) {
  const location = weather?.location;
  const current = weather?.current;
  const temperature =
    typeof current?.temperature === 'number'
      ? Math.round(current.temperature)
      : '--';
  const feelsLike =
    typeof current?.feelsLike === 'number' ? Math.round(current.feelsLike) : '--';
  const windSpeed =
    typeof current?.windSpeed === 'number' ? Math.round(current.windSpeed) : '--';

  return (
    <section className="panel">
      <div className="panel-heading">
        <p className="eyebrow">Current Weather</p>
        <h2>Now</h2>
      </div>

      {isLoading ? (
        <div className="placeholder-copy">
          <p>Loading current conditions...</p>
        </div>
      ) : location && current ? (
        <div className="weather-summary">
          <p className="location-name">
            {location.name}
            {location.state ? `, ${location.state}` : ''}
            {location.country ? `, ${location.country}` : ''}
          </p>
          <p className="temperature">{temperature}°C</p>
          <p className="condition">{current.description}</p>
          <div className="details-row">
            <span>Feels like {feelsLike}°C</span>
            <span>Humidity {current.humidity}%</span>
            <span>Wind {windSpeed} m/s</span>
          </div>
        </div>
      ) : (
        <div className="placeholder-copy">
          <p>No city selected yet.</p>
          <p>Search for a city to load its current weather here.</p>
        </div>
      )}
    </section>
  );
}
