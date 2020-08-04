import Sequelize from 'sequelize'
const env = process.env.NODE_ENV || 'development';
const config = require(`../config/config.json`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const modelDefiners = [
	require('./user'),
	require('./userprofile'),
  require('./article'),
  require('./authgroup'),
  require('./authtoken'),
  require('./friends'),
	// Add more models here...
	// require('./models/item'),
];

modelDefiners.forEach(module => {
  const sequelizeModel = module(sequelize, Sequelize);
  console.log(sequelizeModel)
  db[sequelizeModel.name] = sequelizeModel;
})

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
