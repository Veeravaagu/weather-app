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

        if (!getWeatherApi.ok || !getForecastApi.ok) {
            const weatherInfo = document.getElementById('weather-content');
            weatherInfo.innerHTML = '<p>Error 404, City Not Found!</p>';
            throw new Error('City not found!');
        } else {
            const responseWeather = await getWeatherApi.json();
            renderCurrentWeather(responseWeather);
            console.log(responseWeather, 'weather');

            const responseForecast = await getForecastApi.json();
            renderHourlyForecast(responseForecast.list);
            console.log(responseForecast, 'forecast list');
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGdCQUFnQjs7QUFFekUsa0NBQWtDLG1CQUFtQjtBQUNyRCw4QkFBOEIsU0FBUztBQUN2QyxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxnQkFBZ0I7O0FBRTdFO0FBQ0Esb0JBQW9CLEtBQUs7QUFDekIsd0JBQXdCLFFBQVE7QUFDaEMsb0JBQW9CLFlBQVk7QUFDaEM7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsbUZBQW1GLGdCQUFnQjtBQUNuRyxxRkFBcUYsZ0JBQWdCOztBQUVyRywyREFBMkQsY0FBYztBQUN6RSw2REFBNkQsY0FBYzs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7OztVQ3hFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsb0RBQWdCO0FBQ3pEO0FBQ0E7QUFDQSxRQUFRLG9EQUFnQjtBQUN4QjtBQUNBLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlbmRlckN1cnJlbnRXZWF0aGVyKHdlYXRoZXJEYXRhKXtcbiAgICBjb25zdCB3ZWF0aGVySWNvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1pY29uJyk7XG4gICAgY29uc3QgdGVtcGVyYXR1cmVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXItY29udGVudCcpO1xuICAgIGNvbnN0IGZvcmVjYXN0SW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VybHktZm9yZWNhc3QnKTtcblxuICAgIHRlbXBlcmF0dXJlSW5mby5pbm5lckhUTUwgPSAnJztcbiAgICBmb3JlY2FzdEluZm8uaW5uZXJIVE1MID0gJyc7XG4gICAgd2VhdGhlckluZm8uaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBjaXR5TmFtZSA9IHdlYXRoZXJEYXRhLm5hbWU7XG4gICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlID0gd2VhdGhlckRhdGEubWFpbi50ZW1wO1xuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICBjb25zdCB3ZWF0aGVySWNvbkNvZGUgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb247XG4gICAgY29uc3QgaWNvblVybCA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVySWNvbkNvZGV9QDR4LnBuZ2A7IFxuXG4gICAgY29uc3QgdGVtcGVyYXR1cmVIdG1sID0gYDxwPiR7Y3VycmVudFRlbXBlcmF0dXJlfcKwQzwvcD5gO1xuICAgIGNvbnN0IHdlYXRoZXJIdG1sID0gYDxwPiR7Y2l0eU5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7d2VhdGhlckRlc2NyaXB0aW9ufTwvcD5gO1xuICAgIHRlbXBlcmF0dXJlSW5mby5pbm5lckhUTUwgPSB0ZW1wZXJhdHVyZUh0bWw7XG4gICAgd2VhdGhlckluZm8uaW5uZXJIVE1MID0gd2VhdGhlckh0bWw7XG4gICAgd2VhdGhlckljb25FbGVtZW50LnNyYyA9IGljb25Vcmw7XG4gICAgd2VhdGhlckljb25FbGVtZW50LmFsdCA9IHdlYXRoZXJEZXNjcmlwdGlvbjtcbiAgICAgICAgXG59XG5cbmZ1bmN0aW9uIHJlbmRlckhvdXJseUZvcmVjYXN0KGhvdXJseURhdGEpIHtcbiAgICBjb25zdCBob3VybHlGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VybHktZm9yZWNhc3QnKTtcbiAgICBjb25zdCBzZWxlY3RlZEhvdXJzID0gaG91cmx5RGF0YS5zbGljZSgwLCA4KTsgXG5cbiAgICBzZWxlY3RlZEhvdXJzLmZvckVhY2goaG91cmx5SXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoaG91cmx5SXRlbS5kdCAqIDEwMDApO1xuICAgICAgICBjb25zdCBob3VyID0gZGF0ZVRpbWUuZ2V0SG91cnMoKTtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBob3VybHlJdGVtLm1haW4udGVtcDtcbiAgICAgICAgY29uc3Qgd2VhdGhlckljb25Db2RlID0gaG91cmx5SXRlbS53ZWF0aGVyWzBdLmljb247XG4gICAgICAgIGNvbnN0IGljb25VcmwgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckljb25Db2RlfUA0eC5wbmdgOyBcblxuICAgICAgICBjb25zdCBob3VybHlJdGVtSHRtbCA9IGA8ZGl2IGNsYXNzPVwiaG91cmx5LWl0ZW1cIj5cbiAgICAgICAgICAgIDxzcGFuPiR7aG91cn06MDA8L3NwYW4+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aWNvblVybH1cIiBhbHQ9XCJIb3VybHkgV2VhdGhlciBJY29uXCI+XG4gICAgICAgICAgICA8c3Bhbj4ke3RlbXBlcmF0dXJlfcKwQzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+YDtcblxuICAgICAgICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5pbm5lckhUTUwgKz0gaG91cmx5SXRlbUh0bWw7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckFwaVVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eUlucHV0LnZhbHVlfSZ1bml0cz1tZXRyaWMmYXBwaWQ9NmM3ZTlhYTg3MzJmOTRmZGY4YjNjYTdkYTE1MWFmODJgO1xuICAgICAgICBjb25zdCBmb3JlY2FzdEFwaVVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHlJbnB1dC52YWx1ZX0mdW5pdHM9bWV0cmljJmFwcGlkPTZjN2U5YWE4NzMyZjk0ZmRmOGIzY2E3ZGExNTFhZjgyYDtcblxuICAgICAgICBjb25zdCBnZXRXZWF0aGVyQXBpID0gYXdhaXQgZmV0Y2god2VhdGhlckFwaVVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICAgIGNvbnN0IGdldEZvcmVjYXN0QXBpID0gYXdhaXQgZmV0Y2goZm9yZWNhc3RBcGlVcmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXG4gICAgICAgIGlmICghZ2V0V2VhdGhlckFwaS5vayB8fCAhZ2V0Rm9yZWNhc3RBcGkub2spIHtcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXItY29udGVudCcpO1xuICAgICAgICAgICAgd2VhdGhlckluZm8uaW5uZXJIVE1MID0gJzxwPkVycm9yIDQwNCwgQ2l0eSBOb3QgRm91bmQhPC9wPic7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NpdHkgbm90IGZvdW5kIScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VXZWF0aGVyID0gYXdhaXQgZ2V0V2VhdGhlckFwaS5qc29uKCk7XG4gICAgICAgICAgICByZW5kZXJDdXJyZW50V2VhdGhlcihyZXNwb25zZVdlYXRoZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VXZWF0aGVyLCAnd2VhdGhlcicpO1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUZvcmVjYXN0ID0gYXdhaXQgZ2V0Rm9yZWNhc3RBcGkuanNvbigpO1xuICAgICAgICAgICAgcmVuZGVySG91cmx5Rm9yZWNhc3QocmVzcG9uc2VGb3JlY2FzdC5saXN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRm9yZWNhc3QsICdmb3JlY2FzdCBsaXN0Jyk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBmZXRjaFdlYXRoZXJEYXRhIGZyb20gJy4vd2VhdGhlcic7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVQcm9ncmFtKCkge1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG4gIGNvbnN0IGlzRW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcbiAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZmV0Y2hXZWF0aGVyRGF0YSgpKTtcbiAgaXNFbnRlci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgIGZldGNoV2VhdGhlckRhdGEoKTtcbiAgICB9XG4gIH0pXG59XG5pbml0aWFsaXplUHJvZ3JhbSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9