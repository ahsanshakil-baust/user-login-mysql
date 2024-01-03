const jwt = require("jsonwebtoken");

const JWT_SECRET = "qweqwejjkqwqwiow90e3qbnwq";

async function createJwt(user) {
  const token = jwt.sign(user, JWT_SECRET);
  return token;
}

async function verifyJwt(token) {
  const user = jwt.verify(token, JWT_SECRET);
  return user;
}

module.exports = {
  createJwt,
  verifyJwt,
};
