const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const PassController = controllers.PassController;
//const HomeController = controllers.HomeController;

const passRouter = express.Router();
passRouter.use(bodyParser.json());







module.exports = passRouter;
