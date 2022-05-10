const express = require("express");
const { CircuitController } = require("../controllers");

const router = express.Router();

router.get("/", CircuitController.getAll);
router.get("/:id", CircuitController.getById);
router.post("/", CircuitController.create);
router.put("/:id", CircuitController.update);
router.delete("/:id", CircuitController.destroy);

module.exports = router;
