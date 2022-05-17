const { UserModel } = require("../models");

//handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  //incorrect email
  if (err.message === "incorrect email") {
    errors.email = "that email is not registered";
  }

  //incorrect password
  if (err.message === "incorrect password") {
    errors.email = "that password is incorrect";
  }

  if (err.code === 11000) {
    //exists
    errors.email = "that email is already registered";
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
  const { page = 1, limit = 10 } = req.query;

  try {
    const result = await UserModel.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await UserModel.countDocuments();

    res.json({
      result,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function create(req, res) {
  const { name, email, password, created_routes, favorite_routes } = req.body;

  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(422).json({ errors: errors.array() });
  // }

  try {
    const user = await UserModel.create({
      name,
      email,
      password,
      created_routes,
      favorite_routes,
    });
    res.status(201).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
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

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne(
      { email: email },
      { password: password },
      // not checking password
    );
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

const UserController = {
  getById,
  getAll,
  create,
  update,
  destroy,
  login,
};

module.exports = UserController;
