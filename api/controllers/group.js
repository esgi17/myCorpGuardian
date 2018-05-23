const ModelIndex = require('../models');
const Group = ModelIndex.Group;
const Op = ModelIndex.sequelize.Op;

const GroupController = function() { };


/**
*  Retrouver un groupe en base
**/
GroupController.find = function( id ) {
  if ( id != undefined ){
    return Group.findById( id );
  }
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

/**
*  Modification d'un groupe en base
**/
GroupController.update = function( id, description ) {
    return Group.update({
        description: description
    },{
      where: {
        id : id
      }
    });
};


// Export du controller
module.exports = GroupController;
