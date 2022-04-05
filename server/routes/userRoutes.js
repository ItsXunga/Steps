const express = require("express");
const User = require("../models/users");

const router = express.Router();

// dados de um recurso
router.get("/users", (req, res) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch((err) =>
      res.status(500).json({
        err: "error while fetching the data",
      })
    );
});

// ir buscar um recurso com um determinado id
router.get("/users/:id", (req, res) => {
  console.log(req.params);
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) =>
      res.status(500).json({
        err: "error while fetching the data",
      })
    );
});

//publicar um novo recurso
router.post("/users", (req, res) => {
  console.log(req.body);
  const { name, email, password, created_routes, favorite_routes } = req.body;

  User.create(name, email, password, created_routes, favorite_routes)
    .then((data) => {
      res.status(200).json({ ...data, ...req.body });
    })
    .catch((err) =>
      res.status(500).json({
        err: err.sqlMessage,
      })
    );
});

// atualizar um recurso
router.put("/users/:id", (req, res) => {
  // url params
  const { id } = req.params;
  // informação do body
  // TODO
});

router.delete("/users/:id", (req, res) => {
  // url params
  const { id } = req.params;
  // TODO
});

module.exports = router;
