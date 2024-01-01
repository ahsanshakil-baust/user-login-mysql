const { Router } = require("express");
const { createUser } = require("../controllers/userController");

const router = Router();

router.post("/", async (req, res) => {
  const response = await createUser({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });

  res.send(response);
});

module.exports = router;
