const Sequelize = require('sequelize');
const sequelize = require('../database');
const User = require('./user');
const IdentificationType = require('./identificationType');

const Identification = sequelize.define('identification', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  identification_number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}, {
  underscored: true,
  timestamps: true,
  paranoid: true
});

Identification.belongsTo(User, { foreignKey: 'user_id' });
Identification.belongsTo(IdentificationType, { foreignKey: 'identification_type_id' });

module.exports = Identification;
