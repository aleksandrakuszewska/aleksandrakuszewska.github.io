"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _User = _interopRequireDefault(require("./User"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Users(props) {
  var users = props.users;
  return /*#__PURE__*/React.createElement("ul", null, " ", users.map(function (user) {
    return /*#__PURE__*/React.createElement(_User.default, {
      key: user._id,
      value: user._id,
      user: user
    });
  }), " ");
}
var _default = Users;
exports.default = _default;