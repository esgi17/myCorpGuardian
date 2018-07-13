const publicConfig = require('./config');
const ModelIndex = require(publicConfig.models_path);
const User = ModelIndex.User;

const Op = ModelIndex.sequelize.Op;

const UserController = function() { };

/**
*  Creation d'un User en base
**/
UserController.add = function(firstname, lastname, job, group_id) {
    return User.create({
        firstname: firstname,
        lastname: lastname,
        job: job,
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
UserController.update = function(user_id, firstname, lastname, job, group_id) {
  console.log(typeof user_id);
    return User.update({
        firstname: firstname,
        lastname: lastname,
        job: job,
        group_id: group_id
    },{
        where: {
          id : user_id
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
    console.log("yo3");
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
