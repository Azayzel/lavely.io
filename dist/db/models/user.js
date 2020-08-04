"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _this = void 0;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var bcrypt = require('bcrypt');

var _require = require('sequelize'),
    Model = _require.Model;

module.exports = function (sequelize, DataTypes) {
  var User = /*#__PURE__*/function (_Model) {
    (0, _inherits2.default)(User, _Model);

    var _super = _createSuper(User);

    function User() {
      (0, _classCallCheck2.default)(this, User);
      return _super.apply(this, arguments);
    }

    return User;
  }(Model);

  (0, _defineProperty2.default)(User, "associate", function (models) {
    User.hasMany(models.AuthToken);
    User.hasMany(models.AuthGroup);
    User.hasMany(models.Friends);
    User.hasOne(models.UserProfile);
    User.hasMany(models.Article);
  });
  User.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    emailConfirmed: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize: sequelize,
    modelName: 'User'
  }); // This is a class method, it is not called on an individual
  // user object, but rather the class as a whole.
  // e.g. User.authenticate('user1', 'password1234')

  User.authenticate = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(email, password) {
      var user;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return User.findOne({
                where: {
                  email: email
                }
              });

            case 2:
              user = _context.sent;

              if (!bcrypt.compareSync(password, user.password)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", user);

            case 5:
              throw new Error('invalid password');

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(); // in order to define an instance method, we have to access
  // the User model prototype. This can be found in the
  // sequelize documentation


  User.authorize = /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var AuthToken, user, authToken;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            AuthToken = sequelize.models.AuthToken;
            user = _this; // create a new auth token associated to 'this' user
            // by calling the AuthToken class method we created earlier
            // and passing it the user id

            _context2.next = 4;
            return AuthToken.generate(_this.id);

          case 4:
            authToken = _context2.sent;
            _context2.next = 7;
            return user.addAuthToken(authToken);

          case 7:
            return _context2.abrupt("return", {
              user: user,
              authToken: authToken
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  User.logout = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(token) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // destroy the auth token record that matches the passed token
              sequelize.models.AuthToken.destroy({
                where: {
                  token: token
                }
              });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  return User;
};