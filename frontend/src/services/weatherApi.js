export async function fetchWeatherByCity(
  city,
  apiBaseUrl = 'http://localhost:3001'
) {
  const response = await fetch(
    `${apiBaseUrl}/api/weather?city=${encodeURIComponent(city)}`
  );

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.error ?? 'Unable to load weather data.');
  }

  return payload;
}
