import WeatherCharts from './WeatherCharts';

function formatTemperature(value) {
  return typeof value === 'number' ? `${Math.round(value)}°C` : '--';
}

function formatPrecipitation(value) {
  return typeof value === 'number' ? `${value}%` : '--';
}

export default function ForecastSection({ weather, isLoading }) {
  const forecast = weather?.forecast ?? [];

  return (
    <section className="panel">
      <div className="panel-heading">
        <p className="eyebrow">Forecast</p>
        <h2>7-Day Outlook</h2>
      </div>

      {isLoading ? (
        <div className="placeholder-copy">
          <p>Loading 7-day forecast...</p>
        </div>
      ) : forecast.length > 0 ? (
        <>
          <WeatherCharts forecast={forecast} />
          <ul className="forecast-list">
            {forecast.map((day) => (
              <li key={day.date} className="forecast-item">
                <div className="forecast-copy">
                  <span className="forecast-label">{day.label}</span>
                  <span className="forecast-description">{day.description}</span>
                </div>
                <div className="forecast-values">
                  <span>
                    {formatTemperature(day.high)} / {formatTemperature(day.low)}
                  </span>
                  <span>Rain {formatPrecipitation(day.precipitationProbability)}</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="placeholder-copy">
          <p>No forecast loaded yet.</p>
          <p>Search for a city to view the next 7 days.</p>
        </div>
      )}
    </section>
  );
}
