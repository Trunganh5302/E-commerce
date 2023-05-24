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
      imageSrc:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5019b916-1916-4668-94ad-1a6035e1eaf7/jordan-jumpman-short-sleeve-t-shirt-df6fwF.png',
      price: 18,
      categoryID: 1,
      nameCategory: 'Áo thun',
      inventorID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameProduct: 'Nike Air Max',
      Desc:'Men Running Shoes',
      imageSrc:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5d872a6e-e58c-4580-a73a-9dfc474dc41f/air-t-shirt-x9gnlB.png',
      price: 120,
      categoryID: 1,
      nameCategory: 'Áo thun',
      inventorID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameProduct: 'Adidas Superstar',
      Desc:'Women Casual Sneakers',
      imageSrc:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/81d8e4d1-8ac4-4661-96a1-84fa8644b887/sportswear-essentials-t-shirt-K9vnhV.png',
      price: 80,
      categoryID: 1,
      nameCategory: 'Áo thun',
      inventorID: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameProduct: 'Levi\'s 501 Original Fit Jeans',
      Desc:'Men Straight Leg Jeans',
      imageSrc:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/45d8f5c6-ec20-49d5-8c91-809576ae9e62/dri-fit-run-division-challenger-13cm-brief-lined-running-shorts-50zSd0.png',
      price: 80,
      categoryID: 2,
      nameCategory: 'Quần short',
      inventorID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nameProduct: 'Tommy Hilfiger Logo Sweatshirt',
      Desc:'Women Pullover Hoodie',
      imageSrc:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c372e905-fff0-4801-a5cb-b0546784b960/dri-fit-run-division-stride-running-shorts-fSgkPl.png',
      price: 90,
      categoryID: 2,
      nameCategory: 'Quần short',
      inventorID: 4,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nameProduct: 'Converse Chuck Taylor All Star High Tops',
      Desc:'Unisex Canvas Sneakers',
      imageSrc:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d464c4cd-dc6d-4299-950e-2ff742cf8690/jordan-23-engineered-lightweight-shorts-snKdf1.png',
      price: 60,
      categoryID: 2,
      nameCategory: 'Quần short',
      inventorID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nameProduct: 'Puma RS-Fast Casual Sneakers',
      Desc:'Men Low Top Sneakers',
      imageSrc:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7c27ffa5-b857-4a0f-b9d6-71614bed98bf/court-borough-low-2-older-shoes-chDVgV.png',
      price: 100,
      categoryID: 3,
      nameCategory: 'Giày thể thao',
      inventorID: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    nameProduct: 'Levi\'s 501 Original Fit Jeans',
    Desc: 'Classic Straight Leg Jeans',
    imageSrc: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eb5d18aa-0d8b-4578-9527-03d550068156/air-jordan-xxxvii-older-shoes-MK0JNJ.png',
    price: 68,
    categoryID: 3,
    nameCategory: 'Giày thể thao',
    inventorID: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    nameProduct: 'Timberland Waterproof Hiking Boots',
    Desc: 'Men\'s Waterproof Hiking Boots',
    imageSrc: 'https://bizweb.dktcdn.net/100/345/407/products/mtuh8597-1683871968348.jpg?v=1683872085063',
    price: 150,
    categoryID: 4,
    nameCategory: 'Ván trượt',
    inventorID: 2,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    nameProduct: 'Vans Old Skool Sneakers',
    Desc: 'Classic Skateboarding Shoes',
    imageSrc: 'https://bizweb.dktcdn.net/100/345/407/products/potj6906-1683872755547.jpg?v=1683872832070',
    price: 60,
    categoryID: 4,
    nameCategory: 'Ván trượt',
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
    nameCategory: 'Ván trượt',
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