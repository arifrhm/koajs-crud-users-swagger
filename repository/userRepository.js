// Simulated in-memory database
let users = [];

async function createUser(newUser) {
    users.push(newUser);
    return newUser;
}

async function getUsers() {
    return users;
}

// Function to get a user by index in the array
async function getUserById(index) {
    // Assuming users is your data array containing all users
    return users[index];
}

async function updateUser(userId, updatedUser) {
    if (users[userId]) {
        users[userId] = { ...users[userId], ...updatedUser };
        return users[userId];
    } else {
        return null;
    }
}

async function deleteUser(index) {
    // Assuming users is your data array containing all users
    if (index >= 0 && index < users.length) {
        const deletedUser = users.splice(index, 1)[0];
        return deletedUser;
    } else {
        return null; // Return null if the index is out of bounds
    }
}


module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
