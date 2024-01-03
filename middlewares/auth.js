const { verifyJwt } = require("../utils/jwt");

async function userAuthViaToken(req, res, next) {
  const auth = req.header("Authorization");

  if (!auth) {
    return res.status(403).send({
      msg: "Only for logged in users",
    });
  }

  if (!auth.startsWith("Token")) {
    return res.status(400).send({
      errors: {
        msg: "Authorization not working",
      },
    });
  }

  const token = auth.substr(6);
  try {
    const user = await verifyJwt(token);
    req.user = user;
    return next();
  } catch (err) {
    res.status(403).send({
      errors: {
        msg: "Jwt verification failed",
      },
    });
  }
}

module.exports = {
  userAuthViaToken,
};
