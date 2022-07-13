const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const mongoose = require("mongoose");
const Routes = require("./routes");
const cookieParser = require("cookie-parser");

const port = process.env.PORT | 3000;

const app = express();

// Começar a processar o corpo dos requests
app.use(express.json());

app.use("/circuits", Routes.CircuitRoutes);
app.use("/points", Routes.PointRoutes);
app.use("/users", Routes.UserRoutes);
app.use(cookieParser());

// cookies
app.get("/set-cookies", (req, res) => {
  res.cookie("newUser", true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });

  res.send("Cookies working!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Cookies", req.cookies);
});

async function main() {
  await mongoose.connect(db.uri);
  app.listen(port, () => console.log("server running on port: ", port));
}

main().catch((err) => console.log(err));
