'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailBill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detailBill.init({
    userID: DataTypes.INTEGER,
    BillID: DataTypes.INTEGER,
    productID: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER,
    categoryID:DataTypes.INTEGER,
    nameCategory: DataTypes.STRING,
    nameProduct: DataTypes.STRING,
    price:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'detailBill',
  });
  return detailBill;
};