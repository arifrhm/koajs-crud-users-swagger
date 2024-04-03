const userRepository = require('../repository/userRepository.js');

async function createUser(newUser) {
  return userRepository.createUser(newUser);
}

async function getUsers() {
  return userRepository.getUsers();
}

async function getUserById(userId) {
  return userRepository.getUserById(userId);
}

async function updateUser(userId, updatedUser) {
  return userRepository.updateUser(userId, updatedUser);
}

async function deleteUser(userId) {
  return userRepository.deleteUser(userId);
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
