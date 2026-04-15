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

function getLocalDayKey(unixSeconds, timezoneOffsetSeconds) {
  const utcTimestamp = (unixSeconds + timezoneOffsetSeconds) * 1000;
  const formatter = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'UTC'
  });

  return formatter.format(new Date(utcTimestamp));
}

function normalizeCurrent(current) {
  return {
    temperature: current.main?.temp ?? current.temp ?? null,
    feelsLike: current.main?.feels_like ?? current.feels_like ?? null,
    humidity: current.main?.humidity ?? current.humidity ?? null,
    pressure: current.main?.pressure ?? current.pressure ?? null,
    windSpeed: current.wind?.speed ?? null,
    uvIndex: null,
    description: current.weather?.[0]?.description ?? 'Unavailable',
    icon: current.weather?.[0]?.icon ?? '',
    precipitationProbability: 0,
    sunrise: current.sys?.sunrise ?? null,
    sunset: current.sys?.sunset ?? null
  };
}

function normalizeDailyForecast(forecastItems = [], timezoneOffsetSeconds = 0) {
  const dailyForecastMap = new Map();

  forecastItems.forEach((item) => {
    const dayKey = getLocalDayKey(item.dt, timezoneOffsetSeconds);
    const existingDay = dailyForecastMap.get(dayKey);

    if (!existingDay) {
      dailyForecastMap.set(dayKey, {
        date: item.dt ?? null,
        label: formatDayLabel(item.dt, timezoneOffsetSeconds),
        description: item.weather?.[0]?.description ?? 'Unavailable',
        icon: item.weather?.[0]?.icon ?? '',
        high: item.main?.temp_max ?? null,
        low: item.main?.temp_min ?? null,
        precipitationProbability: Math.round((item.pop ?? 0) * 100),
        representativeHourDistance: Math.abs(
          new Date((item.dt + timezoneOffsetSeconds) * 1000).getUTCHours() - 12
        )
      });

      return;
    }

    if (typeof item.main?.temp_max === 'number') {
      existingDay.high =
        typeof existingDay.high === 'number'
          ? Math.max(existingDay.high, item.main.temp_max)
          : item.main.temp_max;
    }

    if (typeof item.main?.temp_min === 'number') {
      existingDay.low =
        typeof existingDay.low === 'number'
          ? Math.min(existingDay.low, item.main.temp_min)
          : item.main.temp_min;
    }

    existingDay.precipitationProbability = Math.max(
      existingDay.precipitationProbability,
      Math.round((item.pop ?? 0) * 100)
    );

    const hourDistanceFromNoon = Math.abs(
      new Date((item.dt + timezoneOffsetSeconds) * 1000).getUTCHours() - 12
    );

    if (hourDistanceFromNoon < existingDay.representativeHourDistance) {
      existingDay.description = item.weather?.[0]?.description ?? existingDay.description;
      existingDay.icon = item.weather?.[0]?.icon ?? existingDay.icon;
      existingDay.date = item.dt ?? existingDay.date;
      existingDay.label = formatDayLabel(item.dt, timezoneOffsetSeconds);
      existingDay.representativeHourDistance = hourDistanceFromNoon;
    }
  });

  return Array.from(dailyForecastMap.values())
    .slice(0, 5)
    .map(({ representativeHourDistance, ...day }) => day);
}

function normalizeWeatherPayload({
  query,
  location,
  currentWeatherData,
  forecastWeatherData
}) {
  const timezoneOffset =
    forecastWeatherData.city?.timezone ?? currentWeatherData.timezone ?? 0;
  const timezoneName = forecastWeatherData.city?.timezone_name ?? '';
  const normalizedForecast = normalizeDailyForecast(
    forecastWeatherData.list,
    timezoneOffset
  );

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
      timezone: timezoneName,
      timezoneOffset
    },
    current: normalizeCurrent(currentWeatherData ?? {}),
    forecast: normalizedForecast,
    meta: {
      units: 'metric',
      forecastDays: normalizedForecast.length
    }
  };
}

module.exports = {
  normalizeWeatherPayload
};
