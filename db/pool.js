const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",

  user: "postgres",
  password: "your_password",
  port: 5432,
  database: "task_manager",
});