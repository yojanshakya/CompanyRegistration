const Sequelize = require("sequelize");
const sequelize = require("../connection");

const CompanyModel = sequelize.define("Company", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
  },
	telephone:  {
		type: Sequelize.STRING,
		allowNull: false
	},
	fax:  {
		type: Sequelize.STRING,
		allowNull: false
	},
	taxId: {
		type: Sequelize.STRING,
		allowNull: false
	},
	fieldOfBusiness: {
		type: Sequelize.STRING,
		allowNull: false
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false
	},
	district: {
		type: Sequelize.STRING,
		allowNull: false
	},
	municipality:  {
		type: Sequelize.STRING,
		allowNull: false
	},
	postalCode:  {
		type: Sequelize.STRING,
		allowNull: false
	},
	wardNo:  {
		type: Sequelize.STRING,
		allowNull: false
	},
	approved: {
		defaultValue: false,
		type: Sequelize.BOOLEAN
	}
});

module.exports = CompanyModel;