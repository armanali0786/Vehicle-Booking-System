const router = require('express').Router();
const controller = require('../Controller/vehicleController');

router.get('/vehicle/:id', controller.getVehicleBytypeId)

router.post('/booking', controller.postBooking);

router.get('/booking-details', controller.getBookingDetails);

module.exports = router;