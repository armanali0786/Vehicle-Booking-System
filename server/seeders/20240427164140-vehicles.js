'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const types = await queryInterface.sequelize.query(
      'SELECT id FROM types;'
    );

    const typeIds = types[0].map((type) => type.id);

    // Generate sample vehicles
    const vehicles = [
      {
        name: 'Toyota Corolla', typeId: typeIds[0], createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Honda Civic', typeId: typeIds[0], createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ducati Monster', typeId: typeIds[1], createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Harley Davidson Sportster', typeId: typeIds[1], createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    // Insert vehicles into Vehicles table
    await queryInterface.bulkInsert('vehicles', vehicles, {});

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vehicles', null, {});
  }
};
