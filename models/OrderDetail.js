'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderDetail.init({
    Product_id: DataTypes.INTEGER,
    Qty: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    Order_id: DataTypes.INTEGER,
    SubTotal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};