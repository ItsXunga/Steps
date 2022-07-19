const express = require("express");
const { PointController } = require("../controllers");
const auth = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", PointController.getAll);
router.get("/:id", PointController.getById);
router.post("/", auth, PointController.create);
router.put("/:id", auth, PointController.update);
router.delete("/:id", auth, PointController.destroy);

module.exports = router;
