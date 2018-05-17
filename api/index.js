const express = require('express');
const http = require('http');
const socket = require('socket.io');
const ModelIndex = require('./models');
const RouteManager = require('./routes');

ModelIndex
  .openDatabase()
  .then(_startServer)
  .catch((err) => {
    console.error(err);
  });

// INTERNAL

function _startServer() {

  const app = express();
  const server = http.Server(app);
  const io = socket.listen(server);

  RouteManager.attach(app);

  io.sockets.on('connection', function(socket) {
    //  console.log("Connexion...");
  });

  server.listen(8000);
  app.listen(3000, function() {
    console.log('Server started on 3000...');
  });

}
