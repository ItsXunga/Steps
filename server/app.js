const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const mongoose = require("mongoose");
const Routes = require("./routes");
const auth = require("./middlewares/authMiddleware");

const app = express();
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const corsOptions={
  origin: ["http://localhost:3001"],
  credentials:true,
  exposedHeaders:["Authorization"]
}
app.use(cors(corsOptions));

// Começar a processar o corpo dos requests
app.use(express.json());
app.use(auth);
app.use("/circuits", Routes.CircuitRoutes);
app.use("/points", Routes.PointRoutes);
app.use("/users", Routes.UserRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

async function main() {
  await mongoose.connect(db.uri);
  app.listen(process.env.PORT || 3000);
}

main().catch((err) => console.log(err));
