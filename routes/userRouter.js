const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send({
    user: {
      email: "shakilahsan46@gmail.com",
      token: "jwt.token.here",
      username: "Ahsan",
      bio: "I work at ....",
      image: null,
    },
  });
});

module.exports = router;
