//  server.js

var express = require('express');
var morgan = require('morgan');

module.exports.start = (options) => {

  return new Promise((resolve, reject) => {

    if(!options.repository) throw new Error("A server must be started with a connected repository.");
    if(!options.port) throw new Error("A server must be started with a port.");
    
    var app = express();
    app.use(morgan('dev'));

    require('../api/users')(app, options);

    var server = app.listen(options.port, () => {
      resolve(server);
    });

  });
};