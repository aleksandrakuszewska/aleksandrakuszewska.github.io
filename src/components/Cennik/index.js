"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Cennik = function Cennik() {
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
    // Dodaj kod obsługi kliknięcia dla strony głównej "O nas"
    // Przykład przekierowania do strony "O nas"
    window.location.href = '/';
  };
  var handleNavigateToContact = function handleNavigateToContact() {
    window.location.href = '/#kontakt';
  };
  var handleCalendar = function handleCalendar() {
    // e.preventDefault();
    // const token = localStorage.getItem('token');

    window.location.href = '/calendar';
  };
  var handleNavigateToGalery = function handleNavigateToGalery() {
    window.location.href = '/#galeria';
  };
  var handleLogin = function handleLogin() {
    // Dodaj kod obsługi kliknięcia dla przycisku "Login"
    // Przykład przekierowania do strony logowania
    window.location.href = '/login';
  };
  var isLoggedIn = !!localStorage.getItem('token');
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("nav", {
    className: _stylesModule.default.navbar
  }, /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Akademia Tenisa AT"))), /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleNavigateToOnas
  }, "O nas"), /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleCennik
  }, "Cennik"), /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleNavigateToGalery
  }, "Galeria"), /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleNavigateToContact
  }, "Kontakt")), /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.cennik
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: _stylesModule.default.title
  }, "Cennik"), /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.tableContainer
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: _stylesModule.default.table
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Us\u0142uga"), /*#__PURE__*/_react.default.createElement("th", null, "Czas trwania"), /*#__PURE__*/_react.default.createElement("th", null, "Cena"))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Kurs podstawowy"), /*#__PURE__*/_react.default.createElement("td", null, "10 lekcji (60 min/lekcja)"), /*#__PURE__*/_react.default.createElement("td", null, "800 z\u0142")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Indywidualna lekcja"), /*#__PURE__*/_react.default.createElement("td", null, "60 minut"), /*#__PURE__*/_react.default.createElement("td", null, "100 z\u0142")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Kort kryty za godzin\u0119 (Lato)"), /*#__PURE__*/_react.default.createElement("td", null, "-"), /*#__PURE__*/_react.default.createElement("td", null, "50 z\u0142")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Kort na powietrzu za godzin\u0119"), /*#__PURE__*/_react.default.createElement("td", null, "-"), /*#__PURE__*/_react.default.createElement("td", null, "35 z\u0142")))))));
};
var _default = Cennik;
exports.default = _default;