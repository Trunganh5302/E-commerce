'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    UseName: DataTypes.STRING,
    passWord: DataTypes.STRING,
    FirtName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Role: DataTypes.STRING,
    Phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};