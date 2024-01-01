const db = require("../db/db");

const User = db.define("user", {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
    unique: true,
    allowNull: fasle,
  },
  username: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  bio: Sequelize.STRING,
  image: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
});

module.exports = User;
