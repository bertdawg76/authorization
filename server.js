require('dotenv').load();
var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var passport = require('passport');
require('./server/Config/database');
require('./server/Config/passport');

var routes = require('./server/routes/index');
var app = (express());



var port = process.env.PORT || 8400;



app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));

app.use(passport.initialize());
app.use('/api', routes);

app.listen(port, function() {
  console.log('connected to: ', port)
});
