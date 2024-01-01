const express = require("express");
require("./db/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", require("./routes/userRouter"));

app.listen(7000, () => {
  console.log("Server is Running...");
});
