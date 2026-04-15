import { render, screen } from '@testing-library/react';
import CurrentWeatherSection from './CurrentWeatherSection';

describe('CurrentWeatherSection', () => {
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
