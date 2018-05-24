const RouteManager = function() { };
const privateRouteManager = require('./private');

RouteManager.attach = function(app) {
    app.use('/control', require('./controls'));
    privateRouteManager.attach(app);
}

module.exports = RouteManager;
