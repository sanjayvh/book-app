const Sequelize = require("sequelize");

const sequelize = new Sequelize("book_app_db", "root", "Sanjay@123", {
  dialect: "mysql",
  host: "localhost",
});

// console.log("Sequelize type =", typeof Sequelize);
// console.log("sequelize type =", typeof sequelize);

module.exports = sequelize;
