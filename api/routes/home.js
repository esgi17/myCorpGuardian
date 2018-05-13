const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
//const HomeController = controllers.HomeController;

const homeRouter = express.Router();
homeRouter.use(bodyParser.json());

homeRouter.get('/', function(req, res) {
    console.log(req.path);
});

module.exports = homeRouter;
