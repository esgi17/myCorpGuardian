const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const GroupController = controllers.GroupController;
//const HomeController = controllers.HomeController;

const groupRouter = express.Router();
groupRouter.use(bodyParser.json());

/**
* @api {get} /Group GET Group
* @apiGroup group
* @apiUse searchById
* @apiUse groupCreated
* @apiUse error500
*/
groupRouter.get('/', function(req, res) {
    const id = req.body.id;
    GroupController.find( id )
      .then( (group) => {
        res.status(201).json({
            success : true,
            status : 201,
            datas : group
        });
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).json({
              success : false,
              status : 500,
              message : "500 Internal Server Error"
          }).end();
      });
});

/**
* @api {post} /Group ADD Group
* @apiGroup group
* @apiUse groupExample
* @apiUse groupCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
groupRouter.post('/', function(req, res) {
    const description = req.body.description;
    if( description === undefined ) {
      res.status(400).json({
          success : false,
          status : 400,
          message : "Group not found"
      }).end();
    }
    GroupController.add(description)
      .then( (group) => {
        res.status(201).json({
            success : true,
            status : 201,
            datas : group
        });
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).json({
              success : false,
              status : 500,
              message : "500 Internal Server Error"
          }).end();
      })
});

/**
* @api {delete} /group DELETE Group
* @apiGroup group
* @apiUse searchById
* @apiSuccessExample
*    HTTP/1.1 200 Group deleted
*     {
*       "success" : true
*       "status": 200
*       "message": "Group deleted"
*     }
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
groupRouter.delete('/:id', function (req, res) {
  var id = parseInt(req.params.id);
  GroupController.find(id)
  .then( (group) => {
    if (group) {
      GroupController.delete(id)
        .then( group => {
          res.status(201).json({
              success : true,
              status : 201,
              datas : group
          });
        });
    } else {
      res.status(400).json({
          success : false,
          status : 400,
          message : "Group not found"
      }).end();
    }
    }).catch( (err) => {
        console.error(err);
        res.status(500).json({
            success : false,
            status : 500,
            message : "500 Internal Server Error"
        }).end();
    });
});


/**
* @api {put} /Group UPDATE Group
* @apiGroup group
* @apiUse groupExample
* @apiUse groupCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
groupRouter.patch('/:id', function(req, res) {
  const user_id = req.body.user_id || 0;
  var id = parseInt(req.params.id);
  GroupController.find(id)
  .then( (user) => {
    if (user) {
      GroupController.attribute(id, user_id)
      .then( user => {
        res.status(201).json({
            success : true,
            status : 201,
            datas : group
        });
      });
    } else {
      res.status(400).json({
          success : false,
          status : 400,
          message : "Group not found"
      }).end();
    }
    }).catch( (err) => {
        console.error(err);
        res.status(500).json({
            success : false,
            status : 500,
            message : "500 Internal Server Error"
        }).end();
    });
});


module.exports = groupRouter;
