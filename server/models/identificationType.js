const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Identification = require('./identification');

const IdentificationType = sequelize.define('identification_type', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  identification_type: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
  paranoid: true
});

module.exports = IdentificationType;
