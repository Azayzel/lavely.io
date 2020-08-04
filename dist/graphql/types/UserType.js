"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var UserType = new _graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    },
    email: {
      type: _graphql.GraphQLString
    },
    password: {
      type: _graphql.GraphQLString
    }
  }
});
var _default = UserType;
exports.default = _default;