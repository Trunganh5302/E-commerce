'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('inventor',[
    {
      Quantity: 150,
      categoryID: 1,
      productID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 200,
      categoryID: 1,
      productID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 100,
      categoryID: 1,
      productID: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 250,
      categoryID: 1,
      productID: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 175,
      categoryID: 1,
      productID: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 225,
      categoryID: 1,
      productID: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 125,
      categoryID: 1,
      productID: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 180,
      categoryID: 1,
      productID: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
    // Category 2
    {
      Quantity: 300,
      categoryID: 2,
      productID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 350,
      categoryID: 2,
      productID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 250,
      categoryID: 2,
      productID: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 400,
      categoryID: 2,
      productID: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 325,
      categoryID: 2,
      productID: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 375,
      categoryID: 2,
      productID: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 275,
      categoryID: 2,
      productID: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 320,
      categoryID: 2,
      productID: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 75,
      categoryID: 3,
      productID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 100,
      categoryID: 3,
      productID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 65,
      categoryID: 3,
      productID: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 175,
      categoryID: 3,
      productID: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 90,
      categoryID: 3,
      productID: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 130,
      categoryID: 3,
      productID: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 55,
      categoryID: 3,
      productID: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Quantity: 150,
      categoryID: 3,
      productID: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  // trong phần uo thì khi chạy bình thường 
  // còn khi bị lỗi thì nó sẽ chạy phần down

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};