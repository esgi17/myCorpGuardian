const RouteManager = function() { };

RouteManager.attach = function(app) {
    // Routes à utiliser
    app.use('/home', require('./home'));
}

module.exports = RouteManager;
