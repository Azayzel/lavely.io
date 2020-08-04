"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var jwt = require('jsonwebtoken');

var _require = require('../db/models'),
    User = _require.User,
    AuthToken = _require.AuthToken;

var config = require('../config');

module.exports = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res, next) {
    var token, authToken;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // look for an authorization header or auth_token in the cookies
            token = req.cookies.auth_token || req.headers.authorization; // if a token is found we will try to find it's associated user
            // If there is one, we attach it to the req object so any
            // following middleware or routing logic will have access to
            // the authenticated user.

            if (!token) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return AuthToken.find({
              where: {
                token: token
              },
              include: User
            });

          case 4:
            authToken = _context.sent;

            // if there is an auth token found, we attach it's associated
            // user to the req object so we can use it in our routes
            if (authToken) {
              req.user = authToken.User;
            }

          case 6:
            next();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();