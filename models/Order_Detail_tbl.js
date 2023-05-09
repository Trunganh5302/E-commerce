'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Detail_tbl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order_Detail_tbl.init({
    Customer_id: DataTypes.INTEGER,
    Shipping_date: DataTypes.DATE,
    is_delivered: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Order_Detail_tbl',
  });
  return Order_Detail_tbl;
};