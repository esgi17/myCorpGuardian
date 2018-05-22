const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const UserController = controllers.UserController;
//const HomeController = controllers.HomeController;

const userRouter = express.Router();
userRouter.use(bodyParser.json());

/**
* @api {get} /User get User
* @apiGroup user
* @apiParam {Integer} id User id
* @apiParamExample {json} Input
*    {
*      "id": 1
*    }

* @apiSuccess {Object[]} User
* @apiSuccess {Integer} User.id User id
* @apiSuccess {String} User.Name User name
* @
* @apiSuccess {Date} User.updated_at Update's date
* @apiSuccess {Date} User.created_at Register's date
* @apiSuccessExample {json} Success
*    HTTP/1.1 201 OK
*    [{
*      "id": 1,
*      "name": "Name",
       "surname" : "Surname",
       "job" : "Job",
       "group" :
       {
          "id" : 1,
          "name" : "Group1"
       }
*      "updated_at": "2018-05-14T00:00:00.000Z",
*      "created_at": "2018-05-14T00:00:00.000Z"
*    }]
* @apiErrorExample
*    HTTP/1.1 500 Internal Server Error
* @apiErrorExample
*    HTTP/1.1 404 Not Found
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
* @api {post} /User add User
* @apiGroup user
* @apiParam {String} name User name
* @apiParam {String} surname User surname
* @apiParam {String} job User job
* @apiParam {Integer} group_id User group_id
* @apiParamExample {json} Input
*    {
*      "name": "John",
       "surname" : "Doe",
       "job" : "Host",
       "group_id" : 0
*    }

* @apiSuccess {Object[]} User
* @apiSuccess {Integer} User.id User id
* @apiSuccess {String} User.Name User name
* @apiSuccess {String} User.job User job
* @apiSuccess {Object} User.Group User group
* @apiSuccess {integer} Group.id User Group id
* @apiSuccess {Date} User.updated_at Update's date
* @apiSuccess {Date} User.created_at Register's date
* @apiSuccessExample {json} Success
*    HTTP/1.1 201 Created
*    [{
*      "id": "1"
*      "name": "John"
       "surname" : "Doe"
       "job" : "Host",
       "group" :
       {
          "id" : 1,
          "name" : "Group1"
       }
*      "updated_at": "2018-05-14T00:00:00.000Z",
*      "created_at": "2018-05-14T00:00:00.000Z"
*    }]
* @apiErrorExample
*    HTTP/1.1 500 Internal Server Error
* @apiErrorExample
*    HTTP/1.1 404 Not Found
* @apiErrorExample
*    HTTP/1.1 400 Bad Request
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
* @api {delete} /user delete User
* @apiGroup user
* @apiParam {Integer} id User id
* @apiParamExample {json} Input
*    {
*      "id" : id
*    }
* @apiSuccessExample
*    HTTP/1.1 204 No Content
* @apiErrorExample
*    HTTP/1.1 500 Internal Server Error
* @apiErrorExample
*    HTTP/1.1 404 Not Found
* @apiErrorExample
*    HTTP/1.1 400 Bad Request
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

/*
* Modification d'un User
* @method : patch
* @route : /user/
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
