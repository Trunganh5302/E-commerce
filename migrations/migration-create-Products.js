'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
        // Name: DataTypes.STRING,
        // imageSrc: DataTypes.STRING,
        // imageAlt: DataTypes.STRING,
        // Description: DataTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameProduct: {
        type: Sequelize.STRING
      },
      Desc: {
        type: Sequelize.STRING
      },
      imageSrc: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      categoryID: {
        type: Sequelize.INTEGER
      },
      inventorID: {
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
    await queryInterface.dropTable('products');
  }
};