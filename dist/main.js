/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchWeatherData)
/* harmony export */ });
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

async function fetchWeatherData() {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");


function initializeProgram() {
  const search = document.getElementById('search');
  const isEnter = document.querySelector('.display-container');
  search.addEventListener('click', () => (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])());
  isEnter.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
  })
}
initializeProgram();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLG9CQUFvQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsZ0JBQWdCO0FBQzdFO0FBQ0Esc0NBQXNDLG1CQUFtQjtBQUN6RCxrQ0FBa0MsU0FBUztBQUMzQyxxQ0FBcUMsbUJBQW1CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxnQkFBZ0I7O0FBRTdFO0FBQ0Esb0JBQW9CLEtBQUs7QUFDekIsd0JBQXdCLFFBQVE7QUFDaEMsb0JBQW9CLFlBQVk7QUFDaEM7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsbUZBQW1GLGdCQUFnQjtBQUNuRyxxRkFBcUYsZ0JBQWdCOztBQUVyRywyREFBMkQsY0FBYztBQUN6RSw2REFBNkQsY0FBYztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7VUNsRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ055Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG9EQUFnQjtBQUN6RDtBQUNBO0FBQ0EsUUFBUSxvREFBZ0I7QUFDeEI7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByZW5kZXJDdXJyZW50V2VhdGhlcih3ZWF0aGVyRGF0YSl7XG4gICAgY29uc3Qgd2VhdGhlckljb25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXItaWNvbicpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wZXJhdHVyZS1jb250YWluZXInKTtcbiAgICBjb25zdCB3ZWF0aGVySW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLWNvbnRlbnQnKTtcbiAgICBjb25zdCBmb3JlY2FzdEluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cmx5LWZvcmVjYXN0Jyk7XG5cbiAgICB0ZW1wZXJhdHVyZUluZm8uaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yZWNhc3RJbmZvLmlubmVySFRNTCA9ICcnO1xuICAgIHdlYXRoZXJJbmZvLmlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYod2VhdGhlckRhdGEuY29kID09PSAnNDA0Jyl7XG4gICAgICAgIHdlYXRoZXJJbmZvLmlubmVySFRNTCA9IGA8cD4ke3dlYXRoZXJEYXRhLm1lc3NhZ2V9PC9wPmA7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lID0gd2VhdGhlckRhdGEubmFtZTtcbiAgICAgICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlID0gd2VhdGhlckRhdGEubWFpbi50ZW1wO1xuICAgICAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgICAgIGNvbnN0IHdlYXRoZXJJY29uQ29kZSA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbjtcbiAgICAgICAgY29uc3QgaWNvblVybCA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVySWNvbkNvZGV9QDR4LnBuZ2A7IFxuICAgIFxuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZUh0bWwgPSBgPHA+JHtjdXJyZW50VGVtcGVyYXR1cmV9wrBDPC9wPmA7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJIdG1sID0gYDxwPiR7Y2l0eU5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3dlYXRoZXJEZXNjcmlwdGlvbn08L3A+YDtcbiAgICAgICAgdGVtcGVyYXR1cmVJbmZvLmlubmVySFRNTCA9IHRlbXBlcmF0dXJlSHRtbDtcbiAgICAgICAgd2VhdGhlckluZm8uaW5uZXJIVE1MID0gd2VhdGhlckh0bWw7XG4gICAgICAgIHdlYXRoZXJJY29uRWxlbWVudC5zcmMgPSBpY29uVXJsO1xuICAgICAgICB3ZWF0aGVySWNvbkVsZW1lbnQuYWx0ID0gd2VhdGhlckRlc2NyaXB0aW9uO1xuICAgIH0gICBcbn1cblxuZnVuY3Rpb24gcmVuZGVySG91cmx5Rm9yZWNhc3QoaG91cmx5RGF0YSkge1xuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJseS1mb3JlY2FzdCcpO1xuICAgIGNvbnN0IHNlbGVjdGVkSG91cnMgPSBob3VybHlEYXRhLnNsaWNlKDAsIDgpOyBcblxuICAgIHNlbGVjdGVkSG91cnMuZm9yRWFjaChob3VybHlJdGVtID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZShob3VybHlJdGVtLmR0ICogMTAwMCk7XG4gICAgICAgIGNvbnN0IGhvdXIgPSBkYXRlVGltZS5nZXRIb3VycygpO1xuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGhvdXJseUl0ZW0ubWFpbi50ZW1wO1xuICAgICAgICBjb25zdCB3ZWF0aGVySWNvbkNvZGUgPSBob3VybHlJdGVtLndlYXRoZXJbMF0uaWNvbjtcbiAgICAgICAgY29uc3QgaWNvblVybCA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVySWNvbkNvZGV9QDR4LnBuZ2A7IFxuXG4gICAgICAgIGNvbnN0IGhvdXJseUl0ZW1IdG1sID0gYDxkaXYgY2xhc3M9XCJob3VybHktaXRlbVwiPlxuICAgICAgICAgICAgPHNwYW4+JHtob3VyfTowMDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpY29uVXJsfVwiIGFsdD1cIkhvdXJseSBXZWF0aGVyIEljb25cIj5cbiAgICAgICAgICAgIDxzcGFuPiR7dGVtcGVyYXR1cmV9wrBDPC9zcGFuPlxuICAgICAgICA8L2Rpdj5gO1xuXG4gICAgICAgIGhvdXJseUZvcmVjYXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBob3VybHlJdGVtSHRtbDtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xuICAgICAgICBjb25zdCB3ZWF0aGVyQXBpVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5SW5wdXQudmFsdWV9JnVuaXRzPW1ldHJpYyZhcHBpZD02YzdlOWFhODczMmY5NGZkZjhiM2NhN2RhMTUxYWY4MmA7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0QXBpVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eUlucHV0LnZhbHVlfSZ1bml0cz1tZXRyaWMmYXBwaWQ9NmM3ZTlhYTg3MzJmOTRmZGY4YjNjYTdkYTE1MWFmODJgO1xuXG4gICAgICAgIGNvbnN0IGdldFdlYXRoZXJBcGkgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyQXBpVXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgY29uc3QgZ2V0Rm9yZWNhc3RBcGkgPSBhd2FpdCBmZXRjaChmb3JlY2FzdEFwaVVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlV2VhdGhlciA9IGF3YWl0IGdldFdlYXRoZXJBcGkuanNvbigpO1xuICAgICAgICByZW5kZXJDdXJyZW50V2VhdGhlcihyZXNwb25zZVdlYXRoZXIpO1xuICAgICAgICBjb25zdCByZXNwb25zZUZvcmVjYXN0ID0gYXdhaXQgZ2V0Rm9yZWNhc3RBcGkuanNvbigpO1xuICAgICAgICByZW5kZXJIb3VybHlGb3JlY2FzdChyZXNwb25zZUZvcmVjYXN0Lmxpc3QpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGZldGNoV2VhdGhlckRhdGEgZnJvbSAnLi93ZWF0aGVyJztcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVByb2dyYW0oKSB7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbiAgY29uc3QgaXNFbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNvbnRhaW5lcicpO1xuICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBmZXRjaFdlYXRoZXJEYXRhKCkpO1xuICBpc0VudGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQua2V5ID09PSAnRW50ZXInKXtcbiAgICAgICAgZmV0Y2hXZWF0aGVyRGF0YSgpO1xuICAgIH1cbiAgfSlcbn1cbmluaXRpYWxpemVQcm9ncmFtKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=