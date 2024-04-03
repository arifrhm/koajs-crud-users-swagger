const userService = require('../service/userService');

// Create a new user
async function createUser(ctx) {
  const newUser = ctx.request.body;
  const user = await userService.createUser(newUser);
  ctx.body = user;
  ctx.status = 201; // Created
}

// Get all users
async function getUsers(ctx) {
  const users = await userService.getUsers();
  ctx.body = users;
}

// Get a user by ID
async function getUserById(ctx) {
  const userId = parseInt(ctx.params.id);
  const user = await userService.getUserById(userId);
  if (user) {
    ctx.body = user;
  } else {
    ctx.status = 404; // Not Found
  }
}

// Update a user
async function updateUser(ctx) {
  const userId = parseInt(ctx.params.id);
  const updatedUser = ctx.request.body;
  const user = await userService.updateUser(userId, updatedUser);
  if (user) {
    ctx.body = user;
  } else {
    ctx.status = 404; // Not Found
  }
}

// Delete a user
async function deleteUser(ctx) {
  const userId = parseInt(ctx.params.id);
  const user = await userService.deleteUser(userId);
  if (user) {
    ctx.body = user;
  } else {
    ctx.status = 404; // Not Found
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
