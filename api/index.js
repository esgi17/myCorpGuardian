const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('./config');
const ModelIndex = require('./models/public');
const GeneralModelIndex = require('./models/general');
const RouteManager = require('./routes');

GeneralModelIndex
  .openDatabase()
  .then( () => {
      ModelIndex
        .openDatabase()
  })
  .then(_startServer)
  .catch((err) => {
    console.error(err);
  });

// INTERNAL

function _startServer() {

    const app = express();
    app.set('secret', config.secret);
    RouteManager.attach(app);

    app.listen(3000, function() {
      console.log('Server started on 3000...');
  });
}
