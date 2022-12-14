const { UserModel, CircuitModel } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

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

function generateAuthToken(user) {
  return jwt.sign(
    {
      email: user.email,
      _id: user._id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    SECRET
  );
}

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
  const { name, email, password } = req.body;

  try {
    const user = await UserModel.create({
      name,
      email,
      password,
    });
    let token = generateAuthToken(user);
    res.cookie(String(user._id), token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 3000),
      httpOnly: true,
    });
    res.status(200).json({ user: user, token: token });
    res.status(200).json({ user: user, token: token });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

async function updateName(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const userName = await UserModel.findByIdAndUpdate(
      { _id: id },
      { name: name },
      { exists: true }
    );
    res.status(200).json({ status: true, data: userName });
  } catch (error) {
    res.status(400).json({ error: "Username was not changed" });
  }
}

async function updatePassword(req, res) {
  const { id } = req.params;
  try {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(req.body.password, salt);
    const userPassword = await UserModel.findByIdAndUpdate(
      { _id: id },
      { password: password },
      { exists: true }
    );
    res.status(200).json({ status: true, data: userPassword });
  } catch (error) {
    res.status(400).json({ error: "Password was not changed" });
  }
}

async function favorite(req, res) {
  const { id } = req.params;

  const userData = await UserModel.findById(id);
  const circuitData = await CircuitModel.find({
    _id: { $in: userData.favorite_routes },
  }).populate("category");
  if (circuitData) {
    res.json(circuitData);
  } else {
    res.status(404).json({
      message: "This user has not favorited any routes",
    });
  }
}

async function addFavorites(req, res) {
  const { id } = req.params;
  const { idRota } = req.body;
  try {
    const teste = await UserModel.findByIdAndUpdate(
      { _id: id },
      { $addToSet: { favorite_routes: idRota } },
      { new: true }
    );
    res.status(200).json({ status: true, data: teste });
  } catch (error) {
    res.status(400).json({ error: "Route not added" });
  }
}

async function removeFavorites(req, res) {
  const { id } = req.params;
  const { idRota } = req.body;
  try {
    const teste = await UserModel.findByIdAndUpdate(
      { _id: id },
      { $pull: { favorite_routes: idRota } },
    );
    const teste2 = await UserModel.findById(id)
    res.status(200).json({ status: true, data: teste2 });
  } catch (error) {
    res.status(400).json({ error: "Route not added" });
  }
}

async function updateAvatar(req, res) {
  //Preciso alterar o Update do Avatar para receber o Id do user logged in

  const { id } = req.params;
  const { avatar } = req.body;

  const userData = await UserModel.findById(id);

  if (!userData) {
    res.status(404).json({
      message: "User not found",
    });
  } else if (avatar === userData.avatar) {
    res.status(400).json({
      message: "Profile Image already is " + avatar,
    });
  } else {
    if (avatar) userData.avatar = avatar;

    await userData.save();

    res.status(200).json("Profile Image changed to " + userData.avatar);
  }
}

async function destroy(req, res) {
  const { id } = req.params;

  const userData = await UserModel.findByIdAndRemove(id);

  res.json(userData);
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email }).lean();

  if (!user) {
    res.status(400).json({ error: "that email is not registered" });
  } else {
    if (await bcrypt.compare(password, user.password)) {
      let token = generateAuthToken(user);
      res.cookie(String(user._id), token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 3000),
        httpOnly: true,
      });
      res.status(200).json({ user: user, token: token });
    } else {
      res.status(400).json({ error: "that password is not registered" });
    }
  }
}

const UserController = {
  getById,
  getAll,
  create,
  updateName,
  favorite,
  updateAvatar,
  updatePassword,
  addFavorites,
  removeFavorites,
  destroy,
  login,
};

module.exports = UserController;
