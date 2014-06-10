var controller = require('./controller/controller.js');

var routes = [
  { method: 'GET', path: '/', handler: controller.index.handler },
  { method: 'GET', path: '/home', handler: controller.index.handler },
  { method: 'GET', path: '/about', handler: controller.about.handler },
  { method: 'GET', path: '/css/{path*}', handler: { directory: { path: './public/assets/css' } } }
];



module.exports = routes;
