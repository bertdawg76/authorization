var mongoose = require('mongoose');
var dbURI = 'mongodb://bertdawg:donuts@ds011248.mlab.com:11248/authorization';
if (process.env.NODE_ENV === 'production'){
  dbURI = process.env.MONGOLAB_URI;
}

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
  console.log('mongoose connected to  ' + dbURI);
});

require('../models/UserModel');