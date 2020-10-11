const _ = require('lodash');

let users = [];

module.exports.addUser = (username, socketID) => {
  if (username) {
    const element = _.find(users, x => x.username === username);
    if (!element) {
      users.push({
        username: username,
        sockets: [ socketID ]
      });
      return username;
    } else {

      const newUsername = _.uniqueId(username);
      users.push({
        username: username,
        sockets: [ socketID ]
      });
      return newUsername;
    }
  }
  return username
};

module.exports.reconnect = (username, socketID) => {
  const index = _.findIndex(users, x => x.username === username);
  if (index !== -1) {
    const indexS = _.findIndex(users[index]['sockets'], x => x === socketID);
    if (indexS === -1) {
      users[index]['sockets'].push(socketID);
    }
  }
};

module.exports.logout = (username) => {
  users = _.filter(users, x => x.username !== username);
}

module.exports.disconnect = (socketID) => {
  const index = _.findIndex(users, x => {
    return _.some(x.sockets, s => s === socketID);
  });
  if (index !== -1) {
    users[index].sockets = _.filter(users[index].sockets, x => x !== socketID);
    if (users[index].sockets.length > 0) {
      return false;
    }
  }

  return true;
}

module.exports.getUsers = () => {
  return _.map(users, x => x.username);
}
