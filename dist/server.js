"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressJwt = _interopRequireWildcard(require("express-jwt"));

var _graphql = require("graphql");

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _models = _interopRequireDefault(require("./db/models"));

var _schema = _interopRequireDefault(require("./graphql/schema"));

var _config = _interopRequireDefault(require("./config"));

var _customAuthMiddleware = _interopRequireDefault(require("./middleware/custom-auth-middleware"));

var _passport = _interopRequireDefault(require("./middleware/passport"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

process.on('unhandledRejection', function (reason, p) {
  console.error('Unhandled Rejection at:', p, 'reason:', reason); // send entire app down. Process manager will restart it

  process.exit(1);
});
var app = (0, _express.default)(); //
// Register Node.js middleware
// -----------------------------------------------------------------------------

app.use(_express.default.static(_path.default.resolve(__dirname, 'public')));
app.use((0, _cookieParser.default)());
app.use(_customAuthMiddleware.default);
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json()); //
// Authentication
// -----------------------------------------------------------------------------

app.use((0, _expressJwt.default)({
  secret: _config.default.auth.jwt.secret,
  credentialsRequired: false,
  getToken: function getToken(req) {
    return req.cookies.id_token;
  }
})); // Error handler for express-jwt

app.use(function (err, req, res, next) {
  // eslint-disable-line no-unused-vars
  if (err instanceof _expressJwt.UnauthorizedError) {
    console.error('[express-jwt-error]', req.cookies.id_token); // `clearCookie`, otherwise user can't use web-app until cookie expires

    res.clearCookie('id_token');
  }

  next(err);
});
app.use(_passport.default.initialize());
app.get('/login/facebook', _passport.default.authenticate('facebook', {
  scope: ['email', 'user_location'],
  session: false
}));
app.get('/login/facebook/return', _passport.default.authenticate('facebook', {
  failureRedirect: '/login',
  session: false
}), function (req, res) {
  var expiresIn = '1h';

  var token = _jsonwebtoken.default.sign(req.user, _config.default.auth.jwt.secret, {
    expiresIn: expiresIn
  });

  res.cookie('id_token', token, {
    maxAge: 1000 * expiresIn,
    httpOnly: true
  });
  res.redirect('/');
});
app.post('/login', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _yield$db$sequelize$m, dataValues, expiresIn, token, response;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.default.sequelize.models.User.authenticate(req.body.email, req.body.password, 10);

          case 3:
            _yield$db$sequelize$m = _context.sent;
            dataValues = _yield$db$sequelize$m.dataValues;

            if (dataValues) {
              req.user = dataValues;
              expiresIn = 60;
              token = _jsonwebtoken.default.sign(dataValues, _config.default.auth.jwt.secret, {
                expiresIn: expiresIn
              });
              res.cookie('id_token', token, {
                maxAge: 1000 * expiresIn,
                httpOnly: true
              });
              response = {
                id: dataValues.id,
                email: dataValues.email,
                name: dataValues.name,
                avatar: dataValues.avatar,
                isAdmin: dataValues.isAdmin,
                IsSuper: dataValues.IsSuper
              };
              res.status(200).json(response);
            }

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.status(404).json('Invalid email or password');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.post('/register', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var hash, tempUser, _yield$db$sequelize$m2, dataValues, expiresIn, token;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            // create a new user with the password hash from bcrypt
            hash = _bcrypt.default.hashSync(req.body.password, 10);
            tempUser = _objectSpread(_objectSpread({}, req.body), {}, {
              emailConfirmed: false,
              password: hash
            });
            _context2.next = 5;
            return _models.default.sequelize.models.User.create(tempUser);

          case 5:
            _yield$db$sequelize$m2 = _context2.sent;
            dataValues = _yield$db$sequelize$m2.dataValues;
            // data will be an object with the user and it's authToken
            //let data = await user.authorize()
            expiresIn = 60 * 60 * 24 * 180; // 180 days

            token = _jsonwebtoken.default.sign(dataValues, _config.default.auth.jwt.secret, {
              expiresIn: expiresIn
            });
            res.cookie('id_token', token, {
              maxAge: 1000 * expiresIn,
              httpOnly: true
            });
            res.status(200).send(dataValues);
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(400).send(_context2.t0));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); //
// GraphQL, Register API middleware
// -----------------------------------------------------------------------------

app.use('/graphql', (0, _expressGraphql.default)(function (req) {
  return {
    schema: _schema.default,
    graphiql: true,
    rootValue: {
      request: req
    },
    pretty: true
  };
})); //
// Launch the server
// -----------------------------------------------------------------------------

_models.default.sequelize //.sync({ force: true})
.authenticate().then(function () {
  // inside our db sync callback, we start the server
  // this is our way of making sure the server is not listening
  // to requests if we have not made a db connection
  app.listen(_config.default.port, function () {
    console.info("\n        The server is running at http://localhost:".concat(_config.default.port, "/"));
  });
}).catch(function (err) {
  return console.error('Unable to start: ', err.stack);
});