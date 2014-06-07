var home = require("./home.js"),
    about = require("./about.js");

var routes = [
  { method: 'GET', path: '/', handler: home },
  { method: 'GET', path: '/home', handler: home },
  { method: 'GET', path: '/about', handler: about },
  { method: 'GET', path: '/css/{path*}', handler: { directory: { path: '../public/assets/css' } } }

];



module.exports = routes;
