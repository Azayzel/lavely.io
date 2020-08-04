'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
    }
  };
  AuthGroup.init({
    name: DataTypes.STRING,
    claims: DataTypes.ARRAY({
      type: DataTypes.STRING,
    }),
  }, {
    sequelize,
    modelName: 'AuthGroup',
  });
  return AuthGroup;
};
