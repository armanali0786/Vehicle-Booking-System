'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('types', [
      {
        name: 'car', createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'bike', createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('types', null, {});
  }
};
