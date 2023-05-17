'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
        return queryInterface.bulkInsert('carts', [
            {
                userID: 1,
                productID: 1,
                imageSrc: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5019b916-1916-4668-94ad-1a6035e1eaf7/jordan-jumpman-short-sleeve-t-shirt-df6fwF.png',
                idCategory: 1,
                NameCategory: 'Áo thun',
                nameProduct: 'Áo nhà NIKE',
                Price: 18,
                Quantity: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    // trong phần uo thì khi chạy bình thường 
    // còn khi bị lỗi thì nó sẽ chạy phần down

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};