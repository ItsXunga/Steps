const express = require("express");
require("dotenv").config();
const routesRoutes = require("./routes/routesRoutes")
const userRoutes = require("./routes/userRoutes")
const categoriesRoutes = require("./routes/categoriesRoutes")
const { mongoConnect } = require("./util/database")

const port = process.env.PORT | 3000;

const app = express();

// Começar a processar o corpo dos requests
app.use(express.json());

app.use(routesRoutes);
app.use(userRoutes);
app.use(categoriesRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoConnect(() => {
  app.listen(port, () => console.log("server running on port: ", port))
})

