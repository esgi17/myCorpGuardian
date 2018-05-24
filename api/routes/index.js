const RouteManager = function() { };

RouteManager.attach = function(app) {
    app.use('/private', require('./private'));
    app.use('/general', require('./general'));
}

module.exports = RouteManager;
