

const { required } = require('nodemon/lib/config');
const db = require('../models'); 
const { Op } = require('sequelize');
const Vehicle = db.vehicles; // Access the Vehicle model
const Type = db.types; // Access the Type model
const Booking = db.bookings; // Access the Booking model
const moment = require('moment');

exports.getVehicleBytypeId = async (req, res) => {
  const typeId = req.params.id;
  try {
    // Find vehicles by typeId
    const vehicles = await Vehicle.findAll({
      include: [{ model: Type, as: 'types' }], // Include associated Type model as 'types'
      where: {
        typeId: typeId // Filter by typeId from request body
      }
    });
    res.status(200).json({
      message: "Vehicle Fecth Successfully ",
      data: vehicles
    }); // Send the found vehicles as JSON response
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ message: 'Server error' });
  }
}



exports.postBooking = async function (req, res) {
  const {
    vehicleId,
    firstName,
    lastName,
    StartDate,
    EndDate
  } = req.body;

  const parsedStartDate = moment(StartDate, 'DD-MM-YYYY').format('YYYY-MM-DD HH:mm:ss');
  const parsedEndDate = moment(EndDate, 'DD-MM-YYYY').format('YYYY-MM-DD HH:mm:ss');

  try {
    let vehicle;

    if (vehicleId) {
      vehicle = await Vehicle.findByPk(vehicleId);
      if (!vehicle) {
        return res.status(404).json({ error: 'Vehicle not found' });
      }
      // Check if vehicle is available
      const conflictingBooking = await Booking.findOne({
        where: {
          vehicleId: vehicle.id,
          [Op.or]: [
            {
              startDate: { [Op.between]: [parsedStartDate, parsedEndDate] }
            },
            {
              endDate: { [Op.between]: [parsedStartDate, parsedEndDate] }
            },
            // {
            //   startDate: { [Op.lte]: parsedStartDate },
            //   endDate: { [Op.gte]: parsedEndDate }
            // }
          ]
        }
      });

      if (conflictingBooking) {
        return res.status(400).json({ error: 'Vehicle is already booked for this time' });
      }

      // If available, create booking
      const newBooking = await Booking.create({
        vehicleId: vehicle.id,
        firstName,
        lastName,
        startDate: parsedStartDate,
        endDate: parsedEndDate,
      });


      res.json({ message: 'Booking successful', booking: newBooking });
    }
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


exports.getBookingDetails = async function (req, res) {

  try {
    const bookings = await Booking.findAll({});
    res.status(200).json({
      message: "Booking Fecth Successfully ",
      data: bookings
    }); 
  } catch (e) {
    console.error('Error fetching bookings:', e);
    res.status(500).json({ message: 'Server error' });
  }
}

