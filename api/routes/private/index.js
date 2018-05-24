const privateRouteManager = function() { };

privateRouteManager.attach = function(app) {
    console.log(app);
    app.use('/user', require('./user'));
    app.use('/pass', require('./pass'));
    app.use('/group', require('./group'));
}

module.exports = privateRouteManager;
