const _ = require('lodash');

let messages = [];

module.exports.addMessage = (username, message) => {
  if (username) {
    messages.push({
      username: username,
      message: message
    })
  }
  return username;
};

module.exports.getAllMessage = () => {
  return messages;
}
