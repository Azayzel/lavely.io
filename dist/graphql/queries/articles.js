"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _graphql = require("graphql");

var _ArticleType = _interopRequireDefault(require("../types/ArticleType"));

var _models = _interopRequireDefault(require("../../db/models"));

var articles = {
  type: new _graphql.GraphQLList(_ArticleType.default),
  resolve: function resolve() {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var articles;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _models.default.sequelize.models.Article.findAll();

            case 2:
              articles = _context.sent;
              return _context.abrupt("return", articles);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};
var _default = articles;
exports.default = _default;