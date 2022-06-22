const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const mongoose = require("mongoose");
const Routes = require("./routes");
const jwt = require('jsonwebtoken')

const port = process.env.PORT | 3000;

const app = express();

// Começar a processar o corpo dos requests
app.use(express.json());

app.use("/circuits", Routes.CircuitRoutes);
app.use("/points", Routes.PointRoutes);
app.use("/users", Routes.UserRoutes);

app.get("/", authenticateToken, (req, res) => {
  res.send("Hello World!");
});

async function main() {
  await mongoose.connect(db.uri);
  app.listen(port, () => console.log("server running on port: ", port));
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.SECRET, (err) => {
    if (err) return res.sendStatus(403)
    next()
  })
}

main().catch((err) => console.log(err));
