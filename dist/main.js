/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfWeek/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfWeek/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfWeek)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isWithinInterval/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isWithinInterval/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isWithinInterval)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var time = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var startTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.start).getTime();
  var endTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.end).getTime();

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }
  return time >= startTime && time <= endTime;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateTodo)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/endOfWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isWithinInterval/index.js");


class CreateTodo {
  constructor(title, dueDate, description, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
    this.id = CreateTodo.generateUniqueId();
    // console.log(`New Todo created with ID: ${this.id}`);
  }

  static saveDataToLocalStorage() {
    const dataToSave = {
      taskCategories: CreateTodo.taskCategories,
      projects: CreateTodo.projects,
    };

    localStorage.setItem('todoData', JSON.stringify(dataToSave));
  }

  static loadDataFromLocalStorage() {
    const savedData = localStorage.getItem('todoData');

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      // Restore taskCategories and other data
      CreateTodo.taskCategories = parsedData.taskCategories || {};
      CreateTodo.projects = parsedData.projects || [];
    }
  }

  static generateUniqueId() {
    if (!this.uniqueIdCounter) {
      this.uniqueIdCounter = 1;
    } else {
      this.uniqueIdCounter += 1;
    }
    return this.uniqueIdCounter;
  }

  static appendTodoToDisplay(paragraphContent) {
    const inboxTaskCard = document.querySelector('.inbox-task-card-container');
    const inboxTasks = CreateTodo.taskCategories[paragraphContent] || [];

    inboxTaskCard.innerHTML = '';

    inboxTasks.forEach((todo) => {
      const taskId = todo.id;

      const taskContent = `
                <div class="task-item" data-task-id="${taskId}">
                    <p><strong>Task Name:</strong>${todo.title}</p>
                    <p><strong>Description:</strong>${todo.description}</p>
                    <p><strong>Due Date:</strong> ${todo.dueDate}</p>
                    <p><strong>Priority:</strong>${todo.priority}</p>
                    <button class="deleteButton">Delete</button>
                </div>`;
      inboxTaskCard.insertAdjacentHTML('beforeend', taskContent);

      // Log the task information
      // console.log(`Task "${todo.title}" with ID ${taskId} displayed in ${paragraphContent}`);
      // console.log('Actual Due Date:', new Date(todo.dueDate));
      // console.log('Today:', startOfDay(new Date()));
      // console.log('Is Today Task:', isToday(new Date(todo.dueDate)));
    });

    // Check if the task is scheduled for Today or This Week
    const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date());
    const endOfWeekDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date());

    inboxTasks.forEach((todo) => {
      const taskId = todo.id;

      const isTodayTask = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(todo.dueDate)));
      const isThisWeekTask = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(
        (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(todo.dueDate)),
        { start: today, end: endOfWeekDate },
      );

      if (
        (paragraphContent === 'Today' && isTodayTask)
        || (paragraphContent === 'This Week' && isThisWeekTask)
      ) {
        const taskContent = `
                    <div class="task-item" data-task-id="${taskId}">
                        <p><strong>Task Name:</strong>${todo.title}</p>
                        <p><strong>Description:</strong>${todo.description}</p>
                        <p><strong>Due Date:</strong> ${todo.dueDate}</p>
                        <p><strong>Priority:</strong>${todo.priority}</p>
                        <button class="deleteButton">Delete</button>
                    </div>`;
        inboxTaskCard.insertAdjacentHTML('beforeend', taskContent);

        // Log the task information for Today or This Week
        console.log(
          `Task "${todo.title}" with ID ${taskId} displayed in ${paragraphContent} yolo`,
        );
        console.log('Actual Due Date:', new Date(todo.dueDate));
        console.log('Today:', (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date()));
        console.log('Is Today Task:', (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(todo.dueDate)));
      }
    });
    CreateTodo.saveDataToLocalStorage();
  }

  static taskCategories = {
    Inbox: [],
    Today: [],
    'This Week': [],
  };

  static handleAddTask(paragraphContent) {
    const nameElement = document.getElementById('name');
    const descriptionElement = document.getElementById('description');
    const dateElement = document.getElementById('date');
    const priorityElement = document.getElementById('priority');

    if (nameElement && descriptionElement && dateElement && priorityElement) {
      const name = nameElement.value;
      const description = descriptionElement.value;
      const date = dateElement.value;
      const priority = priorityElement.value;

      if (name !== '' && date !== '') {
        const todo = new CreateTodo(name, date, description, priority);

        if (Object.prototype.hasOwnProperty.call(CreateTodo.taskCategories, paragraphContent)) {
          CreateTodo.taskCategories[paragraphContent].push(todo);
        } else {
          CreateTodo.taskCategories[paragraphContent] = [todo];
        }
        CreateTodo.appendTodoToDisplay(paragraphContent);

        document.getElementById('taskForm').reset();
      } else {
        alert('You will at least need a name and due date');
      }
      // CreateTodo.myArr.forEach(todo => {
      //     console.log(todo.title, todo.dueDate, todo.description, todo.priority);
      // });
      // console.log(CreateTodo.taskCategories['Inbox']);
      // console.log(CreateTodo.taskCategories[paragraphContent],`paragraphContent is ${paragraphContent}`);
      // // console.log(CreateTodo.myArr[CreateTodo.myArr.length - 1],`paragraphContent is ${paragraphContent}`, 'todo');
      // console.log(CreateTodo.taskCategories,'check');
    }
    CreateTodo.saveDataToLocalStorage();
  }

  static deleteTask(taskItem, paragraphContent) {
    // const inboxTaskCard = document.querySelector('.inbox-task-card-container');
    const { taskId } = taskItem.dataset;

    taskItem.remove();

    CreateTodo.taskCategories[paragraphContent] = CreateTodo.taskCategories[
      paragraphContent
    ].filter((task) => task.id !== parseInt(taskId, 10));
    CreateTodo.saveDataToLocalStorage();
  }

  static buildProjectOrInbox(paragraphContent = 'Inbox') {
    const mainContent = document.querySelector('.main-content-container');
    if (paragraphContent === 'Today' || paragraphContent === 'This Week') {
      mainContent.innerHTML = `<div class="inbox-add-task">
                <h2>${paragraphContent}</h2>
                <div class="inbox-task-container"></div>
                <div class="inbox-task-card-container"></div>
            </div>`;
    } else {
      mainContent.innerHTML = `<div class="inbox-add-task">
                <h2>${paragraphContent}</h2>
                <button class="inbox-add-task-button"><span>+</span> Add Task</button>
                <div class="inbox-task-container"></div>
                <div class="inbox-task-card-container"></div>
            </div>`;
    }
    const inboxTaskCard = mainContent.querySelector('.inbox-task-container');
    const taskCardDisplayDelete = mainContent.querySelector(
      '.inbox-task-card-container',
    );
    let showTaskForm = false;

    const addTaskButton = mainContent.querySelector('.inbox-add-task-button');

    if (addTaskButton) {
      addTaskButton.addEventListener('click', () => {
        showTaskForm = !showTaskForm;
        renderTaskForm();
      });
    }

    inboxTaskCard.addEventListener('click', (event) => {
      const { target } = event;
      if (target.classList.contains('addTaskButton')) {
        CreateTodo.handleAddTask(paragraphContent);
        showTaskForm = !showTaskForm;
        renderTaskForm();
      } else if (target.classList.contains('deleteButton')) {
        showTaskForm = !showTaskForm;
        renderTaskForm();
      }
    });

    taskCardDisplayDelete.addEventListener('click', (event) => {
      const { target } = event;
      if (target.classList.contains('deleteButton')) {
        const taskItem = target.closest('.task-item');
        if (taskItem) {
          const paragraphContent = mainContent.querySelector('h2').textContent;
          CreateTodo.deleteTask(taskItem, paragraphContent);
        }
      }
    });

    function renderTaskForm() {
      if (showTaskForm) {
        inboxTaskCard.innerHTML = `
                    <form id="taskForm">
                        <div class="task-form-container">
                            <label for="name">Name:</label>
                            <input type="text" id="name" required>
        
                            <label for="description">Description:</label>
                            <textarea id="description" rows="4" required></textarea>
        
                            <label for="date">Date:</label>
                            <input type="date" id="date" required>
        
                            <label for="priority">Priority:</label>
                            <select id="priority" required>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
        
                            <button type="button" class="addTaskButton">Add Task</button>
                            <button type="button" class="deleteButton">Delete</button>
                        </div>
                    </form>`;
      } else {
        inboxTaskCard.innerHTML = '';
      }
    }

    CreateTodo.saveDataToLocalStorage();
  }

  static createProject() {
    const addProject = document.querySelector('.add-project');
    const addProjectContainer = document.querySelector(
      '.add-project-container',
    );
    let showProjectForm = false;

    addProject.addEventListener('click', (event) => {
      showProjectForm = !showProjectForm;
      event.stopPropagation();
      renderAddProject();
    });

    addProjectContainer.addEventListener('click', (event) => {
      const { target } = event;
      event.stopPropagation();
      if (target.classList.contains('add-project-button')) {
        CreateTodo.handleAddProject();
        showProjectForm = !showProjectForm;
        renderAddProject();
      } else if (target.classList.contains('cancel-project-button')) {
        showProjectForm = !showProjectForm;
        renderAddProject();
      }
    });

    function renderAddProject() {
      CreateTodo.renderAddProject(showProjectForm);
    }

    CreateTodo.saveDataToLocalStorage();
  }

  static renderAddProject(showProjectForm) {
    const addProjectContainer = document.querySelector(
      '.add-project-container',
    );
    if (showProjectForm) {
      addProjectContainer.innerHTML = `
                <div class="project-form-container">
                <input type="text" id="project-name" placeholder="Project Name">
                <button class="add-project-button">Add</button>
                <button class="cancel-project-button">Cancel</button>
                </div>`;
    } else {
      addProjectContainer.innerHTML = '';
    }
    CreateTodo.saveDataToLocalStorage();
  }

  static handleAddProject() {
    const newProjectContainer = document.querySelector(
      '.project-name-container',
    );
    const addProjectInput = document.querySelector('#project-name').value;

    if (addProjectInput === '') {
      alert('You will need a Project Name');
    } else {
      const newProjectElement = document.createElement('p');
      newProjectElement.textContent = addProjectInput;
      newProjectElement.classList.add('page-title');
      newProjectElement.classList.add('page-title-delete');
      newProjectContainer.appendChild(newProjectElement);
      CreateTodo.projects.push(addProjectInput);
      CreateTodo.saveDataToLocalStorage();
      console.log(CreateTodo.projects, 'projects');
    }
  }

  static initialize() {
    CreateTodo.loadDataFromLocalStorage();
    CreateTodo.deleteProjects();
  }

  static deleteProjects() {
    const deleteProjects = document.querySelectorAll('.page-title');

    deleteProjects.forEach((deleteProject) => {
      deleteProject.addEventListener('dblclick', (event) => {
        const { target } = event;

        if (target.classList.contains('page-title-delete')) {
          const projectName = target.textContent;

          CreateTodo.projects = CreateTodo.projects.filter(
            (project) => project !== projectName,
          );

          target.remove();

          CreateTodo.saveDataToLocalStorage();
        }
      });
    });
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");
// import {buildInbox} from './inbox.js';
// import {buildProject} from './project.js';


function isInboxOrProject() {
  const isInboxOrProjectNames = document.querySelectorAll('.page-title');
  _todolist__WEBPACK_IMPORTED_MODULE_0__["default"].initialize();
  isInboxOrProjectNames.forEach((element) => {
    element.addEventListener('click', (event) => {
      const { target } = event;
      const paragraphContent = target.textContent;
      if (paragraphContent === 'Today' || paragraphContent === 'This Week') {
        _todolist__WEBPACK_IMPORTED_MODULE_0__["default"].buildProjectOrInbox(paragraphContent);
        _todolist__WEBPACK_IMPORTED_MODULE_0__["default"].appendTodoToDisplay(paragraphContent);
      } else {
        _todolist__WEBPACK_IMPORTED_MODULE_0__["default"].buildProjectOrInbox(paragraphContent);
        _todolist__WEBPACK_IMPORTED_MODULE_0__["default"].handleAddTask(paragraphContent);
        _todolist__WEBPACK_IMPORTED_MODULE_0__["default"].appendTodoToDisplay(paragraphContent);
      }
    });
  });
  _todolist__WEBPACK_IMPORTED_MODULE_0__["default"].createProject();
}

// Your existing code here
isInboxOrProject();
// CreateTodo.initialize();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQ05BLFdBQVcsWUFBWTtBQUN2QixXQUFXLGNBQWM7QUFDVzs7QUFFcEM7QUFDQTtBQUNBLEVBQUUsaURBQVU7QUFDWjtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQSxRQUFRLGlEQUFVO0FBQ2xCLFFBQVEsaURBQVU7QUFDbEIsUUFBUTtBQUNSLFFBQVEsaURBQVU7QUFDbEIsUUFBUSxpREFBVTtBQUNsQixRQUFRLGlEQUFVO0FBQ2xCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFLGlEQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNXaXRoaW5JbnRlcnZhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU2F0IFNlcCAwNiAyMDE0IDIzOjU5OjU5Ljk5OVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgZW5kIG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IFN1biBTZXAgMDcgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gLTcgOiAwKSArIDYgLSAoZGF5IC0gd2Vla1N0YXJ0c09uKTtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNXaXRoaW5JbnRlcnZhbFxuICogQGNhdGVnb3J5IEludGVydmFsIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsPyAoSW5jbHVkaW5nIHN0YXJ0IGFuZCBlbmQuKVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtJbnRlcnZhbH0gaW50ZXJ2YWwgLSB0aGUgaW50ZXJ2YWwgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB3aXRoaW4gdGhlIGludGVydmFsXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBUaGUgc3RhcnQgb2YgYW4gaW50ZXJ2YWwgY2Fubm90IGJlIGFmdGVyIGl0cyBlbmRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IERhdGUgaW4gaW50ZXJ2YWwgY2Fubm90IGJlIGBJbnZhbGlkIERhdGVgXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsOlxuICogaXNXaXRoaW5JbnRlcnZhbChuZXcgRGF0ZSgyMDE0LCAwLCAzKSwge1xuICogICBzdGFydDogbmV3IERhdGUoMjAxNCwgMCwgMSksXG4gKiAgIGVuZDogbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqIH0pXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBkYXRlIG91dHNpZGUgb2YgdGhlIGludGVydmFsOlxuICogaXNXaXRoaW5JbnRlcnZhbChuZXcgRGF0ZSgyMDE0LCAwLCAxMCksIHtcbiAqICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTQsIDAsIDEpLFxuICogICBlbmQ6IG5ldyBEYXRlKDIwMTQsIDAsIDcpXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgZGF0ZSBlcXVhbCB0byBpbnRlcnZhbCBzdGFydDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwoZGF0ZSwgeyBzdGFydCwgZW5kOiBkYXRlIH0pIC8vID0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGRhdGUgZXF1YWwgdG8gaW50ZXJ2YWwgZW5kOlxuICogaXNXaXRoaW5JbnRlcnZhbChkYXRlLCB7IHN0YXJ0OiBkYXRlLCBlbmQgfSkgLy8gPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1dpdGhpbkludGVydmFsKGRpcnR5RGF0ZSwgaW50ZXJ2YWwpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgc3RhcnRUaW1lID0gdG9EYXRlKGludGVydmFsLnN0YXJ0KS5nZXRUaW1lKCk7XG4gIHZhciBlbmRUaW1lID0gdG9EYXRlKGludGVydmFsLmVuZCkuZ2V0VGltZSgpO1xuXG4gIC8vIFRocm93IGFuIGV4Y2VwdGlvbiBpZiBzdGFydCBkYXRlIGlzIGFmdGVyIGVuZCBkYXRlIG9yIGlmIGFueSBkYXRlIGlzIGBJbnZhbGlkIERhdGVgXG4gIGlmICghKHN0YXJ0VGltZSA8PSBlbmRUaW1lKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIGludGVydmFsJyk7XG4gIH1cbiAgcmV0dXJuIHRpbWUgPj0gc3RhcnRUaW1lICYmIHRpbWUgPD0gZW5kVGltZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7XG4gIGlzVG9kYXksXG4gIHN0YXJ0T2ZEYXksXG4gIGVuZE9mV2VlayxcbiAgaXNXaXRoaW5JbnRlcnZhbCxcbn0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVUb2RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5pZCA9IENyZWF0ZVRvZG8uZ2VuZXJhdGVVbmlxdWVJZCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBOZXcgVG9kbyBjcmVhdGVkIHdpdGggSUQ6ICR7dGhpcy5pZH1gKTtcbiAgfVxuXG4gIHN0YXRpYyBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKCkge1xuICAgIGNvbnN0IGRhdGFUb1NhdmUgPSB7XG4gICAgICB0YXNrQ2F0ZWdvcmllczogQ3JlYXRlVG9kby50YXNrQ2F0ZWdvcmllcyxcbiAgICAgIHByb2plY3RzOiBDcmVhdGVUb2RvLnByb2plY3RzLFxuICAgIH07XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhVG9TYXZlKSk7XG4gIH1cblxuICBzdGF0aWMgbG9hZERhdGFGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGNvbnN0IHNhdmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvRGF0YScpO1xuXG4gICAgaWYgKHNhdmVkRGF0YSkge1xuICAgICAgY29uc3QgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2Uoc2F2ZWREYXRhKTtcblxuICAgICAgLy8gUmVzdG9yZSB0YXNrQ2F0ZWdvcmllcyBhbmQgb3RoZXIgZGF0YVxuICAgICAgQ3JlYXRlVG9kby50YXNrQ2F0ZWdvcmllcyA9IHBhcnNlZERhdGEudGFza0NhdGVnb3JpZXMgfHwge307XG4gICAgICBDcmVhdGVUb2RvLnByb2plY3RzID0gcGFyc2VkRGF0YS5wcm9qZWN0cyB8fCBbXTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2VuZXJhdGVVbmlxdWVJZCgpIHtcbiAgICBpZiAoIXRoaXMudW5pcXVlSWRDb3VudGVyKSB7XG4gICAgICB0aGlzLnVuaXF1ZUlkQ291bnRlciA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5pcXVlSWRDb3VudGVyICs9IDE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVuaXF1ZUlkQ291bnRlcjtcbiAgfVxuXG4gIHN0YXRpYyBhcHBlbmRUb2RvVG9EaXNwbGF5KHBhcmFncmFwaENvbnRlbnQpIHtcbiAgICBjb25zdCBpbmJveFRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LXRhc2stY2FyZC1jb250YWluZXInKTtcbiAgICBjb25zdCBpbmJveFRhc2tzID0gQ3JlYXRlVG9kby50YXNrQ2F0ZWdvcmllc1twYXJhZ3JhcGhDb250ZW50XSB8fCBbXTtcblxuICAgIGluYm94VGFza0NhcmQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpbmJveFRhc2tzLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IHRvZG8uaWQ7XG5cbiAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWl0ZW1cIiBkYXRhLXRhc2staWQ9XCIke3Rhc2tJZH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5UYXNrIE5hbWU6PC9zdHJvbmc+JHt0b2RvLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5EZXNjcmlwdGlvbjo8L3N0cm9uZz4ke3RvZG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkR1ZSBEYXRlOjwvc3Ryb25nPiAke3RvZG8uZHVlRGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+UHJpb3JpdHk6PC9zdHJvbmc+JHt0b2RvLnByaW9yaXR5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZUJ1dHRvblwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICBpbmJveFRhc2tDYXJkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGFza0NvbnRlbnQpO1xuXG4gICAgICAvLyBMb2cgdGhlIHRhc2sgaW5mb3JtYXRpb25cbiAgICAgIC8vIGNvbnNvbGUubG9nKGBUYXNrIFwiJHt0b2RvLnRpdGxlfVwiIHdpdGggSUQgJHt0YXNrSWR9IGRpc3BsYXllZCBpbiAke3BhcmFncmFwaENvbnRlbnR9YCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnQWN0dWFsIER1ZSBEYXRlOicsIG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSkpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ1RvZGF5OicsIHN0YXJ0T2ZEYXkobmV3IERhdGUoKSkpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ0lzIFRvZGF5IFRhc2s6JywgaXNUb2RheShuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpKSk7XG4gICAgfSk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgdGFzayBpcyBzY2hlZHVsZWQgZm9yIFRvZGF5IG9yIFRoaXMgV2Vla1xuICAgIGNvbnN0IHRvZGF5ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgpKTtcbiAgICBjb25zdCBlbmRPZldlZWtEYXRlID0gZW5kT2ZXZWVrKG5ldyBEYXRlKCkpO1xuXG4gICAgaW5ib3hUYXNrcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSWQgPSB0b2RvLmlkO1xuXG4gICAgICBjb25zdCBpc1RvZGF5VGFzayA9IGlzVG9kYXkoc3RhcnRPZkRheShuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpKSk7XG4gICAgICBjb25zdCBpc1RoaXNXZWVrVGFzayA9IGlzV2l0aGluSW50ZXJ2YWwoXG4gICAgICAgIHN0YXJ0T2ZEYXkobmV3IERhdGUodG9kby5kdWVEYXRlKSksXG4gICAgICAgIHsgc3RhcnQ6IHRvZGF5LCBlbmQ6IGVuZE9mV2Vla0RhdGUgfSxcbiAgICAgICk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKHBhcmFncmFwaENvbnRlbnQgPT09ICdUb2RheScgJiYgaXNUb2RheVRhc2spXG4gICAgICAgIHx8IChwYXJhZ3JhcGhDb250ZW50ID09PSAnVGhpcyBXZWVrJyAmJiBpc1RoaXNXZWVrVGFzaylcbiAgICAgICkge1xuICAgICAgICBjb25zdCB0YXNrQ29udGVudCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2staXRlbVwiIGRhdGEtdGFzay1pZD1cIiR7dGFza0lkfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5UYXNrIE5hbWU6PC9zdHJvbmc+JHt0b2RvLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RGVzY3JpcHRpb246PC9zdHJvbmc+JHt0b2RvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RHVlIERhdGU6PC9zdHJvbmc+ICR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+UHJpb3JpdHk6PC9zdHJvbmc+JHt0b2RvLnByaW9yaXR5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVCdXR0b25cIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgaW5ib3hUYXNrQ2FyZC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRhc2tDb250ZW50KTtcblxuICAgICAgICAvLyBMb2cgdGhlIHRhc2sgaW5mb3JtYXRpb24gZm9yIFRvZGF5IG9yIFRoaXMgV2Vla1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBgVGFzayBcIiR7dG9kby50aXRsZX1cIiB3aXRoIElEICR7dGFza0lkfSBkaXNwbGF5ZWQgaW4gJHtwYXJhZ3JhcGhDb250ZW50fSB5b2xvYCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0FjdHVhbCBEdWUgRGF0ZTonLCBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1RvZGF5OicsIHN0YXJ0T2ZEYXkobmV3IERhdGUoKSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnSXMgVG9kYXkgVGFzazonLCBpc1RvZGF5KG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBDcmVhdGVUb2RvLnNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YXNrQ2F0ZWdvcmllcyA9IHtcbiAgICBJbmJveDogW10sXG4gICAgVG9kYXk6IFtdLFxuICAgICdUaGlzIFdlZWsnOiBbXSxcbiAgfTtcblxuICBzdGF0aWMgaGFuZGxlQWRkVGFzayhwYXJhZ3JhcGhDb250ZW50KSB7XG4gICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKTtcblxuICAgIGlmIChuYW1lRWxlbWVudCAmJiBkZXNjcmlwdGlvbkVsZW1lbnQgJiYgZGF0ZUVsZW1lbnQgJiYgcHJpb3JpdHlFbGVtZW50KSB7XG4gICAgICBjb25zdCBuYW1lID0gbmFtZUVsZW1lbnQudmFsdWU7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uRWxlbWVudC52YWx1ZTtcbiAgICAgIGNvbnN0IGRhdGUgPSBkYXRlRWxlbWVudC52YWx1ZTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlFbGVtZW50LnZhbHVlO1xuXG4gICAgICBpZiAobmFtZSAhPT0gJycgJiYgZGF0ZSAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBDcmVhdGVUb2RvKG5hbWUsIGRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSk7XG5cbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChDcmVhdGVUb2RvLnRhc2tDYXRlZ29yaWVzLCBwYXJhZ3JhcGhDb250ZW50KSkge1xuICAgICAgICAgIENyZWF0ZVRvZG8udGFza0NhdGVnb3JpZXNbcGFyYWdyYXBoQ29udGVudF0ucHVzaCh0b2RvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBDcmVhdGVUb2RvLnRhc2tDYXRlZ29yaWVzW3BhcmFncmFwaENvbnRlbnRdID0gW3RvZG9dO1xuICAgICAgICB9XG4gICAgICAgIENyZWF0ZVRvZG8uYXBwZW5kVG9kb1RvRGlzcGxheShwYXJhZ3JhcGhDb250ZW50KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Zvcm0nKS5yZXNldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1lvdSB3aWxsIGF0IGxlYXN0IG5lZWQgYSBuYW1lIGFuZCBkdWUgZGF0ZScpO1xuICAgICAgfVxuICAgICAgLy8gQ3JlYXRlVG9kby5teUFyci5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRvZG8udGl0bGUsIHRvZG8uZHVlRGF0ZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5wcmlvcml0eSk7XG4gICAgICAvLyB9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKENyZWF0ZVRvZG8udGFza0NhdGVnb3JpZXNbJ0luYm94J10pO1xuICAgICAgLy8gY29uc29sZS5sb2coQ3JlYXRlVG9kby50YXNrQ2F0ZWdvcmllc1twYXJhZ3JhcGhDb250ZW50XSxgcGFyYWdyYXBoQ29udGVudCBpcyAke3BhcmFncmFwaENvbnRlbnR9YCk7XG4gICAgICAvLyAvLyBjb25zb2xlLmxvZyhDcmVhdGVUb2RvLm15QXJyW0NyZWF0ZVRvZG8ubXlBcnIubGVuZ3RoIC0gMV0sYHBhcmFncmFwaENvbnRlbnQgaXMgJHtwYXJhZ3JhcGhDb250ZW50fWAsICd0b2RvJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhDcmVhdGVUb2RvLnRhc2tDYXRlZ29yaWVzLCdjaGVjaycpO1xuICAgIH1cbiAgICBDcmVhdGVUb2RvLnNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVUYXNrKHRhc2tJdGVtLCBwYXJhZ3JhcGhDb250ZW50KSB7XG4gICAgLy8gY29uc3QgaW5ib3hUYXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10YXNrLWNhcmQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgeyB0YXNrSWQgfSA9IHRhc2tJdGVtLmRhdGFzZXQ7XG5cbiAgICB0YXNrSXRlbS5yZW1vdmUoKTtcblxuICAgIENyZWF0ZVRvZG8udGFza0NhdGVnb3JpZXNbcGFyYWdyYXBoQ29udGVudF0gPSBDcmVhdGVUb2RvLnRhc2tDYXRlZ29yaWVzW1xuICAgICAgcGFyYWdyYXBoQ29udGVudFxuICAgIF0uZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBwYXJzZUludCh0YXNrSWQsIDEwKSk7XG4gICAgQ3JlYXRlVG9kby5zYXZlRGF0YVRvTG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICBzdGF0aWMgYnVpbGRQcm9qZWN0T3JJbmJveChwYXJhZ3JhcGhDb250ZW50ID0gJ0luYm94Jykge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudC1jb250YWluZXInKTtcbiAgICBpZiAocGFyYWdyYXBoQ29udGVudCA9PT0gJ1RvZGF5JyB8fCBwYXJhZ3JhcGhDb250ZW50ID09PSAnVGhpcyBXZWVrJykge1xuICAgICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJpbmJveC1hZGQtdGFza1wiPlxuICAgICAgICAgICAgICAgIDxoMj4ke3BhcmFncmFwaENvbnRlbnR9PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ib3gtdGFzay1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ib3gtdGFzay1jYXJkLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJpbmJveC1hZGQtdGFza1wiPlxuICAgICAgICAgICAgICAgIDxoMj4ke3BhcmFncmFwaENvbnRlbnR9PC9oMj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaW5ib3gtYWRkLXRhc2stYnV0dG9uXCI+PHNwYW4+Kzwvc3Bhbj4gQWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ib3gtdGFzay1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ib3gtdGFzay1jYXJkLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICB9XG4gICAgY29uc3QgaW5ib3hUYXNrQ2FyZCA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10YXNrLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRhc2tDYXJkRGlzcGxheURlbGV0ZSA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLmluYm94LXRhc2stY2FyZC1jb250YWluZXInLFxuICAgICk7XG4gICAgbGV0IHNob3dUYXNrRm9ybSA9IGZhbHNlO1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC1hZGQtdGFzay1idXR0b24nKTtcblxuICAgIGlmIChhZGRUYXNrQnV0dG9uKSB7XG4gICAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzaG93VGFza0Zvcm0gPSAhc2hvd1Rhc2tGb3JtO1xuICAgICAgICByZW5kZXJUYXNrRm9ybSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5ib3hUYXNrQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZFRhc2tCdXR0b24nKSkge1xuICAgICAgICBDcmVhdGVUb2RvLmhhbmRsZUFkZFRhc2socGFyYWdyYXBoQ29udGVudCk7XG4gICAgICAgIHNob3dUYXNrRm9ybSA9ICFzaG93VGFza0Zvcm07XG4gICAgICAgIHJlbmRlclRhc2tGb3JtKCk7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZUJ1dHRvbicpKSB7XG4gICAgICAgIHNob3dUYXNrRm9ybSA9ICFzaG93VGFza0Zvcm07XG4gICAgICAgIHJlbmRlclRhc2tGb3JtKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0YXNrQ2FyZERpc3BsYXlEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVCdXR0b24nKSkge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IHRhcmdldC5jbG9zZXN0KCcudGFzay1pdGVtJyk7XG4gICAgICAgIGlmICh0YXNrSXRlbSkge1xuICAgICAgICAgIGNvbnN0IHBhcmFncmFwaENvbnRlbnQgPSBtYWluQ29udGVudC5xdWVyeVNlbGVjdG9yKCdoMicpLnRleHRDb250ZW50O1xuICAgICAgICAgIENyZWF0ZVRvZG8uZGVsZXRlVGFzayh0YXNrSXRlbSwgcGFyYWdyYXBoQ29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclRhc2tGb3JtKCkge1xuICAgICAgaWYgKHNob3dUYXNrRm9ybSkge1xuICAgICAgICBpbmJveFRhc2tDYXJkLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJ0YXNrRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIHJvd3M9XCI0XCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgcmVxdWlyZWQ+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInByaW9yaXR5XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGRUYXNrQnV0dG9uXCI+QWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRlbGV0ZUJ1dHRvblwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5ib3hUYXNrQ2FyZC5pbm5lckhUTUwgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDcmVhdGVUb2RvLnNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcuYWRkLXByb2plY3QtY29udGFpbmVyJyxcbiAgICApO1xuICAgIGxldCBzaG93UHJvamVjdEZvcm0gPSBmYWxzZTtcblxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIHNob3dQcm9qZWN0Rm9ybSA9ICFzaG93UHJvamVjdEZvcm07XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJlbmRlckFkZFByb2plY3QoKTtcbiAgICB9KTtcblxuICAgIGFkZFByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1wcm9qZWN0LWJ1dHRvbicpKSB7XG4gICAgICAgIENyZWF0ZVRvZG8uaGFuZGxlQWRkUHJvamVjdCgpO1xuICAgICAgICBzaG93UHJvamVjdEZvcm0gPSAhc2hvd1Byb2plY3RGb3JtO1xuICAgICAgICByZW5kZXJBZGRQcm9qZWN0KCk7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbmNlbC1wcm9qZWN0LWJ1dHRvbicpKSB7XG4gICAgICAgIHNob3dQcm9qZWN0Rm9ybSA9ICFzaG93UHJvamVjdEZvcm07XG4gICAgICAgIHJlbmRlckFkZFByb2plY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckFkZFByb2plY3QoKSB7XG4gICAgICBDcmVhdGVUb2RvLnJlbmRlckFkZFByb2plY3Qoc2hvd1Byb2plY3RGb3JtKTtcbiAgICB9XG5cbiAgICBDcmVhdGVUb2RvLnNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJBZGRQcm9qZWN0KHNob3dQcm9qZWN0Rm9ybSkge1xuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5hZGQtcHJvamVjdC1jb250YWluZXInLFxuICAgICk7XG4gICAgaWYgKHNob3dQcm9qZWN0Rm9ybSkge1xuICAgICAgYWRkUHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3QtbmFtZVwiIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBOYW1lXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1wcm9qZWN0LWJ1dHRvblwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWwtcHJvamVjdC1idXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbiAgICBDcmVhdGVUb2RvLnNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVBZGRQcm9qZWN0KCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5wcm9qZWN0LW5hbWUtY29udGFpbmVyJyxcbiAgICApO1xuICAgIGNvbnN0IGFkZFByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKS52YWx1ZTtcblxuICAgIGlmIChhZGRQcm9qZWN0SW5wdXQgPT09ICcnKSB7XG4gICAgICBhbGVydCgnWW91IHdpbGwgbmVlZCBhIFByb2plY3QgTmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIG5ld1Byb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gYWRkUHJvamVjdElucHV0O1xuICAgICAgbmV3UHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZScpO1xuICAgICAgbmV3UHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZS1kZWxldGUnKTtcbiAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEVsZW1lbnQpO1xuICAgICAgQ3JlYXRlVG9kby5wcm9qZWN0cy5wdXNoKGFkZFByb2plY3RJbnB1dCk7XG4gICAgICBDcmVhdGVUb2RvLnNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKENyZWF0ZVRvZG8ucHJvamVjdHMsICdwcm9qZWN0cycpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsaXplKCkge1xuICAgIENyZWF0ZVRvZG8ubG9hZERhdGFGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgQ3JlYXRlVG9kby5kZWxldGVQcm9qZWN0cygpO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZVByb2plY3RzKCkge1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2UtdGl0bGUnKTtcblxuICAgIGRlbGV0ZVByb2plY3RzLmZvckVhY2goKGRlbGV0ZVByb2plY3QpID0+IHtcbiAgICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLXRpdGxlLWRlbGV0ZScpKSB7XG4gICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgICBDcmVhdGVUb2RvLnByb2plY3RzID0gQ3JlYXRlVG9kby5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdCAhPT0gcHJvamVjdE5hbWUsXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHRhcmdldC5yZW1vdmUoKTtcblxuICAgICAgICAgIENyZWF0ZVRvZG8uc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCB7YnVpbGRJbmJveH0gZnJvbSAnLi9pbmJveC5qcyc7XG4vLyBpbXBvcnQge2J1aWxkUHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBDcmVhdGVUb2RvIGZyb20gJy4vdG9kb2xpc3QnO1xuXG5mdW5jdGlvbiBpc0luYm94T3JQcm9qZWN0KCkge1xuICBjb25zdCBpc0luYm94T3JQcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZS10aXRsZScpO1xuICBDcmVhdGVUb2RvLmluaXRpYWxpemUoKTtcbiAgaXNJbmJveE9yUHJvamVjdE5hbWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gICAgICBjb25zdCBwYXJhZ3JhcGhDb250ZW50ID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgaWYgKHBhcmFncmFwaENvbnRlbnQgPT09ICdUb2RheScgfHwgcGFyYWdyYXBoQ29udGVudCA9PT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgICAgQ3JlYXRlVG9kby5idWlsZFByb2plY3RPckluYm94KHBhcmFncmFwaENvbnRlbnQpO1xuICAgICAgICBDcmVhdGVUb2RvLmFwcGVuZFRvZG9Ub0Rpc3BsYXkocGFyYWdyYXBoQ29udGVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBDcmVhdGVUb2RvLmJ1aWxkUHJvamVjdE9ySW5ib3gocGFyYWdyYXBoQ29udGVudCk7XG4gICAgICAgIENyZWF0ZVRvZG8uaGFuZGxlQWRkVGFzayhwYXJhZ3JhcGhDb250ZW50KTtcbiAgICAgICAgQ3JlYXRlVG9kby5hcHBlbmRUb2RvVG9EaXNwbGF5KHBhcmFncmFwaENvbnRlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgQ3JlYXRlVG9kby5jcmVhdGVQcm9qZWN0KCk7XG59XG5cbi8vIFlvdXIgZXhpc3RpbmcgY29kZSBoZXJlXG5pc0luYm94T3JQcm9qZWN0KCk7XG4vLyBDcmVhdGVUb2RvLmluaXRpYWxpemUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==