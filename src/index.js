import getWeather from './weather';

function runProgram() {
  const search = document.getElementById('search');
  const isEnter = document.querySelector('.display-container');
  search.addEventListener('click', () => getWeather());
  isEnter.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        getWeather();
    }
  })
}
runProgram();
