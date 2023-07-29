"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _react2 = _interopRequireDefault(require("@fullcalendar/react"));
var _daygrid = _interopRequireDefault(require("@fullcalendar/daygrid"));
var _timegrid = _interopRequireDefault(require("@fullcalendar/timegrid"));
var _interaction = _interopRequireDefault(require("@fullcalendar/interaction"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // import React, { useEffect, useState } from 'react';
// import moment from 'moment';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import styles from './styles.module.css';
// import axios from 'axios';
// const Calendar = () => {
//   const reservations = {};
//   const [calendarEvents, setCalendarEvents] = useState([]);
//   // const [dane, ustawDane] = useState([]);
//   // const [message, setMessage] = useState('');
//   // const [accountDetails, setAccountDetails] = useState(null);
//   // const [passwordData, setPasswordData] = useState({
//   //     currentPassword: '',
//   //     newPassword: '',
//   //     confirmPassword: ''
//   // });
//   // const [passwordMessage, setPasswordMessage] = useState('');
//   const handleLogout = () => {
//       localStorage.removeItem('token');
//       window.location.href = '/onas';
//       // window.location.reload();
//   };
//   const handleCennik = () =>{
//       window.location.href = '/cennik';
//   }
//   const handleDetails = () =>{
//       window.location.href = '/details';
//   }
//   const handleNavigateToOnas = () => {
//       // Dodaj kod obsługi kliknięcia dla strony głównej "O nas"
//       // Przykład przekierowania do strony "O nas"
//       window.location.href = '/onas';
//   };
//   const handleCalendar = () => {
//       // e.preventDefault();
//       // const token = localStorage.getItem('token');
//       window.location.href = '/calendar';
//   };
//   const handleLogin = () => {
//       // Dodaj kod obsługi kliknięcia dla przycisku "Login"
//       // Przykład przekierowania do strony logowania
//       window.location.href = '/login';
//   };
//   const isLoggedIn = !!localStorage.getItem('token');
//   const adjustEventWidths = () => {
//     const eventElements = document.getElementsByClassName(styles['fc-event']);
//     for (let i = 0; i < eventElements.length; i++) {
//       const eventTitle = eventElements[i].querySelector(`.${styles['fc-title']}`);
//       const eventPlace = eventElements[i].querySelector(`.${styles.place}`);
//       const eventTitleWidth = eventTitle.offsetWidth;
//       const eventPlaceWidth = eventPlace.offsetWidth;
//       const maxWidth = Math.max(eventTitleWidth, eventPlaceWidth);
//       eventElements[i].style.minWidth = `${maxWidth}px`;
//     }
//     console.log('Dopasowywanie szerokości wydarzeń...');
//   };
//   const handleAddEventClick = () => {
//     const date = document.getElementById('eventDate').value;
//     const startTime = document.getElementById('eventStartTime').value;
//     const endTime = document.getElementById('eventEndTime').value;
//     const place = document.getElementById('eventPlace').value;
//     const startMoment = moment(`${date}T${startTime}`, 'YYYY-MM-DDTHH:mm');
//     const endMoment = moment(`${date}T${endTime}`, 'YYYY-MM-DDTHH:mm');
//     const duration = moment.duration(endMoment.diff(startMoment)).asHours();
//     const isConflict = calendarEvents.some(event => {
//       const eventStart = moment(event.start);
//       const eventEnd = moment(event.end);
//       const startMoment = moment(`${date}T${startTime}`, 'YYYY-MM-DDTHH:mm');
//       const endMoment = moment(`${date}T${endTime}`, 'YYYY-MM-DDTHH:mm');
//       return event.place === place && startMoment.isBefore(eventEnd) && endMoment.isAfter(eventStart);
//     });
//     console.log("hej");
//     if (isConflict) {
//       alert('Miejsce jest już zarezerwowane w wybranym przedziale czasowym!');
//       return;
//     }
//     if (duration > 2) {
//       alert('Długość treningu nie może przekraczać 2 godzin!');
//       return;
//     } else if (duration < 1) {
//       alert('Długość treningu nie może być krótsza niż 1 godzina!');
//       return;
//     }
//     for (let m = startMoment.clone(); m.isBefore(endMoment); m.add(1, 'minute')) {
//       const hour = m.format('HH:mm');
//       const isHourReserved = reservations[hour] && reservations[hour].includes(place);
//       if (isHourReserved) {
//         alert('Miejsce jest już zarezerwowane w wybranym przedziale czasowym!');
//         return;
//       }
//       const nextHour = m.clone().add(1, 'minute').format('HH:mm');
//       const isNextHourReserved = reservations[nextHour] && reservations[nextHour].includes(place);
//       if (isNextHourReserved) {
//         alert('Miejsce jest już zarezerwowane w wybranym przedziale czasowym!');
//         return;
//       }
//     }
//     for (let m = startMoment.clone(); m.isBefore(endMoment); m.add(1, 'hour')) {
//       const hour = m.format('HH:mm');
//       if (!reservations[hour]) {
//         reservations[hour] = [];
//       }
//       reservations[hour].push(place);
//     }
//     const newEvent = {
//       title: 'Trening ' + place,
//       start: startMoment.toISOString(),
//       end: endMoment.toISOString(),
//       place: place,
//     };
//     console.log('Dodawanie nowego wydarzenia:', newEvent);
//     // Wywołanie endpointu na serwerze za pomocą Axios
//     axios.post('http://localhost:8080/api/users/calendar', [newEvent])
//       .then(response => {
//         // Otrzymane dane z odpowiedzi serwera (jeśli są wymagane)
//         console.log(response.data);
//         // Dodatkowe manipulacje na podstawie odpowiedzi serwera
//         // np. odświeżenie danych w kalendarzu
//       })
//       .catch(error => {
//         console.error('Wystąpił błąd:', error);
//       });
//     setCalendarEvents((prevEvents) => [...prevEvents, newEvent]);
//     document.getElementById('eventDate').value = '';
//     document.getElementById('eventStartTime').value = '';
//     document.getElementById('eventEndTime').value = '';
//     document.getElementById('eventPlace').value = '';
//     adjustEventWidths();
//   };
//   useEffect(() => {
//     adjustEventWidths();
//         // Pobranie treningów z serwera przy montowaniu komponentu
//         axios
//         .get('http://localhost:8080/api/users/calendar')
//         .then(response => {
//           // Przetworzenie danych treningów na format wymagany przez FullCalendar
//           const events = response.data.map(event => ({
//             title: event.title,
//             start: event.start,
//             end: event.end,
//             place: event.place,
//           }));
//           setCalendarEvents(events);
//         })
//         .catch(error => {
//           console.error('Wystąpił błąd:', error);
//         });
//   }, []);
//   return (
//     <div>
//                <nav className={styles.navbar}>
//     <h1>
//       <button className={styles.white_btn}>
//         <h1>Akademia Tenisa AT</h1>
//       </button>
//     </h1>
//     <button className={styles.white_btn} onClick={handleNavigateToOnas}>
//       O nas
//     </button>
//     <button className={styles.white_btn} onClick={handleCalendar}>
//       Terminarz
//     </button>
//     <button className={styles.white_btn} onClick={handleCennik}>Cennik</button>
//     {isLoggedIn ? (
// <>
// <button className={styles.white_btn} onClick={handleDetails}>
//   Szczegóły konta
// </button>
// <button className={styles.white_btn} onClick={handleLogout}>
//   Logout
// </button>
// </>
// ) : (
// <button className={styles.white_btn} onClick={handleLogin}>
// Login
// </button>
// )}
//   </nav>
//       <div className={`${styles['container-fluid']} ${styles['mt-12']}`}>
//         <div className={styles['row']}>
//           <div className={styles['col-md-9']}>
//             <FullCalendar
//               plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//               initialView="timeGridWeek"
//               events={calendarEvents}
//             />
//           </div>
//           {isLoggedIn ? (
// <>
//           <div className={styles['col-md-3']}>
//             <h2 className={styles['text-right']}>Dodaj trening</h2>
//             <div className={styles['form-group']}>
//               <label htmlFor="eventDate">Data:</label>
//               <input type="date" className={styles['form-control']} id="eventDate" />
//             </div>
//             <div className={styles['form-group']}>
//               <label htmlFor="eventStartTime">Czas rozpoczęcia:</label>
//               <input type="time" className={styles['form-control']} id="eventStartTime" />
//             </div>
//             <div className={styles['form-group']}>
//               <label htmlFor="eventEndTime">Czas zakończenia:</label>
//               <input type="time" className={styles['form-control']} id="eventEndTime" />
//             </div>
//             <div className={styles['form-group']}>
//               <label htmlFor="eventPlace">Miejsce:</label>
//               <select className={styles['form-control']} id="eventPlace">
//                 <option value="LKT">LKT</option>
//                 <option value="KUL">KUL</option>
//               </select>
//             </div>
//             <button
//               id="addEventButton"
//               className={`${styles['btn']} ${styles['btn-primary']}`} 
//               onClick={handleAddEventClick}
//             >
//               Dodaj trening
//             </button>
//           </div>
//           </>
// ) : (
//   <div className={styles['col-md-3']}>
//   <h2 class={styles['text-right']}>Brak autoryzacji</h2>
//   <p>Aby dodać trening, musisz być zalogowany.</p>
//   <button className={`${styles['btn']} ${styles['btn-primary']}`} onClick={handleLogin}>
// Login
// </button>
// </div>
// )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Calendar;
var Calendar = function Calendar() {
  // const [formData, setFormData] = useState({}); 
  var reservations = {};
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    calendarEvents = _useState2[0],
    setCalendarEvents = _useState2[1];
  // const [dane, ustawDane] = useState([]);
  // const [message, setMessage] = useState('');
  // const [accountDetails, setAccountDetails] = useState(null);
  // const [passwordData, setPasswordData] = useState({
  //     currentPassword: '',
  //     newPassword: '',
  //     confirmPassword: ''
  // });
  // const [passwordMessage, setPasswordMessage] = useState('');

  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    userEmail = _useState4[0],
    setUserEmail = _useState4[1];
  var handleLogout = function handleLogout() {
    localStorage.removeItem('token');
    window.location.href = '/onas';
    // window.location.reload();
  };

  var handleCennik = function handleCennik() {
    window.location.href = '/cennik';
  };
  var handleDetails = function handleDetails() {
    window.location.href = '/details';
  };
  var handleNavigateToOnas = function handleNavigateToOnas() {
    window.location.href = '/onas';
  };
  var handleCalendar = function handleCalendar() {
    // e.preventDefault();
    // const token = localStorage.getItem('token');

    window.location.href = '/calendar';
  };
  var handleLogin = function handleLogin() {
    window.location.href = '/login';
  };
  var isLoggedIn = !!localStorage.getItem('token');
  var adjustEventWidths = function adjustEventWidths() {
    var eventElements = document.getElementsByClassName(_stylesModule.default['fc-event']);
    for (var i = 0; i < eventElements.length; i++) {
      var eventTitle = eventElements[i].querySelector(".".concat(_stylesModule.default['fc-title']));
      var eventPlace = eventElements[i].querySelector(".".concat(_stylesModule.default.place));
      var eventTitleWidth = eventTitle.offsetWidth;
      var eventPlaceWidth = eventPlace.offsetWidth;
      var maxWidth = Math.max(eventTitleWidth, eventPlaceWidth);
      eventElements[i].style.minWidth = "".concat(maxWidth, "px");
    }
    console.log('Dopasowywanie szerokości wydarzeń...');
  };
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  var handleAddEventClick = function handleAddEventClick() {
    var date = document.getElementById('eventDate').value;
    var startTime = document.getElementById('eventStartTime').value;
    var endTime = document.getElementById('eventEndTime').value;
    var place = document.getElementById('eventPlace').value;
    // Dodaj kod sprawdzający, czy wybrany czas jest co najmniej 12 godzin wcześniejszy od obecnego czasu
    var selectedDateTime = (0, _moment.default)("".concat(date, "T").concat(startTime), 'YYYY-MM-DDTHH:mm');
    var currentTime = (0, _moment.default)();
    var diffInHours = selectedDateTime.diff(currentTime, 'hours');
    if (diffInHours < 12) {
      alert('Możesz rezerwować treningi co najmniej 12 godzin wcześniej.');
      return;
    }
    var startMoment = (0, _moment.default)("".concat(date, "T").concat(startTime), 'YYYY-MM-DDTHH:mm');
    var endMoment = (0, _moment.default)("".concat(date, "T").concat(endTime), 'YYYY-MM-DDTHH:mm');
    var duration = _moment.default.duration(endMoment.diff(startMoment)).asHours();
    var isConflict = calendarEvents.some(function (event) {
      var eventStart = (0, _moment.default)(event.start);
      var eventEnd = (0, _moment.default)(event.end);
      var startMoment = (0, _moment.default)("".concat(date, "T").concat(startTime), 'YYYY-MM-DDTHH:mm');
      var endMoment = (0, _moment.default)("".concat(date, "T").concat(endTime), 'YYYY-MM-DDTHH:mm');
      return event.place === place && startMoment.isBefore(eventEnd) && endMoment.isAfter(eventStart);
    });
    console.log("hej");
    if (isConflict) {
      alert('Miejsce jest już zarezerwowane w wybranym przedziale czasowym!');
      return;
    }
    if (duration > 2) {
      alert('Długość treningu nie może przekraczać 2 godzin!');
      return;
    } else if (duration < 1) {
      alert('Długość treningu nie może być krótsza niż 1 godzina!');
      return;
    }
    for (var m = startMoment.clone(); m.isBefore(endMoment); m.add(1, 'minute')) {
      var hour = m.format('HH:mm');
      var isHourReserved = reservations[hour] && reservations[hour].includes(place);
      if (isHourReserved) {
        alert('Miejsce jest już zarezerwowane w wybranym przedziale czasowym!');
        return;
      }
      var nextHour = m.clone().add(1, 'minute').format('HH:mm');
      var isNextHourReserved = reservations[nextHour] && reservations[nextHour].includes(place);
      if (isNextHourReserved) {
        alert('Miejsce jest już zarezerwowane w wybranym przedziale czasowym!');
        return;
      }
    }
    for (var _m = startMoment.clone(); _m.isBefore(endMoment); _m.add(1, 'hour')) {
      var _hour = _m.format('HH:mm');
      if (!reservations[_hour]) {
        reservations[_hour] = [];
      }
      reservations[_hour].push(place);
    }
    var newEvent = {
      title: 'Trening ' + place,
      start: startMoment.toISOString(),
      end: endMoment.toISOString(),
      place: place,
      email: userEmail
    };
    console.log('Dodawanie nowego wydarzenia:', newEvent);
    var confirmation = window.confirm("Na pewno dodać ten trening?");
    if (confirmation) {
      // Wywołanie endpointu na serwerze za pomocą Axios
      _axios.default.post('http://localhost:8080/api/users/calendar', [newEvent]).then(function (response) {
        // Otrzymane dane z odpowiedzi serwera (jeśli są wymagane)
        console.log(response.data);
        // Dodatkowe manipulacje na podstawie odpowiedzi serwera
        // np. odświeżenie danych w kalendarzu
      }).catch(function (error) {
        console.error('Wystąpił błąd:', error);
      });
      setCalendarEvents(function (prevEvents) {
        return [].concat(_toConsumableArray(prevEvents), [newEvent]);
      });
      document.getElementById('eventDate').value = '';
      document.getElementById('eventStartTime').value = '';
      document.getElementById('eventEndTime').value = '';
      document.getElementById('eventPlace').value = '';
      adjustEventWidths();
    }
  };
  (0, _react.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var token, accountDetailsResponse;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              token = localStorage.getItem('token');
              if (!token) {
                _context.next = 13;
                break;
              }
              _context.prev = 2;
              _context.next = 5;
              return _axios.default.get('http://localhost:8080/api/users/account-details', {
                headers: {
                  'Content-Type': 'application/json',
                  'x-access-token': token
                }
              });
            case 5:
              accountDetailsResponse = _context.sent;
              setUserEmail(accountDetailsResponse.data.data.email);
              //console.log(accountDetailsResponse.data.data.email);
              setIsLoading(false);
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              if (_context.t0.response && _context.t0.response.status >= 400 && _context.t0.response.status <= 500) {
                localStorage.removeItem('token');
                window.location.reload();
              }
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 10]]);
      }));
      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  (0, _react.useEffect)(function () {
    adjustEventWidths();
    // Pobranie treningów z serwera przy montowaniu komponentu
    _axios.default.get('http://localhost:8080/api/users/calendar').then(function (response) {
      // Przetworzenie danych treningów na format wymagany przez FullCalendar
      var events = response.data.map(function (event) {
        return {
          title: event.title,
          start: event.start,
          end: event.end,
          place: event.place,
          email: userEmail
          // extended: false,
        };
      });

      setCalendarEvents(events);
    }).catch(function (error) {
      console.error('Wystąpił błąd:', error);
    });
  }, []);
  // const handleEventClick = (info) => {
  //   const { event } = info;

  //   const eventElement = info.el; // Pobierz element HTML wydarzenia

  //   if (event.extended) {
  //     // Jeśli pole jest rozszerzone, zmniejsz je do poprzednich rozmiarów
  //     eventElement.style.height = "10px"; // Przywróć poprzednią wysokość pola wydarzenia

  //     setCalendarEvents((prevEvents) =>
  //       prevEvents.map((prevEvent) =>
  //         prevEvent === event ? { ...prevEvent, extended: false } : prevEvent
  //       )
  //     );
  //   } else {
  //     // Jeśli pole nie jest rozszerzone, powiększ je
  //     const currentHeight = eventElement.getBoundingClientRect().height + 'px'; // Pobierz aktualną wysokość
  //     const lastHeight = event.lastHeight || currentHeight; // Sprawdź, czy jest dostępna ostatnia wysokość pola wydarzenia

  //     eventElement.style.height = '200px'; // Ustaw nową wysokość pola wydarzenia (np. 200px)

  //     setCalendarEvents((prevEvents) =>
  //       prevEvents.map((prevEvent) =>
  //         prevEvent === event ? { ...prevEvent, extended: true, lastHeight } : prevEvent
  //       )
  //     );
  //   }
  // };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("nav", {
    className: _stylesModule.default.navbar
  }, /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Akademia Tenisa AT"))), /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleNavigateToOnas
  }, "O nas"), /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleCalendar
  }, "Terminarz"), /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleCennik
  }, "Cennik"), isLoggedIn ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleDetails
  }, "Szczeg\xF3\u0142y konta"), /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleLogout
  }, "Logout")) : /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleLogin
  }, "Login")), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_stylesModule.default['container-fluid'], " ").concat(_stylesModule.default['mt-12'])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default['row']
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default['col-md-9']
  }, /*#__PURE__*/_react.default.createElement(_react2.default, {
    plugins: [_daygrid.default, _timegrid.default, _interaction.default],
    initialView: "timeGridWeek",
    events: calendarEvents
    // eventClick={handleEventClick} 
  })), isLoggedIn ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default['col-md-3']
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: _stylesModule.default['text-right']
  }, "Dodaj trening"), /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default['form-group']
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "eventDate"
  }, "Data:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    className: _stylesModule.default['form-control'],
    id: "eventDate"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default['form-group']
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "eventStartTime"
  }, "Czas rozpocz\u0119cia:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "time",
    className: _stylesModule.default['form-control'],
    id: "eventStartTime"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default['form-group']
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "eventEndTime"
  }, "Czas zako\u0144czenia:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "time",
    className: _stylesModule.default['form-control'],
    id: "eventEndTime"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default['form-group']
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "eventPlace"
  }, "Miejsce:"), /*#__PURE__*/_react.default.createElement("select", {
    className: _stylesModule.default['form-control'],
    id: "eventPlace"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "Irydiona"
  }, "Irydiona"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Budowlani"
  }, "Budowlani"))), /*#__PURE__*/_react.default.createElement("button", {
    id: "addEventButton",
    className: "".concat(_stylesModule.default['btn'], " ").concat(_stylesModule.default['btn-primary']),
    onClick: handleAddEventClick
  }, "Dodaj trening"))) : /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default['col-md-3']
  }, /*#__PURE__*/_react.default.createElement("h2", {
    class: _stylesModule.default['text-right']
  }, "Brak autoryzacji"), /*#__PURE__*/_react.default.createElement("p", null, "Aby doda\u0107 trening, musisz by\u0107 zalogowany."), /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(_stylesModule.default['btn'], " ").concat(_stylesModule.default['btn-primary']),
    onClick: handleLogin
  }, "Login")))));
};
var _default = Calendar;
exports.default = _default;