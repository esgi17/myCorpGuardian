const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const UserController = controllers.UserController;
//const HomeController = controllers.HomeController;

const userRouter = express.Router();
userRouter.use(bodyParser.json());

/**
* @api {get} /User GET User
* @apiGroup user
* @apiUse searchById
* @apiUse userCreated
* @apiUse error500
* @apiUse error404
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


/**
* @api {post} /User ADD User
* @apiGroup user
* @apiUse userExample
* @apiUse userCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
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

/**
* @api {delete} /user DELETE User
* @apiGroup user
* @apiUse searchById
* @apiSuccessExample
*    HTTP/1.1 200 User deleted
*     {
*       "success" : true
*       "status": 200
*       "message": "User deleted"
*     }
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/

userRouter.delete('/:id', function (req, res) {
  var id = parseInt(req.params.id);
  if( id === undefined ) {
      res.status(400).json('Missing parameters');
  }
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

/**
* @api {put} /User UPDATE User
* @apiGroup user
* @apiUse userExample
* @apiUse userCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
userRouter.patch('/:id', function(req, res) {
  const name = req.body.name;
  const surname = req.body.surname;
  const login = req.body.login;
  const job = req.body.job || "host";
  const isManager = req.body.isManager || 0;
  const group_id = req.body.group_id || 0;
  var id = parseInt(req.params.id);
  UserController.find(id)
  .then( (user) => {
    if (user) {
      UserController.update(id, name, surname, login, job, isManager, group_id)
      .then( user => {
      res.status(200).json('User updated');
      });
    } else {
      res.status(400).json('User not found');
    }
    }).catch( (err) => {
        console.error(err);
        res.status(500).end();
    });
});

module.exports = userRouter;
