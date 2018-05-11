const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const UserController = controllers.UserController;
//const HomeController = controllers.HomeController;

const userRouter = express.Router();
userRouter.use(bodyParser.json());

/*
* Récupération des users
* @method : get
* @route : /user/
*/
userRouter.get('/', function(req, res) {
    const login = req.query.login;
    console.log(req.query.login);
    UserController.getAll(login)
      .then( (user) => {
          res.json(user);
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
userRouter.post('/add', function(req, res) {
    const name = req.body.name;
    const surname = req.body.surname;
    const login = req.body.login;
    const job = req.body.job || "host";
    const isManager = req.body.isManager || 0;
    const group_id = req.body.group_id || 0;
    console.log("Name : " + name);
    if( name === undefined || surname === undefined || login === undefined ) {
        res.status(400).end();
        return;
    }
    UserController.add(name, surname, login, job, isManager, group_id)
      .then( (user) => {
          res.status(201).json(user);
      }).catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});

userRouter.post('/update', function(req, res) {
  const name = req.body.name;
  const surname = req.body.surname;
  const login = req.body.login;
  const job = req.body.job;
  const isManager = req.body.isManager;
  const group_id = req.body.group_id;

  if ( login === undefined ) {
      res.status(400).end();
      return;
  }
  UserController.update(name, surname, login, job, isManager, group_id)
    .then( (user) => {
        res.status(200).json(user);
    })
    .catch( (err) => {
        console.error(err);
        res.status(500).end();
    })
});

userRouter.delete('/delete', function(req, res) {
});

module.exports = userRouter;
