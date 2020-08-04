"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var env = process.env.NODE_ENV || 'development';

var config = require("../config/config.json")[env];

var db = {};
var sequelize;

if (config.use_env_variable) {
  sequelize = new _sequelize.default(process.env[config.use_env_variable], config);
} else {
  sequelize = new _sequelize.default(config.database, config.username, config.password, config);
}

var modelDefiners = [require('./user'), require('./userprofile'), require('./article'), require('./authgroup'), require('./authtoken'), require('./friends') // Add more models here...
// require('./models/item'),
];
modelDefiners.forEach(function (module) {
  var sequelizeModel = module(sequelize, _sequelize.default);
  console.log(sequelizeModel);
  db[sequelizeModel.name] = sequelizeModel;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = _sequelize.default;
var _default = db;
exports.default = _default;