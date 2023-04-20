const Sequelize = require('sequelize');
const sequelize = require('../database');
const User = require('./user');

const Request = sequelize.define('request', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  administrator_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  arco_right: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  finished: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  underscored: true,
  timestamps: true,
  paranoid: true
});

Request.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Request;
