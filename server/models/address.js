const Sequelize = require('sequelize');
const sequelize = require('../database');
const User = require('./user');

const Address = sequelize.define('address', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  neighborhood: {
    type: Sequelize.STRING,
    allowNull: false
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ext_number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  int_number: {
    type: Sequelize.INTEGER,
    allowNull: true
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

Address.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Address;
