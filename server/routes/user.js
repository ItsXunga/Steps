const express = require("express");
const { UserController } = require("../controllers");

const router = express.Router();

router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);
router.post("/signup", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.destroy);
router.post("/login", UserController.login);

module.exports = router;
