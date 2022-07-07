const express = require("express");
const { PointController } = require("../controllers")

const router = express.Router();

router.get("/", PointController.getAll);
router.get("/:id", PointController.getById);
router.post("/", PointController.create);
router.put("/:id", PointController.update);
router.delete("/:id", PointController.destroy);

module.exports = router;
