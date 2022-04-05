const { ObjectId } = require("mongodb");
const { getDb } = require("../util/database");

async function findAll() {
  return getDb().collection("users").find().toArray();
}

function findById(id) {
  return getDb()
    .collection("users")
    .find({ _id: ObjectId(id) })
    .toArray();
}

function create(name, email, password, created_routes, favorite_routes) {
  return getDb().collection("users").insertOne({
    name,
    email,
    password,
    created_routes,
    favorite_routes,
  });
}

function update(id, name, email, password, created_routes, favorite_routes) {
  return getDb().collection("users").updateOne({
    id,
    name,
    email,
    password,
    created_routes,
    favorite_routes,
  });
}

function remove() {
  return getDb().collection("users").deleteOne();
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
