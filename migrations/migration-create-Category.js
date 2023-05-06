'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categorys', {
        // Name: DataTypes.STRING,
        // imageSrc: DataTypes.STRING,
        // imageAlt: DataTypes.STRING,
        // Description: DataTypes.STRING,
      Category_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      imageSrc: {
        type: Sequelize.STRING
      },
      imageAlt: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('categorys');
  }
};