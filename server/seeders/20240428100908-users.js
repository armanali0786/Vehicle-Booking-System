'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('users', [
      {
        firstName: 'sameer', lastName:'alam', createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'faiz', lastName:'alam', createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
