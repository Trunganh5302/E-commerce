'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order_Detail_tbl', {
        // Customer_id: DataTypes.INTEGER,
        // Shipping_date: DataTypes.INTEGER,
        // is_delivered: DataTypes.INTEGER
      Order_Detail_Tbl_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Customer_id: {
        type: Sequelize.INTEGER
      },
      Shipping_date: {
        type: Sequelize.DATE
      },
      is_delivered: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Order_Detail_tbl');
  }
};