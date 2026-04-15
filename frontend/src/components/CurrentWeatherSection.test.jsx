import { render, screen } from '@testing-library/react';
import CurrentWeatherSection from './CurrentWeatherSection';

describe('CurrentWeatherSection', () => {
  it('renders safely with placeholder content before weather data exists', () => {
    render(<CurrentWeatherSection isLoading={false} weather={null} />);

    expect(screen.getByText('No city selected yet.')).toBeInTheDocument();
    expect(
      screen.getByText('Search for a city to load its current weather here.')
    ).toBeInTheDocument();
    expect(screen.queryByText(/°C$/)).not.toBeInTheDocument();
  });

  it('renders the city name and temperature from weather data', () => {
    render(
      <CurrentWeatherSection
        isLoading={false}
        weather={{
          location: {
            name: 'Buffalo',
            state: 'NY',
            country: 'US'
          },
          current: {
            temperature: 23.6,
            feelsLike: 21.8,
            humidity: 57,
            windSpeed: 4.2,
            description: 'clear sky'
          }
        }}
      />
    );

    expect(screen.getByText('Buffalo, NY, US')).toBeInTheDocument();
    expect(screen.getByText('24°C')).toBeInTheDocument();
    expect(screen.getByText('clear sky')).toBeInTheDocument();
  });
});
