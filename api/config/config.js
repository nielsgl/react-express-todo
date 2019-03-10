const Sequelize = require('sequelize');

module.exports = {
	development: {
		dialect: 'sqlite',
		storage: './db.development.sqlite',
		operatorsAliases: Sequelize.Op,
	},
	test: {
		dialect: 'sqlite',
		storage: ':memory:',
		operatorsAliases: Sequelize.Op,
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOSTNAME,
		dialect: 'mysql',
		use_env_variable: 'DATABASE_URL',
	},
};
