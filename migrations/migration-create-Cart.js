'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('carts', {
        // Customer_id: DataTypes.INTEGER,
        // Shipping_date: DataTypes.INTEGER,
        // is_delivered: DataTypes.INTEGER
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER
      },
      productID: {
        type: Sequelize.INTEGER
      },
      imageSrc: {
        type: Sequelize.STRING
      },
      idCategory: {
        type: Sequelize.INTEGER
      },
      NameCategory: {
        type: Sequelize.STRING
      },
      nameProduct: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.INTEGER
      },
      Quantity: {
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
    await queryInterface.dropTable('carts');
  }
};