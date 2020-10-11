const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = 5000;
const users = []
const Users = require('./users');

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
    socket.on('joinRoom', (user, fn) => {
      console.log("Join: " + user);
      const username = Users.addUser(user, socket.id);
      if (fn) {
        fn(username);
      }
      socket.broadcast.emit('user-connected', Users.getUsers());
    });

    socket.on('reconnect', (user, fn) => {
      console.log("Reconnect: " + user);
      Users.reconnect(user, socket.id);
      socket.broadcast.emit('user-connected', Users.getUsers());
    });

    socket.on('logout', (user, fn) => {
      console.log("Logout: " + user);
      Users.logout(user);
      socket.broadcast.emit('user-connected', Users.getUsers());
    });

    socket.on('disconnect', (reason) => {
      console.log("Desconectando: " + socket.id);
      Users.disconnect(socket.id);
      socket.broadcast.emit('user-connected', Users.getUsers());
    });

    socket.on('get-users', (fn) => {
      if (fn) {
        fn(Users.getUsers());
      }
    });
});

http.listen(PORT, () => {
  console.log('listening on *:' + PORT);
});