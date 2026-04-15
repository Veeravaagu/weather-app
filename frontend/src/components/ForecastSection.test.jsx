jest.mock('./WeatherCharts', () => function WeatherChartsMock() {
  return <div data-testid="weather-charts">Forecast Charts</div>;
});

import { render, screen } from '@testing-library/react';
import ForecastSection from './ForecastSection';

describe('ForecastSection', () => {
  it('renders forecast rows from weather data', () => {
    render(
      <ForecastSection
        isLoading={false}
        weather={{
          forecast: [
            {
              date: 1713168000,
              label: 'Mon, Apr 15',
              description: 'light rain',
              high: 17.4,
              low: 9.2,
              precipitationProbability: 62
            },
            {
              date: 1713254400,
              label: 'Tue, Apr 16',
              description: 'scattered clouds',
              high: 19.1,
              low: 11.3,
              precipitationProbability: 25
            }
          ]
        }}
      />
    );

    expect(screen.getByTestId('weather-charts')).toBeInTheDocument();
    expect(screen.getByText('Mon, Apr 15')).toBeInTheDocument();
    expect(screen.getByText('Tue, Apr 16')).toBeInTheDocument();
    expect(screen.getByText('17°C / 9°C')).toBeInTheDocument();
    expect(screen.getByText('Rain 62%')).toBeInTheDocument();
  });
});
