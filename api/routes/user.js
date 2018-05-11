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
* @route : /user/
*/
userRouter.post('/', function(req, res) {
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
          res.status(200).json(user);
      }).catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});

/*
* Suppression d'un User
* @method : delete
* @route : /user/
*/
userRouter.delete('/:id', function (req, res) {
  var id = parseInt(req.params.id);
  UserController.find(id)
  .then( (user) => {
    if (user) {
      UserController.delete(id)
        .then( user => {
            res.status(200).json('User deleted');
        });
    } else {
      res.status(400).json('User not found');
    }
    }).catch( (err) => {
        console.error(err);
        res.status(500).end();
    });
});

/*
* Modification d'un User
* @method : patch
* @route : /user/
*/
/*
userRouter.patch('/:id', function(req, res) {
  const newUser = {};
  newUser.name = req.body.name;
  newUser.surname = req.body.surname;
  newUser.login = req.body.login;
  newUser.job = req.body.job || "host";
  newUser.isManager = req.body.isManager || 0;
  newUser.group_id = req.body.group_id || 0;
  UserController.find({
    where {
      id : req.params.id
    }
  }).then( (user) => {
    if (user) {
      user.updateAttributes(newUser).then( user => {
      res.status(200).json(user, msg: 'User updated');
      });
    } else {
      res.status(400).json(msg: 'User not found');
    }
    }).catch( (err) => {
        console.error(err);
        res.status(500).end();
    });
});
*/
module.exports = userRouter;
