'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var bcrypt = require('bcrypt');

module.exports = {
  up: function () {
    var _up = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(queryInterface, Sequelize) {
      var hash;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              hash = bcrypt.hashSync('@@BBrutu$$1987', 10);
              _context.next = 4;
              return queryInterface.bulkInsert('Users', [{
                email: 'josh@lavely.io',
                name: 'Josh Lavely',
                password: hash,
                avatar: null,
                emailConfirmed: false,
                role: 'admin'
              }], {});

            case 4:
              _context.next = 6;
              return queryInterface.bulkInsert('Articles', [{
                title: 'test article 1',
                author: "Josh Lavely",
                normalizedUrl: "test-article-1",
                innerHtml: "<h1>This is a test</h1> <p> Some testing was done here</p>",
                likes: 25,
                responses: null,
                image: ''
              }], {});

            case 6:
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    function up(_x, _x2) {
      return _up.apply(this, arguments);
    }

    return up;
  }(),
  down: function () {
    var _down = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(queryInterface, Sequelize) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return queryInterface.bulkDelete('User', null, {});

            case 2:
              _context2.next = 4;
              return queryInterface.bulkDelete('Article', null, {});

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function down(_x3, _x4) {
      return _down.apply(this, arguments);
    }

    return down;
  }()
};