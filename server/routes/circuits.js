const express = require("express");
const { CircuitController } = require("../controllers");
const auth = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", CircuitController.getAll);
router.get("/:id", CircuitController.getById);
router.post("/", auth, CircuitController.create);
router.put("/:id", auth, CircuitController.update);
router.delete("/:id", auth, CircuitController.destroy);

module.exports = router;
