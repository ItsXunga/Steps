const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const mongoose = require("mongoose");
const Routes = require("./routes");
const auth = require("./middlewares/authMiddleware");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
//

// Começar a processar o corpo dos requests
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  exposedHeaders: ["Authorization"],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(auth);
app.use("/circuits", Routes.CircuitRoutes);
app.use("/points", Routes.PointRoutes);
app.use("/users", Routes.UserRoutes);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function main() {
  await mongoose.connect(db.uri);
  app.listen(process.env.PORT || 8000);
}

main().catch((err) => console.log(err));
