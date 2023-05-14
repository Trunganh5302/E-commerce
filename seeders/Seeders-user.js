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
   return queryInterface.bulkInsert('user',[
    {
        UseName: 'Chubinbmt02',
        passWord: '123456',
        FirtName: 'Trung',
        LastName: 'Anh',
        Role: '1',
        Phone: '0706051087',
        createdAt : new Date(),
        updatedAt: new Date()
    },
    {
        UseName: 'Chubinbmt03',
        passWord: '123456',
        FirtName: 'John',
        LastName: 'Doe',
        Role: '0',
        Phone: '0256478931',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        UseName: 'Chubinbmt04',
        passWord: '123456',
        FirtName: 'Jane',
        LastName: 'Doe',
        Role: '0',
        Phone: '0365897456',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        UseName: 'Chubinbmt03',
        passWord: '123456',
        FirtName: 'John',
        LastName: 'Doe',
        Role: '0',
        Phone: '0569874125',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        UseName: 'Chubinbmt04',
        passWord: '123456',
        FirtName: 'Jane',
        LastName: 'Doe',
        Role: '0',
        Phone: '0236514895',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      
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