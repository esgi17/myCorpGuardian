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
*  Retrouver un User en base
**/
UserController.find = function(id) {
    return User.findById(id);
}

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
UserController.updte = function(id, name, surname, login, job, isManager, group_id) {
    return User.update({
        name: name,
        surname: surname,
        login: login,
        job: job,
        isManager: isManager,
        group_id: group_id
    },{
      where: {
        id : id
      }
    });
};

/**
*  Récupération des élements en base
**/
UserController.getAll = function (search) {
    const options = {
      include: [{
        model: ModelIndex.Group,
        as : 'group'
      }]
    };
    const where = {};

    if( search !== undefined ) {
        where.login = {
            [Op.like]:`${search}%`
        };
    }
    options.where = where;
    return User.findAll(options);
};

// Export du controller
module.exports = UserController;
