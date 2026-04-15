import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler
);

function buildTemperatureChartData(forecast) {
  return {
    labels: forecast.map((day) => day.label),
    datasets: [
      {
        label: 'High',
        data: forecast.map((day) => day.high),
        borderColor: '#f97316',
        backgroundColor: 'rgba(249, 115, 22, 0.18)',
        tension: 0.35,
        fill: true
      },
      {
        label: 'Low',
        data: forecast.map((day) => day.low),
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.08)',
        tension: 0.35,
        fill: true
      }
    ]
  };
}

function buildPrecipitationChartData(forecast) {
  return {
    labels: forecast.map((day) => day.label),
    datasets: [
      {
        label: 'Precipitation probability',
        data: forecast.map((day) => day.precipitationProbability),
        backgroundColor: 'rgba(14, 116, 144, 0.7)',
        borderRadius: 10,
        maxBarThickness: 36
      }
    ]
  };
}

const temperatureOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    }
  },
  scales: {
    y: {
      ticks: {
        callback(value) {
          return `${value}°`;
        }
      }
    }
  }
};

const precipitationOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      suggestedMax: 100,
      ticks: {
        callback(value) {
          return `${value}%`;
        }
      }
    }
  }
};

function isChartableForecastDay(day) {
  return (
    day &&
    day.label &&
    typeof day.high === 'number' &&
    typeof day.low === 'number' &&
    typeof day.precipitationProbability === 'number'
  );
}

export default function WeatherCharts({ forecast = [] }) {
  const chartableForecast = forecast.filter(isChartableForecastDay);

  if (chartableForecast.length === 0) {
    return (
      <section className="charts-panel" aria-labelledby="weather-charts-heading">
        <div className="charts-heading">
          <h3 id="weather-charts-heading">Forecast Charts</h3>
          <p>Charts will appear when forecast data is available.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="charts-panel"
      aria-labelledby="weather-charts-heading"
      data-testid="weather-charts"
    >
      <div className="charts-heading">
        <h3 id="weather-charts-heading">Forecast Charts</h3>
        <p>Temperature trends and precipitation probability for the next 5 days.</p>
      </div>

      <div className="chart-card">
        <div className="chart-copy">
          <h4>Temperature Trend</h4>
          <p>Daily high and low temperatures across the forecast window.</p>
        </div>
        <div className="chart-canvas" data-testid="temperature-chart">
          <Line
            data={buildTemperatureChartData(chartableForecast)}
            options={temperatureOptions}
          />
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-copy">
          <h4>Precipitation Probability</h4>
          <p>Chance of precipitation for each forecast day.</p>
        </div>
        <div className="chart-canvas compact" data-testid="precipitation-chart">
          <Bar
            data={buildPrecipitationChartData(chartableForecast)}
            options={precipitationOptions}
          />
        </div>
      </div>
    </section>
  );
}
