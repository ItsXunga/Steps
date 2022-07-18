const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const mongoose = require("mongoose");
const Routes = require("./routes");
const auth = require("./middlewares/authMiddleware");
const jwt = require("jsonwebtoken");

const port = process.env.PORT | 3000;

const app = express();

// Começar a processar o corpo dos requests
app.use(express.json());

app.use(auth);

app.use("/circuits", Routes.CircuitRoutes);
app.use("/points", Routes.PointRoutes);
app.use("/users", Routes.UserRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((err, req, res, next) => {
  if (err && !res.headersSent) {
    res
      .status(err.statusCode || 500)
      .send(error(err.message, err.statusCode || 500, err.errors));
  }
  next();
});

async function main() {
  await mongoose.connect(db.uri);
  app.listen(port, () => console.log("server running on port: ", port));
}

main().catch((err) => console.log(err));
