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
      imageSrc: 'https://www.akmen.vn/images/thumbs/2020/11/ao-thun-tron-oversize-co-tui-at027-mau-den-15660-slide-products-5f9f71905ebf9.png',
      Desc:'Áo thun nhà NIKE',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        nameCategory: 'Quần short',
        imageSrc: 'https://blog.totoday.vn/wp-content/uploads/2022/10/Cac-cach-phoi-do-cung-quan-jean-nam-ong-rong-phu-hop-nhieu-phong-cach-4.png',
        Desc:'Quần short nhà NIKE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nameCategory: 'Giày thể thao',
        imageSrc:'https://vsneakershop.weebly.com/uploads/6/3/3/8/63388329/og-neon_orig.jpg',
        Desc:'Giày thể thao nhà NIKE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nameCategory: 'Ván trượt',
        imageSrc:'https://ds393qgzrxwzn.cloudfront.net/resize/c700x700/cat1/img/images/0/Ci6OJHosgP.jpg',
        Desc:'Ván trượt thể thao nhà NIKE',
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