const express = require("express");
const { UserController } = require("../controllers");
const auth = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);
router.post("/signup", UserController.create);
router.put("/updateName/:id", auth, UserController.updateName);
router.put("/updatePassword/:id", auth, UserController.updatePassword);
router.get("/favorite/:id", auth, UserController.favorite);
router.put("/updateAvatar/:id", auth, UserController.updateAvatar);
router.post("/addFavorites/:id", UserController.addFavorites);
router.post("/removeFavorites/:id", UserController.removeFavorites);
router.delete("/:id", auth, UserController.destroy);
router.post("/login", UserController.login);

module.exports = router;
