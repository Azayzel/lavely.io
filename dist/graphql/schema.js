"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _me = _interopRequireDefault(require("./queries/me"));

var _news = _interopRequireDefault(require("./queries/news"));

var _articles = _interopRequireDefault(require("./queries/articles"));

var schema = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      me: _me.default,
      news: _news.default,
      articles: _articles.default
    }
  })
});
var _default = schema;
exports.default = _default;