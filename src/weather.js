export default async function getWeather() {
    try{
        const city = document.getElementById('city');
        const getWeatherApi = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=6c7e9aa8732f94fdf8b3ca7da151af82`,
          { mode: 'cors' }
        );
        const getForecastApi = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&units=metric&appid=6c7e9aa8732f94fdf8b3ca7da151af82`,
          { mode: 'cors' }
        );
        if(!getWeatherApi.ok  || !getForecastApi.ok){
            throw new Error(`city not found!`);
        }
        else{
            const responseWeather = await getWeatherApi.json();
            console.log(responseWeather, 'weather');
            const responseForecast = await getForecastApi.json();
            console.log(responseForecast.list.slice(0,8),'forecast list');
        }
    }
    catch(error){
        console.error(error);
    }
}
