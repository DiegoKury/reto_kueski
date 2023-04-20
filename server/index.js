const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./database');

const app = express();

// Database
(async () => {
  try {
    await sequelize.sync();
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Unable to create tables', error);
  }
})();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/users', require('./routes/userRoute'));
app.use('/addresses', require('./routes/addressRoute'));
app.use('/identifications', require('./routes/identificationRoute'));
app.use('/identification-types', require('./routes/identificationTypeRoute'));
app.use('/requests', require('./routes/requestRoute'));
app.use('/administrators', require('./routes/administratorRoute'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});