"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var ArticleType = new _graphql.GraphQLObjectType({
  name: 'Articles',
  fields: {
    title: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    normalizedUrl: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    author: {
      type: _graphql.GraphQLString
    },
    innerHtml: {
      type: _graphql.GraphQLString
    },
    likes: {
      type: _graphql.GraphQLInt
    },
    responses: {
      type: _graphql.GraphQLString
    },
    image: {
      type: _graphql.GraphQLString
    }
  }
});
var _default = ArticleType;
exports.default = _default;