"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var User = function User(props) {
  var user = props.user;
  return /*#__PURE__*/React.createElement("li", null, " ", user.firstName, " ", user.lastName, " ");
};
var _default = User;
exports.default = _default;