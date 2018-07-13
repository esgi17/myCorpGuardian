const RouteManager = function() { };
const publicRouteManager = require('./public');
const generalRouteManger = require('./general');
const controlsRouteManger = require('./controls');

RouteManager.attach = function(app) {
<<<<<<< HEAD
    generalRouteManger.attach(app);
    controlsRouteManger.attach(app);
    publicRouteManager.attach(app);
    app.use(require('./authenticate'));
=======
    //app.use(require('./authenticate'));
    controlsRouteManger.attach(app);
    publicRouteManager.attach(app);
    generalRouteManger.attach(app);

>>>>>>> Controllino
}

module.exports = RouteManager;
