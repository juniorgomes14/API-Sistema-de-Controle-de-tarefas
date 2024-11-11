const router = require("express").Router();
const tasksController = require("../controllers/tasksController");
const authMiddleware = require("../middleware/authMiddleware"); 

router.get("/", authMiddleware, tasksController.getAllTasks); 
router.post("/", authMiddleware, tasksController.createTask); 

router.delete("/:taskId", authMiddleware, tasksController.removeTask); 

module.exports = router;