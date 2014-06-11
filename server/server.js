var Hapi = require('hapi'),
    swig = require('swig'),
    routes = require("./routes/routes.js"),
    options = require("./config/config.js");

var server = new Hapi.Server('localhost', 8000, options);

server.route(routes);

server.start(function () {
    console.log('Server started at: ' + server.info.uri);
});
