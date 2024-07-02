// models/profile.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Assurez-vous d'importer votre instance Sequelize correctement

const Profile = sequelize.define('Profile', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  hobbies: {
    type: DataTypes.JSONB,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Profile;
