"use strict";
/// <reference path='_references.ts' />
var express = require('express');
var swaggerJSDoc = require('swagger-jsdoc');
var body_parser_1 = require('body-parser');
var errorHandler = require('errorhandler');
var cors = require('cors');
var path_1 = require('path');
var cardsController = require('./modules/cards/controllers/cards-controller');
var corevalueController = require('./modules/corevalue/controllers/corevalue-controller');
var corevaluesetController = require('./modules/corevalueset/controllers/corevalueset-controller');
var usersController = require('./modules/users/controllers/users-controller');
var app = express();

// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Core Values RESTful API',
    version: '1.0.0',
    description: 'RESTful API doc for the card app',
  },
  host: 'localhost:5000',
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./server/modules/cards/controllers/*.js'
         ,'./server/modules/corevalue/controllers/*.js'
         ,'./server/modules/corevalueset/controllers/*.js'
         ,'./server/modules/users/controllers/*.js'
       ],
  // apis: ['./server/api/swagger/swagger.yaml'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

// serve swagger
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});


// Configuration
app.set('port', 5000);
app.set('views', path_1.join(__dirname, '/views')); // critical to use path.join on windows
app.set('view engine', 'vash');
app.set('view options', { layout: false });
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(body_parser_1.json());
app.use(cors());
app.use(express.static(path_1.join(__dirname, '/../client')));
app.use(errorHandler());
// Routes
app.use(express.static(__dirname + '/public'));
app.use('/api/card', cardsController);
app.use('/api/corevalue', corevalueController);
app.use('/api/corevalueset', corevaluesetController);
app.use('/api/user', usersController);
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
exports.App = app;
//import http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(1337, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');

//# sourceMappingURL=source-maps/app.js.map
