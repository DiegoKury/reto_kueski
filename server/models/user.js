const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  first_last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  second_last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  born_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  nationality: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state_of_birth: {
    type: Sequelize.STRING,
    allowNull: false
  },
  economic_activity: {
    type: Sequelize.STRING,
    allowNull: false
  },
  curp: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone_number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user_data: {
    type: Sequelize.STRING,
    allowNull: false
  },
  is_client: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  is_blocked: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: false
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false
  },
  deleted_at: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, {
  underscored: true,
  timestamps: true,
  paranoid: true
});

module.exports = User;