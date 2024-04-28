
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const createHttpError = require('http-errors');
const morgan = require('morgan');
require('dotenv').config();
const { Sequelize } = require('sequelize');
const vehicleRoutes = require('./Routes/vehicleRoute');

const app = express();

const db = require('./models/index'); // Import models
const sequelize = db.sequelize;

// Synchronize models with database
sequelize.sync({ force: false }) // Set { force: true } to force sync and drop tables
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });


sequelize.sync();

//set views file
app.set('views', path.join(__dirname, 'views'));

//set view engine
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')));

app.use('/api', vehicleRoutes);

// Server Listening
app.listen(6060, () => {
    console.log('Server is running at port 6060');
});



