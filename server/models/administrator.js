const Sequelize = require('sequelize');
const sequelize = require('../database');
const Request = require('./request');

const Administrator = sequelize.define('administrator', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  employee_number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  have_access: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, {
  underscored: true,
  timestamps: false,
  paranoid: false
});

Administrator.hasMany(Request, { foreignKey: 'administrator_id' });

module.exports = Administrator;
