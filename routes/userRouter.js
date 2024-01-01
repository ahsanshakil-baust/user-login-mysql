const { Router } = require("express");
const { userAuthViaToken } = require("../middlewares/auth");

const router = Router();

router.get("/", userAuthViaToken, (req, res) => {
  if (req.user) {
    res.send(req.user);
  }
});

module.exports = router;
