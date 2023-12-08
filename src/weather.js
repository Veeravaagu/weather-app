function renderCurrentWeather(weatherData){
    const weatherIconElement = document.getElementById('weather-icon');
    const temperatureInfo = document.getElementById('temperature-container');
    const weatherInfo = document.getElementById('weather-content');
    const forecastInfo = document.getElementById('hourly-forecast');

    temperatureInfo.innerHTML = '';
    forecastInfo.innerHTML = '';
    weatherInfo.innerHTML = '';

    if(weatherData.cod === '404'){
        weatherInfo.innerHTML = `<p>${weatherData.message}</p>`;
    }
    else{
        const cityName = weatherData.name;
        const currentTemperature = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].main;
        const weatherIconCode = weatherData.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@4x.png`; 
    
        const temperatureHtml = `<p>${currentTemperature}°C</p>`;
        const weatherHtml = `<p>${cityName}</p>
                                <p>${weatherDescription}</p>`;
        temperatureInfo.innerHTML = temperatureHtml;
        weatherInfo.innerHTML = weatherHtml;
        weatherIconElement.src = iconUrl;
        weatherIconElement.alt = weatherDescription;
    }   
}

function renderHourlyForecast(hourlyData) {
    const hourlyForecastContainer = document.getElementById('hourly-forecast');
    const selectedHours = hourlyData.slice(0, 8); 

    selectedHours.forEach(hourlyItem => {
        const dateTime = new Date(hourlyItem.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = hourlyItem.main.temp;
        const weatherIconCode = hourlyItem.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@4x.png`; 

        const hourlyItemHtml = `<div class="hourly-item">
            <span>${hour}:00</span>
            <img src="${iconUrl}" alt="Hourly Weather Icon">
            <span>${temperature}°C</span>
        </div>`;

        hourlyForecastContainer.innerHTML += hourlyItemHtml;
    });
}

export default async function fetchWeatherData() {
    try {
        const cityInput = document.getElementById('city');
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=6c7e9aa8732f94fdf8b3ca7da151af82`;
        const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&units=metric&appid=6c7e9aa8732f94fdf8b3ca7da151af82`;

        const getWeatherApi = await fetch(weatherApiUrl, { mode: 'cors' });
        const getForecastApi = await fetch(forecastApiUrl, { mode: 'cors' });
        const responseWeather = await getWeatherApi.json();
        renderCurrentWeather(responseWeather);
        const responseForecast = await getForecastApi.json();
        renderHourlyForecast(responseForecast.list);
    } catch (error) {
        console.error(error);
    }
}
