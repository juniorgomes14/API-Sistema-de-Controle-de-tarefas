const { addTask, getTasks, deleteTask } = require("../Operations/tasksOperations");

const getAllTasks = (req, res) => {
  const tasks = getTasks();
  return res.status(200).json({
    success: true,
    tasks,
  });
};


const createTask = (req, res) => {
  const { title, description, userId } = req.body;
  if (!title || !description || !userId) {
    return res.status(400).send("Title, description, and userId are required");
  }
  addTask({ title, description, userId });
  return res.status(201).json({
    success: true,
    tasks: getTasks(),
  });
};

const removeTask = (req, res) => {
  const { taskId } = req.params;

  if (isNaN(taskId)) {
    return res.status(400).send("The ID should be a number");
  }


  const removed = deleteTask(parseInt(taskId));

  if (removed === null) {
    return res.status(404).send("Task not found");
  }

  return res.json({
    success: true,
    message: "Task deleted successfully",
  });
};

module.exports = {
  getAllTasks,
  createTask,
  removeTask,
};