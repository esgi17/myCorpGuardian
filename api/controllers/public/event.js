const publicConfig = require('./config');
const login = require('../../routes/authenticate');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const EventController = function() { };

/**
*  Creation d'un Event en base
**/
EventController.add = function( title, data, device_id, pass_id ) {
    const options = {};
    options.date = new Date();
    options.title = title;
    if (data !== undefined){
      options.data = data;
    }
    if (device_id !== undefined){
      options.device_id = device_id;
    }
    if (pass_id !== undefined){
      options.pass_id = pass_id;
    }

    return EventController.sequelize.Event.create(options);
};

/**
* Suppression d'un Event en base
**/
EventController.delete = function(id) {
  return EventController.sequelize.Event.destroy({
    where: {
      id : id
    }
  });
}

/**
*  Modification d'un Event en base
**/
EventController.update = function( id, date, data, device_id ) {
    return EventController.sequelize.Event.update({
      date: date,
      data: data,
      device_id: device_id
    },{
      where: {
        id : id
      }
    });
};

/**
*  Récupération des élements en base
**/
EventController.getAll = function (idEvent, idPass, idDevice) {
    const options = {
      include: [{
        model: EventController.sequelize.Device,
        as : 'device'
      }]
    };
    const where = {};

    if( idEvent !== undefined ) {
        where.id = {
            [Op.eq] : `${idEvent}`
        };
    }

    if( idPass !== undefined ) {
        where.pass_id = {
            [Op.eq] : `${idPass}`
        }
    }

    if( idDevice !== undefined ) {
        where.device_id = {
            [Op.eq] : `${idDevice}`
        }
    }
    options.where = where;
    return EventController.sequelize.Event.findAll(options);
};


// Export du controller
module.exports = EventController;
