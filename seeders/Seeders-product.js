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
   return queryInterface.bulkInsert('products',[
    {
      nameProduct: 'Jorden Essentials 2',
      Desc:'Men Oversized Graphic T-Shirt',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      price: 18,
      categoryID: 1,
      inventorID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameProduct: 'Nike Air Max',
      Desc:'Men Running Shoes',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      price: 120,
      categoryID: 2,
      inventorID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameProduct: 'Adidas Superstar',
      Desc:'Women Casual Sneakers',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/product-page-02-product-01.jpg',
      price: 80,
      categoryID: 3,
      inventorID: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameProduct: 'Levi\'s 501 Original Fit Jeans',
      Desc:'Men Straight Leg Jeans',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      price: 80,
      categoryID: 1,
      inventorID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nameProduct: 'Tommy Hilfiger Logo Sweatshirt',
      Desc:'Women Pullover Hoodie',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg',
      price: 90,
      categoryID: 3,
      inventorID: 4,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nameProduct: 'Converse Chuck Taylor All Star High Tops',
      Desc:'Unisex Canvas Sneakers',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/product-page-02-product-03.jpg',
      price: 60,
      categoryID: 2,
      inventorID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nameProduct: 'Puma RS-Fast Casual Sneakers',
      Desc:'Men Low Top Sneakers',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/product-page-02-product-04.jpg',
      price: 100,
      categoryID: 2,
      inventorID: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    nameProduct: 'Levi\'s 501 Original Fit Jeans',
    Desc: 'Classic Straight Leg Jeans',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
    price: 68,
    categoryID: 4,
    inventorID: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    nameProduct: 'Timberland Waterproof Hiking Boots',
    Desc: 'Men\'s Waterproof Hiking Boots',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-02-product-02.jpg',
    price: 150,
    categoryID: 2,
    inventorID: 2,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    nameProduct: 'Vans Old Skool Sneakers',
    Desc: 'Classic Skateboarding Shoes',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-02-product-03.jpg',
    price: 60,
    categoryID: 3,
    inventorID: 3,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    nameProduct: 'North Face Resolve Waterproof Jacket',
    Desc: 'Men\'s Waterproof Rain Jacket',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg',
    price: 90,
    categoryID: 4,
    inventorID: 4,
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