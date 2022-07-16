const Sequelize = require("sequelize");
const config = require("../../../config");

const sequelize = new Sequelize(
	`postgres://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_DBNAME}`
);

module.exports = sequelize;