const { ObjectId } = require("mongodb");
const { getDb } = require("../util/database");

async function findAll() {
  return getDb().collection("routes").find().toArray();
}

function findById(id) {
  return getDb()
    .collection("routes")
    .find({ _id: ObjectId(id) })
    .toArray();
}

function create(name, creator, category, desc, pins) {
  return getDb().collection("routes").insertOne({
    name,
    creator,
    category,
    desc,
    pins,
  });
}

function update(id, name, creator, category, desc, pins) {
  return getDb().collection("routes").updateOne({
    id,
    name,
    creator,
    category,
    desc,
    pins,
  });
}

function remove() {
  return getDb().collection("routes").deleteOne();
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
