const ModelIndex = require('../models');
const User = ModelIndex.User;
const Op = ModelIndex.sequelize.Op;

const UserController = function() { };

/**
*  Creation d'un User en base
**/
UserController.add = function(name, surname, login, job, isManager, group_id) {
    return User.create({
        name: name,
        surname: surname,
        login: login,
        job: job,
        isManager: isManager,
        group_id: group_id
    });
};

/**
* Suppression d'un User en base
**/
UserController.delete = function(id) {
  return User.destroy({
    where: {
      id : id
    }
  });
}

/**
*  Modification d'un User en base
**/
UserController.update = function(id, name, surname, login, job, group_id) {
    return User.update({
        name: name,
        surname: surname,
        login: login,
        job: job,
        group_id: group_id
    },{
        where: {
          id : id
        }
    });
};

UserController.affectGroup = function(group_id, user_id) {
    return User.update({
        group_id : group_id
    },
    {
        where : {
            id : user_id
        }
    });
}
/**
*  Récupération des élements en base
**/
UserController.getAll = function (id) {
    const options = {
      include: [{
        model: ModelIndex.Group,
        as : 'group'
      }]
    };
    const where = {};

    if( id !== undefined ) {
        where.id = {
            [Op.eq] : `${id}`
        };
    }
    options.where = where;
    return User.findAll(options);
};


// Export du controller
module.exports = UserController;
