const pool = require("./pool");

async function getAllTasks() {
  const { rows } = await pool.query("SELECT * FROM tasks");
  return rows;
}

async function addTask(task) {
  const { title, description, userId } = task;
  await pool.query("INSERT INTO tasks (title, description, userId) VALUES ($1, $2, $3)", [title, description, userId]);
}

async function deleteTask(taskId) {
  await pool.query("DELETE FROM tasks WHERE id = $1", [taskId]);
}

module.exports = {
  getAllTasks,
  addTask,
  deleteTask,
};