'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Get vehicleIds from Vehicles table
    const vehicles = await queryInterface.sequelize.query(
      'SELECT id FROM vehicles;'
    );

    const vehicleIds = vehicles[0].map((vehicle) => vehicle.id);

    // Generate sample bookings
    const bookings = [
      {
        userId: 1, // Assuming userId is associated with bookings
        vehicleId: vehicleIds[1],
        startDate: new Date('2024-05-01'),
        endDate: new Date('2024-05-05'),
        firstName:"Arman",
        lastName: "Ali",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        vehicleId: vehicleIds[2],
        startDate: new Date('2024-05-10'),
        endDate: new Date('2024-05-15'),
        firstName:"Faiz",
        lastName: "Ali",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more sample bookings as needed
    ];

    // Insert bookings into Bookings table
    await queryInterface.bulkInsert('bookings', bookings, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all bookings
    await queryInterface.bulkDelete('bookings', null, {});
  },
};
