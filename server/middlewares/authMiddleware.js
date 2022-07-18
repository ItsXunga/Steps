require("dotenv").config();
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models");

module.exports = async function auth(req, res, next) {
  const { authorization } = req.headers;
  if (req.user) next();

  const token =
    authorization &&
    authorization.split(" ")[0] === "Bearer" &&
    authorization.split(" ")[1];

  if (token) {
    try {
      await jwt.verify(token, process.env.SECRET);
    } catch (e) {
      res.sendStatus(403).json("Not a valid token");
    }

    const decodedInfo = jwt.decode(token);
   // if (exp > Math.floor(Date.now() / 1000)) {
      const user = await UserModel.findById(decodedInfo._id);
      if (user) {
        req.user = user;
        next();
      }
   // }
  } else {
    next();
  }
};
