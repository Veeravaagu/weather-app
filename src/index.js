import getWeather from './weather.js'

function runProgram(){
    const search = document.getElementById('search');
    search.addEventListener('click', () => getWeather());
}
runProgram()
