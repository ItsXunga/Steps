const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const mongoose = require("mongoose");
const Routes = require("./routes");

const port = process.env.PORT | 3000;

const app = express();

// Começar a processar o corpo dos requests
app.use(express.json());

app.use("/routes", Routes.RoutesRoutes);
app.use("/users", Routes.UserRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function main() {
  await mongoose.connect(db.uri);
  app.listen(port, () => console.log("server running on port: ", port));
}

main().catch((err) => console.log(err));
