const { CircuitModel, CategoryModel, PointModel } = require("../models");

async function getById(req, res) {
  const { id } = req.params;

  const circuitData = await CircuitModel.findById(id);

  if (circuitData) {
    res.json(circuitData);
  } else {
    res.status(404).json({
      message: "Route not found",
    });
  }
}

async function getAll(req, res) {
  const circuits = await CircuitModel.find()
    .populate("creator")
    .populate("category")
    .populate("pins");

  res.json(circuits);
}

async function create(req, res) {
  const { name, userID, categoryID, desc } = req.body;

  const circuit = await CircuitModel.create({
    name,
    creator: userID,
    category: categoryID,
    desc,
  });

  // category.circuits.push(circuit);
  // circuit.categories.push(category);

  // await circuit.save();
  // await category.save();

  res.json(circuit);
}

async function update(req, res) {
  const { id } = req.params;
  const { name, desc } = req.body;

  const circuitData = await CircuitModel.findById(id);

  if (!circuitData) {
    res.status(404).json({
      message: "Route not found",
    });
  } else {
    if (name) circuitData.name = name;
    if (desc) circuitData.desc = desc;

    await circuitData.save();

    res.json(circuitData);
  }
}

async function destroy(req, res) {
  const { id } = req.params;

  const circuitData = await CircuitModel.findByIdAndRemove(id);

  res.json(circuitData);
}

const CircuitController = {
  getById,
  getAll,
  create,
  update,
  destroy,
};

module.exports = CircuitController;
