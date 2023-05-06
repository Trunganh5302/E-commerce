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
   return queryInterface.bulkInsert('product',[{  // dọc từng file và bulkInsert có thể chèn 1 lúc nhiều giá trị
    firstName: 'John',
    lastName:'TrungAnh',
    price: '$35',
    color: 'black',
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
