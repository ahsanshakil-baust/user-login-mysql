const { Router } = require("express");
const { createUser, verifyUser } = require("../controllers/userController");

const router = Router();

router.post("/", async (req, res) => {
  const response = await createUser({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });

  res.send(response);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await verifyUser({ email, password });
    res.send(response);
  } catch (err) {
    res.status(403).send({
      errors: {
        msg: err.message,
      },
    });
  }
});

module.exports = router;
