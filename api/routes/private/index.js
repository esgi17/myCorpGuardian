const privateRouteManager = function() { };

privateRouteManager.attach = function(app) {
    app.use('/user', require('./user'));
    app.use('/pass', require('./pass'));
    app.use('/group', require('./group'));
}

module.exports = privateRouteManager;
