const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const PassController = controllers.PassController;
//const HomeController = controllers.HomeController;

const passRouter = express.Router();
passRouter.use(bodyParser.json());

/*
* Récupération des users
* @method : get
* @route : /user/
*/
passRouter.get('/', function(req, res) {
    const id = req.body.id;
    PassController.getAll(id)
      .then( (pass) => {
          res.status(201).json(pass);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});

/*
* Ajout d'un User
* @method : post
* @route : /user/add
*/
passRouter.post('/create', function(req, res) {
    const user_id = req.body.user_id;
    if( user_id === undefined ) {
        res.status(400);
        return;
    }
    PassController.add(user_id)
      .then( (pass) => {
          res.status(201).json(pass);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      })
});

passRouter.post('/attribute', function(req, res) {
  const user_id = req.body.user_id;
  const pass_id = req.body.pass_id;
  if( user_id === undefined || pass_id === undefined ) {
      res.status(400);
      return;
  }
  PassController.attribute(pass_id, user_id)
    .then( (pass) => {
        res.status(201).json(pass);
    })
    .catch( (err) => {
        console.error(err);
        res.status(500).end();
    })
});

passRouter.delete('/delete', function(req, res) {

});

module.exports = passRouter;
