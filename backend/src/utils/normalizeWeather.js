function formatDayLabel(unixSeconds, timezoneOffsetSeconds) {
  const utcTimestamp = (unixSeconds + timezoneOffsetSeconds) * 1000;
  const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  });

  return formatter.format(new Date(utcTimestamp));
}

function normalizeCurrent(current) {
  return {
    temperature: current.temp ?? null,
    feelsLike: current.feels_like ?? null,
    humidity: current.humidity ?? null,
    pressure: current.pressure ?? null,
    windSpeed: current.wind_speed ?? null,
    uvIndex: current.uvi ?? null,
    description: current.weather?.[0]?.description ?? 'Unavailable',
    icon: current.weather?.[0]?.icon ?? '',
    precipitationProbability: Math.round((current.pop ?? 0) * 100),
    sunrise: current.sunrise ?? null,
    sunset: current.sunset ?? null
  };
}

function normalizeDailyForecast(daily = [], timezoneOffsetSeconds = 0) {
  return daily.slice(0, 7).map((day) => ({
    date: day.dt ?? null,
    label: formatDayLabel(day.dt, timezoneOffsetSeconds),
    description: day.weather?.[0]?.description ?? 'Unavailable',
    icon: day.weather?.[0]?.icon ?? '',
    high: day.temp?.max ?? null,
    low: day.temp?.min ?? null,
    precipitationProbability: Math.round((day.pop ?? 0) * 100)
  }));
}

function normalizeWeatherPayload({ query, location, weatherData }) {
  return {
    query: {
      city: query
    },
    location: {
      name: location.name ?? '',
      state: location.state ?? '',
      country: location.country ?? '',
      coordinates: {
        lat: location.lat ?? null,
        lon: location.lon ?? null
      },
      timezone: weatherData.timezone ?? '',
      timezoneOffset: weatherData.timezone_offset ?? 0
    },
    current: normalizeCurrent(weatherData.current ?? {}),
    forecast: normalizeDailyForecast(
      weatherData.daily,
      weatherData.timezone_offset ?? 0
    ),
    meta: {
      units: 'metric',
      forecastDays: Math.min(weatherData.daily?.length ?? 0, 7)
    }
  };
}

module.exports = {
  normalizeWeatherPayload
};
