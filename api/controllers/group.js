const ModelIndex = require('../models');
const Group = ModelIndex.Group;
const Op = ModelIndex.sequelize.Op;

const GroupController = function() { };

/**
* Récupération des badges
**/
GroupController.getAll = function( id ) {
    if( id !== undefined ) {
      return Group.findAll({
        where : {
            id : id
        }
      });
    }else{
      return Group.findAll();
    }
};
/**
*  Retrouver un groupe en base
**/
GroupController.find = function( id ) {
    return Group.findById( id );
}

/**
*  Creation d'un groupe
**/
GroupController.add = function(description) {
    return Group.create({
      description : description
    });
};


/**
* Suppression d'un groupe
**/
GroupController.delete = function ( id ) {
  return Group.destroy({
    where: {
      id : id
    }
  });
}
// Export du controller
module.exports = GroupController;
