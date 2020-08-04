const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate = models => {
      User.hasMany(models.AuthToken);
      User.hasMany(models.AuthGroup);
      User.hasMany(models.Friends)
      User.hasOne(models.UserProfile);
      User.hasMany(models.Article);
    };
}

  User.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    emailConfirmed: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
  });



    // This is a class method, it is not called on an individual
    // user object, but rather the class as a whole.
    // e.g. User.authenticate('user1', 'password1234')
    User.authenticate = async (email, password) => {

      const user = await User.findOne({ where: { email } });

      // bcrypt is a one-way hashing algorithm that allows us to
      // store strings on the database rather than the raw
      // passwords. Check out the docs for more detail
      if (bcrypt.compareSync(password, user.password)) {
        return user;
      }

      throw new Error('invalid password');
    };

    // in order to define an instance method, we have to access
    // the User model prototype. This can be found in the
    // sequelize documentation
    User.authorize = async () => {
      const { AuthToken } = sequelize.models;
      const user = this

      // create a new auth token associated to 'this' user
      // by calling the AuthToken class method we created earlier
      // and passing it the user id
      const authToken = await AuthToken.generate(this.id);

      // addAuthToken is a generated method provided by
      // sequelize which is made for any 'hasMany' relationships
      await user.addAuthToken(authToken);

      return { user, authToken }
    };

    User.logout = async (token) => {

      // destroy the auth token record that matches the passed token
      sequelize.models.AuthToken.destroy({ where: { token } });

    };


  return User;
};
