const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, `${process.env.DATA_PATH}/users.json`);

function readUsers() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeUsers(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8");
}

function addUser(newUser) {
  const users = readUsers();

  const nextId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const userToAdd = { id: nextId, ...newUser };
  users.push(userToAdd);
  writeUsers(users);
  return userToAdd;
}

function deleteUser(userId) {
  let users = readUsers();
  const filteredUsers = users.filter((user) => user.id !== userId);
  if (filteredUsers.length === users.length) {
    return null; // Não encontrou o usuário com o ID fornecido
  }
  writeUsers(filteredUsers);
  return userId;
}

function getUsers() {

  return readUsers();
}

module.exports = { addUser, getUsers, deleteUser };