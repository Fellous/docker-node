// models/hobbies.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Assurez-vous d'importer votre instance Sequelize correctement

const Hobby = sequelize.define('Hobby', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Hobby;
