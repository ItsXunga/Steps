const express = require("express");
const { CategoryController } = require("../controllers");

const router = express.Router();

router.get("/", CategoryController.getAll);

module.exports = router;
