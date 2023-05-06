'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orderDetail', {
        // Product_id: DataTypes.INTEGER,
        // Qty: DataTypes.INTEGER,
        // price: DataTypes.INTEGER,
        // Order_id: DataTypes.INTEGER,
        // SubTotal: DataTypes.INTEGER
      OrderDetail_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Product_id: {
        type: Sequelize.INTEGER
      },
      Qty: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      Order_id: {
        type: Sequelize.INTEGER
      },
      SubTotal: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orderDetail');
  }
};