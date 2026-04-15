jest.mock('react-chartjs-2', () => ({
  Line: () => <div>Line Chart</div>,
  Bar: () => <div>Bar Chart</div>
}));

import { render, screen } from '@testing-library/react';
import WeatherCharts from './WeatherCharts';

describe('WeatherCharts', () => {
  it('renders both chart containers when forecast data is valid', () => {
    render(
      <WeatherCharts
        forecast={[
          {
            label: 'Mon, Apr 15',
            high: 17,
            low: 9,
            precipitationProbability: 62
          },
          {
            label: 'Tue, Apr 16',
            high: 19,
            low: 11,
            precipitationProbability: 25
          }
        ]}
      />
    );

    expect(screen.getByTestId('weather-charts')).toBeInTheDocument();
    expect(screen.getByTestId('temperature-chart')).toBeInTheDocument();
    expect(screen.getByTestId('precipitation-chart')).toBeInTheDocument();
    expect(screen.getByText('Temperature Trend')).toBeInTheDocument();
    expect(screen.getByText('Precipitation Probability')).toBeInTheDocument();
  });

  it('renders a placeholder when there is no chartable forecast data', () => {
    render(
      <WeatherCharts
        forecast={[
          {
            label: 'Mon, Apr 15',
            high: null,
            low: 9,
            precipitationProbability: 62
          }
        ]}
      />
    );

    expect(screen.queryByTestId('weather-charts')).not.toBeInTheDocument();
    expect(
      screen.getByText('Charts will appear when forecast data is available.')
    ).toBeInTheDocument();
  });
});
