'use strict';

var express = require('express');
var app = express();

app.use(function(req, res, next) {
  req.myMessage = 'Hello, middleware #3';
  next();
});


app.use('/different/:id', function(req, res, next) {
  console.log('second piece of middleware', req.params.id);
  next();
});

// access content from another route
app.use('/accessAbovedata', function(req, res, next) {
  console.log(req.myMessage);
  next();
});

// Query parameters in the url
// localhost:3000/?param=parameter
app.use(function(req, res, next) {
  console.log(req.query.param);
  next();
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Express server is listening on port', port);
});
