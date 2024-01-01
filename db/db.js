const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "media",
  username: "root",
  password: "Ahsan075@",
  host: "localhost",
  dialect: "mysql",
  port: 5000,
  logging: false,
});

// try {
//   db.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

module.exports = db;
