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
   return queryInterface.bulkInsert('categorys',[
    {
      nameCategory: 'Áo thun',
      Desc:'Áo thun nhà NIKE',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        nameCategory: 'Quần short',
        Desc:'Quần short nhà NIKE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nameCategory: 'Giày thể thao',
        Desc:'Giày thể thao nhà NIKE',
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