const { CategoryModel } = require("../models");

async function getAll(req, res) {
  const categories = await CategoryModel.find();

  res.json(categories);
}

const CategoryController = {
  getAll,
};

module.exports = CategoryController;
