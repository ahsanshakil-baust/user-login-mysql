const { Sequelize } = require("sequelize");
const db = require("../db/db");

const User = db.define("user", {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
    unique: true,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
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

const Article = db.define("article", {
  slug: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(100),
  },
  body: Sequelize.STRING,
});

const Comments = db.define("comment", {
  body: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Tag = db.define("tag", {
  name: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
});

// User.belongsTo(Article);
// User.belongsToMany(Article, { through: "favourites" });

Article.hasMany(Comments);
Article.belongsTo(User);
// Article.belongsToMany(User, { through: "favourites" });
// Article.belongsToMany(Tag, { through: "article_tags" });

Comments.belongsTo(Article);
Comments.belongsTo(User, { as: "author" });

// Tag.belongsToMany(Article, { through: "article_tags" });

module.exports = { User, Article, Comments, Tag };
