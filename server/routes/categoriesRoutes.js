const express = require("express");
const Category = require("../models/categories");

const router = express.Router();

// dados de um recurso
router.get("/categories", (req, res) => {
  Category.findAll()
    .then((categories) => res.json(categories))
    .catch((err) =>
      res.status(500).json({
        err: "error while fetching the data",
      })
    );
});

// ir buscar um recurso com um determinado id
router.get("/categories/:id", (req, res) => {
  console.log(req.params);
  Category.findById(req.params.id)
    .then((categories) => res.json(categories))
    .catch((err) =>
      res.status(500).json({
        err: "error while fetching the data",
      })
    );
});

//publicar um novo recurso
router.post("/categories", (req, res) => {
  console.log(req.body);
  const { category, img, color } = req.body;

  Category.create(category, img, color)
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
router.put("/categories/:id", (req, res) => {
  // url params
  const { id } = req.params;
  // informação do body
  // TODO
});

router.delete("/categories/:id", (req, res) => {
  // url params
  const { id } = req.params;
  // TODO
});

module.exports = router;
