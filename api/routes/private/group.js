const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../../controllers');
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
groupRouter.get('/:group_id?', function(req, res) {
    // Récupération des parametres
    const group_id = req.params.group_id;

    // Appel de la methode
    GroupController.getAll( group_id )
      .then( (group) => {
          // Si la methode ne renvoie pas d'erreur, on renvoie un succes avec les donnees
          res.status(201).json({
              success : true,
              status : 201,
              datas : group
          });
      })
      .catch( (err) => {
          // Si la methode renvoie une erreur, on envoie une erreur serveur
          console.error(err);
          res.status(500).end();
      });
});

/**
* @api {post} /Group ADD Group
* @apiGroup group
* @apiUse groupParams
* @apiUse groupCreated
* @apiUse error500
* @apiUse error400
*/
groupRouter.post('/', function(req, res) {
    const name = req.body.name;
    if( name === undefined ) {
        res.status(400).json({
            success : false,
            status : 400,
            message : "Bad Request"
        }).end();
        return;
    }
    GroupController.add(name)
      .then( (group) => {
          res.status(201).json({
              success : true,
              status : 201,
              datas : group
          });
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
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
groupRouter.delete('/', function (req, res) {
  var group_id = parseInt(req.body.group_id);
  GroupController.getAll(group_id)
    .then( (group) => {
        if (group) {
          GroupController.delete(id)
            .then( (group) => {
                res.status(200).json({
                    success : true,
                    status : 200,
                    datas : group
                });
            }).catch( (err) => {
                console.error(err);
                res.status(404).end();
            });
        } else {
          res.status(400).json({
              success : false,
              status : 400,
              message : "Bad Request"
          });
        }
    })
    .catch( (err) => {
        console.error(err);
        res.status(500).end();
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
groupRouter.put('/', function(req, res) {
    const name = req.body.name
    const group_id = parseInt(req.body.group_id);
    GroupController.getAll(group_id)
      .then( (group) => {
          if (group) {
              GroupController.update(group_id, name)
                .then( (group) => {
                    res.status(200).json({
                        success : true,
                        status : 200,
                        datas : group
                    })
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
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});


module.exports = groupRouter;
