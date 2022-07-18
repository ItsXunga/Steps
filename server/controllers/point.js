const { PointModel } = require("../models");

async function getById(req, res) {
  const { id } = req.params;

  const pointData = await PointModel.findById(id);

  if (pointData) {
    res.json(pointData);
  } else {
    res.status(404).json({
      message: "Point not found",
    });
  }
}

async function getAll(req, res) {
  const points = await PointModel.find();

  res.json(points);
}

async function create(req, res) {
  if (!req.user?._id) return res.json({ message: "Unauthenticated" });

  const { pinName, pinDesc, lat, long } = req.body;

  const exists = await PointModel.findOne({ lat, long });

  if (exists) {
    res.status(409).json({
      message: "Point already exists",
    });
  } else {
    const point = await PointModel.create({
      pinName,
      pinDesc,
      lat,
      long,
    });

    res.json(point);
  }
}

async function update(req, res) {
  if (!req.user?._id) return res.json({ message: "Unauthenticated" });

  const { id } = req.params;
  const { pinName } = req.body;

  const pointData = await PointModel.findById(id);

  if (!pointData) {
    res.status(404).json({
      message: "Point not found",
    });
  } else {
    if (pinName) pointData.pinName = pinName;

    await pointData.save();

    res.json(pointData);
  }
}

async function destroy(req, res) {
  if (!req.user?._id) return res.json({ message: "Unauthenticated" });
  
  const { id } = req.params;

  const pointData = await PointModel.findByIdAndRemove(id);

  res.json(pointData);
}

const PointController = {
  getById,
  getAll,
  create,
  update,
  destroy,
};

module.exports = PointController;
