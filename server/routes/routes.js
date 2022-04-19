const express = require("express");
const { RouteController } = require("../controllers");

const router = express.Router();

router.get("/", RouteController.getAll);
router.get("/:id", RouteController.getById);
router.post("/", RouteController.create);
router.put("/:id", RouteController.update);
router.delete("/:id", RouteController.destroy);

module.exports = router;
