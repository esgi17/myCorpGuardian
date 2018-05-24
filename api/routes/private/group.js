const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../../controllers');
const GroupController = controllers.GroupController;
//const HomeController = controllers.HomeController;

const groupRouter = express.Router();
groupRouter.use(bodyParser.json());

/*
* Récupération des groupes
* @method : get
* @route : /group/
*/
groupRouter.get('/:id?', function(req, res) {
    // Récupération des parametres
    const id = req.params.id;

    // Appel de la methode
    GroupController.getAll( id )
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

/*
* Ajout d'un groupe
* @method : post
* @route : /user/
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

/*
* Suppression d'un groupe
* @method : delete
* @route : /group/
*/
groupRouter.delete('/:id', function (req, res) {
  var id = parseInt(req.params.id);
  GroupController.getAll(id)
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

/*

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
