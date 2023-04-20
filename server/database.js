const Sequelize = require('sequelize');

//Run these 2 commands in MySQL to create a user with priviledges:
//CREATE USER 'username'@'%' IDENTIFIED BY 'password';
//GRANT ALL PRIVILEGES ON databasename.* TO 'username'@'%';
//Also, make sure to change the port accordingly
const sequelize = new Sequelize('kueski', 'diego', 'diego', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    port: 3307
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection successful.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
