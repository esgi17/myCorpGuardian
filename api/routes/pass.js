const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const PassController = controllers.PassController;
//const HomeController = controllers.HomeController;

const passRouter = express.Router();
passRouter.use(bodyParser.json());

/**
* @api {get} /Pass GET Pass
* @apiGroup pass
* @apiUse searchById
* @apiUse passCreated
* @apiUse error500
* @apiUse error404
*/
passRouter.get('/:id', function(req, res) {
    const id = req.params.id;
    PassController.getAll(id)
      .then( (pass) => {
          res.status(201).json({
              success : true,
              status : 201,
              datas : pass
          });
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});

/**
* @api {post} /Pass ADD Pass
* @apiGroup pass
* @apiUse passExample
* @apiUse passCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
passRouter.post('/', function(req, res) {
    const user_id = req.body.user_id;
    if( user_id === undefined ) {
        res.status(400).json({
            success : false,
            status : 400,
            message : "Bad Request"
        });
        return;
    }
    PassController.add(user_id)
      .then( (pass) => {
          res.status(201).json({
              success : true,
              status : 201,
              datas : pass
          });
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      })
});

/**
* @api {delete} /pass DELETE Pass
* @apiGroup pass
* @apiUse searchById
* @apiSuccessExample
*    HTTP/1.1 200 Pass deleted
*     {
*       "success" : true
*       "status": 200
*       "message": "Pass deleted"
*     }
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
passRouter.delete('/', function (req, res) {
  var id = parseInt(req.body.id);
  PassController.getAll(id)
    .then( (pass) => {
        if (pass) {
            PassController.delete(id)
              .then( pass => {
                  res.status(200).json({
                      success : true,
                      status : 200,
                      datas : pass
                  });
              })
              .catch( (err) => {
                  console.error(err);
                  res.status(500).end();
              });
        } else {
            res.status(400).json({
                success : false,
                status : 400,
                message : "Bad Request"
            });
        }
    }).catch( (err) => {
        console.error(err);
        res.status(500).end();
    });
});

/**
* @api {put} /Pass UPDATE Pass
* @apiGroup pass
* @apiUse passExample
* @apiUse passCreated
* @apiUse error500
* @apiUse error404
* @apiUse error400
*/
passRouter.put('/:id', function(req, res) {
    const user_id = req.body.user_id || 0;
    const pass_id = req.body.pass_id;

    if( pass_id === undefined ) {
        res.status(400).json({
            success : false,
            status : 400,
            message : "Bad Request"
        }).end();
        return;
    }
    UserController.getAll(id)
      .then( (user) => {
          if (user) {
              PassController.affect(id, user_id)
                  .then( (user) => {
                      res.status(200).json({
                          success : true,
                          status : 200,
                          datas : user
                  });
              });
          } else {
              res.status(400).json({
                  success : false,
                  status : 400,
                  datas : "Bad Request"
              });
          }
      }).catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});


module.exports = passRouter;
