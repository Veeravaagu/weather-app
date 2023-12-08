import fetchWeatherData from './weather';

function initializeProgram() {
  const search = document.getElementById('search');
  const isEnter = document.querySelector('.display-container');
  search.addEventListener('click', () => fetchWeatherData());
  isEnter.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        fetchWeatherData();
    }
  })
}
initializeProgram();
