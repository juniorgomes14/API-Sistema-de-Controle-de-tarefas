const { addUser, getUsers, deleteUser } = require("../Operations/usersOperations");

const jwt = require("jsonwebtoken");

const getAllUsers = (req, res) => {
  const users = getUsers();
  return res.status(200).json({
    success: true,
    users,
  });
};

const createUser = (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).send("Username is required");
  }
  addUser({ username });
  return res.status(201).json({
    success: true,
    users: getUsers(),
  });
};

const loginUser = (req, res) => {
  const { username } = req.body;
  const user = getUsers().find(u => u.username === username);
  
  if (!user) {
    return res.status(404).send("User not found");
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return res.status(200).json({ success: true, token });
};

const removeUser = (req, res) => {
  const { userId } = req.params;
  
  if (isNaN(userId)) {
    return res.status(400).send("The ID should be a number");
  }

  const removed = deleteUser(parseInt(userId));

  if (removed === null) {
    return res.status(404).send("User not found");
  }

  return res.json({
    success: true,
    users: getUsers(),
  });
};

module.exports = {
  getAllUsers,
  createUser,
  loginUser,
  removeUser,

};