module.exports = {
  createUser({ username, password }) {
    console.timeLog(`Add user ${username} with password ${password}`);
    return Promise.resolve();
  }
};
