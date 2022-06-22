const express = require("express");
const { UserController } = require("../controllers");

const router = express.Router();

router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);
router.post("/signup", UserController.create);
router.put("/updateName/:id", UserController.updateName);
router.get("/favorite/:id", UserController.favorite);
router.put("/updateAvatar/:id", UserController.updateAvatar);
router.delete("/:id", UserController.destroy);
router.post("/login", UserController.login);

module.exports = router;
