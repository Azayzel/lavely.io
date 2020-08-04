"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var NewsItemType = new _graphql.GraphQLObjectType({
  name: 'NewsItem',
  fields: {
    title: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    link: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    author: {
      type: _graphql.GraphQLString
    },
    pubDate: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    content: {
      type: _graphql.GraphQLString
    }
  }
});
var _default = NewsItemType;
exports.default = _default;