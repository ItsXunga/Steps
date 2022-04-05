const express = require("express");
const Route = require("../models/routes");

const router = express.Router();

// dados de um recurso
router.get("/routes", (req, res) => {
  Route.findAll()
    .then((routes) => res.json(routes))
    .catch((err) =>
      res.status(500).json({
        err: "error while fetching the data",
      })
    );
});

// ir buscar um recurso com um determinado id
router.get("/routes/:id", (req, res) => {
  console.log(req.params);
  Route.findById(req.params.id)
    .then((routes) => res.json(routes))
    .catch((err) =>
      res.status(500).json({
        err: "error while fetching the data",
      })
    );
});

//publicar um novo recurso
router.post("/routes", (req, res) => {
  console.log(req.body);
  const { name, creator, category, desc, pins } = req.body;

  Route.create(name, creator, category, desc, pins)
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
router.put("/routes/:id", (req, res) => {
  // url params
  const { id } = req.params;
  // informação do body
  // TODO
});

router.delete("/routes/:id", (req, res) => {
  // url params
  const { id } = req.params;
  // TODO
});

module.exports = router;
