'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    nameProduct: DataTypes.STRING,
    Desc: DataTypes.STRING,
    imageSrc:DataTypes.STRING,
    price: DataTypes.INTEGER,
    categoryID: DataTypes.INTEGER,
    inventorID: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Products',
  });

  return Products;
};