const { ObjectId } = require("mongodb");
const { getDb } = require("../util/database");

async function findAll() {
  return getDb().collection("categories").find().toArray();
}

function findById(id) {
  return getDb()
    .collection("categories")
    .find({ _id: ObjectId(id) })
    .toArray();
}

function create(category, img, color) {
  return getDb().collection("categories").insertOne({
   category,
   img,
   color
  });
}

function update(id, category, img, color) {
  return getDb().collection("categories").updateOne({
    id,
    category,
    img,
    color
  });
}

function remove() {
  return getDb().collection("categories").deleteOne();
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
