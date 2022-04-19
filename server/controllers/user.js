const { UserModel} = require("../models");

async function getById(req, res) {
  const { id } = req.params;

  const userData = await UserModel.findById(id);

  if (userData) {
    res.json(userData);
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
}

async function getAll(req, res) {
  const users = await UserModel.find();

  res.json(users);
}

async function create(req, res) {
  const { name, email, password, created_routes, favorite_routes } = req.body;

  const exists = await UserModel.findOne({ email });

  if (exists) {
    res.status(409).json({
      message: "User already exists",
    });
  } else {
    const user = await UserModel.create({
      name,
      email,
      password,
      created_routes,
      favorite_routes,
    });

    res.json(user);
  }
}

async function update(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  const userData = await UserModel.findById(id);

  if (!userData) {
    res.status(404).json({
      message: "User not found",
    });
  } else {
    if (name) userData.name = name;

    await userData.save();

    res.json(userData);
  }
}

async function destroy(req, res) {
  const { id } = req.params;

  const userData = await UserModel.findByIdAndRemove(id);

  res.json(userData);
}

const UserController = {
  getById,
  getAll,
  create,
  update,
  destroy,
};

module.exports = UserController;
