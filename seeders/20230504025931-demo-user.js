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
   return queryInterface.bulkInsert('Users',[{
    firstName: 'John',
    lastName:'TrungAnh',
    email:'trunganhno01@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date()
   }]);
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
