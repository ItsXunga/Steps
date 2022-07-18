const { CircuitModel, CategoryModel, PointModel } = require("../models");

//handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { name: "", desc: "" };

  if (err.code === 11000) {
    //exists
    errors.name = "A Route with that name already exists";
  }

  //validation errors
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

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
  try {
    const circuits = await CircuitModel.find()
      .populate("creator")
      .populate("category")
      .populate("pins");

    res.json(circuits);
  } catch (err) {
    console.error(err.message);
  }
}

async function create(req, res) {
  if (!req.user?._id) return res.json({ message: "Unauthenticated" });

  const { name, userID, categoryID, desc } = req.body;

  //Falta Creator e Categoria -> Falta inserir id do criador logged-in e id da categoria através do nome desta

  try {
    const circuit = await CircuitModel.create({
      name,
      creator: userID,
      category: categoryID,
      desc,
    });
    res.status(201).json(circuit);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

async function update(req, res) {
  if (!req.user?._id) return res.json({ message: "Unauthenticated" });

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

    res.status(201).json(circuitData);
  }
}

async function destroy(req, res) {
  if (!req.user?._id) return res.json({ message: "Unauthenticated" });
  
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
