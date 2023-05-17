'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carts.init({
    userID: DataTypes.INTEGER,
    productID: DataTypes.INTEGER,
    imageSrc: DataTypes.STRING,
    idCategory:DataTypes.STRING,
    NameCategory:DataTypes.STRING,
    nameProduct: DataTypes.STRING,
    Price: DataTypes.STRING,
    Quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carts',
  });
  return Carts;
};