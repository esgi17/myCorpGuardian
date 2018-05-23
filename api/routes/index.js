const RouteManager = function() { };



RouteManager.attach = function(app) {
    app.use('/user', require('./user'));
    app.use('/pass', require('./pass'));
    app.use('/group', require('./group'));
    app.use('/device', require('./device'));
    app.use('/deviceType', require('./deviceType'));
    app.use('/door', require('./door'));
    app.use('/event', require('./event'));
    app.use('/schedule', require('./schedule'));
    app.use('/captor', require('./captor'));
}

module.exports = RouteManager;
