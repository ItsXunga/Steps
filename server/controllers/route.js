const { RouteModel, CategoryModel } = require("../models");

async function getById(req, res) {
  const { id } = req.params;

  const routeData = await RouteModel.findById(id)
    // .populate("userId")
    // .populate("categories", "name");

  if (routeData) {
    res.json(routeData);
  } else {
    res.status(404).json({
      message: "Route not found",
    });
  }
}

async function getAll(req, res) {
  const routes = await RouteModel.find()
    // .populate("userId")
    // .populate("categories", "name");

  res.json(routes);
}

async function create(req, res) {
  const { name, creator, desc, pins } = req.body;

  // TODO: turn this dynamic
  // const category = await CategoryModel.create({
  //   name: "Sports",
  // });

  const route = await RouteModel.create({
    name,
    creator,
    desc,
    pins,
  });

  category.routes.push(route);
  route.categories.push(category);

  await route.save();
  await category.save();

  res.json(route);
}

async function update(req, res) {
  const { id } = req.params;
  const { name, desc, pins } = req.body;

  const routeData = await RouteModel.findById(id);

  if (!routeData) {
    res.status(404).json({
      message: "Route not found",
    });
  } else {
    if (name) routeData.name = name;
    if (desc) routeData.desc = desc
    if (pins) routeData.pins = pins;

    await routeData.save();

    res.json(routeData);
  }
}

async function destroy(req, res) {
  const { id } = req.params;

  const routeData = await RouteModel.findByIdAndRemove(id);

  res.json(routeData);
}

const RouteController = {
  getById,
  getAll,
  create,
  update,
  destroy,
};

module.exports = RouteController;
