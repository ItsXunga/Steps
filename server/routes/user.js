const express = require("express");
const { UserController } = require("../controllers");
const auth = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);
router.post("/signup", UserController.create);
router.put("/updateName/:id", auth, UserController.updateName);
router.get("/favorite/:id", auth, UserController.favorite);
router.put("/updateAvatar/:id", auth, UserController.updateAvatar);
router.delete("/:id", auth, UserController.destroy);
router.post("/login", UserController.login);

module.exports = router;
