'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
        // Email: DataTypes.STRING,
        // Name: DataTypes.STRING,
        // passWord: DataTypes.STRING,
        // City: DataTypes.STRING,
        // Phone: DataTypes.STRING
      User_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UseName: {
        type: Sequelize.STRING
      },
      passWord: {
        type: Sequelize.STRING
      },
      FirtName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      Role: {
        type: Sequelize.STRING
      },
      Phone: {
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
    await queryInterface.dropTable('user');
  }
};