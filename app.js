const express = require("express");
const db = require("./db/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", require("./routes/usersRouter"));

db.sync()
  .then(() => {
    app.listen(7000, () => {
      console.log("Database Connected...");
      console.log("Server is Running...");
    });
  })
  .catch((err) => console.log(err.message));
