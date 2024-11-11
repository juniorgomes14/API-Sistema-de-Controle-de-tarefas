const router = require("express").Router();
const usersController = require("../controllers/usersController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", usersController.getAllUsers);
router.post("/", usersController.createUser);
router.post("/login", usersController.loginUser); 
router.delete("/:userId", authMiddleware, usersController.removeUser);


module.exports = router;