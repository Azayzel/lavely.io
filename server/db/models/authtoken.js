'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
    }


  }

  AuthToken.init({
      token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'AuthToken',
    },
  );

  // generates a random 15 character token and
    // associates it with a user
  AuthToken.prototype.generate = async function(UserId) {
      if (!UserId) {
        throw new Error('AuthToken requires a user ID')
      }

      let token = '';

      const possibleCharacters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (let i = 0; i < 15; i++) {
        token += possibleCharacters.charAt(
          Math.floor(Math.random() * possibleCharacters.length)
        );
      }

      return AuthToken.create({ token, UserId })
    }

  return AuthToken;
};
