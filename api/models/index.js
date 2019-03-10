const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
// const _ = require('lodash');

const db = {};

// const diff = require('deep-diff');
let sequelize;

if (config.use_env_constiable) {
	sequelize = new Sequelize(process.env[config.use_env_constiable], config);
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config,
	);
}

// const s1 = Object.assign({}, sequelize.Model.prototype);

// const options = {
// 	debug: true,
// 	enableMigration: true,
// };
// const PaperTrail = require('sequelize-paper-trail').init(sequelize, options);

// const s2 = Object.assign({}, sequelize.Model.prototype);
// _.extend(s2, {
// 	canDoFoo: function canDoFoo() {
// 		console.log('canDoFoo!');
// 	},
// });

// console.log(s1);
// console.log(s2);

// console.log('deep diff:', diff(s1, s2));

// PaperTrail.defineModels();

fs.readdirSync(__dirname)
	.filter(
		file =>
			file.indexOf('.') !== 0 &&
			file !== basename &&
			file.slice(-3) === '.js',
	)
	.forEach(file => {
		const model = sequelize['import'](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

// console.log('db', db['Task']);
// db['Task'].hasPaperTrail();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
