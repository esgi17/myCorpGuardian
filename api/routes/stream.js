const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const StreamController = controllers.StreamController;

const streamRouter = express.Router();
streamRouter.use(bodyParser.json());

streamRouter.get('/', function(req, res) {
    var url = req.query.url;
    var port = req.query.port;
    if( url === undefined || port === undefined ) {
        res.status(400).end();
        return;
    }
    StreamController.newStream("test", url, port)
      .then( (stream) => {
          console.log(stream);
          res.status(201).send(stream);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500);
      });
})

module.exports = streamRouter;
